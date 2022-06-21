const {MAIL_SERVICE, MAIL_HOST, MAIL_USER, MAIL_PASS, MAIL_FROM} = require("../env");
const nodemailer = require("nodemailer");
const createError = require("http-errors");

module.exports = {
    sendMail: async (to, subject, token) => {
        try {
            const mailConfig = {
                service: MAIL_SERVICE,
                host: MAIL_HOST,
                port: 587,
                auth: {
                    user: MAIL_USER,
                    pass: MAIL_PASS
                }
            }
            const message = {
                from: MAIL_FROM,
                to,
                subject,
                text: "오른쪽 숫자 6자리를 입력해주세요 : " + token
            }
            const transporter = nodemailer.createTransport(mailConfig)
            await transporter.sendMail(message)
        } catch (error) {
            console.log(error);
            throw createError(400, "Mail does not send")
        }
    }
}
