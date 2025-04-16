
import { env } from "@/lib/env";

export interface ContactEmailOptions {
    name: string;
    email: string;
    message: string;
}

export function getContactEmailOptions({ name, email, message }: ContactEmailOptions) {
    return {
        from: email,
        to: env.EMAIL_USER,
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}
Email: ${email}
Message: ${message}
,        html: 

<h2>New Contact Form Submission</h2> <p><strong>Name:</strong> ${name}</p> <p><strong>Email:</strong> ${email}</p> <p><strong>Message:</strong></p> <p>${message}</p> `,
    };
}