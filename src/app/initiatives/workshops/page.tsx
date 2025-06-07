export default function WorkshopsPage() {
  return (
    <main className="p-8 space-y-8">
      <h1 className="text-3xl font-bold">Workshops</h1>
      <p>
        Our workshops cover a wide range of IT topics, including web development, AI/ML, cybersecurity, and more. Open to all SIM students.
      </p>

      <ul className="list-disc ml-6">
        <li>GitHub Workshop</li>
        <li>Web Development Workshop</li>
        <li>UI/UX Design Workshop</li>
        <li>Gemini Workshop</li>
      </ul>
    </main>
  );
}

import Image from "next/image";

const highlights = [
  { title: "GitHub Workshop", img: "/images/highlights/.jpg" },
  { title: "Web Development Workshop", img: "/images/highlights/.jpg" },
  { title: "UI/UX Design Workshop", img: "/images/highlights/.jpg" },
  { title: "Gemini Workshop", img: "/images/highlights/.jpg" },
];

export default function WorkshopsPage() {
  return (
    <main className="bg-white text-black py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-red-600 mb-10">Event Highlights</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {highlights.map((event, i) => (
            <div key={i} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <Image
                src={event.img}
                alt={event.title}
                width={400}
                height={300}
                className="w-full h-60 object-cover"
              />
              <div className="p-4 text-center font-semibold">{event.title}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
