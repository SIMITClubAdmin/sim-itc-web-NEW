import Image from "next/image";

export default function AboutUsPage() {
  const execos = Array.from({ length: 6 }, (_, i) => `exco${i + 1}`);
  const subcos = Array.from({ length: 30 }, (_, i) => `subco${i + 1}`);

  return (
    <main className="bg-white text-black min-h-screen">
      {/* Page Title */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold">About Us</h1>
      </section>

      {/* Vision */}
      <section className="py-10 text-center">
        <h2 className="text-2xl font-semibold text-red-600">Vision</h2>
        <p className="mt-2 text-gray-700">
          Empowering students through innovation, leadership, and technology.
        </p>
      </section>

      {/* Mission */}
      <section className="py-10 text-center">
        <h2 className="text-2xl font-semibold text-red-600">Mission</h2>
        <p className="mt-2 text-gray-700">
          Provide opportunities to learn, lead, and grow through impactful IT-related events and projects.
        </p>
      </section>

      {/* History */}
      <section className="py-16 text-center space-y-10">
        <h2 className="text-2xl font-semibold text-red-600">History</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left px-4">
          <div>
            <h3 className="font-semibold text-lg mb-1">Milestones</h3>
            <p>Founded in 2010, hosted first Hackathon in 2013, awarded Best Academic Club in 2017.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">Success Stories</h3>
            <p>Our alumni have joined Google, Shopee, and SEA Group as software engineers, designers, and PMs.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">Achievements</h3>
            <p>Organized over 50 workshops, hosted SIM TechWeek, and launched our own member portal.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">Awards</h3>
            <p>Student Excellence Award 2021, Innovation in IT Education Award 2022.</p>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-[#0B0B1F] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">Our Team</h2>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
            Meet the passionate individuals behind SIM IT Club — working together to empower future tech leaders.
          </p>

          {/* Executive Committee */}
          <h3 className="text-2xl font-semibold mb-6">Executive Committee</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-center mb-16">
            {execos.map((member, i) => (
              <div key={i} className="text-center">
                <Image
                  src={`/images/team/${member}.jpg`}
                  alt={member}
                  width={160}
                  height={160}
                  className="rounded-lg mx-auto object-cover"
                />
                <p className="mt-2 font-medium capitalize">{member}</p>
                <p className="text-sm text-gray-400">Executive Member</p>
              </div>
            ))}
          </div>

          {/* Subcommittee */}
          <h3 className="text-2xl font-semibold mb-6">Subcommittee</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {subcos.map((member, i) => (
              <div key={i} className="text-center">
                <Image
                  src={`/images/team/${member}.jpg`}
                  alt={member}
                  width={100}
                  height={100}
                  className="rounded-full mx-auto object-cover"
                />
                <p className="mt-2 text-sm font-medium capitalize">{member}</p>
                <p className="text-xs text-gray-400">Member</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
