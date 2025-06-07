import Image from "next/image";

const merchandise = [
  {
    name: "ITC Club T-Shirt",
    description: "Official member shirt – black with red logo",
    img: "/images/merch/tshirt.jpg",
  },
  {
    name: "Sticker Pack",
    description: "Vinyl stickers featuring our logo & mascots",
    img: "/images/merch/stickers.jpg",
  },
  {
    name: "Club Lanyard",
    description: "Custom red lanyard with card holder",
    img: "/images/merch/lanyard.jpg",
  },
];

export default function MerchandisePage() {
  return (
    <main className="bg-white text-black py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-red-600 mb-10">Merchandise</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {merchandise.map((item, i) => (
            <div key={i} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <Image
                src={item.img}
                alt={item.name}
                width={400}
                height={300}
                className="w-full h-60 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold mb-1">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
