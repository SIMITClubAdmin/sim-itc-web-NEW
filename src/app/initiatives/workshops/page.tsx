'use client'

import Image from 'next/image'
import Link from 'next/link'

const workshops = [
  {
    title: 'GitHub Workshop',
    imageUrl: '/images/highlights/.jpg',
    link: '/workshops/github',
  },
  {
    title: 'Web Development Workshop',
    imageUrl: '/images/highlights/.jpg',
    link: '/workshops/webdev',
  },
  {
    title: 'UI/UX Design Workshop',
    imageUrl: '/images/highlights/.jpg',
    link: '/workshops/uiux',
  },
  {
    title: 'Gemini Workshop',
    imageUrl: '/images/highlights/.jpg',
    link: '/workshops/gemini',
  },
]

export default function WorkshopsPage() {
  return (
    <div className="min-h-screen px-6 py-10 bg-white">
      <h1 className="text-4xl font-bold text-red-600 mb-10">Workshops</h1>

      <div className="space-y-10">
        {workshops.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center bg-gray-100 rounded-lg overflow-hidden shadow"
          >
            <div className="md:w-1/2 w-full">
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={800}
                height={600}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="md:w-1/2 w-full p-6">
              <h2 className="text-xl font-bold text-black mb-2">{item.title}</h2>
              <Link href={item.link}>
                <button className="px-4 py-2 border border-gray-400 text-black rounded hover:bg-gray-200">
                  View More →
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
