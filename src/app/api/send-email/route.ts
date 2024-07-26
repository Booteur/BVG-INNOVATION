import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { userInfo, email, title, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true, // True for 465, false for other ports
    auth: {
      user: "contact@bvg-innovation.tech", // Your authenticated email
      pass: "Contact2024@", // Your email password
    },
  });

  const mailOptions = {
    from: "contact@bvg-innovation.tech", // Must be the authenticated user
    replyTo: email, // Reply-to address can be different
    to: "contact@bvg-innovation.tech", // Replace with your receiving email address
    subject: `${title} - ${userInfo}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false });
  }
}
