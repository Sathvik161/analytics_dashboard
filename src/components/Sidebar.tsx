import { 
  BarChart3, 
  Calendar, 
  DollarSign, 
  FileText, 
  Home, 
  Settings, 
  TrendingUp, 
  Users,
  Target,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: 'Dashboard', href: '/', icon: Home, current: true },
  { name: 'Analytics', href: '/analytics', icon: BarChart3, current: false },
  { name: 'Campaigns', href: '/campaigns', icon: Target, current: false },
  { name: 'Audience', href: '/audience', icon: Users, current: false },
  { name: 'Revenue', href: '/revenue', icon: DollarSign, current: false },
  { name: 'Performance', href: '/performance', icon: TrendingUp, current: false },
  { name: 'Reports', href: '/reports', icon: FileText, current: false },
  { name: 'Calendar', href: '/calendar', icon: Calendar, current: false },
  { name: 'Websites', href: '/websites', icon: Globe, current: false },
];

export function Sidebar() {
  return (
    <div className="flex h-full w-64 flex-col bg-gradient-surface border-r border-border/50">
      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-4">
        <div className="mb-8">
          <h2 className="mb-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Navigation
          </h2>
          <div className="space-y-1">
            {navigation.map((item) => (
              <Button
                key={item.name}
                variant={item.current ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start gap-3 h-10",
                  item.current 
                    ? "bg-primary/10 text-primary hover:bg-primary/20 shadow-sm" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="border-t border-border/50 pt-6">
          <h2 className="mb-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Account
          </h2>
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 h-10 text-muted-foreground hover:text-foreground hover:bg-muted/50"
          >
            <Settings className="h-4 w-4" />
            Settings
          </Button>
        </div>
      </nav>

      {/* Upgrade Card */}
      <div className="p-4">
        <div className="rounded-lg bg-gradient-primary p-4 text-center">
          <div className="mb-2">
            <TrendingUp className="mx-auto h-8 w-8 text-primary-foreground" />
          </div>
          <h3 className="font-semibold text-primary-foreground">Upgrade to Pro</h3>
          <p className="text-sm text-primary-foreground/80 mb-3">
            Unlock advanced analytics and unlimited campaigns
          </p>
          <Button 
            size="sm" 
            className="w-full bg-background/20 text-primary-foreground hover:bg-background/30 border-0"
          >
            Upgrade Now
          </Button>
        </div>
      </div>
    </div>
  );
}