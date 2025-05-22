import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ShipWheelIcon as Wheelchair, Eye, Ear, Heart, DollarSign } from "lucide-react"

export function EquipmentRental() {
  return (
    <section className="py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">Accessibility Equipment Rental</h2>
          <p className="text-muted-foreground max-w-[700px]">
            Rent specialized equipment for your trip and have it delivered to your accommodation.
          </p>
        </div>

        <Tabs defaultValue="mobility" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="mobility" className="flex items-center gap-2">
              <Wheelchair className="h-4 w-4 hidden sm:block" />
              Mobility
            </TabsTrigger>
            <TabsTrigger value="visual" className="flex items-center gap-2">
              <Eye className="h-4 w-4 hidden sm:block" />
              Visual
            </TabsTrigger>
            <TabsTrigger value="hearing" className="flex items-center gap-2">
              <Ear className="h-4 w-4 hidden sm:block" />
              Hearing
            </TabsTrigger>
            <TabsTrigger value="medical" className="flex items-center gap-2">
              <Heart className="h-4 w-4 hidden sm:block" />
              Medical
            </TabsTrigger>
          </TabsList>

          <TabsContent value="mobility" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <EquipmentCard
                name="Manual Wheelchair"
                image="/placeholder.svg?height=200&width=200"
                price={25}
                description="Standard manual wheelchair with adjustable footrests and removable armrests."
                features={["Foldable", '18" seat width', "Weight capacity: 250 lbs"]}
              />

              <EquipmentCard
                name="Power Wheelchair"
                image="/placeholder.svg?height=200&width=200"
                price={75}
                description="Electric powered wheelchair with joystick control and adjustable settings."
                features={["Battery operated", '18" seat width', "Weight capacity: 300 lbs"]}
              />

              <EquipmentCard
                name="Transport Chair"
                image="/placeholder.svg?height=200&width=200"
                price={15}
                description="Lightweight transport chair ideal for travel and short distances."
                features={["Ultra lightweight", '17" seat width', "Weight capacity: 220 lbs"]}
              />

              <EquipmentCard
                name="Beach Wheelchair"
                image="/placeholder.svg?height=200&width=200"
                price={40}
                description="Specialized wheelchair with large wheels designed for sand and beach access."
                features={["All-terrain", "Waterproof", "Floating armrests"]}
              />

              <EquipmentCard
                name="Walker"
                image="/placeholder.svg?height=200&width=200"
                price={12}
                description="Adjustable height walker with easy folding mechanism for storage."
                features={["Foldable", "Adjustable height", "Weight capacity: 300 lbs"]}
              />

              <EquipmentCard
                name="Rollator"
                image="/placeholder.svg?height=200&width=200"
                price={18}
                description="Four-wheel walker with seat, basket and hand brakes for added stability."
                features={["Built-in seat", "Storage basket", "Adjustable height"]}
              />
            </div>
          </TabsContent>

          <TabsContent value="visual" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <EquipmentCard
                name="Portable Text Magnifier"
                image="/placeholder.svg?height=200&width=200"
                price={35}
                description="Digital handheld magnifier with adjustable zoom and contrast settings."
                features={["5-inch LCD screen", "2x-20x zoom", "Multiple color modes"]}
              />

              <EquipmentCard
                name="Text-to-Speech Reader"
                image="/placeholder.svg?height=200&width=200"
                price={45}
                description="Portable device that scans and reads text aloud in multiple languages."
                features={["Multiple languages", "Adjustable speed", "Headphone compatible"]}
              />

              <EquipmentCard
                name="Braille Display"
                image="/placeholder.svg?height=200&width=200"
                price={85}
                description="Refreshable braille display that connects to smartphones and computers."
                features={["40 cells", "Bluetooth connectivity", "Long battery life"]}
              />
            </div>
          </TabsContent>

          <TabsContent value="hearing" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <EquipmentCard
                name="Portable Hearing Loop"
                image="/placeholder.svg?height=200&width=200"
                price={30}
                description="Personal hearing loop system that connects to audio sources and transmits to hearing aids."
                features={["T-coil compatible", "Rechargeable battery", "10m range"]}
              />

              <EquipmentCard
                name="Visual Alert System"
                image="/placeholder.svg?height=200&width=200"
                price={40}
                description="Portable system that flashes lights for doorbells, alarms, and phone calls."
                features={["Multiple alert patterns", "Easy setup", "Battery backup"]}
              />

              <EquipmentCard
                name="Personal Amplifier"
                image="/placeholder.svg?height=200&width=200"
                price={25}
                description="Wearable sound amplifier with noise cancellation for clearer conversations."
                features={["Directional microphone", "Volume control", "Rechargeable"]}
              />
            </div>
          </TabsContent>

          <TabsContent value="medical" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <EquipmentCard
                name="Portable Oxygen Concentrator"
                image="/placeholder.svg?height=200&width=200"
                price={95}
                description="Lightweight oxygen concentrator for travel with multiple flow settings."
                features={["FAA approved", "Battery and AC power", "Carrying case included"]}
              />

              <EquipmentCard
                name="Hospital Bed"
                image="/placeholder.svg?height=200&width=200"
                price={65}
                description="Adjustable electric hospital bed delivered and set up at your accommodation."
                features={["Electric controls", "Adjustable height", "Side rails available"]}
              />

              <EquipmentCard
                name="Medication Cooler"
                image="/placeholder.svg?height=200&width=200"
                price={28}
                description="Travel cooler for temperature-sensitive medications with digital display."
                features={["Battery operated", "Temperature display", "Compact design"]}
              />
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 p-6 bg-slate-50 rounded-lg">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-2">How Equipment Rental Works</h3>
              <ol className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Badge variant="outline">1</Badge>
                  <span>Select the equipment you need during the booking process</span>
                </li>
                <li className="flex items-start gap-2">
                  <Badge variant="outline">2</Badge>
                  <span>Specify rental dates and delivery location</span>
                </li>
                <li className="flex items-start gap-2">
                  <Badge variant="outline">3</Badge>
                  <span>Equipment is delivered to your accommodation before your arrival</span>
                </li>
                <li className="flex items-start gap-2">
                  <Badge variant="outline">4</Badge>
                  <span>Return the equipment at the end of your stay (pickup included)</span>
                </li>
              </ol>
            </div>
            <div className="md:w-1/3 flex flex-col gap-3">
              <Button className="w-full">Browse All Equipment</Button>
              <Button variant="outline" className="w-full">
                Equipment Policies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function EquipmentCard({
  name,
  image,
  price,
  description,
  features,
}: {
  name: string
  image: string
  price: number
  description: string
  features: string[]
}) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 flex items-center justify-center bg-slate-50 p-6">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={150}
          height={150}
          className="object-contain max-h-full"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg">{name}</h3>
          <div className="flex items-center text-lg font-semibold">
            <DollarSign className="h-4 w-4" />
            {price}
            <span className="text-sm font-normal text-muted-foreground">/day</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4">{description}</p>

        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="text-xs flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-primary" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button variant="outline" className="w-full">
          Add to Booking
        </Button>
      </CardFooter>
    </Card>
  )
}

