const Joi = require("joi");
const { users } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
  register: async (req, res) => {
    const body = req.body;
    try {
      const schema = Joi.object({
        name: Joi.string().min(4).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
      });

      const check = schema.validate({ ...body }, { abortEarly: false });

      if (check.error) {
        return res.status(400).json({
          status: "failed",
          message: "Bad Request",
          errors: check.error["details"][0]["message"],
        });
      }

      const checkEmail = await users.findOne({
        where: {
          email: body.email,
        },
      });

      if (checkEmail) {
        return res.status(400).json({
          status: "fail",
          message: "Email already used, please use another email, or login",
        });
      }

      const hashedPassword = await bcrypt.hash(body.password, 10);

      const user = await users.create({
        email: body.email,
        password: hashedPassword,
      });

      const payload = {
        email: user.dataValues.email,
        id: user.dataValues.id,
      };

      jwt.sign(payload, "passwordKita", { expiresIn: 3600 }, (err, token) => {
        return res.status(200).json({
          status: "success",
          message: "Registered successfully",
          data: token,
        });
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "failed",
        message: "Internal Server Error",
      });
    }
  },
  login: async (req, res) => {
    const body = req.body;
    try {
      const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
      });

      const { error } = schema.validate({ ...body });

      if (error) {
        return res.status(400).json({
          status: "failed",
          message: error.message,
        });
      }

      const checkEmail = await users.findOne({
        where: {
          email: body.email,
        },
      });

      if (!checkEmail) {
        return res.status(401).json({
          status: "failed",
          message: "Invalid email or passsword",
        });
      }

      const checkPassword = await bcrypt.compare(body.password, checkEmail.dataValues.password);
      
      if (!checkPassword) {
        return res.status(401).json({
          status: "failed",
          message: "Invalid email or passsword",
        });
      }

      const payload = {
        email: checkEmail.dataValues.email,
        id: checkEmail.dataValues.id,
      };
      jwt.sign(payload, "passwordKita", { expiresIn: 3600 }, (err, token) => {
        return res.status(200).json({
          status: "success",
          message: "Logged in successfully",
          data: token,
        });
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "failed",
        message: "Internal Server Error",
      });
    }
  },
};
