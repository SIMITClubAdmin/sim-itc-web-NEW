export default function JoinUsPage() {
  return (
    <main className="p-8 space-y-12">
      {/* How to Join */}
      <section>
        <h1 className="text-3xl font-bold mb-2">How to Join</h1>
        <p>
          Recruitment opens every semester. Follow our Instagram or Telegram channel for updates and announcements.
        </p>
      </section>

      {/* Membership Expectations */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Membership Expectations</h2>
        <ul className="list-disc ml-6">
          <li>Attend weekly team meetings and training sessions</li>
          <li>Participate in at least 2 initiatives per semester</li>
          <li>Contribute actively to club projects and events</li>
        </ul>
      </section>

      {/* Application Form */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Application Form</h2>
        <p>
          The application form will be made available during recruitment periods. Stay tuned!
        </p>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">FAQ</h2>
        <p><strong>Q: Do I need prior experience to join?</strong></p>
        <p>A: No, we welcome all levels! We'll help you grow.</p>

        <p className="mt-4"><strong>Q: Can I join more than one subcommittee?</strong></p>
        <p>A: Yes, depending on your availability and interest.</p>
      </section>
    </main>
  );
}
