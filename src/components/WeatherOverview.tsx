
import { Cloud, CloudRain, Sun, Wind, Droplets, Eye, Thermometer } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const WeatherOverview = () => {
  const currentWeather = {
    temperature: 22,
    condition: 'Partly Cloudy',
    description: 'Perfect weather for outdoor activities',
    location: 'San Francisco, CA',
    icon: Cloud,
    details: {
      humidity: 65,
      windSpeed: 12,
      visibility: 10,
      feelsLike: 24,
      uvIndex: 6,
      pressure: 1013
    }
  };

  const WeatherIcon = currentWeather.icon;

  const detailItems = [
    { label: 'Feels like', value: `${currentWeather.details.feelsLike}°`, icon: Thermometer },
    { label: 'Humidity', value: `${currentWeather.details.humidity}%`, icon: Droplets },
    { label: 'Wind Speed', value: `${currentWeather.details.windSpeed} km/h`, icon: Wind },
    { label: 'Visibility', value: `${currentWeather.details.visibility} km`, icon: Eye },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main Weather Card */}
      <Card className="lg:col-span-2 glass-card border-0 p-8 minimal-shadow">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-gray-200 rounded-3xl flex items-center justify-center floating-element">
              <WeatherIcon className="w-10 h-10 text-slate-600" />
            </div>
            <div>
              <div className="text-5xl font-bold text-slate-800 mb-2">
                {currentWeather.temperature}°
              </div>
              <h3 className="text-xl font-semibold text-slate-700 mb-1">
                {currentWeather.condition}
              </h3>
              <p className="text-slate-500 text-sm font-medium">
                {currentWeather.description}
              </p>
              <p className="text-slate-400 text-xs mt-1">
                {currentWeather.location}
              </p>
            </div>
          </div>
          
          <div className="hidden md:block text-right">
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 px-4 py-2 rounded-xl">
                <div className="text-xs text-orange-600 font-medium">UV Index</div>
                <div className="text-lg font-bold text-orange-700">{currentWeather.details.uvIndex}</div>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 rounded-xl">
                <div className="text-xs text-blue-600 font-medium">Pressure</div>
                <div className="text-lg font-bold text-blue-700">{currentWeather.details.pressure} mb</div>
              </div>
            </div>
          </div>
        </div>
      </Card>
      
      {/* Weather Details */}
      <Card className="glass-card border-0 p-6 minimal-shadow">
        <h4 className="text-lg font-semibold text-slate-800 mb-4">Weather Details</h4>
        <div className="space-y-4">
          {detailItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center minimal-shadow">
                    <Icon className="w-4 h-4 text-slate-600" />
                  </div>
                  <span className="text-sm font-medium text-slate-600">{item.label}</span>
                </div>
                <span className="text-sm font-bold text-slate-800">{item.value}</span>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};
