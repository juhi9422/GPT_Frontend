const express=require('express');
const app = express();
app.use(express.json());    
var cors = require('cors');
const { default: axios } = require('axios');
app.use(cors());


const port =8000;

app.listen(port,()=>{
 console.log("server started")
})

app.post("/completion",async (req,res)=>{
    try {
        console.log(req.body.message);
        const data = req.body.message;
        res.send(data); 
        const a= await axios.post("https://api.openai.com/v1/chat/completions",data);
        console.log(a.json());
        
    } catch (error) {
        console.log(error)
    }
 
})

//   const options = {
//     method: "POST",
//     headers: {
//       "Authorization": `Bearer ${apiKey}`,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       model: "gpt-3.5-turbo",
//       messages: [{ role: "user", content: "how are " }],
//       max_tokens: 100,
//     }),
//   };
//   try {
    // const response=fetch("https://api.openai.com/v1/chat/completions", options);
    // const data = await response.json();
    // res.send(data);
//   } catch (e) {
//     console.log("error", e);
//   }