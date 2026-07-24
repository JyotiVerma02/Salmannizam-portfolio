import { NextResponse } from "next/server";
import transporter from "@/lib/mailer";
import { contactEmailTemplate } from "@/templates/contactEmail";


export async function POST(req: Request) {

  try {

    const { name, email, message } = await req.json();


    await transporter.sendMail({

      from: process.env.EMAIL_USER,

      to: process.env.EMAIL_USER,

      replyTo: email,

      subject: `New Contact Message from ${name}`,

      html: contactEmailTemplate(
        name,
        email,
        message
      ),

    });


    return NextResponse.json({
      success:true,
      message:"Message sent successfully"
    });


  } catch(error){

    console.log(error);

    return NextResponse.json(
      {
        success:false,
        message:"Something went wrong"
      },
      {
        status:500
      }
    );

  }

}