const { laptopBrand, laptop } = require("../models");
const Joi = require("joi");

module.exports = {
  postLaptopBrand: async (req, res) => {
    const body = req.body;
    try {
      const schema = Joi.object({
        name: Joi.string().required(),
        year: Joi.number().min(1970).max(2200).required(),
        image: Joi.required(),
      });

      const { error } = schema.validate(
        {
          name: body.name,
          year: body.year,
          image: req.file.path,
        },
        { abortEarly: false }
      );

      if (error) {
        return res.status(400).json({
          status: "failed",
          message: "Bad Request",
          errors: error["details"][0]["message"],
        });
      }

      const check = await laptopBrand.create({
        name: body.name,
        year: body.year,
        image: req.file.path,
      });

      if (!check) {
        return res.status(400).json({
          status: "failed",
          message: "Unable to save the data to database",
        });
      }
      return res.status(200).json({
        status: "success",
        message: "Successfully saved to database",
        data: check,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "failed",
        message: "Internal Server Error",
      });
    }
  },
  getLaptopBrands: async (req, res) => {
    try {
      const brands = await laptopBrand.findAll({
        include : [
          {
            as : "laptops",
            model : laptop
          }
        ]
      });
      if (!brands) {
        return res.status(404).json({
          status: "failed",
          message: "Data not found",
          data: [],
        });
      }
      return res.status(200).json({
        status: "success",
        message: "Successfully retrieved laptop brands",
        data: brands,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "failed",
        message: "Internal Server Error",
      });
    }
  },
  updateLaptopBrand: async (req, res) => {
    const body = req.body;
    try {
      const schema = Joi.object({
        name: Joi.string(),
        year: Joi.number().min(1970).max(2200),
        image: Joi.string(),
      });

      const { error } = schema.validate(
        {
          name: body.name,
          year: body.year,
          image: req.file ? req.file.path : "image",
        },
        { abortEarly: false }
      );

      if (error) {
        return res.status(400).json({
          status: "failed",
          message: "Bad Request",
          errors: error["details"][0]["message"],
        });
      }

      const updatedBrand = await laptopBrand.update(
        {
          ...body,
          [req.file ? "image" : null]: req.file ? req.file.path : null,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );

      if (!updatedBrand[0]) {
        return res.status(400).json({
          status: "failed",
          message: "Unable to update database",
        });
      }

      const data = await laptopBrand.findOne({
        where: {
          id: req.params.id,
        },
      });

      return res.status(200).json({
        status: "success",
        message: "Data updated successfully",
        data: data,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "failed",
        message: "Internal Server Error",
      });
    }
  },
  deleteLaptopBrand: async (req, res) => {
    const id = req.params.id;
    try {
      const check = await laptopBrand.destroy({
        where: {
          id, // id : id
        },
      });
      if (!check) {
        return res.status(400).json({
          status: "failed",
          message: "Unable to delete the data",
        });
      }
      return res.status(200).json({
        status: "success",
        message: "Deleted successfully",
      });
    } catch (error) {}
  },
};
