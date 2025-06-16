import Razorpay from 'razorpay';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { amount } = await req.json();

  const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  const payment = await instance.orders.create({
    amount: Number(amount) * 100, // convert ₹ to paise
    currency: 'INR',
    receipt: 'receipt#1',
  });

  return NextResponse.json(payment);
}
