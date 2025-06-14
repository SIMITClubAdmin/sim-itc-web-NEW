'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function AboutUsPage() {
  const [showAlumni, setShowAlumni] = useState(false);

  const currentExecos = [
    'President - Jayadipa Fukutaro Sie',
    'Vice President - Michelle Chan',
  ];

  const alumniExecos = [
    'President - Elizabeth Leony Efendi',
    'Vice President - Albert Adiputra',
    'Secretary - Shivank Mathur',
    'Technical Director - Aung Pyae Soe (Bill)',
    'Deputy Technical Director - Jayadipa Fukutaro Sie',
    'Deputy Technical Director - Simer Bhadola',
    'Marketing Director - Jason Thajeb',
  ];

  const alumniMarketingSubcommittee = [
    'amy_marketing',
    'tara_marketing',
    'catherine_marketing',
    'elly_marketing',
    'jasmine_marketing',
    'vedika_marketing',
  ];

  const alumniTechnicalSubcommittee = [
    'aye_chan_myae - technical',
    'azzamudin - technical',
    'ching_xi - technical',
    'dong_xuan_ngoc_hoa - technical',
    'ethan_ng - technical',
    'gabriel - technical',
    'kevin - technical',
    'max - technical',
    'michelle_chan - technical',
    'nicholas - technical',
    'reina - technical',
    'reynaldi - technical',
    'shawn - technical',
    'vanness - technical',
    'zhang_shurui - technical',
  ];

  return (
    <main className="bg-black text-white min-h-screen">
      {/* Title */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold">SIM IT Club</h1>
      </section>

      {/* Mission */}
      <section className="py-10 text-center">
        <h2 className="text-2xl font-semibold">Mission</h2>
        <p className="mt-2 text-gray-300">Innovate and Inspire</p>
      </section>

      {/* History */}
      <section className="py-16 text-center space-y-10">
        <h2 className="text-2xl font-semibold">History</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left px-4">
          <div>
            <h3 className="font-semibold text-lg mb-1">Founded</h3>
            <p className="text-gray-300">
              Founded in 2013 to bring IT-focused initiatives to SIM students.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">Achievements</h3>
            <p className="text-gray-300">
              SLAAN 2024 Silver Award – Omnitool AI Hackathon
            </p>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-neutral-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">Our Team</h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            Meet the passionate individuals behind SIM IT Club — working together to empower future tech leaders.
          </p>

          {/* Current Team */}
          <h3 className="text-2xl font-semibold mb-6">Executive Committee (2025–26)</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center mb-12">
            {currentExecos.map((member, i) => (
              <div key={i} className="text-center">
                <div className="relative w-40 aspect-square mx-auto">
                  <Image
                    src={`/images/media/team 25.26/${encodeURIComponent(member)}.jpg`}
                    alt={member}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <p className="mt-2 text-sm font-medium">{member}</p>
              </div>
            ))}
          </div>

          {/* Toggle Alumni */}
          <div className="text-center mt-8 mb-12">
            <button
              onClick={() => setShowAlumni(!showAlumni)}
              className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition"
            >
              {showAlumni ? 'Hide Alumni' : 'Show Alumni'}
            </button>
          </div>

          {/* Alumni Sections */}
          {showAlumni && (
            <>
              {/* EXCO */}
              <h3 className="text-2xl font-semibold mb-1">Alumni – Executive Committee</h3>
              <p className="text-sm text-gray-400 mb-6">(2024–25)</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12">
                {alumniExecos.map((member, i) => (
                  <div key={i} className="text-center">
                    <div className="relative w-36 aspect-square mx-auto">
                      <Image
                        src={`/images/media/team 24.25/exco/${encodeURIComponent(member)}.jpg`}
                        alt={member}
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <p className="mt-2 text-sm">{member}</p>
                  </div>
                ))}
              </div>

              {/* Marketing */}
              <h3 className="text-xl font-semibold mb-1">Alumni – Subcomm: Marketing</h3>
              <p className="text-sm text-gray-400 mb-6">(2024–25)</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12">
                {alumniMarketingSubcommittee.map((member, i) => (
                  <div key={i} className="text-center">
                    <div className="relative w-28 aspect-square mx-auto">
                      <Image
                        src={`/images/media/team 24.25/subcomm - marketing/${member}.jpg`}
                        alt={member}
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <p className="mt-2 text-sm capitalize">{member.replace(/_/g, ' ')}</p>
                  </div>
                ))}
              </div>

              {/* Technical */}
              <h3 className="text-xl font-semibold mb-1">Alumni – Subcomm: Technical</h3>
              <p className="text-sm text-gray-400 mb-6">(2024–25)</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {alumniTechnicalSubcommittee.map((member, i) => (
                  <div key={i} className="text-center">
                    <div className="relative w-28 aspect-square mx-auto">
                      <Image
                        src={`/images/media/team 24.25/subcomm - technical/${encodeURIComponent(member)}.jpg`}
                        alt={member}
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <p className="mt-2 text-sm">{member}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
