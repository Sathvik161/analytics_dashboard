import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DatePicker } from "./DatePicker";
import { X } from "lucide-react";

interface FilterPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilters: (filters: any) => void;
}

export function FilterPanel({ isOpen, onClose, onApplyFilters }: FilterPanelProps) {
  const [filters, setFilters] = useState({
    dateFrom: undefined as Date | undefined,
    dateTo: undefined as Date | undefined,
    channels: [] as string[],
    status: 'all',
    metric: 'revenue'
  });

  const channels = ['Google Ads', 'Facebook', 'LinkedIn', 'Twitter', 'Others'];

  const handleChannelChange = (channel: string, checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      channels: checked 
        ? [...prev.channels, channel]
        : prev.channels.filter(c => c !== channel)
    }));
  };

  const handleApply = () => {
    onApplyFilters(filters);
    onClose();
  };

  const handleClear = () => {
    setFilters({
      dateFrom: undefined,
      dateTo: undefined,
      channels: [],
      status: 'all',
      metric: 'revenue'
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="fixed right-0 top-0 h-full w-80 bg-background border-l border-border shadow-lg overflow-y-auto">
        <Card className="h-full rounded-none border-0">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Filters</CardTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Date Range */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Date Range</label>
              <div className="space-y-2">
                <DatePicker 
                  date={filters.dateFrom}
                  onDateChange={(date) => setFilters(prev => ({ ...prev, dateFrom: date }))}
                  placeholder="From date"
                />
                <DatePicker 
                  date={filters.dateTo}
                  onDateChange={(date) => setFilters(prev => ({ ...prev, dateTo: date }))}
                  placeholder="To date"
                />
              </div>
            </div>

            {/* Channels */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Channels</label>
              <div className="space-y-2">
                {channels.map(channel => (
                  <div key={channel} className="flex items-center space-x-2">
                    <Checkbox
                      id={channel}
                      checked={filters.channels.includes(channel)}
                      onCheckedChange={(checked) => handleChannelChange(channel, !!checked)}
                    />
                    <label htmlFor={channel} className="text-sm">{channel}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Status */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Campaign Status</label>
              <Select value={filters.status} onValueChange={(value) => setFilters(prev => ({ ...prev, status: value }))}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="paused">Paused</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Primary Metric */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Primary Metric</label>
              <Select value={filters.metric} onValueChange={(value) => setFilters(prev => ({ ...prev, metric: value }))}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="revenue">Revenue</SelectItem>
                  <SelectItem value="conversions">Conversions</SelectItem>
                  <SelectItem value="clicks">Clicks</SelectItem>
                  <SelectItem value="impressions">Impressions</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Actions */}
            <div className="flex gap-2 pt-4">
              <Button onClick={handleApply} className="flex-1">
                Apply Filters
              </Button>
              <Button variant="outline" onClick={handleClear}>
                Clear
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}