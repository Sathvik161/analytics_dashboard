// Mock data for ADmyBRAND Analytics Dashboard

export interface MetricCard {
  id: string;
  title: string;
  value: string;
  change: number;
  trend: 'up' | 'down' | 'neutral';
  icon: string;
}

export interface ChartDataPoint {
  name: string;
  value?: number;
  date?: string;
  revenue?: number;
  users?: number;
  conversions?: number;
  fill?: string;
}

export interface TableRow {
  id: string;
  campaign: string;
  impressions: number;
  clicks: number;
  ctr: number;
  cost: number;
  conversions: number;
  status: 'active' | 'paused' | 'completed';
  date: string;
}

// Key metrics data
export const metricsData: MetricCard[] = [
  {
    id: '1',
    title: 'Total Revenue',
    value: '$2,847,650',
    change: 12.5,
    trend: 'up',
    icon: 'DollarSign'
  },
  {
    id: '2',
    title: 'Active Users',
    value: '184,320',
    change: 8.2,
    trend: 'up',
    icon: 'Users'
  },
  {
    id: '3',
    title: 'Conversions',
    value: '23,847',
    change: -2.1,
    trend: 'down',
    icon: 'Target'
  },
  {
    id: '4',
    title: 'Growth Rate',
    value: '24.7%',
    change: 5.4,
    trend: 'up',
    icon: 'TrendingUp'
  }
];

// Revenue trend data for line chart
export const revenueData: ChartDataPoint[] = [
  { name: 'Jan', value: 2400000, date: '2024-01' },
  { name: 'Feb', value: 2100000, date: '2024-02' },
  { name: 'Mar', value: 2800000, date: '2024-03' },
  { name: 'Apr', value: 3200000, date: '2024-04' },
  { name: 'May', value: 2900000, date: '2024-05' },
  { name: 'Jun', value: 3400000, date: '2024-06' },
  { name: 'Jul', value: 3800000, date: '2024-07' },
  { name: 'Aug', value: 3600000, date: '2024-08' },
  { name: 'Sep', value: 4100000, date: '2024-09' },
  { name: 'Oct', value: 4500000, date: '2024-10' },
  { name: 'Nov', value: 4200000, date: '2024-11' },
  { name: 'Dec', value: 4800000, date: '2024-12' }
];

// Multi-metric data for area chart
export const performanceData: ChartDataPoint[] = [
  { name: 'Jan', revenue: 240, users: 180, conversions: 45 },
  { name: 'Feb', revenue: 210, users: 165, conversions: 42 },
  { name: 'Mar', revenue: 280, users: 220, conversions: 58 },
  { name: 'Apr', revenue: 320, users: 280, conversions: 72 },
  { name: 'May', revenue: 290, users: 240, conversions: 65 },
  { name: 'Jun', revenue: 340, users: 300, conversions: 85 },
  { name: 'Jul', revenue: 380, users: 350, conversions: 95 },
  { name: 'Aug', revenue: 360, users: 320, conversions: 88 },
  { name: 'Sep', revenue: 410, users: 380, conversions: 110 },
  { name: 'Oct', revenue: 450, users: 420, conversions: 125 },
  { name: 'Nov', revenue: 420, users: 390, conversions: 115 },
  { name: 'Dec', revenue: 480, users: 450, conversions: 140 }
];

// Channel distribution for pie chart
export const channelData: ChartDataPoint[] = [
  { name: 'Google Ads', value: 35, fill: 'hsl(var(--chart-1))' },
  { name: 'Facebook', value: 28, fill: 'hsl(var(--chart-2))' },
  { name: 'LinkedIn', value: 18, fill: 'hsl(var(--chart-3))' },
  { name: 'Twitter', value: 12, fill: 'hsl(var(--chart-4))' },
  { name: 'Others', value: 7, fill: 'hsl(var(--chart-5))' }
];

// Device breakdown for donut chart
export const deviceData: ChartDataPoint[] = [
  { name: 'Desktop', value: 45, fill: 'hsl(var(--chart-1))' },
  { name: 'Mobile', value: 42, fill: 'hsl(var(--chart-2))' },
  { name: 'Tablet', value: 13, fill: 'hsl(var(--chart-3))' }
];

// Campaign performance table data
export const campaignData: TableRow[] = [
  {
    id: '1',
    campaign: 'Summer Sale 2024',
    impressions: 2847650,
    clicks: 142384,
    ctr: 5.0,
    cost: 28476.50,
    conversions: 3542,
    status: 'active',
    date: '2024-07-15'
  },
  {
    id: '2',
    campaign: 'Back to School',
    impressions: 1923847,
    clicks: 96192,
    ctr: 5.2,
    cost: 19238.47,
    conversions: 2405,
    status: 'active',
    date: '2024-08-01'
  },
  {
    id: '3',
    campaign: 'Holiday Collection',
    impressions: 3456789,
    clicks: 173839,
    ctr: 5.03,
    cost: 34567.89,
    conversions: 4345,
    status: 'paused',
    date: '2024-11-20'
  },
  {
    id: '4',
    campaign: 'New Year Promo',
    impressions: 2134567,
    clicks: 106728,
    ctr: 5.0,
    cost: 21345.67,
    conversions: 2668,
    status: 'active',
    date: '2024-12-15'
  },
  {
    id: '5',
    campaign: 'Valentine Special',
    impressions: 1567890,
    clicks: 78395,
    ctr: 5.0,
    cost: 15678.90,
    conversions: 1960,
    status: 'completed',
    date: '2024-02-01'
  },
  {
    id: '6',
    campaign: 'Spring Collection',
    impressions: 2789012,
    clicks: 139451,
    ctr: 5.0,
    cost: 27890.12,
    conversions: 3486,
    status: 'active',
    date: '2024-03-20'
  },
  {
    id: '7',
    campaign: 'Tech Week',
    impressions: 1890123,
    clicks: 94506,
    ctr: 5.0,
    cost: 18901.23,
    conversions: 2363,
    status: 'paused',
    date: '2024-05-10'
  },
  {
    id: '8',
    campaign: 'Flash Sale',
    impressions: 987654,
    clicks: 49383,
    ctr: 5.0,
    cost: 9876.54,
    conversions: 1235,
    status: 'completed',
    date: '2024-06-05'
  }
];

// Format currency
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  }).format(value);
};

// Format number with commas
export const formatNumber = (value: number): string => {
  return new Intl.NumberFormat('en-US').format(value);
};

// Format percentage
export const formatPercentage = (value: number): string => {
  return `${value.toFixed(1)}%`;
};