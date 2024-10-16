import nodemailer from 'nodemailer'

const { EMAIL, EMAILTO, CLIENTID, SECRETID, REFRESHTOKEN, ACCESSTOKEN } = process.env


export const transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth: {

            type: "OAuth2",
            user: EMAIL,
            clientId: CLIENTID,
            clientSecret: SECRETID,
            refreshToken: REFRESHTOKEN,
            refreshToken: REFRESHTOKEN,
            accessToken: ACCESSTOKEN
        }


    }
)


export const mailOptions = {
    from: EMAIL,
    to: EMAILTO,
}