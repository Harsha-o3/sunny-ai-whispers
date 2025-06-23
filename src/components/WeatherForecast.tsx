
import { Cloud, CloudRain, Sun } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const WeatherForecast = () => {
  const forecastData = [
    { day: 'Today', high: 75, low: 58, condition: 'sunny', precipitation: 0 },
    { day: 'Tomorrow', high: 72, low: 55, condition: 'rainy', precipitation: 75 },
    { day: 'Wednesday', high: 68, low: 52, condition: 'cloudy', precipitation: 20 },
    { day: 'Thursday', high: 70, low: 54, condition: 'sunny', precipitation: 5 },
    { day: 'Friday', high: 73, low: 57, condition: 'sunny', precipitation: 0 },
  ];

  const getIcon = (condition: string) => {
    switch (condition) {
      case 'sunny': return Sun;
      case 'rainy': return CloudRain;
      case 'cloudy': return Cloud;
      default: return Sun;
    }
  };

  const getIconColor = (condition: string) => {
    switch (condition) {
      case 'sunny': return 'text-weather-sunny-500';
      case 'rainy': return 'text-weather-rainy-500';
      case 'cloudy': return 'text-weather-cloudy-500';
      default: return 'text-weather-sunny-500';
    }
  };

  return (
    <Card className="glass-card border-0 shadow-xl">
      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-4">5-Day Forecast</h3>
        
        <div className="space-y-4">
          {forecastData.map((day, index) => {
            const IconComponent = getIcon(day.condition);
            const iconColor = getIconColor(day.condition);
            
            return (
              <div key={index} className="flex items-center justify-between p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <IconComponent className={`w-6 h-6 ${iconColor}`} />
                  <div>
                    <p className="font-semibold text-white">{day.day}</p>
                    <p className="text-white/60 text-sm">{day.precipitation}% rain</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="flex items-center space-x-2">
                    <span className="text-white font-bold">{day.high}°</span>
                    <span className="text-white/60">{day.low}°</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-4 p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-white/10">
          <p className="text-white/80 text-sm text-center">
            📊 Forecast accuracy: 94% • Updated 5 minutes ago
          </p>
        </div>
      </div>
    </Card>
  );
};
