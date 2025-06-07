import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-12 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
        {/* Left: Logos and Icons */}
        <div className="flex flex-col items-start gap-4">
          <Image src="/images/itc-logo.jpg" alt="ITC Logo" width={60} height={60} />
          <Image src="/images/sim-logo.jpg" alt="SIM Logo" width={160} height={40} />
          <div className="flex gap-4 mt-4">
            <Link href="mailto:sim.itclub@gmail.com">
              <Image src="/icons/email.svg" alt="Email" width={20} height={20} />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <Image src="/icons/instagram.svg" alt="Instagram" width={20} height={20} />
            </Link>
            <Link href="https://t.me/yourclub" target="_blank">
              <Image src="/icons/telegram.svg" alt="Telegram" width={20} height={20} />
            </Link>
            <Link href="https://github.com/simitclub" target="_blank">
              <Image src="/icons/github.svg" alt="GitHub" width={20} height={20} />
            </Link>
            <Link href="https://discord.gg/yourclub" target="_blank">
              <Image src="/icons/discord.svg" alt="Discord" width={20} height={20} />
            </Link>
          </div>
        </div>

        {/* Right: Link sections */}
        <div className="col-span-2 grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-md font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/initiatives">Initiatives</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-2">Help</h4>
            <ul className="space-y-1 text-sm">
              <li><Link href="/join-us">Membership</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/contact-us">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
