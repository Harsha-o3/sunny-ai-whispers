
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const WeatherCharts = () => {
  const temperatureData = [
    { time: '6AM', temp: 58, humidity: 85 },
    { time: '9AM', temp: 62, humidity: 78 },
    { time: '12PM', temp: 70, humidity: 65 },
    { time: '3PM', temp: 75, humidity: 55 },
    { time: '6PM', temp: 72, humidity: 60 },
    { time: '9PM', temp: 68, humidity: 70 },
  ];

  const weeklyData = [
    { day: 'Mon', temp: 72, rain: 0.2 },
    { day: 'Tue', temp: 68, rain: 1.5 },
    { day: 'Wed', temp: 65, rain: 0.8 },
    { day: 'Thu', temp: 70, rain: 0.1 },
    { day: 'Fri', temp: 75, rain: 0.0 },
    { day: 'Sat', temp: 78, rain: 0.0 },
    { day: 'Sun', temp: 76, rain: 0.3 },
  ];

  return (
    <Card className="glass-card border-0 shadow-xl">
      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-4">Weather Trends</h3>
        
        <Tabs defaultValue="today" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-white/10 border-0">
            <TabsTrigger value="today" className="text-white data-[state=active]:bg-white/20 data-[state=active]:text-white">
              Today
            </TabsTrigger>
            <TabsTrigger value="week" className="text-white data-[state=active]:bg-white/20 data-[state=active]:text-white">
              This Week
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="today" className="mt-4">
            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={temperatureData}>
                  <defs>
                    <linearGradient id="tempGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#fbbf24" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#fbbf24" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,0.8)', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,0.8)', fontSize: 12 }} />
                  <Area
                    type="monotone"
                    dataKey="temp"
                    stroke="#fbbf24"
                    strokeWidth={3}
                    fill="url(#tempGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <p className="text-white/60 text-sm mt-2 text-center">Temperature trend for today</p>
          </TabsContent>
          
          <TabsContent value="week" className="mt-4">
            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={weeklyData}>
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,0.8)', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,0.8)', fontSize: 12 }} />
                  <Line
                    type="monotone"
                    dataKey="temp"
                    stroke="#fbbf24"
                    strokeWidth={3}
                    dot={{ fill: '#fbbf24', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, fill: '#fbbf24' }}
                  />
                  <Line
                    type="monotone"
                    dataKey="rain"
                    stroke="#0ea5e9"
                    strokeWidth={2}
                    dot={{ fill: '#0ea5e9', strokeWidth: 2, r: 3 }}
                    yAxisId="right"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center space-x-6 mt-2">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-weather-sunny-400 rounded-full"></div>
                <span className="text-white/60 text-sm">Temperature</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-weather-rainy-400 rounded-full"></div>
                <span className="text-white/60 text-sm">Precipitation</span>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Card>
  );
};
