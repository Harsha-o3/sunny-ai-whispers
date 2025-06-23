
import { Cloud, CloudRain, Sun, Wind, Droplets, Eye, Thermometer, Gauge, Sunrise, Sunset, Navigation } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

export const WeatherOverview = () => {
  const currentWeather = {
    temperature: 22,
    condition: 'Partly Cloudy',
    description: 'Perfect weather for outdoor activities',
    location: 'San Francisco, CA',
    icon: Cloud,
    lastUpdated: '2 min ago',
    details: {
      humidity: 65,
      windSpeed: 12,
      windDirection: 'NW',
      visibility: 10,
      feelsLike: 24,
      uvIndex: 6,
      pressure: 1013,
      dewPoint: 16,
      sunrise: '6:42 AM',
      sunset: '7:28 PM',
      cloudCover: 45,
      airQuality: 'Good'
    }
  };

  const WeatherIcon = currentWeather.icon;

  const detailItems = [
    { label: 'Feels like', value: `${currentWeather.details.feelsLike}°`, icon: Thermometer, color: 'text-orange-600' },
    { label: 'Humidity', value: `${currentWeather.details.humidity}%`, icon: Droplets, color: 'text-blue-600' },
    { label: 'Wind Speed', value: `${currentWeather.details.windSpeed} km/h ${currentWeather.details.windDirection}`, icon: Wind, color: 'text-slate-600' },
    { label: 'Visibility', value: `${currentWeather.details.visibility} km`, icon: Eye, color: 'text-green-600' },
    { label: 'Pressure', value: `${currentWeather.details.pressure} mb`, icon: Gauge, color: 'text-purple-600' },
    { label: 'Dew Point', value: `${currentWeather.details.dewPoint}°`, icon: Droplets, color: 'text-cyan-600' },
  ];

  const getUvLevel = (index: number) => {
    if (index <= 2) return { level: 'Low', color: 'bg-green-500' };
    if (index <= 5) return { level: 'Moderate', color: 'bg-yellow-500' };
    if (index <= 7) return { level: 'High', color: 'bg-orange-500' };
    if (index <= 10) return { level: 'Very High', color: 'bg-red-500' };
    return { level: 'Extreme', color: 'bg-purple-500' };
  };

  const uvLevel = getUvLevel(currentWeather.details.uvIndex);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main Weather Card */}
      <Card className="lg:col-span-2 glass-card border-0 p-8 minimal-shadow">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-gradient-to-br from-slate-100 to-gray-200 rounded-3xl flex items-center justify-center floating-element">
              <WeatherIcon className="w-12 h-12 text-slate-600" />
            </div>
            <div>
              <div className="text-6xl font-bold text-slate-800 mb-2">
                {currentWeather.temperature}°
              </div>
              <h3 className="text-2xl font-semibold text-slate-700 mb-2">
                {currentWeather.condition}
              </h3>
              <p className="text-slate-500 font-medium mb-1">
                {currentWeather.description}
              </p>
              <div className="flex items-center space-x-2">
                <p className="text-slate-400 text-sm">
                  {currentWeather.location}
                </p>
                <Badge variant="outline" className="text-xs text-slate-500">
                  Updated {currentWeather.lastUpdated}
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Sun Times */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-4 rounded-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-xl flex items-center justify-center">
                <Sunrise className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <div className="text-xs text-orange-600 font-medium uppercase tracking-wide">Sunrise</div>
                <div className="text-lg font-bold text-orange-700">{currentWeather.details.sunrise}</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center">
                <Sunset className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <div className="text-xs text-indigo-600 font-medium uppercase tracking-wide">Sunset</div>
                <div className="text-lg font-bold text-indigo-700">{currentWeather.details.sunset}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Weather Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {detailItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-white to-slate-50 p-4 rounded-2xl minimal-shadow hover:shadow-md transition-all duration-200">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-slate-100 to-gray-200 rounded-lg flex items-center justify-center">
                    <Icon className={`w-4 h-4 ${item.color}`} />
                  </div>
                  <span className="text-xs font-medium text-slate-600 uppercase tracking-wide">{item.label}</span>
                </div>
                <div className="text-lg font-bold text-slate-800">{item.value}</div>
              </div>
            );
          })}
        </div>
      </Card>
      
      {/* Weather Details Sidebar */}
      <div className="space-y-6">
        {/* UV Index Card */}
        <Card className="glass-card border-0 p-6 minimal-shadow">
          <h4 className="text-lg font-semibold text-slate-800 mb-4">UV Index</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-slate-800">{currentWeather.details.uvIndex}</span>
              <Badge className={`${uvLevel.color} text-white border-0`}>
                {uvLevel.level}
              </Badge>
            </div>
            <Progress value={currentWeather.details.uvIndex * 10} className="h-2" />
            <p className="text-sm text-slate-600">
              {currentWeather.details.uvIndex <= 2 
                ? "No protection needed" 
                : currentWeather.details.uvIndex <= 5 
                ? "Some protection required" 
                : "Protection essential"}
            </p>
          </div>
        </Card>

        {/* Air Quality Card */}
        <Card className="glass-card border-0 p-6 minimal-shadow">
          <h4 className="text-lg font-semibold text-slate-800 mb-4">Air Quality</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-slate-800">{currentWeather.details.airQuality}</span>
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            </div>
            <Progress value={85} className="h-2" />
            <p className="text-sm text-slate-600">Perfect for outdoor activities</p>
          </div>
        </Card>

        {/* Cloud Cover Card */}
        <Card className="glass-card border-0 p-6 minimal-shadow">
          <h4 className="text-lg font-semibold text-slate-800 mb-4">Cloud Cover</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-slate-800">{currentWeather.details.cloudCover}%</span>
              <Cloud className="w-6 h-6 text-slate-600" />
            </div>
            <Progress value={currentWeather.details.cloudCover} className="h-2" />
            <p className="text-sm text-slate-600">Partly cloudy conditions</p>
          </div>
        </Card>
      </div>
    </div>
  );
};
