'use strict'
const db = require("../models")

const show = (req, res) => {
    db.Product.findAll({
        include: [
            {
                model: db.ProductImage
            },
            {
                model: db.ProductBaseRelation,
                include: [
                    {
                        model: db.Brand
                    },
                    {
                        model: db.Category
                    },
                    {
                        model: db.Collection
                    }
                ]
            }
        ]
    })
    .then(data => {
        res.status(200).json({
            responseCode: 200,
            responseMessage: "OK",
            responseData: data
        })
    })
}

const create = (req, res) => {
    db.ProductImage.create({
        // productBaseRelationId: 5,
        // name: "Product1",
        // description: "Ini barang 5",
        // price: 50000,
        // discount: 2000,
        // stock: 33,
        // thumbnail: "product5.jpg",
        // brandId: 5,
        // categoryId: 5,
        // collectionId: 5,
        productId: 1,
        photo: "photo5.jpg",
      })
      .then((user) => {
        res.json(user);
      });
}

module.exports = {
    show,
    create
  };