export default function PartnersPage() {
  return (
    <main className="p-8 space-y-12">
      {/* Past Collaborations */}
      <section>
        <h1 className="text-3xl font-bold mb-2">Past Collaborations</h1>
        <ul className="list-disc ml-6">
          <li>Partnered with Google for DevFest@SIM</li>
          <li>Shopee Code League co-hosted workshop</li>
          <li>IBM Student Developer Program – 2022</li>
        </ul>
      </section>

      {/* Become a Partner */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Become a Partner</h2>
        <p>
          We welcome partnerships with companies, communities, and individuals who want to inspire the next generation of tech leaders. If you're interested in collaborating, reach out via our contact form or email us directly.
        </p>
      </section>
    </main>
  );
}
