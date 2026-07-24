import { NextResponse } from "next/server";
import transporter from "@/lib/mailer";


export async function GET() {

  try {

    await transporter.sendMail({

      from: process.env.EMAIL_USER,

      to: "jyotiverma.feb9@gmail.com",

      subject: "Nodemailer Test Email",

      text: "Congratulations! Nodemailer is working successfully 🚀",

    });


    return NextResponse.json({
      success: true,
      message: "Email sent successfully"
    });


  } catch(error) {

    console.log(error);

    return NextResponse.json(
      {
        success:false,
        message:"Email sending failed"
      },
      {
        status:500
      }
    );

  }

}