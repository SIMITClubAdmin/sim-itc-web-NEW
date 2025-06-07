"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="bg-white text-black min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Contact Form */}
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <input
              type="text"
              placeholder="Name"
              required
              className="w-full border px-4 py-2 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              required
              className="w-full border px-4 py-2 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full border px-4 py-2 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text"
              placeholder="Subject"
              required
              className="w-full border px-4 py-2 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              placeholder="Message"
              required
              rows={4}
              className="w-full border px-4 py-2 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
            >
              SEND EMAIL →
            </button>
            {submitted && (
              <div className="text-green-600 font-medium mt-2">✅ Message sent successfully!</div>
            )}
          </form>

          {/* Right: Image */}
          <div className="hidden md:block">
            <Image
              src="/images/contact-photo.jpg"
              alt="Contact"
              width={600}
              height={400}
              className="rounded shadow-md object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
