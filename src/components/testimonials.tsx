import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const testimonials = [
  {
    name: "testimonials.person1.name",
    role: "testimonials.person1.role",
    content: "testimonials.person1.content",
  },
  {
    name: "testimonials.person2.name",
    role: "testimonials.person2.role",
    content: "testimonials.person2.content",
  },
  {
    name: "testimonials.person3.name",
    role: "testimonials.person3.role",
    content: "testimonials.person3.content",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { t } = useLanguage()

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div id="testimonials" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-primary sm:text-4xl mb-12">
          {t("testimonials.title")}
        </h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <blockquote className="text-center text-xl font-semibold leading-8 text-gray-300 sm:text-2xl sm:leading-9">
                    <p>"{t(testimonial.content)}"</p>
                  </blockquote>
                  <div className="mt-10">
                    <div className="font-semibold text-primary">{t(testimonial.name)}</div>
                    <div className="text-gray-400">{t(testimonial.role)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prev}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-primary rounded-full p-2 text-black hover:bg-primary/90"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-primary rounded-full p-2 text-black hover:bg-primary/90"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  )
}

