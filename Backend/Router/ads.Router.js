const express = require("express");
const ads = require("../Schema/ads.model.js");

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
app.get('/',async(req,res)=>{
    const search = req.query.search || "";

//     let data = await ads.find({})
//  res.send(data)
try{
    let data = await ads.find({
        // title: { $regex: search, $options : "i" },
       "$or":[
        {primaryText: { $regex: search, $options : "i" }},
        {headline: { $regex: search, $options : "i" }},
        {description: { $regex: search, $options : "i" }},
        {CTA: { $regex: search, $options : "i" }}
       ]
      });
      res.send(data)
}catch(err){
    res.status(500).send(err.message)
}

})



module.exports = app;

//rearch in mongodb?