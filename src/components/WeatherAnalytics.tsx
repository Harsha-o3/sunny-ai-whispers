
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, TrendingDown, Activity, Calendar } from 'lucide-react';

export const WeatherAnalytics = () => {
  const temperatureData = [
    { time: '6AM', temp: 15, humidity: 85, pressure: 1012 },
    { time: '9AM', temp: 18, humidity: 78, pressure: 1013 },
    { time: '12PM', temp: 22, humidity: 65, pressure: 1014 },
    { time: '3PM', temp: 25, humidity: 55, pressure: 1013 },
    { time: '6PM', temp: 23, humidity: 60, pressure: 1012 },
    { time: '9PM', temp: 20, humidity: 70, pressure: 1011 },
  ];

  const weeklyTrends = [
    { day: 'Mon', avgTemp: 20, rainfall: 0.2, sunshine: 8 },
    { day: 'Tue', avgTemp: 18, rainfall: 1.5, sunshine: 4 },
    { day: 'Wed', avgTemp: 16, rainfall: 0.8, sunshine: 6 },
    { day: 'Thu', avgTemp: 19, rainfall: 0.1, sunshine: 9 },
    { day: 'Fri', avgTemp: 22, rainfall: 0.0, sunshine: 10 },
    { day: 'Sat', avgTemp: 24, rainfall: 0.0, sunshine: 11 },
    { day: 'Sun', avgTemp: 23, rainfall: 0.3, sunshine: 8 },
  ];

  const monthlyComparison = [
    { month: 'Jan', temp: 12, precipitation: 45 },
    { month: 'Feb', temp: 14, precipitation: 38 },
    { month: 'Mar', temp: 17, precipitation: 32 },
    { month: 'Apr', temp: 20, precipitation: 25 },
    { month: 'May', temp: 23, precipitation: 15 },
    { month: 'Jun', temp: 26, precipitation: 8 },
  ];

  const weatherDistribution = [
    { name: 'Sunny', value: 45, color: '#FCD34D' },
    { name: 'Cloudy', value: 30, color: '#9CA3AF' },
    { name: 'Rainy', value: 20, color: '#60A5FA' },
    { name: 'Other', value: 5, color: '#D1D5DB' },
  ];

  const stats = [
    { 
      title: 'Average Temperature', 
      value: '22°C', 
      change: '+2.3°', 
      trend: 'up',
      description: 'vs last week'
    },
    { 
      title: 'Humidity Level', 
      value: '65%', 
      change: '-5%', 
      trend: 'down',
      description: 'vs yesterday'
    },
    { 
      title: 'Precipitation', 
      value: '2.4mm', 
      change: '+0.8mm', 
      trend: 'up',
      description: 'this week'
    },
    { 
      title: 'UV Index', 
      value: '6.2', 
      change: '+1.1', 
      trend: 'up',
      description: 'peak today'
    },
  ];

  return (
    <div className="space-y-6">
      <Card className="glass-card border-0 p-8 minimal-shadow">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800">Weather Analytics</h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 minimal-shadow">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-slate-600">{stat.title}</h3>
                {stat.trend === 'up' ? (
                  <TrendingUp className="w-4 h-4 text-green-500" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-500" />
                )}
              </div>
              <div className="text-2xl font-bold text-slate-800 mb-1">{stat.value}</div>
              <div className="flex items-center space-x-1">
                <span className={`text-sm font-medium ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
                <span className="text-xs text-slate-500">{stat.description}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Charts */}
        <Tabs defaultValue="temperature" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-slate-100 rounded-2xl p-1">
            <TabsTrigger value="temperature" className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm font-medium text-sm">
              Temperature
            </TabsTrigger>
            <TabsTrigger value="trends" className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm font-medium text-sm">
              Weekly Trends
            </TabsTrigger>
            <TabsTrigger value="monthly" className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm font-medium text-sm">
              Monthly
            </TabsTrigger>
            <TabsTrigger value="distribution" className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm font-medium text-sm">
              Distribution
            </TabsTrigger>
          </TabsList>

          <TabsContent value="temperature" className="mt-6">
            <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 minimal-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-800">Today's Temperature & Humidity</h3>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-slate-600 rounded-full"></div>
                    <span className="text-slate-600">Temperature</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-slate-600">Humidity</span>
                  </div>
                </div>
              </div>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={temperatureData}>
                    <defs>
                      <linearGradient id="tempGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#475569" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#475569" stopOpacity={0.05}/>
                      </linearGradient>
                      <linearGradient id="humidityGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#60A5FA" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#60A5FA" stopOpacity={0.05}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} />
                    <Area
                      type="monotone"
                      dataKey="temp"
                      stroke="#475569"
                      strokeWidth={2}
                      fill="url(#tempGradient)"
                    />
                    <Area
                      type="monotone"
                      dataKey="humidity"
                      stroke="#60A5FA"
                      strokeWidth={2}
                      fill="url(#humidityGradient)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="trends" className="mt-6">
            <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 minimal-shadow">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Weekly Weather Trends</h3>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyTrends}>
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} />
                    <Bar dataKey="avgTemp" fill="#475569" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="rainfall" fill="#60A5FA" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center space-x-6 mt-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-slate-600 rounded-full"></div>
                  <span className="text-sm text-slate-600">Avg Temperature</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-sm text-slate-600">Rainfall (mm)</span>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="monthly" className="mt-6">
            <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 minimal-shadow">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Monthly Comparison</h3>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyComparison}>
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} />
                    <Line
                      type="monotone"
                      dataKey="temp"
                      stroke="#475569"
                      strokeWidth={3}
                      dot={{ fill: '#475569', strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6, fill: '#475569' }}
                    />
                    <Line
                      type="monotone"
                      dataKey="precipitation"
                      stroke="#60A5FA"
                      strokeWidth={2}
                      dot={{ fill: '#60A5FA', strokeWidth: 2, r: 3 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="distribution" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 minimal-shadow">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Weather Distribution</h3>
                <div className="h-48 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={weatherDistribution}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {weatherDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {weatherDistribution.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span className="text-sm text-slate-600">{item.name}</span>
                      <span className="text-sm font-medium text-slate-800">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 minimal-shadow">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Key Insights</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                    <div className="text-sm font-medium text-blue-800 mb-1">Most Common Weather</div>
                    <div className="text-lg font-bold text-blue-900">Sunny Days</div>
                    <div className="text-xs text-blue-600">45% of the time this month</div>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                    <div className="text-sm font-medium text-green-800 mb-1">Temperature Trend</div>
                    <div className="text-lg font-bold text-green-900">Rising</div>
                    <div className="text-xs text-green-600">+2.3°C above seasonal average</div>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl">
                    <div className="text-sm font-medium text-orange-800 mb-1">Rainfall Pattern</div>
                    <div className="text-lg font-bold text-orange-900">Below Average</div>
                    <div className="text-xs text-orange-600">15% less than usual</div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};
