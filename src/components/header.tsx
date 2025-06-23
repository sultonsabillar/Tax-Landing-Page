import type * as React from "react"
import Link from "next/link"
import { Calculator } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import LanguageSwitcher from "./language-switcher"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"

export default function Header() {
  const { t } = useLanguage()

  return (
    <header className="bg-black/50 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Calculator className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-primary">Legacy Tax</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-4">
              <NavLink href="/">{t("nav.home")}</NavLink>
              <NavLink href="/services">{t("nav.services")}</NavLink>
              <NavLink href="/pricing">{t("nav.pricing")}</NavLink>
              <NavLink href="/team">{t("nav.team")}</NavLink>
              <NavLink href="/#testimonials">{t("nav.testimonials")}</NavLink>
              <NavLink href="/#contact">{t("nav.contact")}</NavLink>
            </div>
            <LanguageSwitcher />
          </div>
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/">{t("nav.home")}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services">{t("nav.services")}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/pricing">{t("nav.pricing")}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/team">{t("nav.team")}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/#testimonials">{t("nav.testimonials")}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/#contact">{t("nav.contact")}</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
      {children}
    </Link>
  )
}

