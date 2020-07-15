const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();  
const app = express();
const customers = require('./Customers');



app.listen(5000,() => {
  console.log("Started on PORT 5000");
})


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/api/customers',function(req,res){
  const newCustomer =  {
    id : req.body.id ? req.body.id:10,
    name : req.body.name,
    surnname : req.body.surnname,
  }
  if (!newCustomer.name || !newCustomer.surnname){
    return res.status(404).json({msg:"PLease insernt the name and surnname"});
  }
  customers.push(newCustomer)
  console.log('Post response',customers)
  res.json(customers)
  // console.log('Body',req.body)
  
});

app.get('/api/customers',(req,res) => {
res.json(customers)
})

app.put('/api/customers/:id',(req,res) => {
   const found = customers.some(customer => customer.id == parseInt(req.params.id));
   if (found) {
       const updateCus = req.body;
       customers.forEach(customer => {
           if (customer.id === parseInt(req.params.id)){
               customer.name = updateCus.name ? updateCus.name:customer.name;
               customer.surnname = updateCus.surnname ? updateCus.surnname:customer.surnname;
               res.json(customers)
           }
          });
        }
          else {
           res.status(404).json({msg:`No Customer with id ${req.params.is}`})

          }   
  })


  app.delete('/api/customers/:id',(req,res) => {
    const found = customers.some(customer => customer.id == parseInt(req.params.id));
    if (found) {
          var custs = customers.filter(cus => cus.id !==parseInt(req.params.id))
          console.log('delete response',custs)
           res.send(custs)
         }
           else {
            res.status(404).json({msg:`No Customer with id ${req.params.is}`})
 
           }   
   })
   


