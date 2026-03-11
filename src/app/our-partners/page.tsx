import Image from "next/image";
import { sanityClient, isSanityConfigured } from "@/lib/sanity/client";
import { urlFor } from "@/lib/sanity/image";
import { partnersQuery } from "@/lib/sanity/queries";
import { PartnersForm } from "./PartnersForm";

const FALLBACK_LOGOS = [
  { src: "/images/partner/dynamicweb-logo.svg", alt: "Dynamic Web" },
  { src: "/images/partner/kitchen-copilot-logo.svg", alt: "Kitchen Copilot" },
];

export default async function OurPartnersPage() {
  let partners: Array<{ _id: string; name: string; logo?: unknown; url?: string }> = [];

  if (isSanityConfigured && sanityClient) {
    try {
      partners = await sanityClient.fetch(partnersQuery);
    } catch {
      partners = [];
    }
  }

  const useSanity = partners.length > 0;
  const displayPartners = useSanity
    ? partners
    : FALLBACK_LOGOS.map((l, i) => ({ _id: String(i), name: l.alt, logo: null, url: undefined }));

  return (
    <main className="bg-black text-white min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-12">Past Partners</h1>

        <div className="flex flex-wrap justify-center gap-6 mb-24">
          {useSanity
            ? partners.map((partner) => {
                const imageUrl = partner.logo
                  ? urlFor(partner.logo).width(300).height(120).url()
                  : null;
                return (
                  <div
                    key={partner._id}
                    className="bg-neutral-800 rounded-2xl p-6 flex items-center justify-center shadow-md h-32 w-64"
                  >
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={partner.name}
                        width={300}
                        height={120}
                        className="object-contain max-h-full"
                      />
                    ) : (
                      <span className="text-gray-400 font-medium">{partner.name}</span>
                    )}
                  </div>
                );
              })
            : FALLBACK_LOGOS.map((logo, index) => (
                <div
                  key={index}
                  className="bg-neutral-800 rounded-2xl p-6 flex items-center justify-center shadow-md h-32 w-64"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={300}
                    height={100}
                    className="object-contain max-h-full"
                  />
                </div>
              ))}
        </div>

        <section className="mb-24">
          <h2 className="text-2xl font-semibold mb-6">Past Collaborations</h2>
          <div className="flex justify-center">
            <div className="bg-neutral-800 p-4 rounded-xl shadow-lg max-w-md">
              <Image
                src="/images/partner/hackxperience2025.jpg"
                alt="Hackxperience 2025"
                width={250}
                height={500}
                className="rounded-lg object-contain mx-auto"
              />
            </div>
          </div>
        </section>

        <section className="bg-neutral-900 text-white rounded-xl max-w-3xl mx-auto p-8 border border-gray-700">
          <h2 className="text-2xl font-bold mb-6 text-center">Become a Partner</h2>
          <PartnersForm />
        </section>
      </div>
    </main>
  );
}
