"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant={language === "en" ? "secondary" : "outline"}
        size="sm"
        onClick={() => setLanguage("en")}
        className="text-xs"
      >
        EN
      </Button>
      <Button
        variant={language === "id" ? "secondary" : "outline"}
        size="sm"
        onClick={() => setLanguage("id")}
        className="text-xs"
      >
        ID
      </Button>
    </div>
  )
}

