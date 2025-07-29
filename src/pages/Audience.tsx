import { useState } from "react";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, UserPlus, Target, TrendingUp, Eye, Edit } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function Audience() {
  const [audienceSegments, setAudienceSegments] = useState([
    {
      id: 1,
      name: "High-Value Customers",
      size: "2,847",
      growth: "+12%",
      description: "Customers with LTV > $500"
    },
    {
      id: 2,
      name: "Recent Signups",
      size: "1,234",
      growth: "+45%",
      description: "Users who signed up in the last 30 days"
    },
    {
      id: 3,
      name: "Cart Abandoners",
      size: "856",
      growth: "-8%",
      description: "Users who added items but didn't complete purchase"
    },
    {
      id: 4,
      name: "Loyal Subscribers",
      size: "4,521",
      growth: "+3%",
      description: "Active email subscribers with high engagement"
    }
  ]);

  const handleCreateSegment = () => {
    toast({
      title: "Create Segment",
      description: "Audience segment creation wizard will open here.",
    });
  };

  const handleViewSegment = (segmentId: number) => {
    toast({
      title: "View Segment",
      description: `Opening detailed view for segment ${segmentId}.`,
    });
  };

  const handleEditSegment = (segmentId: number) => {
    toast({
      title: "Edit Segment",
      description: `Opening edit form for segment ${segmentId}.`,
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
                <h1 className="text-3xl font-bold text-foreground">Audience</h1>
                <p className="text-muted-foreground mt-2">
                  Understand and segment your audience for better targeting
                </p>
              </div>
              <Button className="flex items-center gap-2" onClick={handleCreateSegment}>
                <UserPlus className="h-4 w-4" />
                Create Segment
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Audience</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">42,831</div>
                  <p className="text-xs text-muted-foreground">+2,320 this month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">28,947</div>
                  <p className="text-xs text-muted-foreground">+1,204 this month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Segments</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">4 new this month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg. Engagement</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">67.4%</div>
                  <p className="text-xs text-muted-foreground">+4.2% from last month</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Audience Segments</CardTitle>
                  <CardDescription>
                    Your most important audience segments and their performance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {audienceSegments.map((segment) => (
                      <div key={segment.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-semibold">{segment.name}</h3>
                          <p className="text-sm text-muted-foreground">{segment.description}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="font-semibold">{segment.size}</p>
                            <p className="text-sm text-muted-foreground">users</p>
                          </div>
                          <Badge 
                            variant={segment.growth.startsWith('+') ? "default" : "destructive"}
                          >
                            {segment.growth}
                          </Badge>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" onClick={() => handleViewSegment(segment.id)}>
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm" onClick={() => handleEditSegment(segment.id)}>
                              <Edit className="h-4 w-4" />
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