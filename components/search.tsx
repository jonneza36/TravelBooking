"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CalendarIcon, SearchIcon, ShipWheelIcon as Wheelchair, Eye, Ear, Brain, Heart, Filter } from "lucide-react"
import { Card } from "@/components/ui/card"

export function Search() {
  const [date, setDate] = useState<Date>()
  const [showFilters, setShowFilters] = useState(false)

  return (
    <Card className="w-full max-w-4xl mx-auto p-6 shadow-lg">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="destination" className="text-base">
              Where to?
            </Label>
            <Input id="destination" placeholder="City, region, or specific place" className="h-12" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="dates" className="text-base">
              When?
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button id="dates" variant="outline" className="h-12 w-full justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? date.toDateString() : "Select dates"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label htmlFor="travelers" className="text-base">
              Travelers
            </Label>
            <Select>
              <SelectTrigger id="travelers" className="h-12">
                <SelectValue placeholder="Number of travelers" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Traveler</SelectItem>
                <SelectItem value="2">2 Travelers</SelectItem>
                <SelectItem value="3">3 Travelers</SelectItem>
                <SelectItem value="4">4+ Travelers</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Button type="button" variant="outline" className="gap-2" onClick={() => setShowFilters(!showFilters)}>
            <Filter className="h-4 w-4" />
            Accessibility Filters
          </Button>

          <Button type="submit" className="gap-2 h-12 px-6">
            <SearchIcon className="h-4 w-4" />
            Search
          </Button>
        </div>

        {showFilters && (
          <div className="pt-4 border-t">
            <h3 className="font-medium mb-4">Accessibility Requirements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
              <div className="flex items-start space-x-2">
                <Checkbox id="mobility" />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="mobility" className="flex items-center gap-2 text-sm font-normal">
                    <Wheelchair className="h-4 w-4" />
                    Mobility Access
                  </Label>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox id="visual" />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="visual" className="flex items-center gap-2 text-sm font-normal">
                    <Eye className="h-4 w-4" />
                    Visual Impairment Support
                  </Label>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox id="hearing" />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="hearing" className="flex items-center gap-2 text-sm font-normal">
                    <Ear className="h-4 w-4" />
                    Hearing Impairment Support
                  </Label>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox id="cognitive" />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="cognitive" className="flex items-center gap-2 text-sm font-normal">
                    <Brain className="h-4 w-4" />
                    Cognitive Accessibility
                  </Label>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox id="medical" />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="medical" className="flex items-center gap-2 text-sm font-normal">
                    <Heart className="h-4 w-4" />
                    Medical Support Needed
                  </Label>
                </div>
              </div>
            </div>

            <Accordion type="single" collapsible className="mt-4">
              <AccordionItem value="advanced">
                <AccordionTrigger className="text-sm">Advanced Filters</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 pt-2">
                    <div className="flex items-start space-x-2">
                      <Checkbox id="elevator" />
                      <div className="grid gap-1.5 leading-none">
                        <Label htmlFor="elevator" className="text-sm font-normal">
                          Elevator Access
                        </Label>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox id="ground-floor" />
                      <div className="grid gap-1.5 leading-none">
                        <Label htmlFor="ground-floor" className="text-sm font-normal">
                          Ground Floor Accommodation
                        </Label>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox id="roll-in-shower" />
                      <div className="grid gap-1.5 leading-none">
                        <Label htmlFor="roll-in-shower" className="text-sm font-normal">
                          Roll-in Shower
                        </Label>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox id="grab-bars" />
                      <div className="grid gap-1.5 leading-none">
                        <Label htmlFor="grab-bars" className="text-sm font-normal">
                          Bathroom Grab Bars
                        </Label>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox id="service-animals" />
                      <div className="grid gap-1.5 leading-none">
                        <Label htmlFor="service-animals" className="text-sm font-normal">
                          Service Animals Welcome
                        </Label>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox id="staff-trained" />
                      <div className="grid gap-1.5 leading-none">
                        <Label htmlFor="staff-trained" className="text-sm font-normal">
                          Staff Trained in Accessibility
                        </Label>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        )}
      </div>
    </Card>
  )
}

