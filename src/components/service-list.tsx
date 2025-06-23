import Link from "next/link"
import { FileText, Building, User, Search, Globe } from "lucide-react"

const services = [
  {
    id: "tax-filing",
    name: "Pelaporan & Kepatuhan Pajak",
    description: "Layanan pelaporan pajak yang akurat dan tepat waktu untuk memastikan kepatuhan penuh.",
    icon: FileText,
  },
  {
    id: "business-tax",
    name: "Layanan Pajak Bisnis",
    description: "Solusi pajak komprehensif untuk bisnis dari segala ukuran.",
    icon: Building,
  },
  {
    id: "personal-tax",
    name: "Layanan Pajak Pribadi",
    description: "Optimalisasi pajak pribadi dan perencanaan keuangan untuk individu.",
    icon: User,
  },
  {
    id: "audit-assistance",
    name: "Bantuan Audit & Investigasi",
    description: "Dukungan ahli selama proses audit pajak dan investigasi.",
    icon: Search,
  },
  {
    id: "international-tax",
    name: "Perpajakan Internasional",
    description: "Navigasi kompleksitas pajak lintas batas dan optimalisasi struktur pajak global.",
    icon: Globe,
  },
]

export default function ServiceList() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col items-start">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                <service.icon className="h-6 w-6" />
              </div>
              <h2 className="mt-4 text-lg font-semibold text-gray-900">{service.name}</h2>
              <p className="mt-2 text-base text-gray-500">{service.description}</p>
              <Link href={`/services/${service.id}`} className="mt-4 text-blue-600 hover:text-blue-800">
                Pelajari lebih lanjut &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

