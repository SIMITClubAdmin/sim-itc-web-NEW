export default function ContactUsPage() {
  return (
    <main className="p-8 space-y-12">
      {/* Contact Information */}
      <section>
        <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
        <p>
          We'd love to hear from you. Reach out through any of the following platforms:
        </p>
        <ul className="list-disc ml-6">
          <li>Email: <a href="mailto:sim.itclub@gmail.com" className="text-blue-600 underline">sim.itclub@gmail.com</a></li>
          <li>Instagram: <a href="https://instagram.com/simitclub" className="text-blue-600 underline">@simitclub</a></li>
          <li>Telegram: <a href="https://t.me/simitclub" className="text-blue-600 underline">@simitclub</a></li>
        </ul>
      </section>

      {/* Contact Form Placeholder */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Send Us a Message</h2>
        <p>Contact form coming soon! For now, feel free to email us directly.</p>
      </section>
    </main>
  );
}
