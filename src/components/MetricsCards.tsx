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
          className="relative overflow-hidden bg-gradient-card shadow-card hover:shadow-electric transition-elastic border-border/30 group cursor-pointer"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-electric">
              {metric.title}
            </CardTitle>
            <div className="h-10 w-10 rounded-xl bg-gradient-electric/10 flex items-center justify-center group-hover:bg-gradient-electric/20 group-hover:scale-110 transition-elastic">
              <metric.icon className="h-5 w-5 text-primary group-hover:text-primary-glow transition-electric" />
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-3xl font-bold text-foreground mb-2 group-hover:bg-gradient-hero group-hover:bg-clip-text group-hover:text-transparent transition-electric">
              {metric.value}
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <span 
                className={`text-sm font-semibold px-2 py-1 rounded-full ${
                  metric.changeType === 'positive' 
                    ? 'text-secondary bg-secondary/10' 
                    : 'text-destructive bg-destructive/10'
                }`}
              >
                {metric.change}
              </span>
              <span className="text-xs text-muted-foreground">
                vs yesterday
              </span>
            </div>
            <p className="text-xs text-muted-foreground/80">
              {metric.description}
            </p>
          </CardContent>
          
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-electric/5 pointer-events-none group-hover:bg-gradient-electric/10 transition-electric" />
          
          {/* Animated border glow */}
          <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-electric">
            <div className="absolute inset-[1px] rounded-lg bg-gradient-electric/10 animate-shimmer"></div>
          </div>
          
          {/* Floating animation */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-electric/20 rounded-full opacity-0 group-hover:opacity-100 animate-float transition-electric"></div>
        </Card>
      ))}
    </div>
  );
}