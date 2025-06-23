"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const tiers = [
  {
    name: "pricing.basic.name",
    id: "basic",
    priceMonthly: "pricing.basic.price",
    description: "pricing.basic.description",
    features: ["pricing.basic.feature1", "pricing.basic.feature2", "pricing.basic.feature3"],
  },
  {
    name: "pricing.intermediate.name",
    id: "intermediate",
    priceMonthly: "pricing.intermediate.price",
    description: "pricing.intermediate.description",
    features: [
      "pricing.intermediate.feature1",
      "pricing.intermediate.feature2",
      "pricing.intermediate.feature3",
      "pricing.intermediate.feature4",
    ],
  },
  {
    name: "pricing.premium.name",
    id: "premium",
    priceMonthly: "pricing.premium.price",
    description: "pricing.premium.description",
    features: [
      "pricing.premium.feature1",
      "pricing.premium.feature2",
      "pricing.premium.feature3",
      "pricing.premium.feature4",
      "pricing.premium.feature5",
    ],
  },
]

export default function PricingPlans() {
  const { t } = useLanguage()

  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <Card key={tier.id} className="flex flex-col justify-between bg-secondary border-none">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-primary">{t(tier.name)}</CardTitle>
                <CardDescription className="mt-4 text-sm text-gray-300">{t(tier.description)}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-primary">{t(tier.priceMonthly)}</span>
                  <span className="text-sm font-semibold text-gray-300">{t("pricing.perMonth")}</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm text-gray-300">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                      {t(feature)}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full mt-8 bg-primary text-black hover:bg-primary/90">
                  {t("pricing.getStarted")}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

