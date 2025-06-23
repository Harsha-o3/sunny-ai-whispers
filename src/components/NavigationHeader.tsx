
import { Bell, Settings, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationHeaderProps {
  currentTime: Date;
}

export const NavigationHeader = ({ currentTime }: NavigationHeaderProps) => {
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

  return (
    <div className="glass-card mx-4 mt-4 rounded-2xl p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center animate-pulse-glow">
            <Sun className="w-5 h-5 text-white animate-float" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Weather AI</h1>
            <p className="text-white/80 text-sm">Your intelligent weather companion</p>
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-lg font-semibold text-white">{formatTime(currentTime)}</div>
          <div className="text-sm text-white/80">{formatDate(currentTime)}</div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
            <Bell className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
