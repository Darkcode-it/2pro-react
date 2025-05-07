import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { cn } from '../../lib/utils';

const StatsCard = ({ 
  title, 
  value, 
  description, 
  icon, 
  change,
  className 
}) => {
  return (
    <Card className={cn("overflow-hidden transition-all duration-200 hover:shadow-md", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {(description || change !== undefined) && (
          <div className="flex items-center mt-1">
            {change !== undefined && (
              <span 
                className={cn(
                  "text-xs font-medium mr-2", 
                  change >= 0 ? "text-green-500" : "text-red-500"
                )}
              >
                {change >= 0 ? "+" : ""}{change}%
              </span>
            )}
            {description && (
              <p className="text-xs text-muted-foreground">
                {description}
              </p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default StatsCard;
