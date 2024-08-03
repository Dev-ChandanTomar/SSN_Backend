import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "sanatansewan@gmail.com",
    pass: "nbfhnlsufobdvlyw",
  },
});

// async..await is not allowed in global scope, must use a wrapper
export async function sendMail(to,subject,text,html) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'sanatansewan@gmail.com', // sender address
    to,
    subject,
    text,
    html
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

