'use client';

import Image from 'next/image';
import Link from 'next/link';

const hackathons = [
  {
    title: 'hackxperience2025',
    imageUrl: 'https://via.placeholder.com/800x400?text=hackxperience2025',
    link: '/initiatives/hackathons/2025',
  },
  {
    title: 'SIM IT Club x Omnitool.AI Hackathon 2024',
    imageUrl: 'https://via.placeholder.com/800x400?text=hackxperience2024',
    link: '/initiatives/hackathons/2024',
  },
  {
    title: 'SIM IT Club x UiPath Hackathon 2023',
    imageUrl: 'https://via.placeholder.com/800x400?text=hackxperience2023',
    link: '/initiatives/hackathons/2023',
  },
];

export default function HackathonsPage() {
  return (
    <div className="min-h-screen px-4 py-10 bg-black text-white">
      <h1 className="text-4xl font-bold text-red-500 mb-10">Hackathons</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {hackathons.map((item, index) => (
          <div
            key={index}
            className="bg-neutral-800 rounded-lg shadow overflow-hidden flex flex-col"
          >
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={1200}
              height={600}
              className="w-full h-56 object-cover"
            />
            <div className="p-5 flex flex-col flex-grow justify-between">
              <h2 className="text-xl font-semibold mb-3">{item.title}</h2>
              <Link href={item.link}>
                <button className="mt-auto px-4 py-2 border border-gray-500 text-white rounded hover:bg-neutral-700 transition">
                  View More →
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
