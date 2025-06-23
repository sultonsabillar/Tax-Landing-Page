"use client"

import { Facebook, Twitter, Linkedin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Legacy Tax</h3>
            <p className="text-gray-400">{t("footer.tagline")}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">{t("footer.contact")}</h3>
            <p className="text-gray-400">Jl. Sudirman No. 123, Jakarta Pusat 10220</p>
            <p className="text-gray-400">{t("footer.phone")}: (021) 555-1234</p>
            <p className="text-gray-400">{t("footer.email")}: info@legacytax.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">{t("footer.followUs")}</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Legacy Tax. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}

