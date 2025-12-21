import Link from 'next/link'

export const metadata = {
  title: "Terms of Service | Ollie's Kimchi",
  description: "Terms of Service for Ollie's Kimchi - the rules and guidelines for using our website and purchasing our products.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-display text-4xl font-semibold text-gray-900 mb-8">
          Terms of Service
        </h1>

        <p className="text-gray-600 mb-8">
          Last updated: December 2025
        </p>

        <div className="prose prose-gray max-w-none">
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using the Ollie&apos;s Kimchi website (ollieskimchi.co.uk) and purchasing
            our products, you agree to be bound by these Terms of Service. If you do not agree
            to these terms, please do not use our website.
          </p>

          <h2>2. Products and Orders</h2>
          <h3>Product Information</h3>
          <p>
            We strive to display our products as accurately as possible. However, colours and
            appearance may vary slightly from the images shown. All product descriptions,
            including ingredients and nutritional information, are provided in good faith.
          </p>

          <h3>Pricing</h3>
          <p>
            All prices are displayed in British Pounds (GBP) and include VAT where applicable.
            We reserve the right to change prices at any time without notice. The price charged
            will be the price at the time of order confirmation.
          </p>

          <h3>Order Acceptance</h3>
          <p>
            Your order is an offer to purchase. We reserve the right to refuse or cancel any
            order for any reason, including product availability, errors in pricing or product
            information, or suspected fraud.
          </p>

          <h2>3. Payment</h2>
          <p>
            We accept payment via credit/debit cards and other payment methods as displayed at
            checkout. Payment is processed securely through Shopify Payments/Stripe. All payments
            must be received in full before products are dispatched.
          </p>

          <h2>4. Delivery</h2>
          <p>
            We deliver throughout the United Kingdom. Delivery times and costs are displayed
            at checkout. While we strive to meet estimated delivery times, delays may occur
            due to circumstances beyond our control.
          </p>
          <p>
            Free delivery is available on orders over &pound;30. Standard delivery typically
            takes 2-3 working days.
          </p>

          <h2>5. Perishable Goods</h2>
          <p>
            Our kimchi is a fresh, perishable product. Please note:
          </p>
          <ul>
            <li>Products should be refrigerated immediately upon receipt</li>
            <li>Check the best before date on packaging</li>
            <li>Once opened, consume within 4 weeks for best quality</li>
            <li>Our kimchi is raw and unpasteurised - this is intentional and beneficial!</li>
          </ul>

          <h2>6. Returns and Refunds</h2>
          <p>
            Due to the perishable nature of our products, we cannot accept returns. However:
          </p>
          <ul>
            <li>If your order arrives damaged or incorrect, please contact us within 48 hours with photos</li>
            <li>We will arrange a replacement or refund for damaged/incorrect items</li>
            <li>If you are unsatisfied with the quality, please contact us to discuss</li>
          </ul>

          <h2>7. Discount Codes</h2>
          <p>
            Discount codes are subject to the following conditions:
          </p>
          <ul>
            <li>One code per order unless otherwise stated</li>
            <li>Cannot be combined with other offers</li>
            <li>OLLIE15 (15% off first order) is valid for one-time use per customer</li>
            <li>We reserve the right to modify or cancel promotions at any time</li>
          </ul>

          <h2>8. Intellectual Property</h2>
          <p>
            All content on this website, including text, images, logos, and designs, is owned
            by Ollie&apos;s Kimchi and protected by copyright and other intellectual property laws.
            You may not reproduce, distribute, or use our content without written permission.
          </p>

          <h2>9. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Ollie&apos;s Kimchi shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages arising from your
            use of our website or products.
          </p>
          <p>
            Our total liability for any claim shall not exceed the amount you paid for the
            products in question.
          </p>

          <h2>10. Allergen Information</h2>
          <p>
            Our products may contain allergens including fish (fish sauce) and may be produced
            in facilities that handle other allergens. Please check product labels carefully.
            If you have specific dietary requirements or allergies, please contact us before
            ordering.
          </p>

          <h2>11. Governing Law</h2>
          <p>
            These Terms of Service are governed by the laws of England and Wales. Any disputes
            shall be subject to the exclusive jurisdiction of the courts of England and Wales.
          </p>

          <h2>12. Changes to Terms</h2>
          <p>
            We may update these Terms of Service from time to time. Continued use of our website
            after changes constitutes acceptance of the new terms.
          </p>

          <h2>13. Contact Us</h2>
          <p>
            If you have questions about these Terms of Service, please contact us:
          </p>
          <ul>
            <li>Email: <a href="mailto:hello@ollieskimchi.co.uk">hello@ollieskimchi.co.uk</a></li>
            <li>Website: <a href="/contact">Contact Form</a></li>
          </ul>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/" className="text-kimchi-red hover:underline">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
