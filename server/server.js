import {apps} from "./apps.js";
import RazoPay from "razorpay";

export const instance = new RazoPay({
    key_id: process.env.RAZOPAY_API_KEY,
    key_secret: process.env.RAZOPAY_API_SECRET,
  });

apps.listen(process.env.PORT, () => 
 console.log(`Server is working ${process.env.PORT}`)
 );