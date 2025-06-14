// src/app/api/razorpay/route.ts
import Razorpay from 'razorpay';
import { NextResponse } from 'next/server';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(req: Request) {
  const body = await req.json();
  const { amount } = body;

  try {
    const order = await razorpay.orders.create({
      amount: amount * 100, // amount in paise
      currency: 'INR',
      receipt: `receipt_order_${Date.now()}`,
    });

    return NextResponse.json({ orderId: order.id });
  } catch (error) {
    return NextResponse.json({ error: 'Order creation failed' }, { status: 500 });
  }
}
