import { NextResponse } from 'next/server';
import formData from 'form-data';
import Mailgun from 'mailgun.js';


export async function POST(req: Request) {
    try {
        const body = await req.json();
        const API_KEY = process.env.MAILGUN_API_KEY || '';
        const DOMAIN = process.env.MAILGUN_DOMAIN || '';
        
        const mailgun = new Mailgun(formData);
        const client = mailgun.client({ username: 'api', key: API_KEY });
        const { firstName, lastName, email, company, message } = body;

        const messageData = {
            from: `${email} Contacted <contact@mg.gregoryalbert.com>`,
            to: 'gregoryalbert1209@gmail.com',
            subject: 'You have been contacted!',
            text: `Hello Gregory,
            
You have been contacted by ${firstName} ${lastName} | ${company}.
            
${message}`
        };

        await client.messages.create(DOMAIN, messageData);
        
        return NextResponse.json({ submitted: true }, { status: 200 });
    } catch (error) {
        console.error('Error connecting to mailing API:', error);
        return NextResponse.json({ error: 'Error connecting to mailing API' }, { status: 400 });
    }
}

