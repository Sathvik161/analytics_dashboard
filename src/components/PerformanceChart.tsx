import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { performanceData } from "@/lib/mock-data";

export function PerformanceChart() {
  return (
    <Card className="border-border/50 bg-gradient-surface">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-foreground">
          Performance Overview
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Key metrics comparison across the year
        </p>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={performanceData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="name" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--popover))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                  color: 'hsl(var(--popover-foreground))'
                }}
                labelStyle={{ color: 'hsl(var(--muted-foreground))' }}
              />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="revenue" 
                stackId="1"
                stroke="hsl(var(--chart-1))" 
                fill="hsl(var(--chart-1) / 0.8)"
                name="Revenue (K)"
              />
              <Area 
                type="monotone" 
                dataKey="users" 
                stackId="1"
                stroke="hsl(var(--chart-2))" 
                fill="hsl(var(--chart-2) / 0.8)"
                name="Users (K)"
              />
              <Area 
                type="monotone" 
                dataKey="conversions" 
                stackId="1"
                stroke="hsl(var(--chart-3))" 
                fill="hsl(var(--chart-3) / 0.8)"
                name="Conversions (K)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}