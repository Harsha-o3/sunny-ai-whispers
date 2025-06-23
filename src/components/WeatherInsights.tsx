
import { Lightbulb, Shirt, Car, Camera, MapPin, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
      description: 'Temperature is ideal for a light sweater or jacket. You might want to bring an extra layer for the evening.',
      confidence: 94,
      tags: ['Comfort', 'Temperature'],
      priority: 'medium'
    },
    {
      id: 2,
      category: 'Travel',
      icon: Car,
      title: 'Good Driving Conditions',
      description: 'Clear visibility and minimal wind. Perfect conditions for travel with no weather-related delays expected.',
      confidence: 89,
      tags: ['Safety', 'Visibility'],
      priority: 'low'
    },
    {
      id: 3,
      category: 'Photography',
      icon: Camera,
      title: 'Golden Hour Photography',
      description: 'Excellent lighting conditions expected during sunset. Partly cloudy skies will create beautiful dramatic effects.',
      confidence: 92,
      tags: ['Lighting', 'Creativity'],
      priority: 'high'
    },
    {
      id: 4,
      category: 'Health',
      icon: Lightbulb,
      title: 'Moderate UV Exposure',
      description: 'UV index is moderate. Sunscreen recommended if spending extended time outdoors, especially between 12-3 PM.',
      confidence: 96,
      tags: ['Health', 'UV Protection'],
      priority: 'high'
    }
  ];

  const locationInsights = [
    { location: 'Golden Gate Park', activity: 'Perfect for jogging', score: 95 },
    { location: 'Fisherman\'s Wharf', activity: 'Great for sightseeing', score: 88 },
    { location: 'Union Square', activity: 'Ideal for shopping', score: 91 },
  ];

  const timeBasedTips = [
    { time: '9 AM - 11 AM', tip: 'Best time for outdoor workouts', icon: Clock },
    { time: '12 PM - 2 PM', tip: 'Peak UV - use sun protection', icon: Clock },
    { time: '6 PM - 8 PM', tip: 'Perfect for outdoor dining', icon: Clock },
  ];

  const displayInsights = expanded ? insights : insights.slice(0, 2);

  return (
    <div className="space-y-6">
      <Card className="glass-card border-0 p-8 minimal-shadow">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl flex items-center justify-center">
            <Lightbulb className="w-5 h-5 text-purple-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800">AI Weather Insights</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayInsights.map((insight) => {
            const Icon = insight.icon;
            return (
              <div key={insight.id} className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 minimal-shadow hover:shadow-md transition-all duration-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-slate-100 to-gray-200 rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-slate-600" />
                    </div>
                    <div>
                      <Badge className="text-xs bg-slate-100 text-slate-600 hover:bg-slate-200">
                        {insight.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500">Confidence</div>
                    <div className="text-sm font-bold text-slate-700">{insight.confidence}%</div>
                  </div>
                </div>
                
                <h3 className="font-semibold text-slate-800 mb-2">{insight.title}</h3>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">{insight.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {insight.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs border-slate-200 text-slate-600">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className={`w-2 h-2 rounded-full ${
                    insight.priority === 'high' ? 'bg-orange-400' : 
                    insight.priority === 'medium' ? 'bg-yellow-400' : 'bg-green-400'
                  }`} />
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {expanded && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="glass-card border-0 p-6 minimal-shadow">
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="w-5 h-5 text-slate-600" />
              <h3 className="text-lg font-semibold text-slate-800">Location Recommendations</h3>
            </div>
            <div className="space-y-3">
              {locationInsights.map((location, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl">
                  <div>
                    <div className="font-medium text-slate-800">{location.location}</div>
                    <div className="text-sm text-slate-600">{location.activity}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-slate-700">{location.score}%</div>
                    <div className="text-xs text-slate-500">Score</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="glass-card border-0 p-6 minimal-shadow">
            <div className="flex items-center space-x-2 mb-4">
              <Clock className="w-5 h-5 text-slate-600" />
              <h3 className="text-lg font-semibold text-slate-800">Time-Based Tips</h3>
            </div>
            <div className="space-y-3">
              {timeBasedTips.map((tip, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center minimal-shadow">
                    <Clock className="w-4 h-4 text-slate-600" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-slate-800 text-sm">{tip.time}</div>
                    <div className="text-xs text-slate-600">{tip.tip}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};
