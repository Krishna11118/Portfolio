import { env } from "@/lib/env";

export interface ResumeEmailOptions {
    name: string;
    email: string;
    resumeLink: string;
}

export function getResumeEmailOptions({ name, email, resumeLink }: ResumeEmailOptions) {
    const from = env.EMAIL_USER;

    if (!from) {
        throw new Error("Environment variable NEXT_PUBLIC_EMAIL_USER is not defined");
    }

    return {
        from,
        to: email,
        subject: "Krishna's Resume",
        text: `Dear ${name},
  
  Thank you for reaching out to me. I appreciate your interest in my professional background.
  
  I am a dedicated professional with expertise in software development, specializing in building scalable web applications and innovative solutions. My work focuses on delivering high-quality, user-centered outcomes, and I am passionate about leveraging technology to solve real-world challenges.
  
  Please find my resume linked below for more details about my experience and qualifications:
  ${resumeLink}
  
  I am excited about the possibility of collaborating with you and would be delighted to discuss how my skills can contribute to your projects. Please feel free to reply to this email or contact me directly to schedule a conversation.
  
  Best regards,
  Krishna`,
    };
}