const express = require('express')
const router = express.Router()
const laptopBrand = require('./laptopBrandRoute')
const laptopRoute = require('./laptopRoute')
const authRoute = require('./authRoute')

router.use("/brand", laptopBrand)
router.use("/laptop", laptopRoute)
router.use("/auth", authRoute)

module.exports = router

