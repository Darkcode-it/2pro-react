import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Area, AreaChart as RechartsAreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const AreaChart = ({ title, data, categories }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsAreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              {categories.map((category) => (
                <Area
                  key={category.name}
                  type="monotone"
                  dataKey={category.name}
                  stroke={category.color}
                  fill={category.color}
                  fillOpacity={0.2}
                />
              ))}
            </RechartsAreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default AreaChart;
