const nodemailer = require('nodemailer')
const ejs = require('ejs')
const path = require('path')

class MailService {
  constructor () {
    this.transporter = nodemailer.createTransport({
      service: process.env.SMTP_SERVICE,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    })
  }

  async sendActivationMail (to, link) {
    const data = await ejs.renderFile(path.join(__dirname, '../src/views/mails/activate-link.ejs'), { link })
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: 'Activation account ' + process.env.API_URL,
      text: '',
      html: data
    })
  }
}

module.exports = new MailService()
