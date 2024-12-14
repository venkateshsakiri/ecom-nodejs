const Entitlements = require('../models/Entitlement');

module.exports = {
    entitlements:entitlements,
    getEntitlements:getEntitlements
}

function entitlements(req,res){
    async function entitlements() {
        try{
            const entitlement = new Entitlements({
                name:req.body.name,
                key:req.body.key
            })
            const isEntitlementExist = await Entitlements.findOne({name:req.body.name,key:req.body.key});
            if(isEntitlementExist){
                res.json({
                    code:200,
                    data:null,
                    message:'Entitlement already exists'
                })
            }else{
                const result = await Entitlements.insertMany(entitlement);
                if(result){
                    res.json({
                        code:200,
                        data:result,
                        message:'posted successfully'
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
    }entitlements().then(function(){}).catch(err=>{
        res.json({
            code:500,
            data:null,
            message:'Internal server error'
        })
    })
}
function getEntitlements(req,res){
    async function getEntitlements() {
        try{
            const entitlementExist = await Entitlements.find({});
            if(entitlementExist){
                res.json({
                    code:200,
                    data:entitlementExist,
                    message:'successfully fetched data!!'
                })
            }else{
                res.json({
                    code:200,
                    data:entitlementExist,
                    message:'No data found'
                })
            }
        }catch(err){
            res.json({
                code: 400,
                data: null,
                message: 'Exception error occurred'
            })
        }
    }getEntitlements().then(function(){}).catch(err=>{
        res.json({
            code:500,
            data:null,
            message:'Internal server error'
        })
    })
}