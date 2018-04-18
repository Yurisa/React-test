const express = require('express')
const utility = require('utility')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')
const _filter = {pwd:0, '_v':0}
Router.get('/list', function(req, res){
    User.find({}, function(err, doc){
        return res.json(doc)
    })
})
Router.post('/update', function(req, res){
    const userId = req.cookies.userId
    if(!userId){
        return res.json({code:1})
    }
    const body = req.body
    User.findByIdAndUpdate(userId, body, function(err, doc){
        const data = Object.assign({}, {
            user:doc.user,
            type:doc.type
        }, body)
        return res.json({code:0, data})
    })
})
Router.post('/login', function(req, res){
    const {user, pwd} = req.body
    User.findOne({user, pwd:md5Pwd(pwd)}, _filter,  function(err, doc){
        if(!doc){
            return res.json({code:1, msg:'用户名或者密码错误'})
        }
        res.cookie('userId', doc._id)
        return res.json({code:0, data:doc})
    })
})
Router.post('/register', function(req,res){
     console.log(req.body)
     const {user, pwd, type} = req.body
     User.findOne({user:user}, function(err, doc){
         console.log(doc);
         if(doc){
             return res.json({code:1, msg:'用户名重复'})
         }
         const userModel = new User({user, pwd:md5Pwd(pwd), type})
         userModel.save(function(err, doc){
             if(err){
                 return res.json({code:1, msg:'后端出错'})
             }
             const {user, type, _id} = doc
             res.cookie('userId', _id)
             return res.json({code:0, data:{user, type, _id}})
         })
     })
})
Router.get('/info', function(req, res){
    const { userId } = req.cookies
    if(!userId){
      return res.json({code:1})      
    }
    User.findOne({_id:userId}, _filter, function(err, doc){
        if(err){
            return res.json({code:1, msg:'后端出错了'})
        }
        if(doc){
            return res.json({code:0, data:doc})
        }
    })
})

function md5Pwd(pwd){
    const salt = 'hahahahahahahhaha'
    return utility.md5(utility.md5(pwd+salt))
}
module.exports = Router