import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const revenueData = [
  { month: "Jan", revenue: 2850, energy: 1450, sessions: 156 },
  { month: "Feb", revenue: 3200, energy: 1680, sessions: 178 },
  { month: "Mar", revenue: 2950, energy: 1520, sessions: 165 },
  { month: "Apr", revenue: 3450, energy: 1820, sessions: 195 },
  { month: "May", revenue: 3850, energy: 1980, sessions: 210 },
  { month: "Jun", revenue: 4100, energy: 2150, sessions: 225 },
  { month: "Jul", revenue: 3900, energy: 2050, sessions: 215 },
  { month: "Aug", revenue: 4250, energy: 2200, sessions: 235 },
  { month: "Sep", revenue: 4450, energy: 2350, sessions: 248 },
  { month: "Oct", revenue: 4200, energy: 2180, sessions: 230 },
  { month: "Nov", revenue: 3950, energy: 2080, sessions: 220 },
  { month: "Dec", revenue: 4600, energy: 2400, sessions: 260 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-lg p-4 shadow-card">
        <p className="font-medium text-card-foreground mb-2">{label} 2024</p>
        <div className="space-y-1">
          <p className="text-sm">
            <span className="text-primary">●</span>
            <span className="ml-2">Revenue: ${payload[0]?.value?.toLocaleString()}</span>
          </p>
          <p className="text-sm">
            <span className="text-secondary">●</span>
            <span className="ml-2">Energy: {payload[1]?.value?.toLocaleString()} kWh</span>
          </p>
        </div>
      </div>
    );
  }
  return null;
};

export function RevenueChart() {
  return (
    <Card className="bg-gradient-card shadow-card border-border/50">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-foreground">
          Revenue & Energy Trends
        </CardTitle>
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <span className="text-muted-foreground">Revenue ($)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-secondary"></div>
            <span className="text-muted-foreground">Energy (kWh)</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={revenueData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="month" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <YAxis 
              yAxisId="revenue"
              orientation="left"
              stroke="hsl(var(--primary))"
              fontSize={12}
            />
            <YAxis 
              yAxisId="energy"
              orientation="right"
              stroke="hsl(var(--secondary))"
              fontSize={12}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              yAxisId="revenue"
              dataKey="revenue" 
              fill="hsl(var(--primary))" 
              radius={[4, 4, 0, 0]}
              className="hover:opacity-80 transition-smooth"
            />
            <Bar 
              yAxisId="energy"
              dataKey="energy" 
              fill="hsl(var(--secondary))" 
              radius={[4, 4, 0, 0]}
              className="hover:opacity-80 transition-smooth"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}