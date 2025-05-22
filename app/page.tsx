import { Search } from "@/components/search"
import { FeaturedDestinations } from "@/components/featured-destinations"
import { AccessibilityFeatures } from "@/components/accessibility-features"
import { Testimonials } from "@/components/testimonials"
import { SupportSection } from "@/components/support-section"
import { SiteHeader } from "@/components/site-header"
import { EquipmentRental } from "@/components/equipment-rental"
import { AccessibilityProfile } from "@/components/accessibility-profile"
import { VirtualTour } from "@/components/virtual-tour"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen">
        <section className="relative bg-white py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
                Travel Booking with AccessibilityFeatures
              </h1>
              <p className="text-xl text-muted-foreground max-w-[700px]">
                Book accessible accommodations and experiences tailored to your specific needs.
              </p>
            </div>
            <Search />
          </div>
        </section>

        <AccessibilityFeatures />

        <section className="py-12 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">Your Accessibility Profile</h2>
              <p className="text-muted-foreground max-w-[700px]">
                Save your accessibility preferences for a personalized booking experience.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <AccessibilityProfile />
            </div>
          </div>
        </section>

        <FeaturedDestinations />

        <VirtualTour />

        <EquipmentRental />

        <Testimonials />

        <SupportSection />
      </main>
    </>
  )
}

