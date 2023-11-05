
const express = require('express');
const path = require('path');
//const { equelize } = require('sequelize'); // Import Sequelize correctly
var cors = require('cors')
const app = express();
const port = 8000;
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const User = require('./modal/user'); // Correct the path and model name
const sequelize = require('./util/database')
app.use(cors());

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json({ extended: false }));
app.use(adminRoutes);
// sequelize.sync({force:true})
 sequelize.sync() 
  .then(() => {
    app.listen(port, () => {
      console.log(`Server Running On Port ${port}`);
    });
  })
  .catch((err) => console.error(err));


// app.use('/user-datails',async(req,res,next)=>{
//     try {
//     const Users = await User.findAll();
//     res.status(200).json({usersdetails:Users});
//     }catch(error){
//         res.status(505).json({error:error})
//     }
// })



