
import { AlertTriangle, Info, X } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export const EmergencyAlerts = () => {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: 'warning' as const,
      title: 'Heat Advisory',
      message: 'High temperatures expected. Stay hydrated and avoid prolonged sun exposure.',
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      type: 'info' as const,
      title: 'Air Quality Moderate',
      message: 'Air quality is acceptable for most people. Sensitive individuals should consider limiting outdoor activities.',
      timestamp: '4 hours ago'
    }
  ]);

  const dismissAlert = (id: number) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  if (alerts.length === 0) return null;

  return (
    <div className="space-y-3">
      {alerts.map((alert) => (
        <Alert 
          key={alert.id} 
          className={`glass-card border-0 shadow-lg ${
            alert.type === 'warning' 
              ? 'bg-red-500/20 border-red-300/30' 
              : 'bg-blue-500/20 border-blue-300/30'
          }`}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-3">
              {alert.type === 'warning' ? (
                <AlertTriangle className="h-5 w-5 text-red-300 mt-0.5 animate-pulse" />
              ) : (
                <Info className="h-5 w-5 text-blue-300 mt-0.5" />
              )}
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-semibold text-white text-sm">{alert.title}</h4>
                  <span className="text-xs text-white/60">• {alert.timestamp}</span>
                </div>
                <AlertDescription className="text-white/80 text-sm">
                  {alert.message}
                </AlertDescription>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => dismissAlert(alert.id)}
              className="text-white/60 hover:text-white hover:bg-white/10 h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </Alert>
      ))}
    </div>
  );
};
