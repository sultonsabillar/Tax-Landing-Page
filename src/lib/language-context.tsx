import type React from "react"

import { createContext, useContext, useState } from "react"

type Language = "en" | "id"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.testimonials": "Testimonials",
    "nav.contact": "Contact",
    "hero.title": "Trusted Tax Solutions for Your Business",
    "hero.subtitle":
      "Legacy Tax simplifies your tax matters so you can focus on business growth. Let our experts handle your tax needs with precision and care.",
    "hero.cta": "Get Free Consultation",
    "contact.title": "Contact Legacy Tax",
    "contact.subtitle": "Questions? Our expert team is ready to help you.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.submit": "Send Message",
    "footer.rights": "All Rights Reserved",
    "nav.pricing": "Pricing",
    "nav.team": "Our Team",
    "pricing.perMonth": "/month",
    "pricing.getStarted": "Get Started",
    "pricing.basic.name": "Basic",
    "pricing.basic.price": "$99",
    "pricing.basic.description": "Essential tax services for individuals and small businesses.",
    "pricing.basic.feature1": "Personal tax return preparation",
    "pricing.basic.feature2": "Basic bookkeeping",
    "pricing.basic.feature3": "Quarterly tax planning",
    "pricing.intermediate.name": "Intermediate",
    "pricing.intermediate.price": "$299",
    "pricing.intermediate.description": "Comprehensive tax services for growing businesses.",
    "pricing.intermediate.feature1": "All Basic features",
    "pricing.intermediate.feature2": "Business tax return preparation",
    "pricing.intermediate.feature3": "Monthly bookkeeping",
    "pricing.intermediate.feature4": "Tax audit support",
    "pricing.premium.name": "Premium",
    "pricing.premium.price": "$599",
    "pricing.premium.description": "Advanced tax strategies for complex business needs.",
    "pricing.premium.feature1": "All Intermediate features",
    "pricing.premium.feature2": "International tax planning",
    "pricing.premium.feature3": "Custom financial reporting",
    "pricing.premium.feature4": "Dedicated tax advisor",
    "pricing.premium.feature5": "Priority support",
    "team.director.name": "John Doe",
    "team.director.role": "Director",
    "team.director.bio": "John has over 20 years of experience in tax consulting and financial management.",
    "team.commissioner.name": "Jane Smith",
    "team.commissioner.role": "Commissioner",
    "team.commissioner.bio":
      "Jane oversees the strategic direction of Legacy Tax, ensuring we deliver the best service to our clients.",
    "team.advisor.name": "Mike Johnson",
    "team.advisor.role": "Senior Tax Advisor",
    "team.advisor.bio":
      "Mike specializes in complex tax strategies for high-net-worth individuals and large corporations.",
    "team.finance.name": "Sarah Lee",
    "team.finance.role": "Head of Finance",
    "team.finance.bio":
      "Sarah manages our internal finances and provides valuable insights to our clients' financial strategies.",
    "team.legal.name": "David Brown",
    "team.legal.role": "Legal Counsel",
    "team.legal.bio": "David ensures all our tax strategies are compliant with the latest laws and regulations.",
    "team.compliance.name": "Emily Chen",
    "team.compliance.role": "Compliance Officer",
    "team.compliance.bio": "Emily works to maintain the highest standards of ethical practices in all our operations.",
  },
  id: {
    "nav.home": "Beranda",
    "nav.services": "Layanan",
    "nav.testimonials": "Testimoni",
    "nav.contact": "Kontak",
    "hero.title": "Solusi Pajak Terpercaya untuk Bisnis Anda",
    "hero.subtitle":
      "Legacy Tax menyederhanakan urusan pajak Anda agar Anda dapat fokus pada pertumbuhan bisnis. Biarkan para ahli kami menangani kebutuhan pajak Anda dengan presisi dan kepedulian.",
    "hero.cta": "Dapatkan Konsultasi Gratis",
    "contact.title": "Hubungi Legacy Tax",
    "contact.subtitle": "Ada pertanyaan? Tim ahli kami siap membantu Anda.",
    "contact.name": "Nama",
    "contact.email": "Email",
    "contact.message": "Pesan",
    "contact.submit": "Kirim Pesan",
    "footer.rights": "Hak Cipta Dilindungi Undang-Undang",
    "nav.pricing": "Harga",
    "nav.team": "Tim Kami",
    "pricing.perMonth": "/bulan",
    "pricing.getStarted": "Mulai",
    "pricing.basic.name": "Dasar",
    "pricing.basic.price": "Rp1.499.000",
    "pricing.basic.description": "Layanan pajak esensial untuk individu dan bisnis kecil.",
    "pricing.basic.feature1": "Persiapan pengembalian pajak pribadi",
    "pricing.basic.feature2": "Pembukuan dasar",
    "pricing.basic.feature3": "Perencanaan pajak triwulanan",
    "pricing.intermediate.name": "Menengah",
    "pricing.intermediate.price": "Rp4.499.000",
    "pricing.intermediate.description": "Layanan pajak komprehensif untuk bisnis yang berkembang.",
    "pricing.intermediate.feature1": "Semua fitur Dasar",
    "pricing.intermediate.feature2": "Persiapan pengembalian pajak bisnis",
    "pricing.intermediate.feature3": "Pembukuan bulanan",
    "pricing.intermediate.feature4": "Dukungan audit pajak",
    "pricing.premium.name": "Premium",
    "pricing.premium.price": "Rp8.999.000",
    "pricing.premium.description": "Strategi pajak lanjutan untuk kebutuhan bisnis yang kompleks.",
    "pricing.premium.feature1": "Semua fitur Menengah",
    "pricing.premium.feature2": "Perencanaan pajak internasional",
    "pricing.premium.feature3": "Pelaporan keuangan kustom",
    "pricing.premium.feature4": "Penasihat pajak khusus",
    "pricing.premium.feature5": "Dukungan prioritas",
    "team.director.name": "John Doe",
    "team.director.role": "Direktur",
    "team.director.bio": "John memiliki pengalaman lebih dari 20 tahun dalam konsultasi pajak dan manajemen keuangan.",
    "team.commissioner.name": "Jane Smith",
    "team.commissioner.role": "Komisaris",
    "team.commissioner.bio":
      "Jane mengawasi arah strategis Legacy Tax, memastikan kami memberikan layanan terbaik kepada klien kami.",
    "team.advisor.name": "Mike Johnson",
    "team.advisor.role": "Penasihat Pajak Senior",
    "team.advisor.bio":
      "Mike mengkhususkan diri dalam strategi pajak kompleks untuk individu kaya dan perusahaan besar.",
    "team.finance.name": "Sarah Lee",
    "team.finance.role": "Kepala Keuangan",
    "team.finance.bio":
      "Sarah mengelola keuangan internal kami dan memberikan wawasan berharga untuk strategi keuangan klien kami.",
    "team.legal.name": "David Brown",
    "team.legal.role": "Penasihat Hukum",
    "team.legal.bio": "David memastikan semua strategi pajak kami sesuai dengan undang-undang dan peraturan terbaru.",
    "team.compliance.name": "Emily Chen",
    "team.compliance.role": "Petugas Kepatuhan",
    "team.compliance.bio":
      "Emily bekerja untuk mempertahankan standar tertinggi praktik etis dalam semua operasi kami.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("id")

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations.en] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

