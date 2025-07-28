import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, CheckCircle, AlertTriangle, Info } from "lucide-react";

interface Notification {
  id: string;
  type: 'success' | 'warning' | 'info';
  title: string;
  message: string;
  time: string;
  read: boolean;
}

interface NotificationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'success',
    title: 'Campaign Performance',
    message: 'Summer Sale 2024 exceeded target by 12%',
    time: '2 hours ago',
    read: false
  },
  {
    id: '2',
    type: 'warning',
    title: 'Budget Alert',
    message: 'Holiday Collection campaign is 85% of budget',
    time: '4 hours ago',
    read: false
  },
  {
    id: '3',
    type: 'info',
    title: 'Weekly Report',
    message: 'Your weekly analytics report is ready',
    time: '1 day ago',
    read: true
  }
];

export function NotificationPanel({ isOpen, onClose }: NotificationPanelProps) {
  const [notifications, setNotifications] = useState(mockNotifications);

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'success': return <CheckCircle className="h-4 w-4 text-success" />;
      case 'warning': return <AlertTriangle className="h-4 w-4 text-warning" />;
      case 'info': return <Info className="h-4 w-4 text-primary" />;
      default: return <Info className="h-4 w-4 text-primary" />;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="fixed right-0 top-0 h-full w-80 bg-background border-l border-border shadow-lg overflow-y-auto">
        <Card className="h-full rounded-none border-0">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Notifications</CardTitle>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={markAllAsRead}>
                Mark all read
              </Button>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {notifications.map(notification => (
              <div
                key={notification.id}
                className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                  notification.read 
                    ? 'bg-muted/20 border-border/50' 
                    : 'bg-background border-primary/20 hover:bg-muted/30'
                }`}
                onClick={() => markAsRead(notification.id)}
              >
                <div className="flex items-start gap-3">
                  {getIcon(notification.type)}
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium">{notification.title}</h4>
                      {!notification.read && (
                        <Badge className="h-2 w-2 p-0 bg-primary" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {notification.message}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {notification.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}