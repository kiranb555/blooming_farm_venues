import nodemailer from 'nodemailer';

// https://myaccount.google.com/apppasswords 
// TO genetate app password we can use above link

// Temporary hardcoded values for testing - replace with env vars in production
const EMAIL_USER = 'kiran.basavaraj05@gmail.com'; // Replace with your Gmail
const EMAIL_PASSWORD = 'cril oykl ubxs npcp'; // Replace with Gmail app password
const ADMIN_EMAIL = 'kiranb2040@gmail.com'; // Replace with admin email

export async function POST(request) {
  try {
    const { name, email, subject, message, phone, smsOptIn } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ message: 'All fields are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Check environment variables
    if (!EMAIL_USER || !EMAIL_PASSWORD || !ADMIN_EMAIL) {
      console.error('Missing email constants');
      return new Response(
        JSON.stringify({ message: 'Server configuration error' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Create transporter
    let transporter;
    if (process.env.NODE_ENV === 'production') {
      // Use Gmail in production
      transporter = nodemailer.createTransport({ 
        service: 'gmail',
        auth: {
          user: EMAIL_USER,
          pass: EMAIL_PASSWORD
        },
        pool: true,
        maxConnections: 1,
        maxMessages: 1,
      });
    } else {
      // Use Ethereal for local testing (faster and no real emails)
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
      console.log('📧 Using Ethereal for local testing. Check emails at:', nodemailer.getTestMessageUrl(testAccount));
    }

    // Verify transporter (optional, for debugging)
    try {
      await transporter.verify();
      console.log('✅ Transporter verified');
    } catch (error) {
      console.error('❌ Transporter verification failed:', error.message);
      throw error;
    }

    // Email to admin
    const adminMailOptions = {
      from: EMAIL_USER,
      to: ADMIN_EMAIL,
      subject: `New Contact Request Submited: ${subject}`,
      html: `
        <h2>New Contact for enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>SMS Opt-in:</strong> ${smsOptIn ? 'Yes' : 'No'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Email to user (confirmation)
    const userMailOptions = {
      from: EMAIL_USER,
      to: email,
      subject: 'We received your message - Blooming Farm Venues',
      html: `
        <h2>Thank you for contacting us!</h2>
        <p>Hi ${name},</p>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <hr>
        <p><strong>Your Message Details:</strong></p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p>Best regards,<br>Blooming Farm Venues Team</p>
        <p>Feel free to contact us - +1 800-400-8667</p>
      `,
    };

    // Send emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    console.log('✅ Emails sent successfully for:', email);

    return new Response(
      JSON.stringify({ 
        message: 'Message sent successfully! We will get back to you soon.' 
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('❌ Email sending error:', error.message);
    console.error('Full error:', error);
    return new Response(
      JSON.stringify({ 
        message: 'Failed to send message. Please try again later.' 
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
