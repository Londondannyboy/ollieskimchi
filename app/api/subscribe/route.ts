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

    // Ensure subscribers table exists
    await sql`
      CREATE TABLE IF NOT EXISTS subscribers (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        source VARCHAR(50) DEFAULT 'popup',
        discount_code VARCHAR(50),
        created_at TIMESTAMP DEFAULT NOW()
      )
    `

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

    console.log('[Subscribe] New subscriber:', email)
    return NextResponse.json({ success: true, message: 'Subscribed successfully' })
  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    )
  }
}
