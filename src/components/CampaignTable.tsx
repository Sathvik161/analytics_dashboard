import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, ArrowUpDown } from "lucide-react";
import { campaignData, formatCurrency, formatNumber, formatPercentage, TableRow } from "@/lib/mock-data";

type SortField = keyof TableRow;
type SortDirection = 'asc' | 'desc';

export function CampaignTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState<SortField>('date');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const filteredData = campaignData
    .filter(row => 
      row.campaign.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (statusFilter === 'all' || row.status === statusFilter)
    )
    .sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortDirection === 'asc' 
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
      
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
      }
      
      return 0;
    });

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-success/20 text-success border-success/30';
      case 'paused': return 'bg-warning/20 text-warning border-warning/30';
      case 'completed': return 'bg-muted/20 text-muted-foreground border-muted/30';
      default: return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  return (
    <Card className="border-border/50 bg-gradient-surface">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-foreground">
          Campaign Performance
        </CardTitle>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search campaigns..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-background/50 border-border/50"
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant={statusFilter === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setStatusFilter('all')}
              className="text-xs"
            >
              All
            </Button>
            <Button
              variant={statusFilter === 'active' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setStatusFilter('active')}
              className="text-xs"
            >
              Active
            </Button>
            <Button
              variant={statusFilter === 'paused' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setStatusFilter('paused')}
              className="text-xs"
            >
              Paused
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/50">
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort('campaign')}
                    className="h-auto p-0 font-medium text-muted-foreground hover:text-foreground"
                  >
                    Campaign <ArrowUpDown className="ml-1 h-3 w-3" />
                  </Button>
                </th>
                <th className="text-right py-3 px-4 font-medium text-muted-foreground">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort('impressions')}
                    className="h-auto p-0 font-medium text-muted-foreground hover:text-foreground"
                  >
                    Impressions <ArrowUpDown className="ml-1 h-3 w-3" />
                  </Button>
                </th>
                <th className="text-right py-3 px-4 font-medium text-muted-foreground">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort('clicks')}
                    className="h-auto p-0 font-medium text-muted-foreground hover:text-foreground"
                  >
                    Clicks <ArrowUpDown className="ml-1 h-3 w-3" />
                  </Button>
                </th>
                <th className="text-right py-3 px-4 font-medium text-muted-foreground">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort('ctr')}
                    className="h-auto p-0 font-medium text-muted-foreground hover:text-foreground"
                  >
                    CTR <ArrowUpDown className="ml-1 h-3 w-3" />
                  </Button>
                </th>
                <th className="text-right py-3 px-4 font-medium text-muted-foreground">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort('cost')}
                    className="h-auto p-0 font-medium text-muted-foreground hover:text-foreground"
                  >
                    Cost <ArrowUpDown className="ml-1 h-3 w-3" />
                  </Button>
                </th>
                <th className="text-right py-3 px-4 font-medium text-muted-foreground">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort('conversions')}
                    className="h-auto p-0 font-medium text-muted-foreground hover:text-foreground"
                  >
                    Conversions <ArrowUpDown className="ml-1 h-3 w-3" />
                  </Button>
                </th>
                <th className="text-center py-3 px-4 font-medium text-muted-foreground">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row) => (
                <tr key={row.id} className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                  <td className="py-4 px-4">
                    <div className="font-medium text-foreground">{row.campaign}</div>
                    <div className="text-sm text-muted-foreground">{row.date}</div>
                  </td>
                  <td className="text-right py-4 px-4 text-foreground">
                    {formatNumber(row.impressions)}
                  </td>
                  <td className="text-right py-4 px-4 text-foreground">
                    {formatNumber(row.clicks)}
                  </td>
                  <td className="text-right py-4 px-4 text-foreground">
                    {formatPercentage(row.ctr)}
                  </td>
                  <td className="text-right py-4 px-4 text-foreground">
                    {formatCurrency(row.cost)}
                  </td>
                  <td className="text-right py-4 px-4 text-foreground">
                    {formatNumber(row.conversions)}
                  </td>
                  <td className="text-center py-4 px-4">
                    <Badge className={getStatusColor(row.status)}>
                      {row.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredData.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No campaigns found</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}