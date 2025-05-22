import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { SiteHeader } from "@/components/site-header"
import { User, AlertTriangle, FileText, Plus, Pill, Syringe, Droplets } from "lucide-react"

export default function EmergencyInfoPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen py-12">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-4 mb-10">
              <h1 className="text-3xl font-bold tracking-tighter">Emergency Information</h1>
              <p className="text-muted-foreground max-w-[700px]">
                Store your emergency contacts and medical information for quick access during your travels.
              </p>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Emergency Contacts</CardTitle>
                <CardDescription>People to contact in case of emergency</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border rounded-lg p-4 space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <User className="h-5 w-5 text-muted-foreground" />
                      <h3 className="font-medium">Primary Contact</h3>
                    </div>
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="primary-name">Name</Label>
                      <Input id="primary-name" placeholder="Full Name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="primary-relationship">Relationship</Label>
                      <Input id="primary-relationship" placeholder="e.g., Spouse, Parent" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="primary-phone">Phone Number</Label>
                      <Input id="primary-phone" placeholder="Phone Number" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="primary-email">Email</Label>
                      <Input id="primary-email" placeholder="Email Address" />
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4 space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <User className="h-5 w-5 text-muted-foreground" />
                      <h3 className="font-medium">Secondary Contact</h3>
                    </div>
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="secondary-name">Name</Label>
                      <Input id="secondary-name" placeholder="Full Name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="secondary-relationship">Relationship</Label>
                      <Input id="secondary-relationship" placeholder="e.g., Sibling, Friend" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="secondary-phone">Phone Number</Label>
                      <Input id="secondary-phone" placeholder="Phone Number" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="secondary-email">Email</Label>
                      <Input id="secondary-email" placeholder="Email Address" />
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full gap-1">
                  <Plus className="h-4 w-4" />
                  Add Another Contact
                </Button>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Medical Information</CardTitle>
                <CardDescription>Important medical details for emergency situations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="medical-conditions">Medical Conditions</Label>
                  <Textarea
                    id="medical-conditions"
                    placeholder="List any relevant medical conditions..."
                    className="min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="allergies">Allergies</Label>
                  <Textarea
                    id="allergies"
                    placeholder="List any allergies, including food, medication, or environmental..."
                    className="min-h-[100px]"
                  />
                </div>

                <div className="space-y-4">
                  <Label>Medications</Label>

                  <div className="border rounded-lg p-4 space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Pill className="h-5 w-5 text-muted-foreground" />
                        <h3 className="font-medium">Medication 1</h3>
                      </div>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="med1-name">Medication Name</Label>
                        <Input id="med1-name" placeholder="Medication Name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="med1-dosage">Dosage</Label>
                        <Input id="med1-dosage" placeholder="e.g., 10mg, twice daily" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="med1-purpose">Purpose/Notes</Label>
                      <Input id="med1-purpose" placeholder="What is this medication for?" />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="med1-refrigeration" />
                      <Label htmlFor="med1-refrigeration" className="text-sm">
                        Requires refrigeration
                      </Label>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full gap-1">
                    <Plus className="h-4 w-4" />
                    Add Another Medication
                  </Button>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="blood-type">Blood Type</Label>
                  <Select>
                    <SelectTrigger id="blood-type">
                      <SelectValue placeholder="Select Blood Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="a-positive">A+</SelectItem>
                      <SelectItem value="a-negative">A-</SelectItem>
                      <SelectItem value="b-positive">B+</SelectItem>
                      <SelectItem value="b-negative">B-</SelectItem>
                      <SelectItem value="ab-positive">AB+</SelectItem>
                      <SelectItem value="ab-negative">AB-</SelectItem>
                      <SelectItem value="o-positive">O+</SelectItem>
                      <SelectItem value="o-negative">O-</SelectItem>
                      <SelectItem value="unknown">Unknown</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="doctor-info">Primary Physician Information</Label>
                  <Textarea
                    id="doctor-info"
                    placeholder="Name, phone number, and any other relevant information..."
                    className="min-h-[100px]"
                  />
                </div>

                <div className="space-y-4">
                  <Label>Medical Devices & Equipment</Label>

                  <div className="border rounded-lg p-4 space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Syringe className="h-5 w-5 text-muted-foreground" />
                        <h3 className="font-medium">Device/Equipment 1</h3>
                      </div>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="device1-name">Device Name</Label>
                      <Input id="device1-name" placeholder="e.g., Insulin Pump, CPAP Machine" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="device1-instructions">Usage Instructions</Label>
                      <Textarea
                        id="device1-instructions"
                        placeholder="Important information about this device..."
                        className="min-h-[80px]"
                      />
                    </div>
                  </div>

                  <Button variant="outline" className="w-full gap-1">
                    <Plus className="h-4 w-4" />
                    Add Another Device
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Emergency Instructions</CardTitle>
                <CardDescription>Special instructions for emergency responders</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="emergency-instructions">Special Instructions</Label>
                  <Textarea
                    id="emergency-instructions"
                    placeholder="Any specific instructions for emergency situations..."
                    className="min-h-[150px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="communication-needs">Communication Needs</Label>
                  <Select>
                    <SelectTrigger id="communication-needs">
                      <SelectValue placeholder="Select Communication Method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="verbal">Verbal Communication</SelectItem>
                      <SelectItem value="sign-language">Sign Language</SelectItem>
                      <SelectItem value="written">Written Communication</SelectItem>
                      <SelectItem value="communication-device">Communication Device</SelectItem>
                      <SelectItem value="interpreter">Requires Interpreter</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg flex gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-amber-800">
                    <p className="font-medium mb-1">Important Note</p>
                    <p>
                      This information will be accessible to emergency responders and medical staff if needed during
                      your travels. It will be stored securely and only accessed in emergency situations.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Save Emergency Information</Button>
              </CardFooter>
            </Card>

            <div className="flex flex-col items-center gap-4 mt-8">
              <div className="flex gap-4">
                <Button variant="outline" className="gap-2">
                  <FileText className="h-4 w-4" />
                  Download as PDF
                </Button>
                <Button variant="outline" className="gap-2">
                  <Droplets className="h-4 w-4" />
                  Create Medical ID Card
                </Button>
              </div>
              <p className="text-sm text-muted-foreground text-center max-w-md">
                We recommend keeping a printed copy of this information with you during your travels, especially if you
                have specific medical needs.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

