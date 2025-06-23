
import { Cloud, BarChart3, Lightbulb, Calendar, Settings, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface NavigationHeaderProps {
  currentTime: Date;
  activeView: 'overview' | 'forecast' | 'insights' | 'analytics';
  onViewChange: (view: 'overview' | 'forecast' | 'insights' | 'analytics') => void;
}

export const NavigationHeader = ({ currentTime, activeView, onViewChange }: NavigationHeaderProps) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    });
  };

  const navigationItems = [
    { id: 'overview', label: 'Overview', icon: Cloud },
    { id: 'forecast', label: 'Forecast', icon: Calendar },
    { id: 'insights', label: 'Insights', icon: Lightbulb },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  ] as const;

  return (
    <div className="glass-card mx-6 mt-6 rounded-3xl p-6 minimal-shadow">
      {/* Top Row */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-gray-200 rounded-2xl flex items-center justify-center floating-element">
            <Cloud className="w-6 h-6 text-slate-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-800 tracking-tight">WeatherAI</h1>
            <p className="text-slate-500 text-sm font-medium">Intelligent Weather Assistant</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input 
              placeholder="Search locations..." 
              className="pl-10 w-64 bg-white/50 border-slate-200 focus:border-slate-300 rounded-xl"
            />
          </div>
          <Button variant="ghost" size="sm" className="text-slate-600 hover:bg-slate-100 rounded-xl">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="text-right">
          <div className="text-xl font-bold text-slate-800">{formatTime(currentTime)}</div>
          <div className="text-sm text-slate-500 font-medium">{formatDate(currentTime)}</div>
        </div>
      </div>
      
      {/* Navigation Tabs */}
      <div className="flex items-center space-x-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;
          
          return (
            <Button
              key={item.id}
              variant={isActive ? "default" : "ghost"}
              size="sm"
              onClick={() => onViewChange(item.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-200 ${
                isActive 
                  ? 'bg-slate-800 text-white shadow-lg' 
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-800'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="font-medium">{item.label}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
};
