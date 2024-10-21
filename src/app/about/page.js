"use client"
const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl bg-white rounded-lg shadow-lg p-10 space-y-6">
        <h1 className="text-4xl font-bold text-center text-blue-600">
          About Us: Barcode & QR Code Generator
        </h1>

        <p className="text-lg text-gray-700">
          Welcome to <span className="font-semibold">Barcode & QR Code Generator</span>,
          your one-stop destination for generating customized <strong>barcodes</strong>
          and <strong>QR codes</strong> effortlessly. Our platform empowers individuals
          and businesses to create scannable solutions quickly and efficiently—whether
          for <em>products, digital links, promotions</em>, or personal use.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
          <p className="text-gray-700">
            Our mission is simple: We aim to provide an easy, reliable, and accessible
            platform for everyone to generate <strong>QR codes and barcodes</strong>.
            Whether you&#39;re a business owner looking to streamline product labeling or a
            marketer sharing digital campaigns, we have the tools you need to make it
            happen in seconds.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Why Use Our Platform?</h2>
          <ul className="list-disc pl-8 text-gray-700 space-y-2">
            <li><strong>Easy to Use</strong>: No technical skills required! Create codes in just a few clicks.</li>
            <li><strong>Customizable Options</strong>: Choose colors, sizes, error correction levels, and more.</li>
            <li><strong>Fast & Secure</strong>: Generate codes instantly without storing your data.</li>
            <li><strong>Free Downloads</strong>: Save your codes as PNG, SVG, or PDF for easy sharing.</li>
            <li><strong>Versatile Uses</strong>: Perfect for <em>product labeling, event management, digital payments, contact sharing</em>, and more.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">What Can You Create?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-700">QR Codes</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Share URLs, social media profiles, or contact information</li>
                <li>Connect to Wi-Fi with a quick scan</li>
                <li>Promote events, discounts, and campaigns</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-700">Barcodes</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Generate barcodes for product inventory</li>
                <li>Simplify warehouse management and logistics</li>
                <li>Support various formats: Code39 and Code 128</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Who We Serve</h2>
          <p className="text-gray-700">
            Our platform caters to <em>businesses, educators, event organizers, retailers</em>,
            and individuals who need to quickly create barcodes or QR codes for various purposes.
            Whether you&#39;re running an online store or organizing a wedding, we&#39;ve got you covered.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
          <p className="text-gray-700">
            We envision a world where <strong>scannable technology bridges the gap between
              the physical and digital worlds</strong>. With the rapid adoption of QR codes
            in marketing, payment systems, and daily activities, our goal is to provide
            tools that are <strong>simple, efficient, and accessible</strong> to everyone.
          </p>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Get Started Now</h2>
          <p className="text-gray-700">
            Start generating your <strong>QR codes and barcodes</strong> today and experience
            the convenience of seamless scannable solutions. Whether it is for business or
            personal use, <span className="font-semibold">Barcode & QR Code Generator</span> makes
            it easy to create, customize, and download codes that fit your needs.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
          <p className="text-gray-700">
            Have questions or suggestions? Reach out to us at
            <a href="mailto:mshahidking099@gmail.com" className="text-blue-500 underline ml-1">
            mshahidking099@gmail.com
            </a>
            or follow us on <a href="https://www.facebook.com/profile.php?id=100023973283472" className="text-blue-500 underline" target='_blank'>Facebook</a>.
          </p>
        </section>
      </div>
    </div>
  )
}

export default page