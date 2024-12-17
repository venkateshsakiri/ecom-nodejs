const Products = require('../models/Products');

module.exports = {
    postProducts:postProducts,
    getAllProducts:getAllProducts
}

function postProducts(req,res){
    async function postProducts() {
        try{
            const product = new Products({
                code:req.body.code,
                name:req.body.name,
                description:req.body.description,
                category:req.body.category?.name,
                inventoryStatus:req.body.inventoryStatus?.label,
                image:req.body.image,
                rating:req.body.rating,
                price:req.body.price,
                quantity:req.body.quantity
            })
            const isExistProduct = await Products.findOne({code:req.body.code});
            if(isExistProduct){
                res.json({
                    code: 200,
                    data: null,
                    message: 'Product already exist'
                })
            }else{
                const result = await product.save();
                if(result){
                    res.json({
                        code: 200,
                        data: result,
                        message: 'Product added successfully!!'
                    })
                }else{
                    res.json({
                        code: 200,
                        data: null,
                        message: 'Required fields are missing'
                    })
                }
            }
        }catch(err){
            res.json({
                code: 400,
                data: null,
                message: 'Exception error occurred'
            })
        }
    }postProducts().then(function(){}).catch(err=>{
        res.json({
            code:500,
            data:null,
            message:'Internal server error'
        })
    })
}

function getAllProducts(req,res){
    async function getAllProducts(){
        try{
            const allProducts = await Products.find({});
            if(allProducts && allProducts.length > 0){
                res.json({
                    code:200,
                    data:allProducts,
                    size:allProducts.length,
                    message:'Products fetched successfully!!'
                })
            }else{
                res.json({
                    code:200,
                    data:[],
                    size:allProducts.length,
                    message:'No Products found!'
                })
            }
        }catch(err){
            res.json({
                code: 400,
                data: null,
                message: 'Exception error occurred'
            })
        }
    }getAllProducts().then(function(){}).catch(err=>{
        res.json({
            code:500,
            data:null,
            message:'Internal server error'
        })
    })
}