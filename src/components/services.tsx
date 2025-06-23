import { FileText, BarChart, Users, Building, Globe } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    name: "services.taxFiling",
    description: "services.taxFilingDesc",
    icon: FileText,
  },
  {
    name: "services.businessTax",
    description: "services.businessTaxDesc",
    icon: Building,
  },
  {
    name: "services.personalTax",
    description: "services.personalTaxDesc",
    icon: Users,
  },
  {
    name: "services.auditAssistance",
    description: "services.auditAssistanceDesc",
    icon: BarChart,
  },
  {
    name: "services.internationalTax",
    description: "services.internationalTaxDesc",
    icon: Globe,
  },
]

export default function Services() {
  const { t } = useLanguage()

  return (
    <div id="services" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl mb-4">{t("services.title")}</h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-300">{t("services.subtitle")}</p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.name} className="bg-secondary border-none hover:bg-secondary/80 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-black mb-4">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg font-medium text-primary">{t(service.name)}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">{t(service.description)}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

