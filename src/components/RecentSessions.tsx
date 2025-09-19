import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, MapPin, Clock, Zap } from "lucide-react";

const recentSessions = [
  {
    id: "CS-2024-0891",
    location: "Downtown Mall - Station A2",
    startTime: "14:23",
    duration: "1h 45m",
    energy: "42.3 kWh",
    cost: "$18.75",
    status: "completed" as const,
    vehicleType: "Tesla Model 3"
  },
  {
    id: "CS-2024-0890", 
    location: "Airport Terminal - Fast Charger 3",
    startTime: "14:08",
    duration: "2h 12m",
    energy: "67.8 kWh",
    cost: "$28.90",
    status: "completed" as const,
    vehicleType: "BMW iX3"
  },
  {
    id: "CS-2024-0889",
    location: "Shopping Center - Level 2 B1",
    startTime: "13:45",
    duration: "45m",
    energy: "28.5 kWh", 
    cost: "$12.40",
    status: "active" as const,
    vehicleType: "Nissan Leaf"
  },
  {
    id: "CS-2024-0888",
    location: "Office Complex - Parking Lot C",
    startTime: "13:30",
    duration: "1h 18m",
    energy: "35.7 kWh",
    cost: "$15.25",
    status: "completed" as const,
    vehicleType: "Hyundai Kona EV"
  },
  {
    id: "CS-2024-0887",
    location: "Highway Rest Stop - Ultra Fast",
    startTime: "13:15",
    duration: "32m",
    energy: "55.2 kWh",
    cost: "$24.80",
    status: "active" as const,
    vehicleType: "Audi e-tron"
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "completed":
      return <Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20">Completed</Badge>;
    case "active":
      return <Badge className="bg-primary/10 text-primary border-primary/20 animate-pulse-electric">Active</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

export function RecentSessions() {
  return (
    <Card className="bg-gradient-card shadow-card border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold text-foreground">
            Recent Charging Sessions
          </CardTitle>
          <Button variant="outline" size="sm" className="gap-2">
            View All
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          {recentSessions.map((session) => (
            <div 
              key={session.id}
              className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-electric bg-background/50"
            >
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium text-foreground">{session.location}</span>
                    </div>
                    {getStatusBadge(session.status)}
                  </div>
                  <span className="text-sm text-muted-foreground">#{session.id}</span>
                </div>
                
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{session.startTime} • {session.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Zap className="h-4 w-4" />
                    <span>{session.energy}</span>
                  </div>
                  <span className="text-foreground font-medium">{session.cost}</span>
                </div>
                
                <div className="text-xs text-muted-foreground">
                  Vehicle: {session.vehicleType}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t border-border/50">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">
              Showing 5 of 1,247 sessions today
            </span>
            <Button variant="ghost" size="sm">
              Export Sessions
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}