const fs=require("fs");
fs.writeFile("index.html", "<h1> Hello World </h1>", ()=>{});
fs.appendFile("index.html", "\n<p> This is Ajay... </p>", ()=>{});

const http=require("http");
const server=http.createServer((req,res)=>{
    fs.readFile("index.html",(err,data)=>{
        res.end(data)
    })
})
server.listen(5000, ()=>{
    console.log("server is listening at port 5000")
})