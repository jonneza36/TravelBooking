import type React from "react"
import { ShipWheelIcon as Wheelchair, Eye, Ear, Brain, Heart, MapPin, FileText, MessageSquare } from "lucide-react"

export function AccessibilityFeatures() {
  return (
    <section className="py-12 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">Specialized Accessibility Features</h2>
          <p className="text-muted-foreground max-w-[700px]">
            Our platform is designed to provide detailed accessibility information and support for all travelers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={<Wheelchair className="h-8 w-8" />}
            title="Mobility Access"
            description="Find accommodations with wheelchair access, elevators, and accessible bathrooms."
          />

          <FeatureCard
            icon={<Eye className="h-8 w-8" />}
            title="Visual Accessibility"
            description="Properties with braille signage, audio descriptions, and guide dog friendly policies."
          />

          <FeatureCard
            icon={<Ear className="h-8 w-8" />}
            title="Hearing Support"
            description="Accommodations with visual alarms, closed captioning, and sign language services."
          />

          <FeatureCard
            icon={<Brain className="h-8 w-8" />}
            title="Cognitive Accessibility"
            description="Clear signage, simple layouts, and quiet spaces for sensory sensitivity."
          />

          <FeatureCard
            icon={<Heart className="h-8 w-8" />}
            title="Medical Support"
            description="Properties near medical facilities and with refrigeration for medications."
          />

          <FeatureCard
            icon={<MapPin className="h-8 w-8" />}
            title="Accessible Routes"
            description="Detailed information about accessible transportation and nearby attractions."
          />

          <FeatureCard
            icon={<FileText className="h-8 w-8" />}
            title="Detailed Documentation"
            description="Comprehensive accessibility guides with photos and measurements."
          />

          <FeatureCard
            icon={<MessageSquare className="h-8 w-8" />}
            title="Specialized Support"
            description="24/7 assistance from staff trained in accessibility needs."
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
      <div className="mb-4 p-3 bg-primary/10 rounded-full text-primary">{icon}</div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

