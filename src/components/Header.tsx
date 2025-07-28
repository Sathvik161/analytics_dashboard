import { Bell, Search, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
            <span className="text-sm font-bold text-primary-foreground">AD</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">ADmyBRAND</h1>
            <p className="text-xs text-muted-foreground -mt-1">Insights</p>
          </div>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-lg mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search campaigns, metrics, or reports..."
              className="pl-10 bg-background/50 border-border/50 focus:bg-background"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs bg-destructive text-destructive-foreground">
              3
            </Badge>
          </Button>

          {/* Settings */}
          <Button variant="ghost" size="sm">
            <Settings className="h-5 w-5" />
          </Button>

          {/* User Avatar */}
          <div className="flex items-center gap-3 border-l border-border/50 pl-4">
            <div className="text-right">
              <p className="text-sm font-medium text-foreground">Sarah Chen</p>
              <p className="text-xs text-muted-foreground">Marketing Director</p>
            </div>
            <Avatar className="h-8 w-8">
              <AvatarImage src="/api/placeholder/32/32" alt="Sarah Chen" />
              <AvatarFallback className="bg-primary text-primary-foreground">SC</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
}