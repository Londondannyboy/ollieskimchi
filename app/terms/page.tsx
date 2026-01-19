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
          Last updated: January 2026
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
            As a naturally fermented product, each batch may have slight variations in taste
            and appearance - this is normal and part of what makes artisan kimchi special.
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
            <strong>Free delivery</strong> is available on orders over £35. Standard delivery typically
            takes 2-3 working days.
          </p>
          <p>
            Please ensure someone is available to receive your order, as our products are
            perishable and should be refrigerated promptly upon arrival.
          </p>

          <h2>5. Perishable Goods - Important Information</h2>
          <p>
            Our kimchi is a fresh, naturally fermented, <strong>unpasteurised</strong> product
            containing live cultures. Please note:
          </p>
          <ul>
            <li><strong>Refrigerate immediately</strong> upon receipt - do not leave at room temperature</li>
            <li>Check the best before date on packaging</li>
            <li>Once opened, consume within 4 weeks for best quality</li>
            <li>Store at 0-5°C at all times</li>
            <li>Our kimchi is raw and unpasteurised - this is intentional for maximum probiotic benefit</li>
            <li>Some gas release and bubbling is normal - this indicates active, healthy fermentation</li>
            <li>The flavour will continue to develop over time - this is the nature of live fermented foods</li>
          </ul>

          <h2>6. Allergen Information</h2>
          <p>
            <strong>Important:</strong> Our products may contain the following allergens:
          </p>
          <ul>
            <li><strong>Soya</strong> (soy sauce, miso)</li>
            <li><strong>Wheat/Gluten</strong> (soy sauce)</li>
            <li><strong>Barley</strong> (miso)</li>
          </ul>
          <p>
            Our products are prepared in a kitchen that handles various allergens. While we take
            precautions to prevent cross-contamination, we cannot guarantee an allergen-free environment.
          </p>
          <p>
            Please check product labels carefully before consumption. If you have specific dietary
            requirements, severe allergies, or are pregnant or immunocompromised, please contact
            us before ordering.
          </p>

          <h2>7. Returns and Refunds Policy</h2>
          <h3>Perishable Food Products (Kimchi)</h3>
          <p>
            Due to the perishable nature of our food products and food safety regulations, we
            <strong> cannot accept returns</strong> of kimchi once dispatched. However:
          </p>
          <ul>
            <li>If your order arrives <strong>damaged, leaking, or spoiled</strong>, please contact us within
            48 hours of delivery with photographs. We will arrange a full refund or replacement.</li>
            <li>If you receive an <strong>incorrect item</strong>, please contact us within 48 hours.
            We will arrange collection and send the correct item or provide a refund.</li>
            <li>If you believe there is a <strong>quality issue</strong>, please contact us with details
            and photographs. We take all feedback seriously and will investigate promptly.</li>
          </ul>

          <h3>Non-Perishable Products (Merchandise)</h3>
          <p>
            For non-food items (such as caps and merchandise), you have <strong>30 days</strong> from
            the date of delivery to return items for a refund, provided:
          </p>
          <ul>
            <li>Items are unused, unworn, and in original condition</li>
            <li>Items are returned in original packaging</li>
            <li>You contact us first to arrange the return</li>
          </ul>
          <p>
            Return shipping costs are the responsibility of the customer unless the item is
            faulty or we made an error. Refunds will be processed within 14 days of receiving
            the returned item.
          </p>

          <h3>Cancellations</h3>
          <p>
            Orders can be cancelled for a full refund if you contact us <strong>before dispatch</strong>.
            Once your order has been dispatched, it cannot be cancelled.
          </p>

          <h3>How to Request a Refund</h3>
          <p>
            To request a refund or report an issue, please email us at{' '}
            <a href="mailto:hello@ollieskimchi.co.uk">hello@ollieskimchi.co.uk</a> with:
          </p>
          <ul>
            <li>Your order number</li>
            <li>Description of the issue</li>
            <li>Photographs (if applicable)</li>
          </ul>
          <p>
            We aim to respond to all refund requests within 2 working days.
          </p>

          <h2>8. Food Safety and Storage</h2>
          <p>
            We are committed to food safety and follow all relevant UK food hygiene regulations.
            Our products are made in a kitchen registered with the local authority and we maintain
            appropriate food safety certifications.
          </p>
          <p>
            <strong>Your responsibility:</strong> Once products are delivered, you are responsible
            for proper storage. We cannot accept responsibility for products that have not been
            stored correctly or have been left unrefrigerated.
          </p>

          <h2>9. Intellectual Property</h2>
          <p>
            All content on this website, including text, images, logos, and designs, is owned
            by Ollie&apos;s Kimchi and protected by copyright and other intellectual property laws.
            You may not reproduce, distribute, or use our content without written permission.
          </p>

          <h2>10. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Ollie&apos;s Kimchi shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages arising from your
            use of our website or products.
          </p>
          <p>
            Our total liability for any claim shall not exceed the amount you paid for the
            products in question. Nothing in these terms excludes or limits our liability for
            death or personal injury caused by our negligence, fraud, or any other liability
            that cannot be excluded by law.
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
          <Link href="/" className="text-red-900 hover:underline">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
