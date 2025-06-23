"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const { t } = useLanguage()

  return (
    <div className="relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-30"
          src="/placeholder.svg?height=1080&width=1920"
          alt="Business district"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
        <div className="text-center md:text-left md:max-w-2xl">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            <span className="text-gradient">{t("hero.title")}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-gray-300 leading-7">{t("hero.subtitle")}</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" className="bg-primary text-black hover:bg-primary/90">
              {t("hero.cta")}
            </Button>
            <Button size="lg" variant="outline" className="group">
              {t("hero.learnMore")}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

