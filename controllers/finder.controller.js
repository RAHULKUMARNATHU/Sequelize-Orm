const  db = require('../models/index');
const {Sequelize, Op} = require('sequelize');

let User = db.user;

/*Find All Users */

module.exports.findAll = async (req, res)=>{
    const data = await User.findAll({})

    res.status(200).json({data:data})
}

/*Find by Primary key */
module.exports.findByPk = async (req, res)=>{
    const data = await User.findByPk(1);

    if(data === null){
        res.status(500).send({ error:'Something failed!' })
    }else{

        res.status(200).json({data:data})
    }
}


/*find One */

module.exports.findOne = async (req, res)=>{

    const data = await User.findOne({where: {firstName:"john" }});

    if(data === null){
        res.status(500).send({ error:'Something failed!' })
 
    }
    res.status(200).json({data:data})
}

/*findOrCreate */

module.exports.findOrCreate = async(req, res)=>{
    const [data , createdData] = await User.findOrCreate({
        where:{firstName:"jack"},
        defaults:{
            lastName:"sparrow"
        }
    })

    if(createdData){
        res.status(200).json({data:data})
    }else{

        res.status(200).json({data:data})
    }

}


/*find and count all */

module.exports.findAndCountAll = async(req, res)=>{
const {count , rows } = await User.findAndCountAll({
    where:{firstName:{
        [Op.like]:"jack"
    }
},
offset:5,
limit:10
})
res.status(200).json({data:{count,rows}})

}