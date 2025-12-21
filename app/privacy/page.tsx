import Link from 'next/link'

export const metadata = {
  title: "Privacy Policy | Ollie's Kimchi",
  description: "Privacy Policy for Ollie's Kimchi - how we collect, use, and protect your personal information.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-display text-4xl font-semibold text-gray-900 mb-8">
          Privacy Policy
        </h1>

        <p className="text-gray-600 mb-8">
          Last updated: December 2025
        </p>

        <div className="prose prose-gray max-w-none">
          <h2>1. Introduction</h2>
          <p>
            Welcome to Ollie&apos;s Kimchi (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). We are committed to protecting your
            personal information and your right to privacy. This Privacy Policy explains how we collect,
            use, disclose, and safeguard your information when you visit our website ollieskimchi.co.uk
            and make purchases from us.
          </p>

          <h2>2. Information We Collect</h2>
          <h3>Personal Information</h3>
          <p>We may collect personal information that you voluntarily provide to us when you:</p>
          <ul>
            <li>Make a purchase on our website</li>
            <li>Create an account</li>
            <li>Subscribe to our newsletter</li>
            <li>Contact us with enquiries</li>
            <li>Participate in promotions or surveys</li>
          </ul>
          <p>This information may include:</p>
          <ul>
            <li>Name and contact details (email, phone number, address)</li>
            <li>Payment information (processed securely by Shopify Payments/Stripe)</li>
            <li>Order history and preferences</li>
            <li>Communications with us</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>
            When you visit our website, we automatically collect certain information including:
          </p>
          <ul>
            <li>IP address and browser type</li>
            <li>Device information</li>
            <li>Pages visited and time spent</li>
            <li>Referring website</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Process and fulfill your orders</li>
            <li>Send order confirmations and shipping updates</li>
            <li>Respond to your enquiries and provide customer support</li>
            <li>Send promotional emails (with your consent)</li>
            <li>Improve our website and services</li>
            <li>Prevent fraud and maintain security</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>4. Cookies</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your browsing experience.
            Cookies are small files stored on your device that help us:
          </p>
          <ul>
            <li>Remember your preferences</li>
            <li>Keep items in your shopping cart</li>
            <li>Understand how you use our website</li>
            <li>Show relevant content</li>
          </ul>
          <p>
            You can control cookies through your browser settings. Disabling cookies may affect
            some functionality of our website.
          </p>

          <h2>5. Data Sharing</h2>
          <p>We may share your information with:</p>
          <ul>
            <li><strong>Service Providers:</strong> Including Shopify (e-commerce platform), payment processors, shipping carriers, and email service providers</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
          </ul>
          <p>We do not sell your personal information to third parties.</p>

          <h2>6. Data Security</h2>
          <p>
            We implement appropriate technical and organisational measures to protect your personal
            information. All payment transactions are encrypted using SSL technology and processed
            by PCI-compliant payment providers.
          </p>

          <h2>7. Your Rights (GDPR)</h2>
          <p>Under UK/EU data protection laws, you have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing</li>
            <li>Data portability</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p>
            To exercise these rights, please contact us at{' '}
            <a href="mailto:hello@ollieskimchi.co.uk">hello@ollieskimchi.co.uk</a>
          </p>

          <h2>8. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to fulfill the purposes
            outlined in this policy, unless a longer retention period is required by law. Order
            records are typically kept for 7 years for tax and legal purposes.
          </p>

          <h2>9. Children&apos;s Privacy</h2>
          <p>
            Our website is not intended for children under 16. We do not knowingly collect
            personal information from children.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any
            significant changes by posting the new policy on this page and updating the
            &quot;Last updated&quot; date.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <ul>
            <li>Email: <a href="mailto:hello@ollieskimchi.co.uk">hello@ollieskimchi.co.uk</a></li>
            <li>Address: London, United Kingdom</li>
          </ul>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/" className="text-red-900 hover:underline">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
