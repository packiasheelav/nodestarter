const http=require('http');
const port=3000;
const hostname='127.0.0.1';
const fs=require('fs');
const os=require('os');
const nodemailer = require('nodemailer');
const dt = require('./myfirstmodule');

const url = require('url');
const students=[
    {
        name:'shravnthi',
        gender:'female',
        country:'Finland'
    },
    {
        name:'Sheela',
        gender:'female',
        country:'Finland'
    },
    {
        name:'Varadhan',
        gender:'male',
        country:'Finland'
    }
 ]
 http.createServer((req, res) => {
    if(req.url ==='/' || req.url ==="/home"){
        fs.readFile('index.html', (err, data) => {
            if(err){
                return console.log(err)
            }
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
        })

    }
else if(req.url==='/About'){
    fs.readFile('About.html',(err,data)=>{
        if(err){
            return console.log(err)
        }
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data);
        res.end();
    })
}
else if(req.url==='/students'){
    fs.readFile('students.html',(err,data)=>{
        if(err){
            return console.log(err)
        }
    res.writeHead(200,{'Content-Type':'application/json'})
    res.write(JSON.stringify(students));
    res.end();
})
}
else if(req.url==='/contact'){
    fs.readFile('contact.html',(err,data)=>{
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'sheelaintegrify@gmail.com',
          pass: 'integrify2018'
        }
      });
      let mailOptions = {
        from: 'sheelaveldurai@gmail.com',
        to: 'sheelaintegrify@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was super easy!'
      };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      res.writeHead(200,{'Content-Type':'text/html'})
      res.write(data);
      res.end();
    })
}
else if(req.url==='/createdate'){
    fs.readFile('createdate.html',(err,data)=>{
        if(err){
            return console.log(err)
        }
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write( data + "The date and time is currently: "+dt.myDateTime());
    res.end();
})
}
else if(req.url==='/readdate'){
    fs.readFile('readdate.html',(err,data)=>{
        if(err){
            return console.log(err)
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        var q = url.parse(req.url, true).query;
        console.log(q);
        var txt = q.year + " " + q.month;
        res.write( data); 
        res.end(txt);
})
}
else{
    ;;
}

const username = os.hostname();
const ipaddress = os.networkInterfaces()["Wi-Fi"][1].address;
const pageUrl = req.url;
const newDate = new Date().toLocaleDateString();
const newTime = new Date().toLocaleTimeString();
const user=os.userInfo().username;
const content = `User: ${username} date:${newDate} time:${newTime} ipAddress:${ipaddress} user:${user} page:${pageUrl} \n`
fs.appendFile('first.txt',content,(e) =>{
    if(e){
        console.log(e)
    }
    console.log('content saved', content,newDate,newTime)
});

}).listen(port,hostname,()=>{
    console.log(`Server is runnimg on ${port}...`);
 });