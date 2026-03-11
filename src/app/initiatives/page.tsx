import { sanityClient, isSanityConfigured } from "@/lib/sanity/client";
import { eventsQuery } from "@/lib/sanity/queries";

const FALLBACK_HIGHLIGHTS = [
  { title: "Google Gemini AI Agents Workshop", description: "Hands-on workshop introducing Gemini 2.0 AI agents, where participants built their own AI agents using Gemini's tools." },
  { title: "UI/UX Workshop", description: "Explored foundations of UI/UX, design strategies and best practices, unlocking industry tips for user-centered design." },
  { title: "Web Development Workshop", description: "Participants learned the basics of HTML, CSS, and JavaScript, and created their own personal portfolio websites." },
  { title: "GitHub Workshop", description: "Hands-on training in version control using GitHub: collaboration, pull requests, branching and more." },
  { title: "E-Commerce Evolution – Panel Discussion", description: "Industry talk with professionals from Shopee, Amazon, and a local startup co-founder from Invade on trends and insights in e-commerce." },
  { title: "SIM IT Club x Omnitool.AI Hackathon", description: "2-day take-home hackathon using modular AI APIs to solve real-world problems creatively." },
  { title: "SIM IT Club x UiPath Hackathon", description: "Used UiPath Studio to design RPA solutions. Participants submitted proposals addressing industry challenges." },
];

type Event = {
  _id: string;
  title: string;
  slug?: { current: string };
  category?: string;
  date?: string;
  description?: string;
  link?: string;
};

export default async function InitiativesOverview() {
  let events: Event[] = [];

  if (isSanityConfigured && sanityClient) {
    try {
      events = await sanityClient.fetch(eventsQuery);
    } catch {
      events = [];
    }
  }

  const useSanity = events.length > 0;
  if (useSanity) {
    events = [...events].sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
  }

  return (
    <main className="min-h-screen px-6 py-10 bg-black text-white">
      <div className="max-w-6xl mx-auto space-y-16">
        <section className="text-center">
          <h1 className="text-4xl font-bold text-red-500 mb-2">Our Initiatives</h1>
          <p className="text-gray-300 text-lg">
            Explore our Workshops, Hackathons, Events and Projects!
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">Activities & Membership</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Our schedule is event-based</li>
            <li>All students of any major are welcome</li>
            <li>No tech background required to join</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">Calendar</h2>
          <div className="bg-neutral-800 rounded-xl p-6 text-center text-gray-400">
            <p className="italic">Upcoming events will appear here</p>
            <p className="text-sm mt-1">(A dynamic calendar UI can be integrated here.)</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-6">Past Highlights</h2>
          <div className="space-y-8 text-gray-300">
            {useSanity
              ? events.map((event) => (
                  <div key={event._id}>
                    <h3 className="text-xl text-white font-semibold mb-1">
                      {event.link ? (
                        <a
                          href={event.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-red-500 transition"
                        >
                          {event.title}
                        </a>
                      ) : (
                        event.title
                      )}
                    </h3>
                    {event.description && <p>{event.description}</p>}
                    {event.date && (
                      <p className="text-sm text-gray-500 mt-1">{event.date}</p>
                    )}
                  </div>
                ))
              : FALLBACK_HIGHLIGHTS.map((item, i) => (
                  <div key={i}>
                    <h3 className="text-xl text-white font-semibold mb-1">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                ))}
          </div>
        </section>
      </div>
    </main>
  );
}
