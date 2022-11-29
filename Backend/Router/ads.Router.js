const express = require("express");
const ads = require("../Schema/ads.model.js");
const company = require("../Schema/Company.model")
const app = express.Router();
app.post("/", async (req, res) => {
    console.log("post")
    try{
      await ads.create(req.body)
     return res.status(200).send(" Added!");
    }catch(err){
        console.log(err.message)
        res.status(500).send(e.message);

    }
})
app.post("/company",async(req,res)=>{
    try{
        await company.create(req.body)
        res.status(200).send("added")
    }catch(err){
        res.status(500).send(err.message)
    }
})
app.get('/',async(req,res)=>{
    const search = req.query.search || "";

//     let data = await ads.find({})
//  res.send(data)
try{
    let data = await ads.find({
       "$or":[
        {primaryText: { $regex: search, $options : "i" }},
        {headline: { $regex: search, $options : "i" }},
        {description: { $regex: search, $options : "i" }},
        {CTA: { $regex: search, $options : "i" }}
       ]
      });
    //  let a = await ads.find({name: { $regex: search, $options : "i" }})
    let c = await company.find({name: { $regex: search, $options : "i" }})
      res.send([...data,...c])
}catch(err){
    res.status(500).send(err.message)
}

})



module.exports = app;

//rearch in mongodb?