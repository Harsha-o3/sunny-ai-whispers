
import { Lightbulb, Umbrella, Sun, Cloud } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface AIInsightsProps {
  condition: 'sunny' | 'rainy' | 'cloudy';
}

export const AIInsights = ({ condition }: AIInsightsProps) => {
  const getInsights = () => {
    switch (condition) {
      case 'sunny':
        return [
          {
            icon: Sun,
            title: "Perfect Beach Day!",
            description: "UV is high - don't forget sunscreen SPF 30+",
            type: "clothing",
            color: "bg-weather-sunny-100 text-weather-sunny-800"
          },
          {
            icon: Lightbulb,
            title: "Outdoor Activities",
            description: "Great time for hiking, picnics, or sports",
            type: "activity",
            color: "bg-blue-100 text-blue-800"
          }
        ];
      case 'rainy':
        return [
          {
            icon: Umbrella,
            title: "Don't Forget Your Umbrella!",
            description: "75% chance of rain throughout the day",
            type: "clothing",
            color: "bg-weather-rainy-100 text-weather-rainy-800"
          },
          {
            icon: Lightbulb,
            title: "Indoor Day",
            description: "Perfect for museums, shopping, or cozy cafes",
            type: "activity",
            color: "bg-purple-100 text-purple-800"
          }
        ];
      case 'cloudy':
        return [
          {
            icon: Cloud,
            title: "Mild & Comfortable",
            description: "Light jacket recommended for evening",
            type: "clothing",
            color: "bg-weather-cloudy-100 text-weather-cloudy-800"
          },
          {
            icon: Lightbulb,
            title: "Photography Weather",
            description: "Soft lighting perfect for outdoor photos",
            type: "activity",
            color: "bg-green-100 text-green-800"
          }
        ];
    }
  };

  const insights = getInsights();

  return (
    <Card className="glass-card border-0 shadow-xl">
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-shimmer">
            <Lightbulb className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-lg font-bold text-white">AI Weather Insights</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {insights.map((insight, index) => {
            const InsightIcon = insight.icon;
            return (
              <div key={index} className="bg-white/10 rounded-xl p-4 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <div className="flex items-start space-x-3">
                  <div className="mt-1">
                    <InsightIcon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-semibold text-white text-sm">{insight.title}</h4>
                      <Badge className={`text-xs ${insight.color} border-0`}>
                        {insight.type}
                      </Badge>
                    </div>
                    <p className="text-white/80 text-sm">{insight.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-4 p-3 bg-white/5 rounded-lg border border-white/10">
          <p className="text-white/70 text-xs text-center">
            💡 AI-powered suggestions based on current weather patterns and your preferences
          </p>
        </div>
      </div>
    </Card>
  );
};
