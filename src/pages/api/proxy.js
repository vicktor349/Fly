import twilio from 'twilio';
import cors from 'cors';


const accountSid = process.env.accountSid;
const authToken = process.env.authToken;


const client = twilio(accountSid, authToken);

const corsMiddleware = cors({
    origin: '*',
});

const runMiddleware = (req, res, fn) =>
    new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });

export default async function handler(req, res) {
    await runMiddleware(req, res, corsMiddleware);
    if (req.method === 'POST') {
        const { body } = req.body;

        try {
            const message = await client.messages.create({
                body,
                from: 'whatsapp:+14155238886',
                to: 'whatsapp:+2348154552075'
            });

            console.log(message.sid);

            res.status(200).json({ success: true, message: 'Message sent successfully' });
        } catch (error) {
            console.error('Error sending message:', error);
            res.status(500).json({ success: false, message: 'Error sending message' });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }
}
