import User from "@/models/userModal"
import bcrypt from 'bcrypt'
import nodemailer from 'nodemailer'


export const sendMail=async ({email,emailType,userId}:any) => {
    try {
    
        const hasedToken=await bcrypt.hash(userId.toHexString(),10)
 

        if(emailType==="VERIFY"){
            await User.findByIdAndUpdate(userId,{verifyToken:hasedToken,verifyTokenExpiry:Date.now()+3600000})
        }else if(emailType==="RESET"){
            await User.findByIdAndUpdate(userId,{forgetPasswordToken:hasedToken,forgetPasswordTokenExpiry:Date.now()+3600000})
        }

        
            const transport = nodemailer.createTransport({
                host: "sandbox.smtp.mailtrap.io",
                port: 2525,
                auth: {
                  user: "80820107a57c93",
                  pass: "4e7f8cad4830fb"
                }
              
        })


        const mailOptions={
            from:'solidauto202@gmail.com',
            to:email,
            subject:emailType==="VERIFY"? 'Verify your email' : "Reset your password",
            html:`<p>Click <a href="${process.env.domain}/verifyemail?token=${hasedToken}">here</a> to ${emailType==="VERIFY"?"verify your email":"reset your password"} </br> or copy this link </br> 
            ${process.env.domain}/verifyemail?token=${hasedToken}
            </p>`
        }

        const mailresponse=await transport.sendMail(mailOptions);
        return mailresponse;

    } catch (error:any) {
        throw new Error(error.message)
    }
}