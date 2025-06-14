'use client';

import Image from 'next/image';

const mediaFolders = [
  {
    title: 'HackXperience 2025',
    path: '2025.04.11-12 HackXperience 2025',
    images: ['1.jpg', '2.jpg', '3.jpg'],
  },
  {
    title: 'AI Agent Workshop',
    path: '2025.02.13 AI Agent Workshop',
    images: ['1.jpg', '2.jpg'],
  },
  {
    title: 'UI-UX Dive',
    path: '2025.02.12 UI-UX Dive',
    images: ['1.jpg', '2.jpg', '3.jpg'],
  },
  {
    title: 'WebDev Workshop',
    path: '2024.11.06 WebDev Workshop',
    images: ['1.jpg', '2.jpg'],
  },
  {
    title: 'Github Workshop',
    path: '2024.10.07 Github Workshop',
    images: ['1.jpg', '2.jpg'],
  },
  {
    title: 'Bonding Session',
    path: '2024.09.29 Bonding',
    images: ['1.jpg', '2.jpg'],
  },
];

export default function MediaGalleryPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <h1 className="text-4xl font-bold text-red-500 mb-10">Media Gallery</h1>

      {mediaFolders.map((event, idx) => (
        <div key={idx} className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">{event.title}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {event.images.map((img, i) => (
              <div
                key={i}
                className="bg-neutral-800 rounded overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={`/images/media/${event.path}/${img}`}
                  alt={`${event.title} ${i + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
