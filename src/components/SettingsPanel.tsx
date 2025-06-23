
import { Settings, Palette, Bell, MapPin, User } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const SettingsPanel = () => {
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

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        className="w-14 h-14 rounded-2xl bg-slate-800 hover:bg-slate-700 shadow-lg hover:shadow-xl transition-all duration-200 floating-element"
        size="sm"
      >
        <Settings className="w-6 h-6 text-white" />
      </Button>
      
      {/* Settings Panel - Hidden by default, would show on click */}
      <div className="hidden absolute bottom-16 right-0 w-80">
        <Card className="glass-card border-0 p-6 minimal-shadow">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Settings</h3>
          <div className="space-y-4">
            {settingsCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="p-4 bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl hover:shadow-sm transition-all duration-200 cursor-pointer">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center minimal-shadow">
                      <Icon className="w-4 h-4 text-slate-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-slate-800 mb-1">{category.title}</div>
                      <div className="text-xs text-slate-600 mb-2">{category.description}</div>
                      <div className="flex flex-wrap gap-1">
                        {category.items.map((item, itemIndex) => (
                          <Badge key={itemIndex} variant="outline" className="text-xs border-slate-200 text-slate-600">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
};
