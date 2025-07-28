import { useState, useCallback } from 'react';
import { metricsData, revenueData, performanceData, channelData, campaignData } from '@/lib/mock-data';
import { toast } from '@/hooks/use-toast';

export interface DateRange {
  from: Date;
  to: Date;
}

export const useAnalytics = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dateRange, setDateRange] = useState<DateRange>({
    from: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
    to: new Date()
  });

  const refreshData = useCallback(async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    toast({
      title: "Data Refreshed",
      description: "Analytics data has been updated successfully.",
    });
  }, []);

  const exportData = useCallback((format: 'csv' | 'pdf') => {
    toast({
      title: `Exporting ${format.toUpperCase()}`,
      description: `Your ${format.toUpperCase()} export is being prepared and will download shortly.`,
    });
    
    if (format === 'csv') {
      // Simple CSV export simulation
      const csv = [
        'Campaign,Impressions,Clicks,CTR,Cost,Conversions,Status',
        ...campaignData.map(row => 
          `${row.campaign},${row.impressions},${row.clicks},${row.ctr}%,$${row.cost},${row.conversions},${row.status}`
        )
      ].join('\n');
      
      const blob = new Blob([csv], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'analytics-export.csv';
      a.click();
      window.URL.revokeObjectURL(url);
    }
  }, []);

  return {
    isLoading,
    dateRange,
    setDateRange,
    refreshData,
    exportData,
    metrics: metricsData,
    revenueData,
    performanceData,
    channelData,
    campaignData
  };
};