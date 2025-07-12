import React, { useState, useMemo } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { workingCapitalDaily } from '../data/ChartData.js';

const formatDate = (dateStr) => {
  const options = { month: 'short', day: 'numeric' };
  return new Date(dateStr).toLocaleDateString('en-US', options);
};

const groupByWeek = (data) => {
  const result = [];
  for (let i = 0; i < data.length; i += 7) {
    const weekSlice = data.slice(i, i + 7);
    const totalIncome = weekSlice.reduce((sum, d) => sum + d.income, 0);
    const totalExpenses = weekSlice.reduce((sum, d) => sum + d.expenses, 0);
    const startDate = formatDate(weekSlice[0]?.date);
    const endDate = formatDate(weekSlice[weekSlice.length - 1]?.date);
    result.push({
      date: `${startDate} - ${endDate}`,
      income: totalIncome,
      expenses: totalExpenses,
    });
  }
  return result;
};

const formatCurrency = (value) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);

const WorkingCapitalChart = () => {
  const [viewType, setViewType] = useState('daily');
  const [currentIndex, setCurrentIndex] = useState(0);

  const weeklyData = useMemo(() => groupByWeek(workingCapitalDaily), []);
  const dailyChunk = workingCapitalDaily.slice(currentIndex, currentIndex + 7);
  const chartData = viewType === 'daily' ? dailyChunk : weeklyData;

  const maxY = useMemo(() => {
    const allValues = chartData.flatMap(item => [item.income, item.expenses]);
    return Math.ceil(Math.max(...allValues) / 1000) * 1000;
  }, [chartData]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 7, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 7, workingCapitalDaily.length - 7)
    );
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg relative mb-8 border border-[#F5F5F5]">
      {/* Üst bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <h3 className="text-lg font-semibold">Working Capital</h3>
        <select
          value={viewType}
          onChange={(e) => {
            setViewType(e.target.value);
            setCurrentIndex(0);
          }}
          className="border border-gray-300 rounded px-2 py-1 text-sm w-32"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
        </select>
      </div>

      {/* Günlük görünümde navigasyon */}
      {viewType === 'daily' && (
        <div className="flex justify-end gap-2 mb-4 flex-wrap">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`px-3 py-1 rounded text-sm font-medium transition ${
              currentIndex === 0
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-green-500 text-white hover:bg-green-400'
            }`}
          >
            ◀ Prev
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex + 7 >= workingCapitalDaily.length}
            className={`px-3 py-1 rounded text-sm font-medium transition ${
              currentIndex + 7 >= workingCapitalDaily.length
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-green-500 text-white hover:bg-green-400'
            }`}
          >
            Next ▶
          </button>
        </div>
      )}

      {/* Grafik */}
      <div className="w-full h-[260px] sm:h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 40 }}
          >
            <CartesianGrid vertical={true} horizontal={false} />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 12 }}
              angle={-30}
              textAnchor="end"
              interval={0}
              tickFormatter={(value) =>
                viewType === 'weekly' ? value : formatDate(value)
              }
            />
            <YAxis
              domain={[0, maxY]}
              tickFormatter={formatCurrency}
              tick={{ fontSize: 12 }}
            />
            <Tooltip
              formatter={(value) => formatCurrency(value)}
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #ddd' }}
            />
            <Legend verticalAlign="top" align="right" wrapperStyle={{ marginBottom: 10 }} />
            <Line type="monotone" dataKey="income" stroke="#2ecc71" activeDot={{ r: 6 }} />
            <Line type="monotone" dataKey="expenses" stroke="#f1c40f" activeDot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WorkingCapitalChart;
