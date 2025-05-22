import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ShipWheelIcon as Wheelchair, Eye, Ear, Heart } from "lucide-react"

export function FeaturedDestinations() {
  return (
    <section className="py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">Featured Accessible Destinations</h2>
          <p className="text-muted-foreground max-w-[700px]">
            Discover places that prioritize accessibility and inclusion for all travelers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <DestinationCard
            image="/placeholder.svg?height=300&width=400"
            title="Oceanfront Resort"
            location="Miami, Florida"
            price="$250"
            rating={4.8}
            features={["mobility", "hearing"]}
            description="Beachfront resort with full wheelchair accessibility, beach wheelchairs, and trained staff."
          />

          <DestinationCard
            image="/placeholder.svg?height=300&width=400"
            title="Mountain Retreat"
            location="Denver, Colorado"
            price="$180"
            rating={4.7}
            features={["mobility", "visual", "medical"]}
            description="Cabin with accessible trails, tactile maps, and proximity to medical facilities."
          />

          <DestinationCard
            image="/placeholder.svg?height=300&width=400"
            title="City Center Hotel"
            location="New York City"
            price="$320"
            rating={4.9}
            features={["mobility", "hearing", "visual"]}
            description="Central hotel with roll-in showers, visual alarms, and braille signage throughout."
          />

          <DestinationCard
            image="/placeholder.svg?height=300&width=400"
            title="Lakeside Cabins"
            location="Lake Tahoe, California"
            price="$210"
            rating={4.6}
            features={["mobility", "medical"]}
            description="Accessible cabins with ramps, wide doorways, and medical equipment rental options."
          />

          <DestinationCard
            image="/placeholder.svg?height=300&width=400"
            title="Historic B&B"
            location="Charleston, South Carolina"
            price="$175"
            rating={4.5}
            features={["mobility", "hearing"]}
            description="Renovated historic building with elevator access and hearing loop systems."
          />

          <DestinationCard
            image="/placeholder.svg?height=300&width=400"
            title="Desert Resort"
            location="Phoenix, Arizona"
            price="$230"
            rating={4.7}
            features={["mobility", "visual", "medical"]}
            description="Resort with accessible pools, tactile signage, and on-site medical support."
          />
        </div>

        <div className="flex justify-center mt-10">
          <Button size="lg">View All Accessible Destinations</Button>
        </div>
      </div>
    </section>
  )
}

function DestinationCard({
  image,
  title,
  location,
  price,
  rating,
  features,
  description,
}: {
  image: string
  title: string
  location: string
  price: string
  rating: number
  features: string[]
  description: string
}) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-sm text-muted-foreground">{location}</p>
          </div>
          <Badge variant="outline" className="text-sm">
            {rating} ★
          </Badge>
        </div>

        <div className="flex gap-1 mb-3">
          {features.includes("mobility") && (
            <Badge variant="secondary" className="gap-1">
              <Wheelchair className="h-3 w-3" />
              <span className="sr-only">Mobility accessible</span>
            </Badge>
          )}
          {features.includes("visual") && (
            <Badge variant="secondary" className="gap-1">
              <Eye className="h-3 w-3" />
              <span className="sr-only">Visual accessibility</span>
            </Badge>
          )}
          {features.includes("hearing") && (
            <Badge variant="secondary" className="gap-1">
              <Ear className="h-3 w-3" />
              <span className="sr-only">Hearing accessibility</span>
            </Badge>
          )}
          {features.includes("medical") && (
            <Badge variant="secondary" className="gap-1">
              <Heart className="h-3 w-3" />
              <span className="sr-only">Medical support</span>
            </Badge>
          )}
        </div>

        <p className="text-sm">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between p-6 pt-0">
        <div className="font-semibold">
          {price} <span className="text-muted-foreground font-normal text-sm">/ night</span>
        </div>
        <Button variant="outline" size="sm">
          View Details
        </Button>
      </CardFooter>
    </Card>
  )
}

