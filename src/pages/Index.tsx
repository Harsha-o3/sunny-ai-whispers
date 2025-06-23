
import { useState, useEffect } from 'react';
import { NavigationHeader } from '@/components/NavigationHeader';
import { WeatherOverview } from '@/components/WeatherOverview';
import { DetailedForecast } from '@/components/DetailedForecast';
import { WeatherInsights } from '@/components/WeatherInsights';
import { WeatherAnalytics } from '@/components/WeatherAnalytics';
import { AlertsCenter } from '@/components/AlertsCenter';
import { SettingsPanel } from '@/components/SettingsPanel';

const Index = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeView, setActiveView] = useState<'overview' | 'forecast' | 'insights' | 'analytics'>('overview');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-stone-50 abstract-pattern">
      <div className="relative z-10">
        <NavigationHeader 
          currentTime={currentTime} 
          activeView={activeView}
          onViewChange={setActiveView}
        />
        
        <div className="container mx-auto px-6 py-8 space-y-8">
          {/* Alert Center */}
          <AlertsCenter />
          
          {/* Main Content */}
          {activeView === 'overview' && (
            <div className="space-y-8">
              <WeatherOverview />
              <WeatherInsights />
            </div>
          )}
          
          {activeView === 'forecast' && (
            <DetailedForecast />
          )}
          
          {activeView === 'insights' && (
            <WeatherInsights expanded />
          )}
          
          {activeView === 'analytics' && (
            <WeatherAnalytics />
          )}
        </div>
        
        <SettingsPanel />
      </div>
    </div>
  );
};

export default Index;
