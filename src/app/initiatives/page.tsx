'use client';

export default function InitiativesOverview() {
  return (
    <main className="min-h-screen px-6 py-10 bg-black text-white">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Title */}
        <section className="text-center">
          <h1 className="text-4xl font-bold text-red-500 mb-2">Our Initiatives</h1>
          <p className="text-gray-300 text-lg">
            Explore our Workshops, Hackathons, Events and Projects!
          </p>
        </section>

        {/* Join Info */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">Activities & Membership</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Our schedule is event-based</li>
            <li>All students of any major are welcome</li>
            <li>No tech background required to join</li>
          </ul>
        </section>

        {/* Calendar (UI Placeholder) */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">Calendar</h2>
          <div className="bg-neutral-800 rounded-xl p-6 text-center text-gray-400">
            <p className="italic">🗓 Upcoming events will appear here</p>
            <p className="text-sm mt-1">(* A dynamic calendar UI can be integrated here.)</p>
          </div>
        </section>

        {/* Past Event Highlights */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-6">Past Highlights</h2>
          <div className="space-y-8 text-gray-300">

            <div>
              <h3 className="text-xl text-white font-semibold mb-1">Google Gemini AI Agents Workshop</h3>
              <p>Hands-on workshop introducing Gemini 2.0 AI agents, where participants built their own AI agents using Gemini's tools.</p>
            </div>

            <div>
              <h3 className="text-xl text-white font-semibold mb-1">UI/UX Workshop</h3>
              <p>Explored foundations of UI/UX, design strategies and best practices, unlocking industry tips for user-centered design.</p>
            </div>

            <div>
              <h3 className="text-xl text-white font-semibold mb-1">Web Development Workshop</h3>
              <p>Participants learned the basics of HTML, CSS, and JavaScript, and created their own personal portfolio websites.</p>
            </div>

            <div>
              <h3 className="text-xl text-white font-semibold mb-1">GitHub Workshop</h3>
              <p>Hands-on training in version control using GitHub: collaboration, pull requests, branching and more.</p>
            </div>

            <div>
              <h3 className="text-xl text-white font-semibold mb-1">E-Commerce Evolution – Panel Discussion</h3>
              <p>Industry talk with professionals from Shopee, Amazon, and a local startup co-founder from Invade on trends and insights in e-commerce.</p>
            </div>

            <div>
              <h3 className="text-xl text-white font-semibold mb-1">SIM IT Club x Omnitool.AI Hackathon</h3>
              <p>2-day take-home hackathon using modular AI APIs to solve real-world problems creatively.</p>
              <ul className="text-sm list-disc pl-6 mt-1">
              </ul>
            </div>

            <div>
              <h3 className="text-xl text-white font-semibold mb-1">SIM IT Club x UiPath Hackathon</h3>
              <p>Used UiPath Studio to design RPA solutions. Participants submitted proposals addressing industry challenges.</p>
              <ul className="text-sm list-disc pl-6 mt-1">
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
