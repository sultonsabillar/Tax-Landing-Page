import Image from "next/image"

const partners = [
  { name: "Direktorat Jenderal Pajak", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Kementerian Keuangan", logo: "/placeholder.svg?height=60&width=120" },
  { name: "ICAEW", logo: "/placeholder.svg?height=60&width=120" },
  { name: "IAPI", logo: "/placeholder.svg?height=60&width=120" },
]

export default function TrustSignals() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">Dipercaya oleh</h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {partners.map((partner) => (
            <div key={partner.name} className="col-span-1 flex justify-center items-center">
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={60}
                className="max-h-12"
              />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">Bersertifikasi dan terakreditasi oleh lembaga terkemuka di Indonesia</p>
        </div>
      </div>
    </div>
  )
}

