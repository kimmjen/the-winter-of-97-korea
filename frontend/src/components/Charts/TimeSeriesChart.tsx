 import React, { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
  Area,
  AreaChart,
} from 'recharts';
import type { ITimeSeriesChartProps } from '../../data/types';
import { TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';

const TimeSeriesChart: React.FC<ITimeSeriesChartProps> = React.memo(({
  data,
  title,
  dataKey,
  color = '#2563eb'
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // 데이터 분석 결과 메모이제이션
  const chartAnalysis = useMemo(() => {
    const values = data.map(item => item[dataKey] as number);
    const maxValue = Math.max(...values);
    const minValue = Math.min(...values);
    const maxPoint = data.find(item => item[dataKey] === maxValue);
    const minPoint = data.find(item => item[dataKey] === minValue);
    const crisisPoint = data.find(item => item.date === '1997-12');
    const crisisIndex = data.findIndex(item => item.date === '1997-12');

    return {
      maxValue,
      minValue,
      maxPoint,
      minPoint,
      crisisPoint,
      crisisIndex
    };
  }, [data, dataKey]);

  // 값 포맷팅 함수 메모이제이션
  const formatValue = useCallback((value: number): string => {
    if (dataKey === 'KRW_USD') {
      return `₩${value.toLocaleString()}`;
    } else if (dataKey === 'unemployment_rate') {
      return `${value}%`;
    } else if (dataKey === 'fx_reserves_billion') {
      return `$${value}B`;
    }
    return String(value);
  }, [dataKey]);

  // 그라디언트 ID 메모이제이션
  const gradientId = useMemo(() => `gradient-${dataKey}`, [dataKey]);

  // 호버 핸들러 메모이제이션
  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  // 커스텀 툴팁 컴포넌트 메모이제이션
  const CustomTooltip = useMemo(() => React.memo(({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const value = payload[0].value;
      return (
        <div className="bg-gray-800 border border-gray-600 rounded-lg p-3 shadow-lg">
          <p className="text-white font-medium">{label}</p>
          <p className="text-blue-400">
            {title}: <span className="font-bold">{formatValue(value)}</span>
          </p>
        </div>
      );
    }
    return null;
  }), [title, formatValue]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
      onHoverStart={handleMouseEnter}
      onHoverEnd={handleMouseLeave}
    >
      {/* 헤더 섹션 */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 border-b">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {title}
            </h3>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span>최고: {formatValue(chartAnalysis.maxValue)} ({chartAnalysis.maxPoint?.date})</span>
              </div>
              <div className="flex items-center space-x-1">
                <TrendingDown className="w-4 h-4 text-blue-500" />
                <span>최저: {formatValue(chartAnalysis.minValue)} ({chartAnalysis.minPoint?.date})</span>
              </div>
            </div>
          </div>

          <motion.div
            animate={{ rotate: isHovered ? 10 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-gray-400"
          >
            <AlertTriangle className="w-8 h-8" />
          </motion.div>
        </div>
      </div>

      {/* 차트 영역 */}
      <div className="p-6">
        <ResponsiveContainer width="100%" height={450}>
          <AreaChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 20,
            }}
          >
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.3}/>
                <stop offset="95%" stopColor={color} stopOpacity={0.1}/>
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.6} />

            <XAxis
              dataKey="date"
              tick={{ fontSize: 12, fill: '#6b7280' }}
              tickFormatter={(value) => {
                const [year, month] = value.split('-');
                return month === '01' ? year : month;
              }}
              axisLine={{ stroke: '#d1d5db' }}
            />

            <YAxis
              tick={{ fontSize: 12, fill: '#6b7280' }}
              tickFormatter={(value) => formatValue(Number(value))}
              axisLine={{ stroke: '#d1d5db' }}
            />

            <Tooltip
              content={<CustomTooltip />}
              labelFormatter={(label) => {
                const [year, month] = label.split('-');
                return `${year}년 ${month}월`;
              }}
              contentStyle={{
                backgroundColor: '#f9fafb',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
              }}
            />

            <Legend />

            {/* IMF 위기 시점 수직선 */}
            <ReferenceLine
              x="1997-12"
              stroke="#dc2626"
              strokeWidth={3}
              strokeDasharray="8 8"
              label={{
                value: "🚨 IMF 위기",
                position: "top",
                style: {
                  fill: '#dc2626',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }
              }}
            />

            {/* 메인 차트 */}
            <Area
              dataKey={dataKey}
              stroke={color}
              fill={`url(#${gradientId})`}
              strokeWidth={3}
              dot={false}
              name={
                dataKey === 'KRW_USD' ? '원/달러 환율' :
                dataKey === 'unemployment_rate' ? '실업률' :
                dataKey === 'fx_reserves_billion' ? '외환보유액' :
                String(dataKey)
              }
            />

            {/* 특별 포인트 표시 - 위기 시점만 강조 */}
            {data.map((item, index) => {
              if (item.date === '1997-12') {
                const point = data[index];
                const x = (index / (data.length - 1)) * 100;
                const value = point[dataKey] as number;
                const yPercent = ((value - chartAnalysis.minValue) / (chartAnalysis.maxValue - chartAnalysis.minValue)) * 100;

                return (
                  <g key={`crisis-point-${index}`}>
                    <circle
                      cx={`${x}%`}
                      cy={`${100 - yPercent}%`}
                      r={8}
                      fill="#dc2626"
                      stroke="#fff"
                      strokeWidth={3}
                    />
                    <circle
                      cx={`${x}%`}
                      cy={`${100 - yPercent}%`}
                      r={12}
                      fill="none"
                      stroke="#dc2626"
                      strokeWidth={2}
                      opacity={0.5}
                    />
                  </g>
                );
              }
              return null;
            })}
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* 위기 시점 하이라이트 정보 */}
      {chartAnalysis.crisisPoint && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mx-6 mb-6 p-4 bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-r-lg"
        >
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h4 className="font-semibold text-red-800 mb-1">
                1997년 12월 IMF 위기 절정
              </h4>
              <p className="text-red-700 text-sm">
                <span className="font-bold">
                  {formatValue(chartAnalysis.crisisPoint[dataKey] as number)}
                </span>
                {dataKey === 'KRW_USD' && ' - 사상 최고 환율 기록'}
                {dataKey === 'unemployment_rate' && ' - 대량 실업 사태'}
                {dataKey === 'fx_reserves_billion' && ' - 국가 부도 직전 상황'}
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* 데이터 인사이트 */}
      <div className="bg-gray-50 p-6 border-t">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-red-600">
              {((chartAnalysis.maxValue / chartAnalysis.minValue - 1) * 100).toFixed(1)}%
            </div>
            <div className="text-sm text-gray-600">최대 변동폭</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600">
              {data.length}개월
            </div>
            <div className="text-sm text-gray-600">데이터 기간</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">
              {chartAnalysis.crisisIndex + 1}개월
            </div>
            <div className="text-sm text-gray-600">위기 발생까지</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

export default TimeSeriesChart;
