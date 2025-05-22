"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { X, Type, Contrast, MousePointer, Volume2 } from "lucide-react"

export function AccessibilityPanel({ onClose }: { onClose: () => void }) {
  const [fontSize, setFontSize] = useState(100)
  const [contrast, setContrast] = useState(100)
  const [cursorSize, setCursorSize] = useState(16)

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Accessibility Settings</CardTitle>
            <CardDescription>Customize your browsing experience</CardDescription>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="visual">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="visual">Visual</TabsTrigger>
              <TabsTrigger value="motor">Motor</TabsTrigger>
              <TabsTrigger value="audio">Audio</TabsTrigger>
            </TabsList>
            <TabsContent value="visual" className="space-y-6 pt-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Type className="h-4 w-4" />
                    <Label htmlFor="font-size">Font Size: {fontSize}%</Label>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => setFontSize(100)} className="h-8">
                    Reset
                  </Button>
                </div>
                <Slider
                  id="font-size"
                  min={75}
                  max={200}
                  step={5}
                  value={[fontSize]}
                  onValueChange={(value) => setFontSize(value[0])}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Contrast className="h-4 w-4" />
                    <Label htmlFor="contrast">Contrast: {contrast}%</Label>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => setContrast(100)} className="h-8">
                    Reset
                  </Button>
                </div>
                <Slider
                  id="contrast"
                  min={75}
                  max={200}
                  step={5}
                  value={[contrast]}
                  onValueChange={(value) => setContrast(value[0])}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="color-blind" />
                <Label htmlFor="color-blind">Color Blind Mode</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="reduce-motion" />
                <Label htmlFor="reduce-motion">Reduce Motion</Label>
              </div>
            </TabsContent>

            <TabsContent value="motor" className="space-y-6 pt-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <MousePointer className="h-4 w-4" />
                    <Label htmlFor="cursor-size">Cursor Size: {cursorSize}px</Label>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => setCursorSize(16)} className="h-8">
                    Reset
                  </Button>
                </div>
                <Slider
                  id="cursor-size"
                  min={16}
                  max={64}
                  step={4}
                  value={[cursorSize]}
                  onValueChange={(value) => setCursorSize(value[0])}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="keyboard-navigation" />
                <Label htmlFor="keyboard-navigation">Enhanced Keyboard Navigation</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="sticky-keys" />
                <Label htmlFor="sticky-keys">Sticky Keys</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="auto-click" />
                <Label htmlFor="auto-click">Auto-Click (Hover)</Label>
              </div>
            </TabsContent>

            <TabsContent value="audio" className="space-y-6 pt-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Volume2 className="h-4 w-4" />
                    <Label htmlFor="volume">Screen Reader Volume</Label>
                  </div>
                </div>
                <Slider id="volume" min={0} max={100} step={5} defaultValue={[80]} />
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="screen-reader" />
                <Label htmlFor="screen-reader">Enable Screen Reader</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="captions" />
                <Label htmlFor="captions">Always Show Captions</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="audio-descriptions" />
                <Label htmlFor="audio-descriptions">Audio Descriptions</Label>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button>Save Preferences</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

