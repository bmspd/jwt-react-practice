import nodemailer from 'nodemailer'

class MailService {

    constructor(props) {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        })
    }

    async sendActivationMail(to, link) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: `Activation account via ${process.env.API_URL}`,
            text: '',
            html:
                `
                    <div><h1>Go through the link to activate your account</h1>
                    <a href="${link}">${link}</a></div>
                `,
        })
    }
}

const MailServiceObject = new MailService()

export default MailServiceObject