const Joi = require("joi");
const { laptop, laptopBrand } = require("../models");

module.exports = {
  postLaptop: async (req, res) => {
    const body = req.body;
    const file = req.file;
    try {
      const schema = Joi.object({
        name: Joi.string().required(),
        idBrand: Joi.number().required(),
        price: Joi.number().required(),
        stock: Joi.number().required(),
      });

      const { error } = schema.validate({ ...body });

      if (error) {
        return res.status(400).json({
          status: "failed",
          message: error.message,
        });
      }

      const saveLaptop = await laptop.create({ ...body, image: file.path });

      if (!saveLaptop) {
        return res.status(409).json({
          status: "failed",
          message: "Failed to save the data to database",
        });
      }

      const laptopGet = await laptop.findOne({
        where: {
          id: saveLaptop.dataValues.id,
        },
        attributes : {
            exclude : ["idBrand", "updatedAt"]
        },
        include: [
          {
            as: "paijo",
            model: laptopBrand,
          },
        ],
      });

      return res.status(200).json({
        status: "success",
        message: "Successfully save the data",
        data: laptopGet,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: "error",
        message: "Internal Server Error",
      });
    }
  },
};
