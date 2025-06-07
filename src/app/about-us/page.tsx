export default function AboutUsPage() {
  return (
    <main className="p-8 space-y-12">
      {/* Vision */}
      <section>
        <h1 className="text-3xl font-bold mb-2">Our Vision</h1>
        <p>
          To cultivate a community of innovative, tech-driven individuals through collaborative learning and impactful experiences.
        </p>
      </section>

      {/* Mission */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p>
          Empower students by providing opportunities to learn, build, and lead in the field of Information Technology.
        </p>
      </section>

      {/* History */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Our History</h2>

        <h3 className="text-xl font-medium mt-4">Milestones</h3>
        <ul className="list-disc ml-6">
          <li>Founded in 2010 as a student-led tech club</li>
          <li>First internal hackathon in 2013</li>
          <li>Recognized as Best Academic Club in 2017</li>
        </ul>

        <h3 className="text-xl font-medium mt-4">Achievements</h3>
        <ul className="list-disc ml-6">
          <li>Over 50 workshops hosted</li>
          <li>Partnered with tech leaders like Google and Shopee</li>
        </ul>

        <h3 className="text-xl font-medium mt-4">Awards</h3>
        <ul className="list-disc ml-6">
          <li>Best Community Initiative (2021)</li>
          <li>Innovation Excellence Award (2022)</li>
        </ul>
      </section>

      {/* Our Team */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Our Team</h2>

        <h3 className="text-xl font-medium mt-4">Executive Committee</h3>
        <p>President, Vice President, Secretary, etc. [Add real names or keep as placeholders]</p>

        <h3 className="text-xl font-medium mt-4">Subcommittees</h3>
        <p>Events Team, Technical Team, Marketing Team, etc.</p>
      </section>
    </main>
  );
}
