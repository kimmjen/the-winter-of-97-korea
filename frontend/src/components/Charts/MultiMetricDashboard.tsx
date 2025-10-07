import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';
import type { IExtendedEconomicData } from '@data/extendedEconomicData';
import {
  TrendingUp,
  DollarSign,
  Percent,
  BarChart3,
  Activity,
  Filter,
  Eye,
  EyeOff
} from 'lucide-react';

interface MultiMetricDashboardProps {
  data: IExtendedEconomicData[];
}

const MultiMetricDashboard: React.FC<MultiMetricDashboardProps> = ({ data }) => {
  const [selectedMetrics, setSelectedMetrics] = useState<string[]>([
    'gdp_growth_rate',
    'inflation_rate',
    'base_interest_rate',
    'kospi_index'
  ]);

  const [timeRange, setTimeRange] = useState<'all' | 'crisis' | 'recovery'>('all');

  const metrics = [
    {
      key: 'gdp_growth_rate',
      name: 'GDP 성장률',
      unit: '%',
      color: '#22c55e',
      icon: <TrendingUp className="w-4 h-4" />,
      type: 'line' as const
    },
    {
      key: 'inflation_rate',
      name: '물가상승률',
      unit: '%',
      color: '#ef4444',
      icon: <Percent className="w-4 h-4" />,
      type: 'line' as const
    },
    {
      key: 'base_interest_rate',
      name: '기준금리',
      unit: '%',
      color: '#3b82f6',
      icon: <BarChart3 className="w-4 h-4" />,
      type: 'line' as const
    },
    {
      key: 'kospi_index',
      name: 'KOSPI 지수',
      unit: 'pt',
      color: '#8b5cf6',
      icon: <Activity className="w-4 h-4" />,
      type: 'bar' as const
    },
    {
      key: 'export_billion',
      name: '수출액',
      unit: '억$',
      color: '#06b6d4',
      icon: <DollarSign className="w-4 h-4" />,
      type: 'bar' as const
    },
    {
      key: 'import_billion',
      name: '수입액',
      unit: '억$',
      color: '#f59e0b',
      icon: <DollarSign className="w-4 h-4" />,
      type: 'bar' as const
    },
    {
      key: 'household_debt_ratio',
      name: '가계부채비율',
      unit: '%',
      color: '#ec4899',
      icon: <Percent className="w-4 h-4" />,
      type: 'line' as const
    },
    {
      key: 'corporate_debt_ratio',
      name: '기업부채비율',
      unit: '%',
      color: '#f97316',
      icon: <Percent className="w-4 h-4" />,
      type: 'line' as const
    }
  ];

  const getFilteredData = () => {
    switch (timeRange) {
      case 'crisis':
        return data.filter(item => {
          const year = parseInt(item.date.split('-')[0]);
          return year >= 1996 && year <= 1998;
        });
      case 'recovery':
        return data.filter(item => {
          const year = parseInt(item.date.split('-')[0]);
          return year >= 1999 && year <= 2000;
        });
      default:
        return data;
    }
  };

  const toggleMetric = (metricKey: string) => {
    setSelectedMetrics(prev =>
      prev.includes(metricKey)
        ? prev.filter(m => m !== metricKey)
        : [...prev, metricKey]
    );
  };

  const getRadarData = () => {
    const crisisData = data.find(item => item.date === '1997-12');
    const currentData = data[data.length - 1];

    if (!crisisData || !currentData) return [];

    return [
      {
        metric: 'GDP성장률',
        crisis: Math.max(0, crisisData.gdp_growth_rate + 10) * 5, // 정규화
        current: Math.max(0, currentData.gdp_growth_rate + 10) * 5,
        fullMark: 100
      },
      {
        metric: '물가안정',
        crisis: Math.max(0, 20 - crisisData.inflation_rate) * 5,
        current: Math.max(0, 20 - currentData.inflation_rate) * 5,
        fullMark: 100
      },
      {
        metric: '금융안정',
        crisis: Math.max(0, 40 - crisisData.base_interest_rate) * 2.5,
        current: Math.max(0, 40 - currentData.base_interest_rate) * 2.5,
        fullMark: 100
      },
      {
        metric: '주식시장',
        crisis: (crisisData.kospi_index / 30),
        current: Math.min(100, currentData.kospi_index / 30),
        fullMark: 100
      },
      {
        metric: '외환보유액',
        crisis: (crisisData.fx_reserves_billion / 5),
        current: Math.min(100, currentData.fx_reserves_billion / 5),
        fullMark: 100
      }
    ];
  };

  const filteredData = getFilteredData();
  const radarData = getRadarData();

  return (
    <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-slate-100 border border-slate-200 rounded-full text-slate-700 text-sm font-medium mb-6">
            <BarChart3 className="w-4 h-4 mr-2" />
            종합 경제 지표
          </div>

          <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Multi-Metric Analysis
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            다양한 경제 지표들의 상호 관계와 변화 패턴을 종합적으로 분석해보세요
          </p>
        </motion.div>

        {/* 컨트롤 패널 */}
        <div className="bg-white rounded-2xl p-6 shadow-xl mb-12 border border-gray-200">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* 기간 선택 */}
            <div className="flex-shrink-0">
              <label className="block text-sm font-semibold text-gray-700 mb-3">분석 기간</label>
              <div className="flex gap-2">
                {[
                  { value: 'all', label: '전체 기간' },
                  { value: 'crisis', label: '위기 기간' },
                  { value: 'recovery', label: '회복 기간' }
                ].map(option => (
                  <button
                    key={option.value}
                    onClick={() => setTimeRange(option.value as any)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      timeRange === option.value
                        ? 'bg-blue-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 지표 선택 */}
            <div className="flex-grow">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                <Filter className="w-4 h-4 inline mr-1" />
                표시할 지표 선택
              </label>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                {metrics.map(metric => (
                  <button
                    key={metric.key}
                    onClick={() => toggleMetric(metric.key)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedMetrics.includes(metric.key)
                        ? 'text-white shadow-lg'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                    style={{
                      backgroundColor: selectedMetrics.includes(metric.key) ? metric.color : undefined
                    }}
                  >
                    {selectedMetrics.includes(metric.key) ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                    {metric.icon}
                    <span className="truncate">{metric.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* 메인 차트 */}
          <div className="xl:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-8 shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                경제 지표 종합 차트
              </h3>

              <ResponsiveContainer width="100%" height={500}>
                <ComposedChart data={filteredData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis
                    dataKey="date"
                    tick={{ fontSize: 11 }}
                    tickFormatter={(value) => {
                      const [year, month] = value.split('-');
                      return month === '01' ? year : month;
                    }}
                  />
                  <YAxis yAxisId="left" orientation="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip
                    formatter={(value: any, name: string) => {
                      const metric = metrics.find(m => m.key === name);
                      return [`${Number(value).toLocaleString()}${metric?.unit || ''}`, metric?.name || name];
                    }}
                    labelFormatter={(label) => {
                      const [year, month] = label.split('-');
                      return `${year}년 ${month}월`;
                    }}
                  />
                  <Legend />

                  {selectedMetrics.map(metricKey => {
                    const metric = metrics.find(m => m.key === metricKey);
                    if (!metric) return null;

                    return metric.type === 'line' ? (
                      <Line
                        key={metricKey}
                        yAxisId={metricKey === 'kospi_index' ? 'right' : 'left'}
                        type="monotone"
                        dataKey={metricKey}
                        stroke={metric.color}
                        strokeWidth={2}
                        name={metric.name}
                        dot={{ r: 3, fill: metric.color }}
                      />
                    ) : (
                      <Bar
                        key={metricKey}
                        yAxisId={metricKey === 'kospi_index' ? 'right' : 'left'}
                        dataKey={metricKey}
                        fill={metric.color}
                        name={metric.name}
                        opacity={0.7}
                      />
                    );
                  })}
                </ComposedChart>
              </ResponsiveContainer>
            </motion.div>
          </div>

          {/* 레이더 차트 */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-6 shadow-2xl"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                경제 건전성 비교
              </h3>

              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={radarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="metric" tick={{ fontSize: 10 }} />
                  <PolarRadiusAxis
                    angle={30}
                    domain={[0, 100]}
                    tick={{ fontSize: 8 }}
                  />
                  <Radar
                    name="1997년 위기"
                    dataKey="crisis"
                    stroke="#ef4444"
                    fill="#ef4444"
                    fillOpacity={0.2}
                    strokeWidth={2}
                  />
                  <Radar
                    name="2025년 현재"
                    dataKey="current"
                    stroke="#22c55e"
                    fill="#22c55e"
                    fillOpacity={0.2}
                    strokeWidth={2}
                  />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* 주요 지표 요약 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-3xl p-6 shadow-2xl"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                핵심 지표 현황
              </h3>

              <div className="space-y-4">
                {metrics.slice(0, 4).map(metric => {
                  const latestData = filteredData[filteredData.length - 1];
                  const value = latestData?.[metric.key as keyof IExtendedEconomicData];

                  return (
                    <div key={metric.key} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <div
                          className="p-2 rounded-lg"
                          style={{ backgroundColor: metric.color + '20' }}
                        >
                          <div style={{ color: metric.color }}>
                            {metric.icon}
                          </div>
                        </div>
                        <span className="font-medium text-gray-700 text-sm">{metric.name}</span>
                      </div>
                      <span className="font-bold text-gray-800">
                        {typeof value === 'number' ? value.toLocaleString() : '—'}{metric.unit}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* 인사이트 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-3xl shadow-2xl"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">📊 데이터 인사이트</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <h4 className="font-semibold mb-2">🔥 최대 충격 지표</h4>
              <p className="text-sm opacity-90">기준금리가 30%까지 급등하며 경제 전반에 극심한 타격</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <h4 className="font-semibold mb-2">📈 회복 신호</h4>
              <p className="text-sm opacity-90">1999년부터 GDP 성장률과 주가가 급속도로 반등</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <h4 className="font-semibold mb-2">⚖️ 구조적 변화</h4>
              <p className="text-sm opacity-90">부채비율 감소와 수출 증가로 경제 체질 근본적 개선</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MultiMetricDashboard;
