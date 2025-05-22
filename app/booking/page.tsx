import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SiteHeader } from "@/components/site-header"
import {
  ShipWheelIcon as Wheelchair,
  Eye,
  Ear,
  Brain,
  Heart,
  Calendar,
  CreditCard,
  Building,
  User,
  MapPin,
  ArrowLeft,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BookingPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen py-12">
        <div className="container px-4 md:px-6">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" />
              Back to search
            </Link>
            <span className="text-muted-foreground">/</span>
            <span>Booking</span>
          </div>

          <div className="grid lg:grid-cols-[1fr_400px] gap-8">
            <div>
              <Tabs defaultValue="details" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-8">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
                  <TabsTrigger value="equipment">Equipment</TabsTrigger>
                  <TabsTrigger value="payment">Payment</TabsTrigger>
                </TabsList>

                <TabsContent value="details" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Booking Details</CardTitle>
                      <CardDescription>Enter your travel information</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="check-in">Check-in Date</Label>
                          <div className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                            <Calendar className="mr-2 h-4 w-4 opacity-50" />
                            <span>April 15, 2023</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="check-out">Check-out Date</Label>
                          <div className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                            <Calendar className="mr-2 h-4 w-4 opacity-50" />
                            <span>April 20, 2023</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="adults">Adults</Label>
                          <Select defaultValue="2">
                            <SelectTrigger id="adults">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 Adult</SelectItem>
                              <SelectItem value="2">2 Adults</SelectItem>
                              <SelectItem value="3">3 Adults</SelectItem>
                              <SelectItem value="4">4 Adults</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="children">Children</Label>
                          <Select defaultValue="0">
                            <SelectTrigger id="children">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="0">0 Children</SelectItem>
                              <SelectItem value="1">1 Child</SelectItem>
                              <SelectItem value="2">2 Children</SelectItem>
                              <SelectItem value="3">3 Children</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="room-type">Room Type</Label>
                        <Select defaultValue="accessible-king">
                          <SelectTrigger id="room-type">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="accessible-king">Accessible King Room</SelectItem>
                            <SelectItem value="accessible-double">Accessible Double Room</SelectItem>
                            <SelectItem value="accessible-suite">Accessible Suite</SelectItem>
                            <SelectItem value="hearing-accessible">Hearing Accessible Room</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="special-requests">Special Requests</Label>
                        <Textarea
                          id="special-requests"
                          placeholder="Any additional requests or information we should know..."
                          className="min-h-[100px]"
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">Save for Later</Button>
                      <Button>Continue to Accessibility</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="accessibility" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Accessibility Requirements</CardTitle>
                      <CardDescription>Tell us about your specific accessibility needs</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-start space-x-2">
                          <Checkbox id="mobility-needs" />
                          <div className="grid gap-1.5 leading-none">
                            <Label htmlFor="mobility-needs" className="flex items-center gap-2 text-sm font-medium">
                              <Wheelchair className="h-4 w-4" />
                              Mobility Needs
                            </Label>

                            <div className="pl-6 pt-2 space-y-2">
                              <div className="flex items-center space-x-2">
                                <Checkbox id="wheelchair-user" />
                                <Label htmlFor="wheelchair-user" className="text-xs">
                                  I use a wheelchair
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox id="walker-user" />
                                <Label htmlFor="walker-user" className="text-xs">
                                  I use a walker/cane
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox id="limited-mobility" />
                                <Label htmlFor="limited-mobility" className="text-xs">
                                  I have limited mobility
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox id="ground-floor" />
                                <Label htmlFor="ground-floor" className="text-xs">
                                  I need ground floor accommodation
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox id="roll-in-shower" />
                                <Label htmlFor="roll-in-shower" className="text-xs">
                                  I need a roll-in shower
                                </Label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start space-x-2">
                          <Checkbox id="visual-needs" />
                          <div className="grid gap-1.5 leading-none">
                            <Label htmlFor="visual-needs" className="flex items-center gap-2 text-sm font-medium">
                              <Eye className="h-4 w-4" />
                              Visual Impairment Needs
                            </Label>

                            <div className="pl-6 pt-2 space-y-2">
                              <div className="flex items-center space-x-2">
                                <Checkbox id="blind" />
                                <Label htmlFor="blind" className="text-xs">
                                  I am blind/have low vision
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox id="guide-dog" />
                                <Label htmlFor="guide-dog" className="text-xs">
                                  I travel with a guide dog
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox id="braille" />
                                <Label htmlFor="braille" className="text-xs">
                                  I need braille materials
                                </Label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start space-x-2">
                          <Checkbox id="hearing-needs" />
                          <div className="grid gap-1.5 leading-none">
                            <Label htmlFor="hearing-needs" className="flex items-center gap-2 text-sm font-medium">
                              <Ear className="h-4 w-4" />
                              Hearing Impairment Needs
                            </Label>

                            <div className="pl-6 pt-2 space-y-2">
                              <div className="flex items-center space-x-2">
                                <Checkbox id="deaf" />
                                <Label htmlFor="deaf" className="text-xs">
                                  I am deaf/hard of hearing
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox id="visual-alerts" />
                                <Label htmlFor="visual-alerts" className="text-xs">
                                  I need visual alerts
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox id="sign-language" />
                                <Label htmlFor="sign-language" className="text-xs">
                                  I use sign language
                                </Label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start space-x-2">
                          <Checkbox id="cognitive-needs" />
                          <div className="grid gap-1.5 leading-none">
                            <Label htmlFor="cognitive-needs" className="flex items-center gap-2 text-sm font-medium">
                              <Brain className="h-4 w-4" />
                              Cognitive/Sensory Needs
                            </Label>

                            <div className="pl-6 pt-2 space-y-2">
                              <div className="flex items-center space-x-2">
                                <Checkbox id="sensory-sensitivity" />
                                <Label htmlFor="sensory-sensitivity" className="text-xs">
                                  I have sensory sensitivities
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox id="quiet-room" />
                                <Label htmlFor="quiet-room" className="text-xs">
                                  I need a quiet room
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox id="simple-layout" />
                                <Label htmlFor="simple-layout" className="text-xs">
                                  I prefer simple layouts
                                </Label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start space-x-2">
                          <Checkbox id="medical-needs" />
                          <div className="grid gap-1.5 leading-none">
                            <Label htmlFor="medical-needs" className="flex items-center gap-2 text-sm font-medium">
                              <Heart className="h-4 w-4" />
                              Medical Needs
                            </Label>

                            <div className="pl-6 pt-2 space-y-2">
                              <div className="flex items-center space-x-2">
                                <Checkbox id="medication-storage" />
                                <Label htmlFor="medication-storage" className="text-xs">
                                  I need refrigeration for medication
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox id="medical-equipment" />
                                <Label htmlFor="medical-equipment" className="text-xs">
                                  I travel with medical equipment
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox id="near-hospital" />
                                <Label htmlFor="near-hospital" className="text-xs">
                                  I need to be near medical facilities
                                </Label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="additional-accessibility">Additional Accessibility Information</Label>
                        <Textarea
                          id="additional-accessibility"
                          placeholder="Please provide any additional details about your accessibility needs..."
                          className="min-h-[100px]"
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">Back to Details</Button>
                      <Button>Continue to Equipment</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="equipment" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Equipment Rental</CardTitle>
                      <CardDescription>Add specialized equipment to your booking</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4 flex items-start gap-3">
                          <Checkbox id="manual-wheelchair" />
                          <div className="space-y-1">
                            <Label htmlFor="manual-wheelchair" className="font-medium">
                              Manual Wheelchair
                            </Label>
                            <p className="text-xs text-muted-foreground">
                              Standard manual wheelchair with adjustable footrests
                            </p>
                            <p className="text-sm font-medium">$25/day</p>
                          </div>
                        </div>

                        <div className="border rounded-lg p-4 flex items-start gap-3">
                          <Checkbox id="power-wheelchair" />
                          <div className="space-y-1">
                            <Label htmlFor="power-wheelchair" className="font-medium">
                              Power Wheelchair
                            </Label>
                            <p className="text-xs text-muted-foreground">
                              Electric powered wheelchair with joystick control
                            </p>
                            <p className="text-sm font-medium">$75/day</p>
                          </div>
                        </div>

                        <div className="border rounded-lg p-4 flex items-start gap-3">
                          <Checkbox id="shower-chair" />
                          <div className="space-y-1">
                            <Label htmlFor="shower-chair" className="font-medium">
                              Shower Chair
                            </Label>
                            <p className="text-xs text-muted-foreground">Waterproof chair for use in roll-in showers</p>
                            <p className="text-sm font-medium">$10/day</p>
                          </div>
                        </div>

                        <div className="border rounded-lg p-4 flex items-start gap-3">
                          <Checkbox id="portable-ramp" />
                          <div className="space-y-1">
                            <Label htmlFor="portable-ramp" className="font-medium">
                              Portable Ramp
                            </Label>
                            <p className="text-xs text-muted-foreground">Lightweight, foldable ramp for small steps</p>
                            <p className="text-sm font-medium">$15/day</p>
                          </div>
                        </div>

                        <div className="border rounded-lg p-4 flex items-start gap-3">
                          <Checkbox id="visual-alert" />
                          <div className="space-y-1">
                            <Label htmlFor="visual-alert" className="font-medium">
                              Visual Alert System
                            </Label>
                            <p className="text-xs text-muted-foreground">Portable system for doorbells and alarms</p>
                            <p className="text-sm font-medium">$20/day</p>
                          </div>
                        </div>

                        <div className="border rounded-lg p-4 flex items-start gap-3">
                          <Checkbox id="medication-cooler" />
                          <div className="space-y-1">
                            <Label htmlFor="medication-cooler" className="font-medium">
                              Medication Cooler
                            </Label>
                            <p className="text-xs text-muted-foreground">
                              Travel cooler for temperature-sensitive medications
                            </p>
                            <p className="text-sm font-medium">$12/day</p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t">
                        <Button variant="outline" className="w-full">
                          Browse More Equipment Options
                        </Button>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">Back to Accessibility</Button>
                      <Button>Continue to Payment</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="payment" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Payment Information</CardTitle>
                      <CardDescription>Enter your payment details</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="card-name">Name on Card</Label>
                        <Input id="card-name" placeholder="John Smith" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="card-number">Card Number</Label>
                        <div className="flex">
                          <Input id="card-number" placeholder="1234 5678 9012 3456" />
                          <div className="ml-2 flex items-center">
                            <CreditCard className="h-5 w-5 text-muted-foreground" />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry-month">Expiry Month</Label>
                          <Select>
                            <SelectTrigger id="expiry-month">
                              <SelectValue placeholder="Month" />
                            </SelectTrigger>
                            <SelectContent>
                              {Array.from({ length: 12 }, (_, i) => (
                                <SelectItem key={i + 1} value={(i + 1).toString()}>
                                  {(i + 1).toString().padStart(2, "0")}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="expiry-year">Expiry Year</Label>
                          <Select>
                            <SelectTrigger id="expiry-year">
                              <SelectValue placeholder="Year" />
                            </SelectTrigger>
                            <SelectContent>
                              {Array.from({ length: 10 }, (_, i) => (
                                <SelectItem key={i} value={(new Date().getFullYear() + i).toString()}>
                                  {new Date().getFullYear() + i}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvc">CVC</Label>
                          <Input id="cvc" placeholder="123" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="billing-address">Billing Address</Label>
                        <Input id="billing-address" placeholder="Street Address" />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input id="city" placeholder="City" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="zip">ZIP / Postal Code</Label>
                          <Input id="zip" placeholder="ZIP / Postal Code" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Select>
                          <SelectTrigger id="country">
                            <SelectValue placeholder="Select Country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="us">United States</SelectItem>
                            <SelectItem value="ca">Canada</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="au">Australia</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex items-center space-x-2 pt-4">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms" className="text-sm">
                          I agree to the{" "}
                          <Link href="#" className="text-primary underline">
                            Terms and Conditions
                          </Link>{" "}
                          and{" "}
                          <Link href="#" className="text-primary underline">
                            Privacy Policy
                          </Link>
                        </Label>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">Back to Equipment</Button>
                      <Button>Complete Booking</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <Card className="sticky top-20">
                <CardHeader>
                  <CardTitle>Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="relative w-20 h-20 rounded-md overflow-hidden">
                      <Image src="/placeholder.svg?height=80&width=80" alt="Hotel" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="font-medium">Oceanfront Resort</h3>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        Miami, Florida
                      </p>
                      <div className="flex items-center gap-1 mt-1">
                        <Badge variant="secondary" className="text-xs">
                          <Wheelchair className="h-3 w-3 mr-1" />
                          Mobility Accessible
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        Check-in
                      </div>
                      <div>April 15, 2023</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        Check-out
                      </div>
                      <div>April 20, 2023</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        Guests
                      </div>
                      <div>2 Adults</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4 text-muted-foreground" />
                        Room
                      </div>
                      <div>Accessible King Room</div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t">
                    <div className="flex justify-between">
                      <span>$250 × 5 nights</span>
                      <span>$1,250.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cleaning fee</span>
                      <span>$100.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Service fee</span>
                      <span>$135.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Equipment rental</span>
                      <span>$0.00</span>
                    </div>
                    <div className="flex justify-between font-medium pt-4 border-t">
                      <span>Total</span>
                      <span>$1,485.00</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t text-sm text-muted-foreground">
                    <p>
                      Cancellation policy: Free cancellation up to 48 hours before check-in. After that, the first night
                      is non-refundable.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="w-full text-center text-sm text-muted-foreground">
                    Need help?{" "}
                    <Link href="#" className="text-primary underline">
                      Contact our accessibility specialists
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

