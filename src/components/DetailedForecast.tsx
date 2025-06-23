
import { Cloud, CloudRain, Sun, Wind, Droplets } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const DetailedForecast = () => {
  const hourlyData = [
    { time: '12 PM', temp: 22, condition: 'sunny', precipitation: 0, icon: Sun },
    { time: '1 PM', temp: 24, condition: 'sunny', precipitation: 5, icon: Sun },
    { time: '2 PM', temp: 25, condition: 'cloudy', precipitation: 15, icon: Cloud },
    { time: '3 PM', temp: 23, condition: 'rainy', precipitation: 75, icon: CloudRain },
    { time: '4 PM', temp: 21, condition: 'rainy', precipitation: 80, icon: CloudRain },
    { time: '5 PM', temp: 20, condition: 'cloudy', precipitation: 25, icon: Cloud },
    { time: '6 PM', temp: 19, condition: 'cloudy', precipitation: 10, icon: Cloud },
    { time: '7 PM', temp: 18, condition: 'sunny', precipitation: 0, icon: Sun },
  ];

  const weeklyData = [
    { day: 'Today', date: 'Nov 23', high: 25, low: 18, condition: 'Partly Cloudy', precipitation: 20, icon: Cloud },
    { day: 'Tomorrow', date: 'Nov 24', high: 23, low: 16, condition: 'Light Rain', precipitation: 75, icon: CloudRain },
    { day: 'Wednesday', date: 'Nov 25', high: 21, low: 14, condition: 'Cloudy', precipitation: 30, icon: Cloud },
    { day: 'Thursday', date: 'Nov 26', high: 24, low: 17, condition: 'Sunny', precipitation: 5, icon: Sun },
    { day: 'Friday', date: 'Nov 27', high: 26, low: 19, condition: 'Partly Sunny', precipitation: 10, icon: Sun },
    { day: 'Saturday', date: 'Nov 28', high: 27, low: 20, condition: 'Sunny', precipitation: 0, icon: Sun },
    { day: 'Sunday', date: 'Nov 29', high: 25, low: 18, condition: 'Light Clouds', precipitation: 15, icon: Cloud },
  ];

  return (
    <Card className="glass-card border-0 minimal-shadow">
      <div className="p-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Detailed Forecast</h2>
        
        <Tabs defaultValue="hourly" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-slate-100 rounded-2xl p-1">
            <TabsTrigger 
              value="hourly" 
              className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm font-medium"
            >
              Hourly Forecast
            </TabsTrigger>
            <TabsTrigger 
              value="weekly" 
              className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm font-medium"
            >
              7-Day Forecast
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="hourly" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {hourlyData.map((hour, index) => {
                const Icon = hour.icon;
                return (
                  <div key={index} className="text-center p-4 bg-gradient-to-b from-white to-slate-50 rounded-2xl minimal-shadow hover:shadow-md transition-all duration-200">
                    <div className="text-sm font-medium text-slate-600 mb-3">{hour.time}</div>
                    <div className="w-10 h-10 mx-auto mb-3 bg-gradient-to-br from-slate-100 to-gray-200 rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-slate-600" />
                    </div>
                    <div className="text-lg font-bold text-slate-800 mb-2">{hour.temp}°</div>
                    <div className="flex items-center justify-center space-x-1">
                      <Droplets className="w-3 h-3 text-blue-500" />
                      <span className="text-xs text-slate-500">{hour.precipitation}%</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </TabsContent>
          
          <TabsContent value="weekly" className="mt-6">
            <div className="space-y-3">
              {weeklyData.map((day, index) => {
                const Icon = day.icon;
                const isToday = index === 0;
                
                return (
                  <div key={index} className={`flex items-center justify-between p-4 rounded-2xl transition-all duration-200 hover:shadow-sm ${
                    isToday ? 'bg-gradient-to-r from-slate-100 to-gray-100 border-2 border-slate-200' : 'bg-gradient-to-r from-white to-slate-50'
                  }`}>
                    <div className="flex items-center space-x-4 flex-1">
                      <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-gray-200 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-slate-600" />
                      </div>
                      <div>
                        <div className={`font-semibold ${isToday ? 'text-slate-900' : 'text-slate-800'}`}>
                          {day.day}
                        </div>
                        <div className="text-sm text-slate-500">{day.date}</div>
                      </div>
                      <div className="flex-1 px-4">
                        <div className="font-medium text-slate-700">{day.condition}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Droplets className="w-4 h-4 text-blue-500" />
                        <span className="text-sm text-slate-600">{day.precipitation}%</span>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold text-slate-800">{day.high}°</span>
                          <span className="text-sm text-slate-500">{day.low}°</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Card>
  );
};
