import Image from "next/image";

const highlights = [
  { title: "Panel Discussions", img: "/images/highlights/.jpg" },
  { title: "Office Tours", img: "/images/highlights/.jpg" },
  { title: "Collaboration workshops", img: "/images/highlights/.jpg" },
];

export default function EventsPage() {
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
