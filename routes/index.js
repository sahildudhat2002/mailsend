var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');

  router.post('/send',function(req,res,next){
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'sahildudhat36@gmail.com',
        pass: 'sahil8160'
      }
    });
    
    var mailOptions = {
      from: 'sahildudhat36@gmail.com',
      to: req.body.email,
      subject: req.body.subject,
      text: req.body.message,
    };
  
 
    // html: 'Embedded image: ',
    // attachments: [
    //   {
    //     filename: '1.jpg',
    //     path: __dirname+'/1.jpg',
    //   // cid: 'unique@nodemailer.com'
    //   },
    //   {
    //     filename: '2.png',
    //     path: __dirname+'/2.png',
    //   // cid: 'unique@nodemailer.com'
    //   }]

    
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});
});

module.exports = router;
