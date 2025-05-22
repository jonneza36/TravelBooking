"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { ShipWheelIcon as Wheelchair, Eye, Ear, Heart, Save, Plus } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function AccessibilityProfile() {
  const [savedProfiles, setSavedProfiles] = useState([
    { id: 1, name: "Personal Travel" },
    { id: 2, name: "Family Trip" },
  ])

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Your Accessibility Profile</CardTitle>
        <CardDescription>Save your accessibility needs for faster booking</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="current">
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="current">Current Profile</TabsTrigger>
              <TabsTrigger value="saved">Saved Profiles</TabsTrigger>
            </TabsList>
            <Button variant="outline" size="sm" className="gap-1">
              <Save className="h-4 w-4" />
              Save Current
            </Button>
          </div>

          <TabsContent value="current" className="space-y-6">
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="profile-name">Profile Name</Label>
                <Input id="profile-name" placeholder="e.g., Personal Travel, Family Trip" />
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-medium">Accessibility Requirements</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox id="mobility-profile" />
                      <div className="grid gap-1.5 leading-none">
                        <Label htmlFor="mobility-profile" className="flex items-center gap-2 text-sm font-medium">
                          <Wheelchair className="h-4 w-4" />
                          Mobility Access
                        </Label>

                        <div className="pl-6 pt-2 space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="wheelchair" />
                            <Label htmlFor="wheelchair" className="text-xs">
                              Wheelchair user
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="walker" />
                            <Label htmlFor="walker" className="text-xs">
                              Walker/cane user
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="limited-walking" />
                            <Label htmlFor="limited-walking" className="text-xs">
                              Limited walking distance
                            </Label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox id="visual-profile" />
                      <div className="grid gap-1.5 leading-none">
                        <Label htmlFor="visual-profile" className="flex items-center gap-2 text-sm font-medium">
                          <Eye className="h-4 w-4" />
                          Visual Impairment
                        </Label>

                        <div className="pl-6 pt-2 space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="blind" />
                            <Label htmlFor="blind" className="text-xs">
                              Blind/low vision
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="guide-dog" />
                            <Label htmlFor="guide-dog" className="text-xs">
                              Travel with guide dog
                            </Label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox id="hearing-profile" />
                      <div className="grid gap-1.5 leading-none">
                        <Label htmlFor="hearing-profile" className="flex items-center gap-2 text-sm font-medium">
                          <Ear className="h-4 w-4" />
                          Hearing Impairment
                        </Label>

                        <div className="pl-6 pt-2 space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="deaf" />
                            <Label htmlFor="deaf" className="text-xs">
                              Deaf/hard of hearing
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="sign-language" />
                            <Label htmlFor="sign-language" className="text-xs">
                              Sign language preferred
                            </Label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox id="medical-profile" />
                      <div className="grid gap-1.5 leading-none">
                        <Label htmlFor="medical-profile" className="flex items-center gap-2 text-sm font-medium">
                          <Heart className="h-4 w-4" />
                          Medical Needs
                        </Label>

                        <div className="pl-6 pt-2 space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="medication-storage" />
                            <Label htmlFor="medication-storage" className="text-xs">
                              Medication refrigeration
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="medical-equipment" />
                            <Label htmlFor="medical-equipment" className="text-xs">
                              Medical equipment
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="oxygen" />
                            <Label htmlFor="oxygen" className="text-xs">
                              Oxygen requirements
                            </Label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="additional-needs">Additional Needs or Notes</Label>
                <Textarea
                  id="additional-needs"
                  placeholder="Please describe any specific requirements or preferences not covered above..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="emergency-contact">Emergency Contact (Optional)</Label>
                <Input id="emergency-contact" placeholder="Name and phone number" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="saved">
            <div className="space-y-4">
              {savedProfiles.map((profile) => (
                <div key={profile.id} className="flex items-center justify-between p-3 border rounded-md">
                  <div>
                    <p className="font-medium">{profile.name}</p>
                    <p className="text-sm text-muted-foreground">Last updated: 2 weeks ago</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="default" size="sm">
                      Load
                    </Button>
                  </div>
                </div>
              ))}

              <Button variant="outline" className="w-full gap-1 mt-2">
                <Plus className="h-4 w-4" />
                Create New Profile
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Apply to Current Search</Button>
      </CardFooter>
    </Card>
  )
}

