import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const chargerData = [
  { name: "Available", value: 124, color: "hsl(var(--status-available))" },
  { name: "Charging", value: 43, color: "hsl(var(--status-charging))" },
  { name: "Offline", value: 8, color: "hsl(var(--status-offline))" },
  { name: "Maintenance", value: 3, color: "hsl(var(--status-maintenance))" },
  { name: "Scheduled", value: 12, color: "hsl(var(--status-scheduled))" },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0];
    return (
      <div className="bg-card border border-border rounded-lg p-3 shadow-card">
        <p className="font-medium text-card-foreground">{data.name}</p>
        <p className="text-sm text-muted-foreground">
          {data.value} chargers ({((data.value / 190) * 100).toFixed(1)}%)
        </p>
      </div>
    );
  }
  return null;
};

const CustomLegend = ({ payload }: any) => (
  <div className="flex flex-wrap gap-4 justify-center mt-4">
    {payload.map((entry: any, index: number) => (
      <div key={index} className="flex items-center gap-2">
        <div 
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: entry.color }}
        />
        <span className="text-sm text-muted-foreground">{entry.value}</span>
        <span className="text-sm font-medium text-foreground">
          {chargerData.find(d => d.name === entry.value)?.value}
        </span>
      </div>
    ))}
  </div>
);

export function ChargerStatusChart() {
  const totalChargers = chargerData.reduce((sum, item) => sum + item.value, 0);
  const activeChargers = chargerData.find(d => d.name === "Charging")?.value || 0;
  const availableChargers = chargerData.find(d => d.name === "Available")?.value || 0;

  return (
    <Card className="bg-gradient-card shadow-card border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold text-foreground">
            Charger Network Status
          </CardTitle>
          <div className="text-right">
            <div className="text-2xl font-bold text-foreground">{totalChargers}</div>
            <div className="text-sm text-muted-foreground">Total Chargers</div>
          </div>
        </div>
        
        {/* Key metrics */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="text-center p-3 bg-secondary/10 rounded-lg border border-secondary/20">
            <div className="text-lg font-semibold text-secondary">{availableChargers}</div>
            <div className="text-sm text-muted-foreground">Available</div>
          </div>
          <div className="text-center p-3 bg-primary/10 rounded-lg border border-primary/20">
            <div className="text-lg font-semibold text-primary">{activeChargers}</div>
            <div className="text-sm text-muted-foreground">Active</div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={chargerData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={120}
              paddingAngle={2}
              dataKey="value"
            >
              {chargerData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color}
                  className="stroke-background stroke-2 hover:opacity-80 transition-smooth"
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend content={<CustomLegend />} />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}