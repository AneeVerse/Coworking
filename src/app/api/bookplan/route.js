import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, phone, message, plan } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
    },
  });

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h2 style="color: #6b533a;">New Booking Form Submission</h2>
      <p>You have a new booking form submission with the following details:</p>
      <table style="border: 1px solid #ccc; width: 100%; border-collapse: collapse;">
        <tr>
          <th style="border: 1px solid #ccc; padding: 8px; text-align: left;">Plan</th>
          <td style="border: 1px solid #ccc; padding: 8px;">${plan}</td>
        </tr>
        <tr>
          <th style="border: 1px solid #ccc; padding: 8px; text-align: left;">Name</th>
          <td style="border: 1px solid #ccc; padding: 8px;">${name}</td>
        </tr>
        <tr>
          <th style="border: 1px solid #ccc; padding: 8px; text-align: left;">Email</th>
          <td style="border: 1px solid #ccc; padding: 8px;">${email}</td>
        </tr>
        <tr>
          <th style="border: 1px solid #ccc; padding: 8px; text-align: left;">Phone</th>
          <td style="border: 1px solid #ccc; padding: 8px;">${phone}</td>
        </tr>
        <tr>
          <th style="border: 1px solid #ccc; padding: 8px; text-align: left;">Message</th>
          <td style="border: 1px solid #ccc; padding: 8px;">${message}</td>
        </tr>
      </table>
      <br/>
      <p style="color: #555;">Best regards,<br/>Coworking Team</p>
      <div style="margin-top: 20px; padding: 10px; background-color: #f4f4f4; border-left: 4px solid #6b533a;">
        <p style="margin: 0;">This email was generated from the Coworking website.</p>
      </div>
    </div>
  `;

  const mailOptions = {
    from: process.env.NEXT_PUBLIC_EMAIL_USER,
    to: process.env.NEXT_PUBLIC_EMAIL_RECEIVER,
    subject: 'New Booking Form Submission',
    html: htmlContent,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error sending email', error: error.message }), { status: 500 });
  }
}
