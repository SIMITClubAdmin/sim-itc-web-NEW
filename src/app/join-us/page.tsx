"use client";

import { useState } from "react";

export default function JoinUsPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="bg-white text-black min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Title */}
        <section className="text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-2">Join Us</h1>
          <p className="text-gray-700">Be part of the SIM IT Club community and grow with us.</p>
        </section>

        {/* How to Join */}
        <section>
          <h2 className="text-2xl font-semibold text-red-600 mb-3">How to Join</h2>
          <p>
            Recruitment opens every semester. Stay updated on our Instagram and Telegram. Simply fill in the form below during the open period and attend the onboarding briefing.
          </p>
        </section>

        {/* Membership Expectations */}
        <section>
          <h2 className="text-2xl font-semibold text-red-600 mb-3">Membership Expectations</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Attend weekly meetings</li>
            <li>Join at least 1 initiative or project per semester</li>
            <li>Communicate respectfully and professionally</li>
            <li>Learn and grow with your team</li>
          </ul>
        </section>

        {/* Application Form */}
        <section>
          <h2 className="text-2xl font-semibold text-red-600 mb-6">Application Form</h2>
          {submitted ? (
            <div className="text-green-600 font-semibold">
              ✅ Thank you! Your application has been submitted.
            </div>
          ) : (
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <input
                required
                type="text"
                placeholder="Full Name"
                className="w-full border px-4 py-2 rounded bg-gray-50"
              />
              <input
                required
                type="email"
                placeholder="Email"
                className="w-full border px-4 py-2 rounded bg-gray-50"
              />
              <input
                required
                type="text"
                placeholder="Student ID"
                className="w-full border px-4 py-2 rounded bg-gray-50"
              />
              <textarea
                required
                placeholder="Tell us why you want to join"
                rows={4}
                className="w-full border px-4 py-2 rounded bg-gray-50"
              />
              <button
                type="submit"
                className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
              >
                Submit Application
              </button>
            </form>
          )}
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-semibold text-red-600 mb-6">FAQ</h2>
          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>Do I need experience?</strong><br />
              No experience needed! We welcome beginners who are willing to learn.
            </li>
            <li>
              <strong>Can I join more than one subcommittee?</strong><br />
              Yes, if you can commit your time to both.
            </li>
            <li>
              <strong>How will I know if I’m accepted?</strong><br />
              We’ll notify all applicants via email after the review period.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
