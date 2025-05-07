import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const SimpleTable = ({ title, columns, data }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative w-full overflow-auto">
          <div className="min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-muted/50">
                    {columns.map((column) => (
                      <th
                        key={column.key}
                        className="h-12 px-4 text-right align-middle font-medium text-muted-foreground whitespace-nowrap"
                      >
                        {column.title}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {data.map((row, rowIndex) => (
                    <tr
                      key={row.id || rowIndex}
                      className="hover:bg-muted/50 transition-colors"
                    >
                      {columns.map((column) => (
                        <td
                          key={`${row.id}-${column.key}`}
                          className="p-4 align-middle whitespace-nowrap"
                        >
                          {column.render
                            ? column.render(row[column.key], row)
                            : row[column.key]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SimpleTable;
