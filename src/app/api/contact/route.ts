import { NextResponse } from "next/server";
import transporter from "@/lib/mailer";


export async function POST(req: Request) {

  try {

    const { name, email, message } = await req.json();


    await transporter.sendMail({

      from: process.env.EMAIL_USER,

      to: process.env.EMAIL_USER,

      replyTo: email,

      subject: `New Contact Message from ${name}`,

      html: `
        <h2>New Contact Request</h2>

        <p>
          <strong>Name:</strong> ${name}
        </p>

        <p>
          <strong>Email:</strong> ${email}
        </p>

        <p>
          <strong>Message:</strong>
        </p>

        <p>
          ${message}
        </p>
      `,

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