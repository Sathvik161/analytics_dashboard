import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Users, Target, TrendingUp, TrendingDown } from "lucide-react";
import { MetricCard as MetricCardType } from "@/lib/mock-data";

const iconMap = {
  DollarSign,
  Users,
  Target,
  TrendingUp,
  TrendingDown,
};

interface MetricCardProps {
  metric: MetricCardType;
}

export function MetricCard({ metric }: MetricCardProps) {
  const Icon = iconMap[metric.icon as keyof typeof iconMap] || DollarSign;
  const isPositive = metric.trend === 'up';
  const changeColor = isPositive ? 'text-success' : 'text-destructive';
  const TrendIcon = isPositive ? TrendingUp : TrendingDown;

  return (
    <Card className="relative overflow-hidden border-border/50 bg-gradient-surface hover:shadow-card transition-all duration-300 group">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">
              {metric.title}
            </p>
            <p className="text-3xl font-bold text-foreground">
              {metric.value}
            </p>
          </div>
          <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>
        
        <div className="flex items-center gap-2 mt-4">
          <div className={`flex items-center gap-1 ${changeColor}`}>
            <TrendIcon className="h-4 w-4" />
            <span className="text-sm font-medium">
              {Math.abs(metric.change)}%
            </span>
          </div>
          <span className="text-sm text-muted-foreground">
            vs last month
          </span>
        </div>
      </CardContent>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
    </Card>
  );
}