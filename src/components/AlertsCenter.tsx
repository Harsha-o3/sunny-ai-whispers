
import { AlertTriangle, Cloud, Zap, Wind, Thermometer, Droplets, Eye, Shield, Clock, MapPin, Phone, Info } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

export const AlertsCenter = () => {
  const alerts = [
    {
      id: 1,
      type: 'warning',
      severity: 'medium',
      title: 'UV Index High Alert',
      description: 'UV levels will reach 8 (Very High) between 11 AM - 3 PM today. Limit outdoor exposure and use SPF 30+ sunscreen.',
      icon: Thermometer,
      location: 'San Francisco Bay Area',
      validUntil: '6:00 PM today',
      issued: '2 hours ago',
      source: 'National Weather Service',
      actions: ['Apply sunscreen', 'Seek shade', 'Wear protective clothing'],
      affectedAreas: ['Downtown', 'Mission District', 'Castro'],
      color: 'border-orange-200 bg-orange-50'
    },
    {
      id: 2,
      type: 'info',
      severity: 'low',
      title: 'Air Quality Notice',
      description: 'Air quality remains excellent today. Perfect conditions for outdoor activities and exercise.',
      icon: Wind,
      location: 'All Bay Area',
      validUntil: 'Tomorrow 6 AM',
      issued: '6 hours ago',
      source: 'EPA Air Quality Index',
      actions: ['Enjoy outdoor activities', 'Open windows for fresh air'],
      affectedAreas: ['All districts'],
      color: 'border-green-200 bg-green-50'
    },
    {
      id: 3,
      type: 'watch',
      severity: 'high',
      title: 'Fog Advisory',
      description: 'Dense fog expected tonight reducing visibility to less than 1/4 mile. Exercise caution while driving.',
      icon: Eye,
      location: 'Coastal Areas',
      validUntil: 'Tomorrow 9 AM',
      issued: '1 hour ago',
      source: 'National Weather Service',
      actions: ['Drive slowly', 'Use low beam headlights', 'Allow extra travel time'],
      affectedAreas: ['Richmond', 'Sunset', 'Ocean Beach'],
      color: 'border-blue-200 bg-blue-50'
    }
  ];

  const emergencyInfo = {
    emergency: '911',
    nonEmergency: '311',
    weatherService: '(415) 656-1725',
    lastUpdated: '5 minutes ago'
  };

  const safetyTips = [
    {
      icon: Shield,
      title: 'UV Protection',
      tips: ['Wear sunglasses and wide-brimmed hats', 'Apply broad-spectrum SPF 30+ sunscreen', 'Seek shade during peak hours (11 AM - 3 PM)']
    },
    {
      icon: Droplets,
      title: 'Hydration',
      tips: ['Drink water regularly, even if not thirsty', 'Avoid excessive caffeine and alcohol', 'Monitor urine color for hydration levels']
    },
    {
      icon: Wind,
      title: 'Air Quality',
      tips: ['Check AQI before outdoor activities', 'Limit strenuous exercise during poor air quality', 'Consider indoor alternatives when AQI > 100']
    }
  ];

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'warning': return AlertTriangle;
      case 'watch': return Eye;
      case 'info': return Info;
      default: return AlertTriangle;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-orange-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      {/* Active Alerts */}
      {alerts.length > 0 && (
        <Card className="glass-card border-0 p-6 minimal-shadow">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-800">Active Weather Alerts</h2>
                <p className="text-sm text-slate-500">{alerts.length} active alerts in your area</p>
              </div>
            </div>
            <Badge variant="outline" className="text-slate-600">
              Last updated: {emergencyInfo.lastUpdated}
            </Badge>
          </div>

          <div className="space-y-4">
            {alerts.map((alert) => {
              const AlertIcon = alert.icon;
              const TypeIcon = getAlertIcon(alert.type);
              
              return (
                <Alert key={alert.id} className={`${alert.color} border-l-4 hover:shadow-md transition-all duration-200`}>
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center minimal-shadow">
                        <AlertIcon className="w-6 h-6 text-slate-600" />
                      </div>
                      <div className={`w-3 h-3 rounded-full ${getSeverityColor(alert.severity)}`} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-slate-800 mb-1">{alert.title}</h3>
                          <div className="flex items-center space-x-3 mb-2">
                            <Badge variant="outline" className="text-xs">
                              {alert.type.toUpperCase()}
                            </Badge>
                            <span className="text-xs text-slate-500 flex items-center">
                              <MapPin className="w-3 h-3 mr-1" />
                              {alert.location}
                            </span>
                            <span className="text-xs text-slate-500 flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              Valid until {alert.validUntil}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <AlertDescription className="text-slate-700 mb-4">
                        {alert.description}
                      </AlertDescription>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h4 className="text-sm font-medium text-slate-800 mb-2">Recommended Actions:</h4>
                          <ul className="text-sm text-slate-600 space-y-1">
                            {alert.actions.map((action, index) => (
                              <li key={index} className="flex items-center">
                                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-2" />
                                {action}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-slate-800 mb-2">Affected Areas:</h4>
                          <div className="flex flex-wrap gap-1">
                            {alert.affectedAreas.map((area, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {area}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <span>Issued: {alert.issued} • Source: {alert.source}</span>
                        <Button variant="outline" size="sm" className="text-xs">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </Alert>
              );
            })}
          </div>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Emergency Contacts */}
        <Card className="glass-card border-0 p-6 minimal-shadow">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center">
              <Phone className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-800">Emergency Contacts</h3>
              <p className="text-sm text-slate-500">Important numbers for weather emergencies</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl">
              <div>
                <div className="font-semibold text-slate-800">Emergency Services</div>
                <div className="text-sm text-slate-600">Fire, Police, Medical Emergency</div>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-red-600">{emergencyInfo.emergency}</div>
                <Button variant="outline" size="sm" className="mt-1">Call Now</Button>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
              <div>
                <div className="font-semibold text-slate-800">Non-Emergency</div>
                <div className="text-sm text-slate-600">General city services</div>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-blue-600">{emergencyInfo.nonEmergency}</div>
                <Button variant="outline" size="sm" className="mt-1">Call</Button>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl">
              <div>
                <div className="font-semibold text-slate-800">Weather Service</div>
                <div className="text-sm text-slate-600">National Weather Service</div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-green-600">{emergencyInfo.weatherService}</div>
                <Button variant="outline" size="sm" className="mt-1">Call</Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Safety Tips */}
        <Card className="glass-card border-0 p-6 minimal-shadow">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center">
              <Shield className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-800">Weather Safety Tips</h3>
              <p className="text-sm text-slate-500">Stay safe in current conditions</p>
            </div>
          </div>
          
          <div className="space-y-4">
            {safetyTips.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="bg-gradient-to-r from-slate-50 to-gray-50 p-4 rounded-2xl">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center minimal-shadow">
                      <Icon className="w-4 h-4 text-slate-600" />
                    </div>
                    <h4 className="font-semibold text-slate-800">{category.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {category.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="text-sm text-slate-600 flex items-start">
                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-2 mt-2 flex-shrink-0" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
};
