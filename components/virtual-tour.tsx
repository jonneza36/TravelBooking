"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ShipWheelIcon as Wheelchair, Eye, Ear, Heart, ArrowLeft, ArrowRight, Maximize2, Info } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function VirtualTour() {
  const [currentView, setCurrentView] = useState(0)
  const [showInfo, setShowInfo] = useState(false)

  const views = [
    {
      name: "Entrance",
      image: "/placeholder.svg?height=600&width=800",
      description: "Main entrance with automatic sliding doors (36 inches wide) and no steps.",
      accessibilityFeatures: ["Step-free entrance", "Automatic doors", '36" doorway width'],
    },
    {
      name: "Lobby",
      image: "/placeholder.svg?height=600&width=800",
      description: "Spacious lobby with lowered check-in counter and seating area.",
      accessibilityFeatures: ['Lowered counter (30" height)', "Wide pathways", "Tactile floor indicators"],
    },
    {
      name: "Elevator",
      image: "/placeholder.svg?height=600&width=800",
      description: "Elevator with braille buttons and voice announcements.",
      accessibilityFeatures: ['42" × 60" interior', "Braille controls", "Voice announcements"],
    },
    {
      name: "Accessible Room",
      image: "/placeholder.svg?height=600&width=800",
      description: "Accessible hotel room with widened doorways and maneuvering space.",
      accessibilityFeatures: ['King bed (19" height)', "5' turning radius", "Visual doorbell"],
    },
    {
      name: "Bathroom",
      image: "/placeholder.svg?height=600&width=800",
      description: "Roll-in shower with grab bars and adjustable showerhead.",
      accessibilityFeatures: ["Roll-in shower", "Grab bars", 'Raised toilet (17")', 'Lowered sink (30")'],
    },
    {
      name: "Pool Area",
      image: "/placeholder.svg?height=600&width=800",
      description: "Pool with ADA compliant lift and zero-entry option.",
      accessibilityFeatures: ["Pool lift", "Zero-entry option", "Accessible changing rooms"],
    },
  ]

  const nextView = () => {
    setCurrentView((prev) => (prev === views.length - 1 ? 0 : prev + 1))
  }

  const prevView = () => {
    setCurrentView((prev) => (prev === 0 ? views.length - 1 : prev - 1))
  }

  return (
    <section className="py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">Virtual Accessibility Tour</h2>
          <p className="text-muted-foreground max-w-[700px]">
            Explore the property's accessibility features before you book.
          </p>
        </div>

        <div className="grid md:grid-cols-[2fr_1fr] gap-8">
          <div className="space-y-6">
            <div className="relative aspect-video bg-slate-100 rounded-lg overflow-hidden">
              <Image
                src={views[currentView].image || "/placeholder.svg"}
                alt={views[currentView].name}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 flex items-center justify-between p-4">
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={prevView}
                  className="rounded-full opacity-80 hover:opacity-100"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span className="sr-only">Previous view</span>
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={nextView}
                  className="rounded-full opacity-80 hover:opacity-100"
                >
                  <ArrowRight className="h-4 w-4" />
                  <span className="sr-only">Next view</span>
                </Button>
              </div>

              <div className="absolute top-4 right-4 flex gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="secondary" size="icon" className="rounded-full opacity-80 hover:opacity-100">
                      <Maximize2 className="h-4 w-4" />
                      <span className="sr-only">View fullscreen</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <DialogHeader>
                      <DialogTitle>{views[currentView].name}</DialogTitle>
                      <DialogDescription>{views[currentView].description}</DialogDescription>
                    </DialogHeader>
                    <div className="aspect-video relative mt-4">
                      <Image
                        src={views[currentView].image || "/placeholder.svg"}
                        alt={views[currentView].name}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium mb-2">Accessibility Features:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {views[currentView].accessibilityFeatures.map((feature, index) => (
                          <li key={index} className="text-sm flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </DialogContent>
                </Dialog>

                <Button
                  variant="secondary"
                  size="icon"
                  onClick={() => setShowInfo(!showInfo)}
                  className={`rounded-full ${showInfo ? "bg-primary text-primary-foreground hover:bg-primary/90" : "opacity-80 hover:opacity-100"}`}
                >
                  <Info className="h-4 w-4" />
                  <span className="sr-only">Show information</span>
                </Button>
              </div>

              {showInfo && (
                <div className="absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm p-4">
                  <h3 className="font-medium mb-1">{views[currentView].name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{views[currentView].description}</p>
                  <div className="flex flex-wrap gap-2">
                    {views[currentView].accessibilityFeatures.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="grid grid-cols-6 gap-2">
              {views.map((view, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentView(index)}
                  className={`relative aspect-square rounded-md overflow-hidden border-2 ${
                    currentView === index ? "border-primary" : "border-transparent"
                  }`}
                >
                  <Image src={view.image || "/placeholder.svg"} alt={view.name} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Accessibility Features</h3>
                  <Tabs defaultValue="mobility">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="mobility" className="px-2">
                        <Wheelchair className="h-4 w-4" />
                        <span className="sr-only">Mobility</span>
                      </TabsTrigger>
                      <TabsTrigger value="visual" className="px-2">
                        <Eye className="h-4 w-4" />
                        <span className="sr-only">Visual</span>
                      </TabsTrigger>
                      <TabsTrigger value="hearing" className="px-2">
                        <Ear className="h-4 w-4" />
                        <span className="sr-only">Hearing</span>
                      </TabsTrigger>
                      <TabsTrigger value="medical" className="px-2">
                        <Heart className="h-4 w-4" />
                        <span className="sr-only">Medical</span>
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="mobility" className="pt-4">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
                          Step-free entrance to building
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
                          Elevator access to all floors
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
                          Doorways at least 32 inches wide
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
                          Roll-in shower with grab bars
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
                          Accessible height bed (19-23 inches)
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
                          5-foot turning radius in bedroom and bathroom
                        </li>
                      </ul>
                    </TabsContent>

                    <TabsContent value="visual" className="pt-4">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
                          Braille room numbers and elevator controls
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
                          High contrast room features
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
                          Tactile path indicators in common areas
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
                          Audio description of facilities available
                        </li>
                      </ul>
                    </TabsContent>

                    <TabsContent value="hearing" className="pt-4">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
                          Visual fire alarms in all rooms
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
                          Visual doorbell notification
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
                          Closed captioning on all TVs
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
                          Hearing loop system in common areas
                        </li>
                      </ul>
                    </TabsContent>

                    <TabsContent value="medical" className="pt-4">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
                          Refrigerator for medication in room
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />5 minutes to nearest hospital
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
                          On-site first aid trained staff
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
                          Medical equipment rental available
                        </li>
                      </ul>
                    </TabsContent>
                  </Tabs>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Measurements & Specifications</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Doorway width:</span>
                      <span className="font-medium">36 inches</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Bed height:</span>
                      <span className="font-medium">19 inches</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Bathroom turning radius:</span>
                      <span className="font-medium">5 feet</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Toilet height:</span>
                      <span className="font-medium">17 inches</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sink height:</span>
                      <span className="font-medium">30 inches</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Elevator dimensions:</span>
                      <span className="font-medium">42" × 60"</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full">Book This Room</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

