
import { Cloud, CloudRain, Sun, Umbrella } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface CurrentWeatherProps {
  condition: 'sunny' | 'rainy' | 'cloudy';
}

export const CurrentWeather = ({ condition }: CurrentWeatherProps) => {
  const getWeatherData = () => {
    switch (condition) {
      case 'sunny':
        return {
          temp: 75,
          description: 'Sunny & Bright',
          icon: Sun,
          color: 'text-weather-sunny-600',
          bgColor: 'bg-weather-sunny-50',
          details: { humidity: 45, windSpeed: 8, uvIndex: 7 }
        };
      case 'rainy':
        return {
          temp: 58,
          description: 'Light Rain',
          icon: CloudRain,
          color: 'text-weather-rainy-600',
          bgColor: 'bg-weather-rainy-50',
          details: { humidity: 85, windSpeed: 12, precipitation: 75 }
        };
      case 'cloudy':
        return {
          temp: 68,
          description: 'Partly Cloudy',
          icon: Cloud,
          color: 'text-weather-cloudy-600',
          bgColor: 'bg-weather-cloudy-50',
          details: { humidity: 62, windSpeed: 6, cloudCover: 70 }
        };
    }
  };

  const weather = getWeatherData();
  const WeatherIcon = weather.icon;

  return (
    <Card className="glass-card border-0 shadow-2xl overflow-hidden">
      <div className="p-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <div className={`p-4 rounded-full ${weather.bgColor} animate-float`}>
                <WeatherIcon className={`w-12 h-12 ${weather.color}`} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-1">
                  {weather.temp}°F
                </h2>
                <p className="text-white/80 text-lg">{weather.description}</p>
                <p className="text-white/60 text-sm">San Francisco, CA</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <p className="text-white/60 text-xs uppercase tracking-wide">Humidity</p>
                <p className="text-white font-semibold text-lg">{weather.details.humidity}%</p>
              </div>
              <div className="text-center">
                <p className="text-white/60 text-xs uppercase tracking-wide">Wind</p>
                <p className="text-white font-semibold text-lg">{weather.details.windSpeed} mph</p>
              </div>
              <div className="text-center">
                <p className="text-white/60 text-xs uppercase tracking-wide">
                  {condition === 'sunny' ? 'UV Index' : condition === 'rainy' ? 'Rain' : 'Clouds'}
                </p>
                <p className="text-white font-semibold text-lg">
                  {condition === 'sunny' 
                    ? weather.details.uvIndex 
                    : condition === 'rainy' 
                    ? `${weather.details.precipitation}%` 
                    : `${weather.details.cloudCover}%`
                  }
                </p>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="text-right space-y-2">
              <div className="text-white/60 text-sm">Feels like</div>
              <div className="text-white text-2xl font-bold">{weather.temp + 2}°</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
