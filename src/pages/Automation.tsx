import { useState } from "react";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Zap, Plus, Play, Pause, Settings } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function Automation() {
  const [automations, setAutomations] = useState([
    {
      id: 1,
      name: "Welcome Email Series",
      trigger: "New signup",
      status: "Active",
      isEnabled: true,
      completions: "1,247",
      conversionRate: "23.4%"
    },
    {
      id: 2,
      name: "Cart Abandonment",
      trigger: "Cart abandoned for 2 hours",
      status: "Active",
      isEnabled: true,
      completions: "856",
      conversionRate: "18.7%"
    },
    {
      id: 3,
      name: "Re-engagement Campaign",
      trigger: "No activity for 30 days",
      status: "Paused",
      isEnabled: false,
      completions: "342",
      conversionRate: "8.2%"
    },
    {
      id: 4,
      name: "Birthday Offers",
      trigger: "Customer birthday",
      status: "Draft",
      isEnabled: false,
      completions: "0",
      conversionRate: "0%"
    }
  ]);

  const handleCreateAutomation = () => {
    toast({
      title: "Create Automation",
      description: "Automation workflow builder will open here.",
    });
  };

  const handleToggleAutomation = (automationId: number) => {
    setAutomations(prev => 
      prev.map(automation => 
        automation.id === automationId 
          ? { ...automation, isEnabled: !automation.isEnabled, status: !automation.isEnabled ? "Active" : "Paused" }
          : automation
      )
    );
    toast({
      title: "Automation Updated",
      description: "Automation status has been changed.",
    });
  };

  const handleConfigureAutomation = (automationId: number) => {
    toast({
      title: "Configure Automation",
      description: `Opening configuration for automation ${automationId}.`,
    });
  };

  const handlePlayPauseAutomation = (automationId: number) => {
    const automation = automations.find(a => a.id === automationId);
    const newStatus = automation?.status === "Active" ? "Paused" : "Active";
    
    setAutomations(prev => 
      prev.map(automation => 
        automation.id === automationId 
          ? { ...automation, status: newStatus, isEnabled: newStatus === "Active" }
          : automation
      )
    );
    toast({
      title: `Automation ${newStatus}`,
      description: `Automation has been ${newStatus.toLowerCase()}.`,
    });
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Automation</h1>
                <p className="text-muted-foreground mt-2">
                  Set up and manage automated marketing workflows
                </p>
              </div>
              <Button className="flex items-center gap-2" onClick={handleCreateAutomation}>
                <Plus className="h-4 w-4" />
                Create Automation
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Automations</CardTitle>
                  <Zap className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-xs text-muted-foreground">2 created this month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Triggers</CardTitle>
                  <Play className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5,247</div>
                  <p className="text-xs text-muted-foreground">+12% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg. Conversion</CardTitle>
                  <Settings className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">19.3%</div>
                  <p className="text-xs text-muted-foreground">+2.1% from last month</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Marketing Automations</CardTitle>
                  <CardDescription>
                    Manage your automated marketing workflows and campaigns
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {automations.map((automation) => (
                      <div key={automation.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                          <Switch 
                            checked={automation.isEnabled} 
                            onCheckedChange={() => handleToggleAutomation(automation.id)}
                          />
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-semibold">{automation.name}</h3>
                              <Badge 
                                variant={
                                  automation.status === "Active" ? "default" : 
                                  automation.status === "Paused" ? "secondary" : 
                                  "outline"
                                }
                              >
                                {automation.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Trigger: {automation.trigger}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-6">
                          <div className="text-right">
                            <p className="font-semibold">{automation.completions}</p>
                            <p className="text-sm text-muted-foreground">completions</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold">{automation.conversionRate}</p>
                            <p className="text-sm text-muted-foreground">conversion</p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" onClick={() => handleConfigureAutomation(automation.id)}>
                              <Settings className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm" onClick={() => handlePlayPauseAutomation(automation.id)}>
                              {automation.status === "Active" ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}