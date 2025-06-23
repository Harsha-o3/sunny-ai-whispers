
import { Lightbulb, Shirt, Car, Camera, MapPin, Clock, Activity, Coffee, TreePine, Umbrella, Zap, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface WeatherInsightsProps {
  expanded?: boolean;
}

export const WeatherInsights = ({ expanded = false }: WeatherInsightsProps) => {
  const insights = [
    {
      id: 1,
      category: 'Clothing',
      icon: Shirt,
      title: 'Perfect Weather for Light Layers',
      description: 'Temperature is ideal for a light sweater or jacket. Consider bringing a windbreaker as evening temperatures may drop to 18°C.',
      confidence: 94,
      tags: ['Comfort', 'Temperature'],
      priority: 'medium',
      actionable: 'Wear breathable fabrics and pack a light jacket'
    },
    {
      id: 2,
      category: 'Travel',
      icon: Car,
      title: 'Excellent Driving Conditions',
      description: 'Clear visibility (10km) and moderate winds (12km/h). No weather-related traffic delays expected. Fuel efficiency optimal.',
      confidence: 89,
      tags: ['Safety', 'Visibility', 'Traffic'],
      priority: 'low',
      actionable: 'Safe to drive, consider scenic routes'
    },
    {
      id: 3,
      category: 'Photography',
      icon: Camera,
      title: 'Golden Hour Photography Opportunity',
      description: 'Partly cloudy skies will create beautiful dramatic lighting during sunset at 7:28 PM. Cloud cover at 45% is perfect for diffused light.',
      confidence: 92,
      tags: ['Lighting', 'Creativity', 'Timing'],
      priority: 'high',
      actionable: 'Plan photo session between 6:30-7:30 PM'
    },
    {
      id: 4,
      category: 'Health',
      icon: Heart,
      title: 'Ideal Conditions for Outdoor Exercise',
      description: 'Temperature and humidity levels are perfect for jogging or cycling. UV index moderate - apply SPF 30 sunscreen.',
      confidence: 96,
      tags: ['Health', 'Exercise', 'UV Protection'],
      priority: 'high',
      actionable: 'Exercise outdoors between 9-11 AM or after 5 PM'
    },
    {
      id: 5,
      category: 'Energy',
      icon: Zap,
      title: 'Peak Solar Energy Generation',
      description: 'Clear skies with 55% sunshine expected. Excellent conditions for solar panel efficiency and renewable energy production.',
      confidence: 88,
      tags: ['Solar', 'Energy', 'Environment'],
      priority: 'medium',
      actionable: 'Optimize energy-intensive tasks for midday'
    },
    {
      id: 6,
      category: 'Comfort',
      icon: Coffee,
      title: 'Perfect Café Weather',
      description: 'Mild temperatures ideal for outdoor dining. Low wind speed means comfortable patio seating without disruption.',
      confidence: 91,
      tags: ['Dining', 'Comfort', 'Social'],
      priority: 'low',
      actionable: 'Book outdoor restaurant seating'
    }
  ];

  const locationInsights = [
    { 
      location: 'Golden Gate Park', 
      activity: 'Perfect for jogging and picnics', 
      score: 95,
      details: 'Low wind, ideal temperature, excellent air quality',
      bestTime: '9 AM - 11 AM'
    },
    { 
      location: 'Fisherman\'s Wharf', 
      activity: 'Great for sightseeing and photos', 
      score: 88,
      details: 'Good visibility, moderate crowds expected',
      bestTime: '2 PM - 5 PM'
    },
    { 
      location: 'Union Square', 
      activity: 'Ideal for shopping and dining', 
      score: 91,
      details: 'Comfortable walking weather, covered areas available',
      bestTime: '11 AM - 3 PM'
    },
    { 
      location: 'Twin Peaks', 
      activity: 'Excellent for panoramic views', 
      score: 87,
      details: 'Clear visibility, slightly windier conditions',
      bestTime: '6 PM - 8 PM'
    },
  ];

  const timeBasedTips = [
    { 
      time: '6 AM - 8 AM', 
      tip: 'Sunrise photography golden hour', 
      icon: Camera,
      details: 'Soft lighting, cooler temperatures, less crowded locations'
    },
    { 
      time: '9 AM - 11 AM', 
      tip: 'Best time for outdoor workouts', 
      icon: Activity,
      details: 'Optimal temperature, good air quality, energizing morning light'
    },
    { 
      time: '12 PM - 2 PM', 
      tip: 'Peak UV - use sun protection', 
      icon: Umbrella,
      details: 'Strongest UV rays, seek shade, stay hydrated'
    },
    { 
      time: '3 PM - 5 PM', 
      tip: 'Perfect for outdoor exploration', 
      icon: TreePine,
      details: 'Comfortable temperature, good visibility, afternoon energy'
    },
    { 
      time: '6 PM - 8 PM', 
      tip: 'Ideal for outdoor dining', 
      icon: Coffee,
      details: 'Pleasant temperature, beautiful lighting, social atmosphere'
    },
  ];

  const weeklyTrends = [
    { metric: 'Temperature Stability', value: 92, description: 'Very consistent temperatures this week' },
    { metric: 'Outdoor Activity Score', value: 88, description: 'Excellent conditions for most activities' },
    { metric: 'Air Quality Index', value: 95, description: 'Exceptional air quality throughout the week' },
    { metric: 'UV Safety Level', value: 75, description: 'Moderate UV levels, protection recommended' },
  ];

  const displayInsights = expanded ? insights : insights.slice(0, 3);

  return (
    <div className="space-y-6">
      <Card className="glass-card border-0 p-8 minimal-shadow">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800">AI Weather Insights</h2>
              <p className="text-sm text-slate-500">Personalized recommendations based on current conditions</p>
            </div>
          </div>
          {!expanded && (
            <Badge variant="outline" className="text-slate-600">
              {insights.length} insights available
            </Badge>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {displayInsights.map((insight) => {
            const Icon = insight.icon;
            return (
              <div key={insight.id} className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 minimal-shadow hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-gray-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <Icon className="w-6 h-6 text-slate-600" />
                    </div>
                    <div>
                      <Badge className="text-xs bg-slate-100 text-slate-600 hover:bg-slate-200 mb-1">
                        {insight.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500 mb-1">Confidence</div>
                    <div className="flex items-center space-x-2">
                      <Progress value={insight.confidence} className="w-12 h-1" />
                      <span className="text-sm font-bold text-slate-700">{insight.confidence}%</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="font-semibold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors">
                  {insight.title}
                </h3>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  {insight.description}
                </p>
                
                {expanded && (
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-xl mb-4">
                    <div className="text-xs font-medium text-blue-800 mb-1">Recommended Action</div>
                    <div className="text-sm text-blue-700">{insight.actionable}</div>
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {insight.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs border-slate-200 text-slate-600">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className={`w-3 h-3 rounded-full ${
                    insight.priority === 'high' ? 'bg-orange-400' : 
                    insight.priority === 'medium' ? 'bg-yellow-400' : 'bg-green-400'
                  }`} title={`${insight.priority} priority`} />
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {expanded && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Enhanced Location Recommendations */}
          <Card className="glass-card border-0 p-6 minimal-shadow">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center">
                <MapPin className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800">Location Recommendations</h3>
                <p className="text-sm text-slate-500">Best spots for current weather conditions</p>
              </div>
            </div>
            <div className="space-y-4">
              {locationInsights.map((location, index) => (
                <div key={index} className="bg-gradient-to-r from-slate-50 to-gray-50 p-4 rounded-2xl hover:shadow-sm transition-all duration-200">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="font-semibold text-slate-800 mb-1">{location.location}</div>
                      <div className="text-sm text-slate-600 mb-2">{location.activity}</div>
                      <div className="text-xs text-slate-500">{location.details}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-slate-700">{location.score}%</div>
                      <div className="text-xs text-slate-500">Score</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs text-green-600 border-green-200">
                      Best: {location.bestTime}
                    </Badge>
                    <Progress value={location.score} className="w-16 h-1" />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Enhanced Time-Based Tips */}
          <Card className="glass-card border-0 p-6 minimal-shadow">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800">Time-Based Tips</h3>
                <p className="text-sm text-slate-500">Optimal timing for different activities</p>
              </div>
            </div>
            <div className="space-y-4">
              {timeBasedTips.map((tip, index) => {
                const Icon = tip.icon;
                return (
                  <div key={index} className="bg-gradient-to-r from-slate-50 to-gray-50 p-4 rounded-2xl hover:shadow-sm transition-all duration-200">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center minimal-shadow">
                        <Icon className="w-5 h-5 text-slate-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-semibold text-slate-800 text-sm">{tip.time}</div>
                        </div>
                        <div className="text-sm text-slate-700 mb-2">{tip.tip}</div>
                        <div className="text-xs text-slate-500">{tip.details}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      )}

      {expanded && (
        <Card className="glass-card border-0 p-6 minimal-shadow">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center">
              <Activity className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-800">Weekly Weather Trends</h3>
              <p className="text-sm text-slate-500">Performance metrics for outdoor activities</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {weeklyTrends.map((trend, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-slate-50 p-4 rounded-2xl">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-slate-800">{trend.metric}</h4>
                  <span className="text-2xl font-bold text-slate-700">{trend.value}%</span>
                </div>
                <Progress value={trend.value} className="mb-2" />
                <p className="text-sm text-slate-600">{trend.description}</p>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
};
