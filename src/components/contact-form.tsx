"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/lib/language-context"
import ReCAPTCHA from "react-google-recaptcha"

export default function ContactForm() {
  const { t } = useLanguage()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [captchaValue, setCaptchaValue] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    console.log("Form submitted:", { name, email, message, captchaValue })
  }

  return (
    <div id="contact" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">{t("contact.title")}</h2>
          <p className="mt-4 text-lg text-gray-300">{t("contact.subtitle")}</p>
        </div>
        <div className="mt-16 max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                {t("contact.name")}
              </label>
              <Input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 bg-gray-900 text-white border-gray-700 focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                {t("contact.email")}
              </label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 bg-gray-900 text-white border-gray-700 focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                {t("contact.message")}
              </label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="mt-1 bg-gray-900 text-white border-gray-700 focus:border-primary"
                rows={4}
              />
            </div>
            <div>
              <ReCAPTCHA sitekey="YOUR_RECAPTCHA_SITE_KEY" onChange={(value) => setCaptchaValue(value)} theme="dark" />
            </div>
            <div>
              <Button
                type="submit"
                className="w-full bg-primary text-black hover:bg-primary/90"
                disabled={!captchaValue}
              >
                {t("contact.submit")}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

