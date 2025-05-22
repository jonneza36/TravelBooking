import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MessageSquare, FileText, HelpCircle, Clock } from "lucide-react"

export function SupportSection() {
  return (
    <section className="py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">Specialized Support</h2>
          <p className="text-muted-foreground max-w-[700px]">
            Our team is trained to understand and assist with all accessibility needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  <Phone className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-center md:text-left">24/7 Accessibility Helpline</h3>
                  <p className="text-muted-foreground mb-4 text-center md:text-left">
                    Our specialized support team is available around the clock to assist with any accessibility
                    questions or concerns.
                  </p>
                  <Button variant="outline" className="w-full md:w-auto">
                    Contact Support
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  <MessageSquare className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-center md:text-left">Pre-Trip Consultation</h3>
                  <p className="text-muted-foreground mb-4 text-center md:text-left">
                    Schedule a call with our accessibility experts to plan your trip and address specific needs before
                    you travel.
                  </p>
                  <Button variant="outline" className="w-full md:w-auto">
                    Book Consultation
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <SupportFeature
            icon={<FileText className="h-6 w-6" />}
            title="Detailed Guides"
            description="Download comprehensive accessibility guides for popular destinations."
          />

          <SupportFeature
            icon={<HelpCircle className="h-6 w-6" />}
            title="FAQ Library"
            description="Browse our extensive collection of accessibility-related questions and answers."
          />

          <SupportFeature
            icon={<Clock className="h-6 w-6" />}
            title="Flexible Bookings"
            description="Special cancellation policies for medical or accessibility-related issues."
          />
        </div>
      </div>
    </section>
  )
}

function SupportFeature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-lg">
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-base font-medium mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

