import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Target, Eye, Edit3 } from "lucide-react";

export default function Campaigns() {
  const campaigns = [
    {
      id: 1,
      name: "Summer Sale 2024",
      status: "Active",
      budget: "$5,000",
      spent: "$3,200",
      impressions: "125,430",
      clicks: "4,021",
      conversions: "87"
    },
    {
      id: 2,
      name: "Brand Awareness Q2",
      status: "Paused",
      budget: "$8,000",
      spent: "$6,100",
      impressions: "89,210",
      clicks: "2,845",
      conversions: "45"
    },
    {
      id: 3,
      name: "Product Launch",
      status: "Draft",
      budget: "$3,500",
      spent: "$0",
      impressions: "0",
      clicks: "0",
      conversions: "0"
    }
  ];

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Campaigns</h1>
                <p className="text-muted-foreground mt-2">
                  Manage and monitor your marketing campaigns
                </p>
              </div>
              <Button className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Create Campaign
              </Button>
            </div>

            <div className="grid gap-6">
              {campaigns.map((campaign) => (
                <Card key={campaign.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          {campaign.name}
                          <Badge 
                            variant={
                              campaign.status === "Active" ? "default" : 
                              campaign.status === "Paused" ? "secondary" : 
                              "outline"
                            }
                          >
                            {campaign.status}
                          </Badge>
                        </CardTitle>
                        <CardDescription>
                          Budget: {campaign.budget} • Spent: {campaign.spent}
                        </CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit3 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Impressions</p>
                        <p className="text-2xl font-bold">{campaign.impressions}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Clicks</p>
                        <p className="text-2xl font-bold">{campaign.clicks}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Conversions</p>
                        <p className="text-2xl font-bold">{campaign.conversions}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}