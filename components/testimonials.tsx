import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export function Testimonials() {
  return (
    <section className="py-12 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">Traveler Stories</h2>
          <p className="text-muted-foreground max-w-[700px]">
            Hear from travelers who have experienced our accessible travel services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestimonialCard
            quote="This platform changed how I travel. For the first time, I could find detailed accessibility information that I could trust."
            name="Michael R."
            location="Wheelchair user"
            image="/placeholder.svg?height=100&width=100"
          />

          <TestimonialCard
            quote="As someone with visual impairment, finding accommodations with proper support has always been challenging. Not anymore!"
            name="Sarah T."
            location="Visually impaired traveler"
            image="/placeholder.svg?height=100&width=100"
          />

          <TestimonialCard
            quote="Traveling with my son who has autism is now so much easier. We can find places that understand our needs."
            name="David K."
            location="Parent of child with autism"
            image="/placeholder.svg?height=100&width=100"
          />
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({
  quote,
  name,
  location,
  image,
}: {
  quote: string
  name: string
  location: string
  image: string
}) {
  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <Quote className="h-8 w-8 text-primary/40 mb-4" />
        <p className="flex-1 italic mb-6">{quote}</p>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-sm text-muted-foreground">{location}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

