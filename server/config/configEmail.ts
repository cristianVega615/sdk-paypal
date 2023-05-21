import { createTransport } from "nodemailer";
import { config } from "dotenv";
config()

const host = process.env.HOST_NAME as string;
const port = process.env.PORT_HOST as string;
const user = process.env.USER as string;
const password = process.env.PASSWORD as string;

export let transport = createTransport({
  host: `${host}`,
  port: parseInt(port),
  secure: true,
  auth: {
    user,
    pass: password,
  },
});

transport.verify().then(() => {
});
