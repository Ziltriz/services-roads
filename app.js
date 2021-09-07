const express = require("express");
const path = require("path");
const fs = require('fs');
const app = express()





app.use(express.static(path.resolve(__dirname, "client")))


app.get("*", (req, res)=> {
     res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})

app.listen(3000, () =>{
     console.log('Server has been stared on port 3000 ...')
}
)