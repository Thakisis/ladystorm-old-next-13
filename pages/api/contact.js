import { transporter, mailOptions } from "@/config/nodeMailer"
import { mailToLady } from "@/lib/mail"


const { EMAIL } = process.env


export default async function handler(req, res) {

  if (req.method === 'POST') {
    const data = req.body
    if (!data.name || !data.email || !data.subject || !data.message)
      return res.status(400).json({ message: 'Bad Request data' })


    const success = await new Promise((resolve, reject) => {
      // send mail
      transporter.sendMail({
        ...mailOptions,
        subject: `Ladystorm.cz ${data.name} with email${data.email} wanna contact you`,
        text: `Ladystorm.cz ${data.name} with email${data.email} ${data.phone ? `and phone ${data.phone}` : ''}  wanna contact you about ${data.subject} \n ${data.message}`,
        html: mailToLady(data),
      }
      ).then((info, err) => {
        if (info.response.includes('250')) {
          resolve(true)
        }
        reject(err)
      })
    })

    if (!success) {
      res.status(500).json({ error: 'Error sending email' })
    }
    res.status(200).json({ success: true })

  }

}
