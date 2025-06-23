
import { Settings, Palette, Bell, MapPin, User, Monitor, Smartphone, Globe, Thermometer, Clock, Shield, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';

export const SettingsPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState({
    units: 'celsius',
    theme: 'light',
    notifications: {
      weather: true,
      severe: true,
      daily: false,
      hourly: false
    },
    location: {
      auto: true,
      city: 'San Francisco, CA'
    },
    refreshRate: '5',
    language: 'en'
  });

  const settingsCategories = [
    {
      icon: User,
      title: 'Profile',
      description: 'Personal preferences and account settings',
      items: ['Location', 'Units', 'Language']
    },
    {
      icon: Bell,
      title: 'Notifications',
      description: 'Alert preferences and notification settings',
      items: ['Weather Alerts', 'Daily Forecasts', 'Severe Weather']
    },
    {
      icon: Palette,
      title: 'Appearance',
      description: 'Theme and display customization',
      items: ['Theme', 'Layout', 'Color Scheme']
    },
    {
      icon: MapPin,
      title: 'Locations',
      description: 'Manage saved locations and favorites',
      items: ['Home', 'Work', 'Favorites']
    }
  ];

  const notificationTypes = [
    { 
      id: 'weather', 
      label: 'Weather Updates', 
      description: 'General weather condition changes',
      icon: Monitor,
      enabled: settings.notifications.weather
    },
    { 
      id: 'severe', 
      label: 'Severe Weather Alerts', 
      description: 'Critical weather warnings and emergencies',
      icon: Shield,
      enabled: settings.notifications.severe
    },
    { 
      id: 'daily', 
      label: 'Daily Forecasts', 
      description: 'Morning weather summary',
      icon: Clock,
      enabled: settings.notifications.daily
    },
    { 
      id: 'hourly', 
      label: 'Hourly Updates', 
      description: 'Detailed hourly weather changes',
      icon: Zap,
      enabled: settings.notifications.hourly
    }
  ];

  const savedLocations = [
    { name: 'Home', address: 'San Francisco, CA', default: true },
    { name: 'Work', address: 'Palo Alto, CA', default: false },
    { name: 'Vacation', address: 'Lake Tahoe, CA', default: false }
  ];

  const handleNotificationToggle = (type: string) => {
    setSettings(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [type]: !prev.notifications[type as keyof typeof prev.notifications]
      }
    }));
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-2xl bg-slate-800 hover:bg-slate-700 shadow-lg hover:shadow-xl transition-all duration-200 floating-element"
        size="sm"
      >
        <Settings className="w-6 h-6 text-white" />
      </Button>
      
      {/* Enhanced Settings Panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-96">
          <Card className="glass-card border-0 minimal-shadow">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-800">Settings</h3>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setIsOpen(false)}
                  className="text-slate-500 hover:text-slate-700"
                >
                  ✕
                </Button>
              </div>

              <Tabs defaultValue="general" className="w-full">
                <TabsList className="grid w-full grid-cols-4 bg-slate-100 rounded-xl p-1">
                  <TabsTrigger value="general" className="text-xs rounded-lg">General</TabsTrigger>
                  <TabsTrigger value="notifications" className="text-xs rounded-lg">Alerts</TabsTrigger>
                  <TabsTrigger value="locations" className="text-xs rounded-lg">Places</TabsTrigger>
                  <TabsTrigger value="display" className="text-xs rounded-lg">Display</TabsTrigger>
                </TabsList>

                <TabsContent value="general" className="mt-6">
                  <div className="space-y-6">
                    {/* Units Selection */}
                    <div>
                      <div className="flex items-center space-x-2 mb-3">
                        <Thermometer className="w-4 h-4 text-slate-600" />
                        <label className="text-sm font-medium text-slate-800">Temperature Units</label>
                      </div>
                      <Select value={settings.units} onValueChange={(value) => setSettings(prev => ({...prev, units: value}))}>
                        <SelectTrigger className="w-full">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="celsius">Celsius (°C)</SelectItem>
                          <SelectItem value="fahrenheit">Fahrenheit (°F)</SelectItem>
                          <SelectItem value="kelvin">Kelvin (K)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Language Selection */}
                    <div>
                      <div className="flex items-center space-x-2 mb-3">
                        <Globe className="w-4 h-4 text-slate-600" />
                        <label className="text-sm font-medium text-slate-800">Language</label>
                      </div>
                      <Select value={settings.language} onValueChange={(value) => setSettings(prev => ({...prev, language: value}))}>
                        <SelectTrigger className="w-full">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="es">Español</SelectItem>
                          <SelectItem value="fr">Français</SelectItem>
                          <SelectItem value="de">Deutsch</SelectItem>
                          <SelectItem value="zh">中文</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Refresh Rate */}
                    <div>
                      <div className="flex items-center space-x-2 mb-3">
                        <Zap className="w-4 h-4 text-slate-600" />
                        <label className="text-sm font-medium text-slate-800">Data Refresh Rate</label>
                      </div>
                      <Select value={settings.refreshRate} onValueChange={(value) => setSettings(prev => ({...prev, refreshRate: value}))}>
                        <SelectTrigger className="w-full">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">Every minute</SelectItem>
                          <SelectItem value="5">Every 5 minutes</SelectItem>
                          <SelectItem value="15">Every 15 minutes</SelectItem>
                          <SelectItem value="30">Every 30 minutes</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="notifications" className="mt-6">
                  <div className="space-y-4">
                    <div className="text-sm text-slate-600 mb-4">
                      Choose which weather alerts you'd like to receive
                    </div>
                    {notificationTypes.map((notification) => {
                      const Icon = notification.icon;
                      return (
                        <div key={notification.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center minimal-shadow">
                              <Icon className="w-4 h-4 text-slate-600" />
                            </div>
                            <div>
                              <div className="font-medium text-slate-800 text-sm">{notification.label}</div>
                              <div className="text-xs text-slate-600">{notification.description}</div>
                            </div>
                          </div>
                          <Switch
                            checked={notification.enabled}
                            onCheckedChange={() => handleNotificationToggle(notification.id)}
                          />
                        </div>
                      );
                    })}
                  </div>
                </TabsContent>

                <TabsContent value="locations" className="mt-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium text-slate-800">Saved Locations</div>
                      <Button variant="outline" size="sm" className="text-xs">
                        Add New
                      </Button>
                    </div>
                    
                    <div className="space-y-3">
                      {savedLocations.map((location, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl">
                          <div className="flex items-center space-x-3">
                            <MapPin className="w-4 h-4 text-slate-500" />
                            <div>
                              <div className="font-medium text-slate-800 text-sm">{location.name}</div>
                              <div className="text-xs text-slate-600">{location.address}</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            {location.default && (
                              <Badge variant="outline" className="text-xs">Default</Badge>
                            )}
                            <Button variant="ghost" size="sm" className="text-xs text-slate-500">
                              Edit
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                      <div className="flex items-center space-x-2 mb-2">
                        <MapPin className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium text-blue-800">Auto-Location</span>
                        <Switch
                          checked={settings.location.auto}
                          onCheckedChange={(checked) => setSettings(prev => ({
                            ...prev,
                            location: {...prev.location, auto: checked}
                          }))}
                        />
                      </div>
                      <div className="text-xs text-blue-600">
                        Automatically detect your current location for weather updates
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="display" className="mt-6">
                  <div className="space-y-6">
                    {/* Theme Selection */}
                    <div>
                      <div className="flex items-center space-x-2 mb-3">
                        <Palette className="w-4 h-4 text-slate-600" />
                        <label className="text-sm font-medium text-slate-800">Theme</label>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {['light', 'dark', 'auto'].map((theme) => (
                          <button
                            key={theme}
                            onClick={() => setSettings(prev => ({...prev, theme}))}
                            className={`p-3 rounded-xl border-2 transition-all duration-200 ${
                              settings.theme === theme 
                                ? 'border-slate-400 bg-slate-100' 
                                : 'border-slate-200 hover:border-slate-300'
                            }`}
                          >
                            <div className="text-xs font-medium text-slate-800 capitalize">{theme}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Display Options */}
                    <div className="space-y-4">
                      <div className="text-sm font-medium text-slate-800">Display Options</div>
                      
                      <div className="flex items-center justify-between p-3 bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl">
                        <div>
                          <div className="text-sm font-medium text-slate-800">Animations</div>
                          <div className="text-xs text-slate-600">Enable smooth transitions and effects</div>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <div className="flex items-center justify-between p-3 bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl">
                        <div>
                          <div className="text-sm font-medium text-slate-800">Compact Mode</div>
                          <div className="text-xs text-slate-600">Show more information in less space</div>
                        </div>
                        <Switch />
                      </div>

                      <div className="flex items-center justify-between p-3 bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl">
                        <div>
                          <div className="text-sm font-medium text-slate-800">24-Hour Format</div>
                          <div className="text-xs text-slate-600">Display time in 24-hour format</div>
                        </div>
                        <Switch />
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-6 pt-4 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <div className="text-xs text-slate-500">Version 2.1.0</div>
                  <Button variant="outline" size="sm" className="text-xs">
                    Export Settings
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};
