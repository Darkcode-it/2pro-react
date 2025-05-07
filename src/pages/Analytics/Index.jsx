
import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import StatsCard from '../../components/dashboard/StatsCard';
import AreaChart from '../../components/dashboard/AreaChart';
import SimpleTable from '../../components/dashboard/SimpleTable';
import { Users, BarChart, Settings, Search } from 'lucide-react';
import { Badge } from '../../components/ui/badge';

// Sample data for the charts
const areaChartData = [
  { name: 'Jan', users: 4000, revenue: 2400, transactions: 2400 },
  { name: 'Feb', users: 3000, revenue: 1398, transactions: 2210 },
  { name: 'Mar', users: 2000, revenue: 9800, transactions: 2290 },
  { name: 'Apr', users: 2780, revenue: 3908, transactions: 2000 },
  { name: 'May', users: 1890, revenue: 4800, transactions: 2181 },
  { name: 'Jun', users: 2390, revenue: 3800, transactions: 2500 },
  { name: 'Jul', users: 3490, revenue: 4300, transactions: 2100 },
];

// Sample data for the table
const recentUsersData = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@example.com',
    status: 'active',
    lastLogin: '2 hours ago',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    status: 'inactive',
    lastLogin: '2 days ago',
  },
  {
    id: 3,
    name: 'Michael Brown',
    email: 'michael.brown@example.com',
    status: 'active',
    lastLogin: '4 hours ago',
  },
  {
    id: 4,
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    status: 'active',
    lastLogin: '1 hour ago',
  },
  {
    id: 5,
    name: 'Robert Wilson',
    email: 'robert.wilson@example.com',
    status: 'pending',
    lastLogin: 'Never',
  },
];

const tableColumns = [
  { key: 'name', title: 'Name' },
  { key: 'email', title: 'Email' },
  { 
    key: 'status', 
    title: 'Status',
    render: (value) => (
      <Badge
        variant={
          value === 'active' ? 'default' : 
          value === 'inactive' ? 'secondary' : 
          'outline'
        }
      >
        {value}
      </Badge>
    )
  },
  { key: 'lastLogin', title: 'Last Login' },
];

const Index = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">داشبورد</h1>
          <p className="text-muted-foreground">به پنل مدیریت خود خوش آمدید</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="تعداد کاربران"
            value="12,345"
            change={12}
            description="نسبت به ماه قبل"
            icon={<Users className="h-4 w-4" />}
          />
          <StatsCard
            title="جلسات فعال"
            value="1,234"
            change={-5}
            description="نسبت به ماه قبل"
            icon={<Users className="h-4 w-4" />}
          />
          <StatsCard
            title="نرخ تبدیل"
            value="15.2%"
            change={2.3}
            description="نسبت به ماه قبل"
            icon={<BarChart className="h-4 w-4" />}
          />
          <StatsCard
            title="میانگین مدت جلسه"
            value="3m 45s"
            change={0.8}
            description="نسبت به ماه قبل"
            icon={<Settings className="h-4 w-4" />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AreaChart
            title="رشد کاربران و درآمد"
            data={areaChartData}
            categories={[
              { name: 'users', color: '#8B5CF6' },
              { name: 'revenue', color: '#10B981' },
            ]}
          />
          <AreaChart
            title="تراکنش‌ها"
            data={areaChartData}
            categories={[
              { name: 'transactions', color: '#3B82F6' },
            ]}
          />
        </div>

        <SimpleTable
          title="کاربران اخیر"
          columns={tableColumns}
          data={recentUsersData}
        />
      </div>
    </MainLayout>
  );
};

export default Index;