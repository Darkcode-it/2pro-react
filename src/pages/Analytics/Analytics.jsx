import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import AreaChart from '../../components/dashboard/AreaChart';
import { BarChart as LucideBarChart, TrendingUp, ShoppingCart } from 'lucide-react';
import '../../styles/components.css';

const analyticsData = {
  traffic: [
    { name: 'شنبه', visitors: 2400, pageviews: 4200 },
    { name: 'یکشنبه', visitors: 1398, pageviews: 3100 },
    { name: 'دوشنبه', visitors: 3200, pageviews: 5400 },
    { name: 'سه‌شنبه', visitors: 2780, pageviews: 4908 },
    { name: 'چهارشنبه', visitors: 1890, pageviews: 3800 },
    { name: 'پنجشنبه', visitors: 2390, pageviews: 4300 },
    { name: 'جمعه', visitors: 2490, pageviews: 4100 },
  ],
  sales: [
    { name: 'شنبه', revenue: 5000, orders: 40 },
    { name: 'یکشنبه', revenue: 3000, orders: 30 },
    { name: 'دوشنبه', revenue: 7000, orders: 60 },
    { name: 'سه‌شنبه', revenue: 4500, orders: 45 },
    { name: 'چهارشنبه', revenue: 6000, orders: 55 },
    { name: 'پنجشنبه', revenue: 5500, orders: 50 },
    { name: 'جمعه', revenue: 4000, orders: 35 },
  ],
  users: [
    { name: 'شنبه', signups: 40, active: 380 },
    { name: 'یکشنبه', signups: 30, active: 350 },
    { name: 'دوشنبه', signups: 50, active: 410 },
    { name: 'سه‌شنبه', signups: 35, active: 400 },
    { name: 'چهارشنبه', signups: 25, active: 390 },
    { name: 'پنجشنبه', signups: 45, active: 420 },
    { name: 'جمعه', signups: 55, active: 450 },
  ]
};

const Analytics = () => {
  return (
    <MainLayout>
      <div className="analytics-container">
        <div className="analytics-header">
          <h1 className="analytics-title">تجزیه و تحلیل</h1>
          <p className="analytics-subtitle">بررسی عملکرد سایت و کاربران</p>
        </div>

        <div className="analytics-grid">
          <div className="analytics-card">
            <div className="card-header">
              <h3 className="card-title">بازدیدکنندگان امروز</h3>
              <LucideBarChart className="card-icon" />
            </div>
            <div className="card-content">
              <div className="card-value">2,340</div>
              <p className="card-change positive">
                +5.2% از هفته گذشته
              </p>
            </div>
          </div>

          <div className="analytics-card">
            <div className="card-header">
              <h3 className="card-title">درآمد امروز</h3>
              <TrendingUp className="card-icon" />
            </div>
            <div className="card-content">
              <div className="card-value">12,500 تومان</div>
              <p className="card-change positive">
                +8.1% از هفته گذشته
              </p>
            </div>
          </div>

          <div className="analytics-card">
            <div className="card-header">
              <h3 className="card-title">سفارشات امروز</h3>
              <ShoppingCart className="card-icon" />
            </div>
            <div className="card-content">
              <div className="card-value">48</div>
              <p className="card-change negative">
                -2.5% از هفته گذشته
              </p>
            </div>
          </div>
        </div>

        <div className="tabs">
          <div className="tabs-list">
            <button className="tab-trigger active">ترافیک</button>
            <button className="tab-trigger">فروش</button>
            <button className="tab-trigger">کاربران</button>
          </div>
          
          <div className="tab-content">
            <div className="chart-container">
              <AreaChart
                title="نمودار ترافیک هفتگی"
                data={analyticsData.traffic}
                categories={[
                  { name: 'visitors', color: '#8B5CF6' },
                  { name: 'pageviews', color: '#10B981' },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Analytics;