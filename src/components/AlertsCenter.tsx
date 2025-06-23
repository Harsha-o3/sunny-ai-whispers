
import { AlertTriangle, Info, X, Bell } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

export const AlertsCenter = () => {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: 'warning' as const,
      severity: 'moderate',
      title: 'UV Index Alert',
      message: 'UV levels will reach moderate to high levels between 11 AM - 3 PM. Consider sun protection when outdoors.',
      timestamp: '1 hour ago',
      location: 'San Francisco Bay Area',
      action: 'View Details'
    },
    {
      id: 2,
      type: 'info' as const,
      severity: 'low',
      title: 'Air Quality Notice',
      message: 'Air quality is good today with AQI of 45. Excellent conditions for outdoor activities and exercise.',
      timestamp: '3 hours ago',
      location: 'San Francisco',
      action: 'Dismiss'
    }
  ]);

  const dismissAlert = (id: number) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  if (alerts.length === 0) {
    return (
      <div className="glass-card mx-6 rounded-2xl p-4 minimal-shadow">
        <div className="flex items-center justify-center space-x-2 text-slate-500">
          <Bell className="w-4 h-4" />
          <span className="text-sm font-medium">No active weather alerts</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {alerts.map((alert) => (
        <Alert 
          key={alert.id} 
          className={`glass-card border-0 minimal-shadow ${
            alert.type === 'warning' 
              ? 'bg-gradient-to-r from-orange-50 to-yellow-50 border-l-4 border-l-orange-400' 
              : 'bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-l-blue-400'
          }`}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              {alert.type === 'warning' ? (
                <div className="w-8 h-8 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-xl flex items-center justify-center mt-1">
                  <AlertTriangle className="h-4 w-4 text-orange-600" />
                </div>
              ) : (
                <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mt-1">
                  <Info className="h-4 w-4 text-blue-600" />
                </div>
              )}
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h4 className="font-semibold text-slate-800 text-sm">{alert.title}</h4>
                  <Badge 
                    className={`text-xs ${
                      alert.severity === 'moderate' 
                        ? 'bg-orange-100 text-orange-700 hover:bg-orange-200' 
                        : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                    }`}
                  >
                    {alert.severity}
                  </Badge>
                  <span className="text-xs text-slate-500">• {alert.timestamp}</span>
                </div>
                <AlertDescription className="text-slate-700 text-sm mb-2 leading-relaxed">
                  {alert.message}
                </AlertDescription>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">{alert.location}</span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className={`text-xs font-medium ${
                      alert.type === 'warning' 
                        ? 'text-orange-600 hover:bg-orange-100' 
                        : 'text-blue-600 hover:bg-blue-100'
                    }`}
                  >
                    {alert.action}
                  </Button>
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => dismissAlert(alert.id)}
              className="text-slate-400 hover:text-slate-600 hover:bg-slate-100 h-8 w-8 p-0 rounded-lg"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </Alert>
      ))}
    </div>
  );
};
