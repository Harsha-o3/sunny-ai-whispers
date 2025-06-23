
import { useState, useEffect } from 'react';
import { CurrentWeather } from '@/components/CurrentWeather';
import { WeatherForecast } from '@/components/WeatherForecast';
import { AIInsights } from '@/components/AIInsights';
import { WeatherCharts } from '@/components/WeatherCharts';
import { EmergencyAlerts } from '@/components/EmergencyAlerts';
import { NavigationHeader } from '@/components/NavigationHeader';

const Index = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [weatherCondition, setWeatherCondition] = useState<'sunny' | 'rainy' | 'cloudy'>('sunny');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Simulate weather condition changes for demo
  useEffect(() => {
    const conditions: ('sunny' | 'rainy' | 'cloudy')[] = ['sunny', 'rainy', 'cloudy'];
    const interval = setInterval(() => {
      setWeatherCondition(conditions[Math.floor(Math.random() * conditions.length)]);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const getBackgroundClass = () => {
    switch (weatherCondition) {
      case 'sunny':
        return 'bg-gradient-to-br from-weather-sunny-300 via-weather-sunny-400 to-weather-sunny-500';
      case 'rainy':
        return 'bg-gradient-to-br from-weather-rainy-400 via-weather-rainy-500 to-weather-rainy-600';
      case 'cloudy':
        return 'bg-gradient-to-br from-weather-cloudy-300 via-weather-cloudy-400 to-weather-cloudy-500';
      default:
        return 'bg-gradient-to-br from-weather-sunny-300 via-weather-sunny-400 to-weather-sunny-500';
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-1000 ${getBackgroundClass()} ${weatherCondition === 'rainy' ? 'rain-effect' : ''} ${weatherCondition === 'cloudy' ? 'floating-clouds' : ''}`}>
      <div className="relative z-10">
        <NavigationHeader currentTime={currentTime} />
        
        <div className="container mx-auto px-4 py-6 space-y-6">
          {/* Emergency Alerts */}
          <EmergencyAlerts />
          
          {/* Current Weather */}
          <CurrentWeather condition={weatherCondition} />
          
          {/* AI Insights */}
          <AIInsights condition={weatherCondition} />
          
          {/* Forecast and Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <WeatherForecast />
            <WeatherCharts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
