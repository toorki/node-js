const http=require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server=http.createServer((req,res)=>{
res.end('<h1>hellow world</h1>')});



var fs=require('fs');

fs.writeFile('welcome.txt','r+', function(error,fd){
    if (error){
        return console.error(error);
    }
    console.log('file is opened successfuly')
})

var generator = require('generate-password')
var password = generator.generate({
    length:10,
    numbers:true
})
console.log('password')

var nodemailer=require('nodemailer')
var transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'',
        pass:''
    }
})
var mailOptions = {
    from: '',
    to: '',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  })

  server.listen(port,hostname,()=>{
    console.log('server runing at http://${hostname}:${port}')
})