const express = require('express')
const router = express.Router()
const Product = require('../models/Product.js')
const ProductController = require('../controllers/ProductController.js')

router.post("/create", ProductController.create)
router.get('/', ProductController.getAll )
router.get('/ssr', ProductController.getAllSSR )
router.get('/id/:_id', ProductController.getByID)
router.delete('/id/:_id', ProductController.deleteProduct)

module.exports = router
