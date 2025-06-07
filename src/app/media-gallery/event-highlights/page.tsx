import Image from "next/image";

const images = Array.from({ length: 18 }, (_, i) => `/images/highlights/photo${i + 1}.jpg`);

export default function EventHighlightsPage() {
  return (
    <main className="bg-[#0B0B1F] text-white min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h1 className="text-3xl font-bold mb-4">Event Highlights</h1>
        <p className="text-gray-300">A visual recap of our favourite moments from past events.</p>
      </div>

      {/* Responsive Masonry Grid */}
      <div className="columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4">
        {images.map((src, i) => (
          <div key={i} className="overflow-hidden rounded-lg break-inside-avoid shadow-lg">
            <Image
              src={src}
              alt={`Event ${i + 1}`}
              width={600}
              height={400}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
