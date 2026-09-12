const express =require('express');
const cors =require('cors');

const app =express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const PORT = 5000 | process.env.PORT

app.get('/', (req, res)=>{
    res.send("Searted");
})


app.listen(PORT , ()=>{
    console.log("Server Started");
})