"use client"

import React from "react"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ShipWheelIcon as Wheelchair, Eye, Brain, Heart, Settings, User, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { AccessibilityPanel } from "@/components/accessibility-panel"

export function SiteHeader() {
  const [showAccessibilityPanel, setShowAccessibilityPanel] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="flex items-center space-x-2">
            <Wheelchair className="h-6 w-6" />
            <span className="font-bold text-xl">AccessTravel</span>
          </Link>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="mr-2 px-0 text-base hover:bg-transparent focus:ring-0 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <MobileNav />
          </SheetContent>
        </Sheet>

        <div className="flex items-center md:hidden">
          <Link href="/" className="flex items-center space-x-2">
            <Wheelchair className="h-5 w-5" />
            <span className="font-bold">AccessTravel</span>
          </Link>
        </div>

        <div className="flex-1 md:flex md:justify-center">
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Destinations</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem
                      title="Hotels & Resorts"
                      href="/destinations/hotels"
                      icon={<Wheelchair className="h-4 w-4 mr-2" />}
                    >
                      Accessible accommodations with specialized features
                    </ListItem>
                    <ListItem
                      title="Vacation Rentals"
                      href="/destinations/rentals"
                      icon={<Wheelchair className="h-4 w-4 mr-2" />}
                    >
                      Private homes with accessibility modifications
                    </ListItem>
                    <ListItem
                      title="Attractions"
                      href="/destinations/attractions"
                      icon={<Eye className="h-4 w-4 mr-2" />}
                    >
                      Accessible tours, museums, and experiences
                    </ListItem>
                    <ListItem
                      title="Transportation"
                      href="/destinations/transportation"
                      icon={<Wheelchair className="h-4 w-4 mr-2" />}
                    >
                      Accessible transportation options
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem
                      title="Accessibility Guides"
                      href="/resources/guides"
                      icon={<Eye className="h-4 w-4 mr-2" />}
                    >
                      Detailed guides for different disability types
                    </ListItem>
                    <ListItem
                      title="Equipment Rental"
                      href="/resources/equipment"
                      icon={<Wheelchair className="h-4 w-4 mr-2" />}
                    >
                      Rent mobility and accessibility equipment
                    </ListItem>
                    <ListItem
                      title="Medical Services"
                      href="/resources/medical"
                      icon={<Heart className="h-4 w-4 mr-2" />}
                    >
                      Find medical support at your destination
                    </ListItem>
                    <ListItem
                      title="Community Forum"
                      href="/resources/community"
                      icon={<Brain className="h-4 w-4 mr-2" />}
                    >
                      Connect with other travelers with disabilities
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/support" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Support</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowAccessibilityPanel(!showAccessibilityPanel)}
            aria-label="Accessibility settings"
          >
            <Settings className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="User account">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="default" className="hidden md:flex">
            Sign In
          </Button>
        </div>
      </div>

      {showAccessibilityPanel && <AccessibilityPanel onClose={() => setShowAccessibilityPanel(false)} />}
    </header>
  )
}

function MobileNav() {
  return (
    <div className="flex flex-col space-y-3 p-4">
      <Link href="/" className="flex items-center space-x-2 mb-4">
        <Wheelchair className="h-5 w-5" />
        <span className="font-bold">AccessTravel</span>
      </Link>
      <Link href="/" className="font-medium py-2">
        Home
      </Link>
      <div className="py-2">
        <p className="font-medium mb-2">Destinations</p>
        <div className="pl-4 flex flex-col space-y-2">
          <Link href="/destinations/hotels" className="text-muted-foreground">
            Hotels & Resorts
          </Link>
          <Link href="/destinations/rentals" className="text-muted-foreground">
            Vacation Rentals
          </Link>
          <Link href="/destinations/attractions" className="text-muted-foreground">
            Attractions
          </Link>
          <Link href="/destinations/transportation" className="text-muted-foreground">
            Transportation
          </Link>
        </div>
      </div>
      <div className="py-2">
        <p className="font-medium mb-2">Resources</p>
        <div className="pl-4 flex flex-col space-y-2">
          <Link href="/resources/guides" className="text-muted-foreground">
            Accessibility Guides
          </Link>
          <Link href="/resources/equipment" className="text-muted-foreground">
            Equipment Rental
          </Link>
          <Link href="/resources/medical" className="text-muted-foreground">
            Medical Services
          </Link>
          <Link href="/resources/community" className="text-muted-foreground">
            Community Forum
          </Link>
        </div>
      </div>
      <Link href="/support" className="font-medium py-2">
        Support
      </Link>
      <Button className="mt-4">Sign In</Button>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="flex items-center text-sm font-medium leading-none">
            {icon}
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

