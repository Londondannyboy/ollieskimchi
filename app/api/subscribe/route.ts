import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const { email, agreedToTerms } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email required' },
        { status: 400 }
      )
    }

    if (!agreedToTerms) {
      return NextResponse.json(
        { error: 'You must agree to the Privacy Policy and Terms of Service' },
        { status: 400 }
      )
    }

    // Ensure subscribers table exists with consent tracking
    await sql`
      CREATE TABLE IF NOT EXISTS subscribers (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        source VARCHAR(50) DEFAULT 'popup',
        discount_code VARCHAR(50),
        agreed_to_terms BOOLEAN DEFAULT false,
        agreed_at TIMESTAMP,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `

    // Check if email already exists
    const existing = await sql`
      SELECT id FROM subscribers WHERE email = ${email.toLowerCase()}
    `

    if (existing.length > 0) {
      return NextResponse.json({ success: true, message: 'Already subscribed' })
    }

    // Insert new subscriber with consent record
    await sql`
      INSERT INTO subscribers (email, source, discount_code, agreed_to_terms, agreed_at, created_at)
      VALUES (${email.toLowerCase()}, 'popup', 'OLLIE15', true, NOW(), NOW())
    `

    console.log('[Subscribe] New subscriber with consent:', email)
    return NextResponse.json({ success: true, message: 'Subscribed successfully' })
  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    )
  }
}
