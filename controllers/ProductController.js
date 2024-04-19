const Product = require('../models/Product')

const ProductController = { 
  async create (req, res) {
    try {
        const product = await Product.create(req.body)
        res.status(201).send(product)
    } catch (error) {
      console.log(error)
    }
  },
  async getAll (req, res) {
    try {
        const product = await Product.find();
        res.json(product);
    } catch (error) {
        console.log(error)
    }
  },
  async getAllSSR (req, res) {
    try {
        const product = await Product.find();
        res.send(`<h1>Tareas</h1>
          ${product.map(product => {
            return (
              `<div>
              <h2>${product.title}</h2>
              <p>${product.price}</p>
              <p>${product.category}</p>
              <p>${product._id}</p>
              </div>`
            )
          } ).join('')}
        </div>`);
    } catch (error) {
        console.log(error)
    }
  },
  async getByID (req, res) {
    try {
      const id = req.params._id;
      const product = await Product.findById(id);
      res.json(product)
    } catch (error) {
        console.log(error)
    }
  },
  async deleteProduct (req, res) {
    try {
      const id = req.params._id
      const deletedProduct = await Product.findByIdAndDelete(id)
      if (!deletedProduct) {
        return res.status(404).json({message: "Product not found"})
      }  
      res.json({message: "Product deleted successfully", deletedProduct})
    } catch (error) {
        console.log(error)
    }
},
async updateProduct(req, res) {
  try {
    const id = req.params._id;
    const udpatedProduct = await Product.findByIdAndUpdate(
      id, {
        completed: true
      }, {new: true}
    )
    if(!udpatedProduct) {
      return res.status(404).json({mensaje: 'Product id not found'})
    } 
    res.json(udpatedProduct)
  } catch (error) {
    console.log(error)
  }
}
}
  module.exports = ProductController
 
