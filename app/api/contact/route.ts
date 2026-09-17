import { NextResponse } from 'next/server';

/**
 * Contact endpoint. Validates on the server and returns a clear result so the
 * form always behaves. It currently logs the enquiry — connect your email
 * provider where marked (Resend, SendGrid, Postmark, a CRM webhook, etc.).
 */
export const runtime = 'nodejs';

type Body = {
  name?: string;
  email?: string;
  phone?: string;
  interest?: string;
  message?: string;
  company?: string; // honeypot
};

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

export async function POST(request: Request) {
  let body: Body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'That request could not be read.' }, { status: 400 });
  }

  // A filled honeypot means a bot. Answer normally and drop it.
  if (body.company) return NextResponse.json({ ok: true });

  const name = (body.name ?? '').trim();
  const email = (body.email ?? '').trim();
  const message = (body.message ?? '').trim();

  if (name.length < 2) {
    return NextResponse.json({ error: 'Please enter your name.' }, { status: 422 });
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: 'That email address does not look right.' }, { status: 422 });
  }
  if (message.length < 10) {
    return NextResponse.json(
      { error: 'Please add a little more detail to your message.' },
      { status: 422 },
    );
  }

  const enquiry = {
    name,
    email,
    phone: (body.phone ?? '').trim(),
    interest: body.interest ?? 'Membership',
    message,
    receivedAt: new Date().toISOString(),
  };

  // ── Connect your email provider here ──────────────────────────
  // await resend.emails.send({
  //   from: 'Empire Fitness <site@yourdomain.com>',
  //   to: 'hello@yourdomain.com',
  //   replyTo: enquiry.email,
  //   subject: `New enquiry — ${enquiry.interest}`,
  //   text: JSON.stringify(enquiry, null, 2),
  // });
  console.log('[empire-fitness] enquiry', enquiry);

  return NextResponse.json({ ok: true });
}
