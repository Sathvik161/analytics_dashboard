import { useState } from "react";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { MetricCard } from "@/components/MetricCard";
import { RevenueChart } from "@/components/RevenueChart";
import { PerformanceChart } from "@/components/PerformanceChart";
import { ChannelChart } from "@/components/ChannelChart";
import { CampaignTable } from "@/components/CampaignTable";
import { FilterPanel } from "@/components/FilterPanel";
import { DatePicker } from "@/components/DatePicker";
import { useAnalytics } from "@/hooks/useAnalytics";
import { Calendar, Download, Filter, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const Index = () => {
  const { isLoading, dateRange, setDateRange, refreshData, exportData, metrics } = useAnalytics();
  const [showFilters, setShowFilters] = useState(false);

  const handleFilterApply = (filters: any) => {
    console.log('Applied filters:', filters);
  };

  return (
    <>
      <FilterPanel 
        isOpen={showFilters}
        onClose={() => setShowFilters(false)}
        onApplyFilters={handleFilterApply}
      />
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
                  {isLoading ? 'Updating...' : 'Live Data'}
                </Badge>
                
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Calendar className="h-4 w-4" />
                      Date Range
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-4" align="end">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">From</label>
                        <DatePicker 
                          date={dateRange.from}
                          onDateChange={(date) => date && setDateRange(prev => ({ ...prev, from: date }))}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">To</label>
                        <DatePicker 
                          date={dateRange.to}
                          onDateChange={(date) => date && setDateRange(prev => ({ ...prev, to: date }))}
                        />
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>

                <Button 
                  variant="outline" 
                  size="sm" 
                  className="gap-2"
                  onClick={() => setShowFilters(true)}
                >
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
                
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Download className="h-4 w-4" />
                      Export
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-48" align="end">
                    <div className="space-y-2">
                      <Button 
                        variant="ghost" 
                        className="w-full justify-start"
                        onClick={() => exportData('csv')}
                      >
                        Download CSV
                      </Button>
                      <Button 
                        variant="ghost" 
                        className="w-full justify-start"
                        onClick={() => exportData('pdf')}
                      >
                        Download PDF
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>

                <Button 
                  size="sm" 
                  className="gap-2"
                  onClick={refreshData}
                  disabled={isLoading}
                >
                  <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
                  Refresh
                </Button>
              </div>
            </div>
          </div>

          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {isLoading ? (
              Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="space-y-3">
                  <Skeleton className="h-[120px] w-full rounded-lg" />
                </div>
              ))
            ) : (
              metrics.map((metric) => (
                <MetricCard key={metric.id} metric={metric} />
              ))
            )}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="lg:col-span-2">
              {isLoading ? (
                <Skeleton className="h-[400px] w-full rounded-lg" />
              ) : (
                <RevenueChart />
              )}
            </div>
            {isLoading ? (
              <>
                <Skeleton className="h-[350px] w-full rounded-lg" />
                <Skeleton className="h-[350px] w-full rounded-lg" />
              </>
            ) : (
              <>
                <PerformanceChart />
                <ChannelChart />
              </>
            )}
          </div>

          {/* Data Table */}
          {isLoading ? (
            <Skeleton className="h-[500px] w-full rounded-lg" />
          ) : (
            <CampaignTable />
          )}
        </main>
      </div>
    </div>
    </>
  );
};

export default Index;
