import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const teamMembers = [
  {
    name: "team.director.name",
    role: "team.director.role",
    bio: "team.director.bio",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "team.commissioner.name",
    role: "team.commissioner.role",
    bio: "team.commissioner.bio",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "team.advisor.name",
    role: "team.advisor.role",
    bio: "team.advisor.bio",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "team.finance.name",
    role: "team.finance.role",
    bio: "team.finance.bio",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "team.legal.name",
    role: "team.legal.role",
    bio: "team.legal.bio",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "team.compliance.name",
    role: "team.compliance.role",
    bio: "team.compliance.bio",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function TeamMembers() {
  const { t } = useLanguage()

  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <Card key={member.name} className="bg-secondary border-none">
              <CardHeader>
                <Image
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                  src={member.image || "/placeholder.svg"}
                  alt={t(member.name)}
                  width={128}
                  height={128}
                />
                <CardTitle className="text-lg font-semibold text-primary text-center">{t(member.name)}</CardTitle>
                <CardDescription className="text-sm text-gray-400 text-center">{t(member.role)}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-300 text-center">{t(member.bio)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

