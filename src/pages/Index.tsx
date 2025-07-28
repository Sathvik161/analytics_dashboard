import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { MetricCard } from "@/components/MetricCard";
import { RevenueChart } from "@/components/RevenueChart";
import { PerformanceChart } from "@/components/PerformanceChart";
import { ChannelChart } from "@/components/ChannelChart";
import { CampaignTable } from "@/components/CampaignTable";
import { metricsData } from "@/lib/mock-data";
import { Calendar, Download, Filter, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  Analytics Dashboard
                </h1>
                <p className="text-muted-foreground">
                  Monitor your campaigns and track performance metrics in real-time
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <Badge className="bg-success/20 text-success border-success/30">
                  Live Data
                </Badge>
                <Button variant="outline" size="sm" className="gap-2">
                  <Calendar className="h-4 w-4" />
                  Last 30 days
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="h-4 w-4" />
                  Export
                </Button>
                <Button size="sm" className="gap-2">
                  <RefreshCw className="h-4 w-4" />
                  Refresh
                </Button>
              </div>
            </div>
          </div>

          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metricsData.map((metric) => (
              <MetricCard key={metric.id} metric={metric} />
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="lg:col-span-2">
              <RevenueChart />
            </div>
            <PerformanceChart />
            <ChannelChart />
          </div>

          {/* Data Table */}
          <CampaignTable />
        </main>
      </div>
    </div>
  );
};

export default Index;
