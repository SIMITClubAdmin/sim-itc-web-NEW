import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 text-center mt-12">
      <div className="space-y-2">
        <p>&copy; {new Date().getFullYear()} SIM IT Club</p>
        <p>
          <a href="mailto:sim.itclub@gmail.com" className="text-blue-600 underline">
            sim.itclub@gmail.com
          </a>
        </p>
        <div className="flex justify-center gap-4">
          <Link href="https://instagram.com/simitclub" target="_blank" className="hover:underline">
            Instagram
          </Link>
          <Link href="https://t.me/simitclub" target="_blank" className="hover:underline">
            Telegram
          </Link>
        </div>
      </div>
    </footer>
  );
}
