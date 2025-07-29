import { useState } from "react";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, Users, Target, Download, RefreshCw, Filter, Calendar } from "lucide-react";
import { DatePicker } from "@/components/DatePicker";
import { FilterPanel } from "@/components/FilterPanel";
import { useAnalytics } from "@/hooks/useAnalytics";
import { toast } from "@/hooks/use-toast";

export default function Analytics() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { 
    isLoading, 
    dateRange, 
    setDateRange, 
    refreshData, 
    exportData,
    metrics 
  } = useAnalytics();

  const handleApplyFilters = (filters: any) => {
    toast({
      title: "Filters Applied",
      description: "Analytics data has been filtered according to your selection.",
    });
  };
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
                <p className="text-muted-foreground mt-2">
                  Deep dive into your marketing performance and insights
                </p>
              </div>
              <div className="flex gap-2">
                <DatePicker 
                  date={dateRange.from} 
                  onDateChange={(date) => date && setDateRange(prev => ({ ...prev, from: date }))}
                  placeholder="Start date"
                />
                <DatePicker 
                  date={dateRange.to} 
                  onDateChange={(date) => date && setDateRange(prev => ({ ...prev, to: date }))}
                  placeholder="End date"
                />
                <Button variant="outline" onClick={() => setIsFilterOpen(true)}>
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
                <Button variant="outline" onClick={refreshData} disabled={isLoading}>
                  <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
                  Refresh
                </Button>
                <Button variant="outline" onClick={() => exportData('csv')}>
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3.24%</div>
                  <p className="text-xs text-muted-foreground">+0.5% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg. Session Duration</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4m 32s</div>
                  <p className="text-xs text-muted-foreground">+1m 12s from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24.7%</div>
                  <p className="text-xs text-muted-foreground">-2.1% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Goal Completions</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,429</div>
                  <p className="text-xs text-muted-foreground">+22% from last month</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Advanced Analytics</CardTitle>
                <CardDescription>
                  Comprehensive analytics dashboard with interactive charts and insights
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Revenue Trends</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-32 flex items-center justify-center bg-muted/50 rounded">
                        <p className="text-muted-foreground">Revenue chart visualization</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Channel Performance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-32 flex items-center justify-center bg-muted/50 rounded">
                        <p className="text-muted-foreground">Channel distribution chart</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Conversion Funnel</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-32 flex items-center justify-center bg-muted/50 rounded">
                        <p className="text-muted-foreground">Funnel analysis visualization</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Cohort Analysis</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-32 flex items-center justify-center bg-muted/50 rounded">
                        <p className="text-muted-foreground">User cohort heatmap</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>

        </main>
      </div>
      
      <FilterPanel 
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onApplyFilters={handleApplyFilters}
      />
    </div>
  );
}