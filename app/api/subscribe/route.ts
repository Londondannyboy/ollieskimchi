import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email required' },
        { status: 400 }
      )
    }

    // Check if email already exists
    const existing = await sql`
      SELECT id FROM subscribers WHERE email = ${email.toLowerCase()}
    `

    if (existing.length > 0) {
      // Already subscribed, just return success
      return NextResponse.json({ success: true, message: 'Already subscribed' })
    }

    // Insert new subscriber
    await sql`
      INSERT INTO subscribers (email, source, discount_code, created_at)
      VALUES (${email.toLowerCase()}, 'popup', 'OLLIE15', NOW())
    `

    return NextResponse.json({ success: true, message: 'Subscribed successfully' })
  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    )
  }
}
