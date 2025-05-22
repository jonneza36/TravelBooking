import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ShipWheelIcon as Wheelchair,
  Eye,
  Ear,
  Heart,
  MapPin,
  Wifi,
  Utensils,
  Car,
  Thermometer,
  Star,
  Calendar,
  Users,
  ArrowLeft,
} from "lucide-react"
import Link from "next/link"

export default function AccommodationPage() {
  return (
    <main className="min-h-screen pb-12">
      <div className="container px-4 md:px-6 pt-8">
        <Link href="/" className="inline-flex items-center gap-2 mb-6 text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          Back to search results
        </Link>

        <div className="grid md:grid-cols-[2fr_1fr] gap-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tighter mb-2">
              Oceanfront Resort with Full Accessibility
            </h1>

            <div className="flex flex-wrap items-center gap-2 mb-6">
              <Badge variant="outline" className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                Miami, Florida
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                4.8 (124 reviews)
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Wheelchair className="h-3 w-3" />
                Mobility Accessible
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Ear className="h-3 w-3" />
                Hearing Accessible
              </Badge>
            </div>

            <div className="grid grid-cols-4 grid-rows-2 gap-2 mb-8 aspect-[16/9]">
              <div className="col-span-2 row-span-2 relative rounded-l-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Resort main view"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-tr-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Accessible room"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Accessible bathroom"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative overflow-hidden">
                <Image src="/placeholder.svg?height=300&width=300" alt="Pool with lift" fill className="object-cover" />
              </div>
              <div className="relative rounded-br-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Beach access path"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <Tabs defaultValue="accessibility">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="accessibility">Accessibility Features</TabsTrigger>
                <TabsTrigger value="amenities">Amenities</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="accessibility" className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <Wheelchair className="h-5 w-5" />
                    Mobility Accessibility
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Step-free entrance to the building
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Elevator access to all floors
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Wide doorways (32+ inches)
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Roll-in showers with grab bars
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Accessible height bed and switches
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Pool lift available
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Beach wheelchairs available
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Accessible parking spaces
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <Ear className="h-5 w-5" />
                    Hearing Accessibility
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Visual fire alarms
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      TTY available at front desk
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Closed captioning on TVs
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Vibrating alarm clocks
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <Eye className="h-5 w-5" />
                    Visual Accessibility
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Braille signage throughout
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      High contrast room features
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Service animals welcome
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <Heart className="h-5 w-5" />
                    Medical Support
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Medical equipment rental available
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Refrigeration for medication
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />5 minutes to nearest hospital
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      On-site first aid trained staff
                    </li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="amenities" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                  <div className="flex items-center gap-3">
                    <Wifi className="h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">Free High-Speed WiFi</h4>
                      <p className="text-sm text-muted-foreground">Available throughout the property</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Utensils className="h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">On-site Restaurant</h4>
                      <p className="text-sm text-muted-foreground">With accessible seating and menus</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Car className="h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">Free Parking</h4>
                      <p className="text-sm text-muted-foreground">With designated accessible spaces</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Thermometer className="h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">Climate Control</h4>
                      <p className="text-sm text-muted-foreground">Individual temperature controls in rooms</p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6">
                <div className="space-y-6">
                  <div className="border-b pb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      </div>
                      <p className="font-medium">Robert M. - Wheelchair user</p>
                    </div>
                    <p className="text-sm">
                      "The accessibility features at this resort exceeded my expectations. The roll-in shower was
                      spacious, and the beach wheelchair allowed me to enjoy the ocean for the first time in years.
                      Staff was incredibly helpful and knowledgeable about accessibility needs."
                    </p>
                  </div>

                  <div className="border-b pb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4" />
                      </div>
                      <p className="font-medium">Lisa T. - Hearing impaired</p>
                    </div>
                    <p className="text-sm">
                      "I appreciated the visual alarms and the staff's willingness to communicate through writing when
                      needed. The closed captioning on all TVs was a nice touch. The only improvement could be adding
                      more visual cues for announcements in public areas."
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <Card className="sticky top-8">
              <CardContent className="p-6 space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-2xl font-semibold">$250</p>
                    <p className="text-muted-foreground">per night</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">4.8</span>
                    <span className="text-muted-foreground">(124)</span>
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" className="h-auto py-3 flex flex-col items-start">
                      <span className="text-xs font-semibold uppercase text-muted-foreground">Check in</span>
                      <span className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Apr 15, 2023
                      </span>
                    </Button>

                    <Button variant="outline" className="h-auto py-3 flex flex-col items-start">
                      <span className="text-xs font-semibold uppercase text-muted-foreground">Check out</span>
                      <span className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Apr 20, 2023
                      </span>
                    </Button>
                  </div>

                  <Button variant="outline" className="h-auto py-3 flex flex-col items-start">
                    <span className="text-xs font-semibold uppercase text-muted-foreground">Guests</span>
                    <span className="flex items-center gap-2">
                      <Users className="h-4 w-4" />2 guests
                    </span>
                  </Button>

                  <Button variant="outline" className="h-auto py-3 flex flex-col items-start">
                    <span className="text-xs font-semibold uppercase text-muted-foreground">Accessibility needs</span>
                    <span className="flex items-center gap-2">
                      <Wheelchair className="h-4 w-4" />
                      Add specific requirements
                    </span>
                  </Button>
                </div>

                <div className="space-y-4 pt-4 border-t">
                  <div className="flex justify-between">
                    <span>$250 x 5 nights</span>
                    <span>$1,250</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cleaning fee</span>
                    <span>$100</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service fee</span>
                    <span>$135</span>
                  </div>
                  <div className="flex justify-between font-semibold pt-4 border-t">
                    <span>Total</span>
                    <span>$1,485</span>
                  </div>
                </div>

                <Button size="lg" className="w-full">
                  Reserve
                </Button>

                <p className="text-center text-sm text-muted-foreground">You won't be charged yet</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}

