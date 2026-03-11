"use client";

export function PartnersForm() {
  return (
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Name"
        className="w-full border border-gray-600 px-4 py-2 rounded bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <input
        type="text"
        placeholder="Organization"
        className="w-full border border-gray-600 px-4 py-2 rounded bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full border border-gray-600 px-4 py-2 rounded bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <textarea
        placeholder="Message"
        rows={4}
        className="w-full border border-gray-600 px-4 py-2 rounded bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <button
        type="submit"
        className="bg-white text-black px-6 py-2 rounded hover:bg-gray-300 transition"
      >
        Submit
      </button>
    </form>
  );
}
