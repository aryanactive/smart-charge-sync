import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Zap, Clock, TrendingUp } from "lucide-react";

const metrics = [
  {
    title: "Revenue Today",
    value: "$2,847.60",
    change: "+12.3%",
    changeType: "positive" as const,
    icon: DollarSign,
    description: "From 156 charging sessions"
  },
  {
    title: "Energy Delivered",
    value: "1,247 kWh",
    change: "+8.7%", 
    changeType: "positive" as const,
    icon: Zap,
    description: "Total energy distributed today"
  },
  {
    title: "Active Sessions", 
    value: "43",
    change: "+2",
    changeType: "positive" as const,
    icon: Clock,
    description: "Currently charging vehicles"
  },
  {
    title: "Utilization Rate",
    value: "87.4%",
    change: "+5.2%",
    changeType: "positive" as const, 
    icon: TrendingUp,
    description: "Network efficiency"
  }
];

export function MetricsCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric, index) => (
        <Card 
          key={metric.title} 
          className="relative overflow-hidden bg-gradient-card shadow-card hover:shadow-electric transition-electric border-border/50"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {metric.title}
            </CardTitle>
            <div className="h-8 w-8 rounded-lg bg-gradient-electric/10 flex items-center justify-center">
              <metric.icon className="h-4 w-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground mb-1">
              {metric.value}
            </div>
            <div className="flex items-center space-x-2">
              <span 
                className={`text-sm font-medium ${
                  metric.changeType === 'positive' 
                    ? 'text-secondary' 
                    : 'text-destructive'
                }`}
              >
                {metric.change}
              </span>
              <span className="text-xs text-muted-foreground">
                vs yesterday
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {metric.description}
            </p>
          </CardContent>
          
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-electric/5 pointer-events-none" />
        </Card>
      ))}
    </div>
  );
}