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
  Globe,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useNavigate, useLocation } from "react-router-dom";

const navigation = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Campaigns', href: '/campaigns', icon: Target },
  { name: 'Audience', href: '/audience', icon: Users },
  { name: 'Automation', href: '/automation', icon: Zap },
];

export function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isCurrentPath = (href: string) => {
    return location.pathname === href;
  };

  return (
    <div className="flex h-full w-64 flex-col bg-gradient-surface border-r border-border/50">
      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-4">
        <div className="mb-8">
          <h2 className="mb-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Navigation
          </h2>
          <div className="space-y-1">
            {navigation.map((item) => {
              const isCurrent = isCurrentPath(item.href);
              return (
                <Button
                  key={item.name}
                  variant={isCurrent ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start gap-3 h-10",
                    isCurrent 
                      ? "bg-primary/10 text-primary hover:bg-primary/20 shadow-sm" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                  onClick={() => navigate(item.href)}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Button>
              );
            })}
          </div>
        </div>

        <div className="border-t border-border/50 pt-6">
          <h2 className="mb-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Account
          </h2>
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 h-10 text-muted-foreground hover:text-foreground hover:bg-muted/50"
            onClick={() => navigate('/settings')}
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