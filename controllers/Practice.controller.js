const db = require("../models/index");
const { Sequelize, } = require("sequelize");

const {Op} = require('sequelize')

let User = db.user;

/*find all user with some attribute */

// module.exports.findAllUser = async(req,res)=>{
//  const data=  await User.findAll({
//         attributes:[ 'id', 'firstName',],
//     })
//     res.status(200).json({ data: data })
// }


/*Find User with replacing attribute Name with some other name  */

// module.exports.findAllUser = async (req , res )=>{

//     const data = await User.findAll({
//         attributes:[ ['id','userId'], 'firstName',],
//     })

//     res.status(200).json({data})
// }



/*Applying query  to find User  */

// module.exports.findAllUser = async (req , res )=>{

//    const data =  await User.findAll({
//     attributes: {
//       }
//   });
//     res.status(200).json({data})
// }


/*Applying WHERE clauses {OP} */


// module.exports.findAllUser = async (req , res )=>{

//     const data =  await User.findAll({
//      where:{
//         id:{
//             [Op.eq]:3
//         }
//      }
//    });
//      res.status(200).json({data})
//  }


/*Applying WHERE clauses {Op.and} */

// module.exports.findAllUser = async (req , res )=>{

//     const data =  await User.findAll({
  
//         where:{
//             [Op.and]:[
//                 {
//                 id:2
//             }
//             ,{
//                 firstName:'john'
//             }
//         ],

//         }
    
//    });
//      res.status(200).json({data})
//  }

 /*Applying WHERE clauses {Op.and} */

// module.exports.findAllUser = async (req , res )=>{

//     const data =  await User.findAll({
  
//         where:{
//             [Op.or]:[
//             //     {
//             //     id:1
//             // }
//             ,{
//                 firstName:'jack'
//             }
//         ],

//         }
    
//    });
//      res.status(200).json({data})
//  }






/*Applying WHERE clauses {OP} */


module.exports.findAllUser = async (req , res )=>{

    const data =  await User.findAll({
     where:{
        // id:{
        //     [Op.or]:{
        //         [Op.gt]:5,
        //         [Op.eq]:3
        //     }
             
        // },
        
            // createdAt: {
            //   [Op.lt]: new Date(),
            //   [Op.gt]: new Date(new Date() - 24 * 60 * 60 * 1000)
            // }
          
          // createdAt < [timestamp] AND createdAt > [timestamp]

          
            [Op.or]: [
            //   {
            //     firstName: {
            //       [Op.like]: 'jack%'
            //     }
            //   },
              {
                lastName: {
                  [Op.like]: '%marrria%'
                }
              }
            ]
          
          // title LIKE 'Boat%' OR description LIKE '%boat%'
        

     }
   });
     res.status(200).json({data})
 }