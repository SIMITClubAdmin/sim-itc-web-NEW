"use client";

import Image from "next/image";

export default function OurPartnersPage() {
  const logos = [1, 2, 3]; // 只显示三个

  return (
    <main className="bg-neutral-900 text-white min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-4">Our Partners</h1>
        <p className="text-gray-300 mb-12">
          Working together with Singapore's leading organizations to empower youth through technology and innovation.
        </p>

        {/* Partner Logos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20">
          {logos.map((i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-4 flex items-center justify-center shadow-md h-32"
            >
              <Image
                src={`https://placehold.co/120x80?text=Partner+${i}`}
                alt={`Partner ${i}`}
                width={120}
                height={80}
                unoptimized
                className="object-contain max-h-full"
              />
            </div>
          ))}
        </div>

        {/* Past Collaborations */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold mb-4">Past Collaborations</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We’ve collaborated with many institutions and industry partners through hackathons, seminars, and social innovation events. Our past efforts include community AI workshops and the Youth Challenge Series.
          </p>
        </section>

        {/* Become a Partner Form */}
        <section className="bg-white text-black rounded-xl max-w-3xl mx-auto p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Become a Partner</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border px-4 py-2 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text"
              placeholder="Organization"
              className="w-full border px-4 py-2 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border px-4 py-2 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full border px-4 py-2 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
