const Product  = require('../models/Products');

module.exports = {
    postProducts:postProducts
}

function postProducts(req,res){
    async function postProducts() {
        try{

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