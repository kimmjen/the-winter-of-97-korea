import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts';
import type { ISectorData } from '@data/extendedEconomicData';
import { TrendingUp, Building2, Cpu, DollarSign, Hammer } from 'lucide-react';

interface SectorAnalysisProps {
  data: ISectorData[];
}

const SectorAnalysis: React.FC<SectorAnalysisProps> = ({ data }) => {
  const [selectedYear, setSelectedYear] = useState<'crisis' | 'current'>('current');
  const [activeChart, setActiveChart] = useState<'employment' | 'gdp' | 'growth'>('employment');

  const getSectorIcon = (sector: string) => {
    switch (sector) {
      case '제조업': return <Building2 className="w-5 h-5" />;
      case 'IT/디지털': return <Cpu className="w-5 h-5" />;
      case '금융업': return <DollarSign className="w-5 h-5" />;
      case '건설업': return <Hammer className="w-5 h-5" />;
      default: return <TrendingUp className="w-5 h-5" />;
    }
  };

  const getSectorColor = (index: number) => {
    const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#8dd1e1'];
    return colors[index % colors.length];
  };

  const getChartData = () => {
    return data.map((item, index) => ({
      name: item.sector,
      crisis_employment: item.crisis_1997.employment_share,
      current_employment: item.current_2025.employment_share,
      crisis_gdp: item.crisis_1997.gdp_contribution,
      current_gdp: item.current_2025.gdp_contribution,
      crisis_growth: item.crisis_1997.growth_rate,
      current_growth: item.current_2025.growth_rate,
      color: getSectorColor(index)
    }));
  };

  const getPieData = () => {
    const field = activeChart === 'employment' ? 'employment_share' :
                  activeChart === 'gdp' ? 'gdp_contribution' : 'growth_rate';

    return data.map((item, index) => ({
      name: item.sector,
      value: selectedYear === 'crisis' ? item.crisis_1997[field] : item.current_2025[field],
      color: getSectorColor(index)
    }));
  };

  const chartData = getChartData();
  const pieData = getPieData();

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 border border-indigo-200 rounded-full text-indigo-700 text-sm font-medium mb-6">
            <Building2 className="w-4 h-4 mr-2" />
            산업별 분석
          </div>

          <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            산업 구조의 변화
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            1997년 위기를 겪으며 한국 경제의 산업 구조가 어떻게 변화했는지 살펴보세요
          </p>
        </motion.div>

        {/* 컨트롤 패널 */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 mb-12">
          {/* 년도 선택 */}
          <div className="bg-white rounded-2xl p-2 shadow-lg border">
            <div className="flex">
              <button
                onClick={() => setSelectedYear('crisis')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  selectedYear === 'crisis'
                    ? 'bg-red-500 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                1997년 위기
              </button>
              <button
                onClick={() => setSelectedYear('current')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  selectedYear === 'current'
                    ? 'bg-green-500 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                2025년 현재
              </button>
            </div>
          </div>

          {/* 차트 타입 선택 */}
          <div className="bg-white rounded-2xl p-2 shadow-lg border">
            <div className="flex">
              <button
                onClick={() => setActiveChart('employment')}
                className={`px-4 py-3 rounded-xl font-medium transition-all ${
                  activeChart === 'employment'
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                고용 비중
              </button>
              <button
                onClick={() => setActiveChart('gdp')}
                className={`px-4 py-3 rounded-xl font-medium transition-all ${
                  activeChart === 'gdp'
                    ? 'bg-purple-500 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                GDP 기여도
              </button>
              <button
                onClick={() => setActiveChart('growth')}
                className={`px-4 py-3 rounded-xl font-medium transition-all ${
                  activeChart === 'growth'
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                성장률
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
          {/* 파이 차트 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              {activeChart === 'employment' ? '고용 비중' :
               activeChart === 'gdp' ? 'GDP 기여도' : '성장률'} 분포
            </h3>

            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, activeChart]} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          {/* 비교 바 차트 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              1997년 vs 2025년 비교
            </h3>

            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 12 }}
                  angle={-45}
                  textAnchor="end"
                  height={60}
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey={`crisis_${activeChart}`}
                  fill="#ef4444"
                  name="1997년 위기"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey={`current_${activeChart}`}
                  fill="#22c55e"
                  name="2025년 현재"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* 산업별 상세 카드 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            산업별 상세 분석
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((sector, index) => (
              <motion.div
                key={sector.sector}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-xl mr-4`} style={{ backgroundColor: getSectorColor(index) + '20' }}>
                    <div style={{ color: getSectorColor(index) }}>
                      {getSectorIcon(sector.sector)}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">{sector.sector}</h4>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-red-50 rounded-lg">
                      <div className="text-sm text-red-600 font-medium">1997년</div>
                      <div className="text-lg font-bold text-red-700">
                        {sector.crisis_1997.employment_share}%
                      </div>
                      <div className="text-xs text-red-500">고용비중</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-sm text-green-600 font-medium">2025년</div>
                      <div className="text-lg font-bold text-green-700">
                        {sector.current_2025.employment_share}%
                      </div>
                      <div className="text-xs text-green-500">고용비중</div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-gray-100">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">GDP 기여도</span>
                      <div className="flex items-center gap-2">
                        <span className="text-red-600">{sector.crisis_1997.gdp_contribution}%</span>
                        <span>→</span>
                        <span className="text-green-600">{sector.current_2025.gdp_contribution}%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-1">
                      <span className="text-gray-600">성장률</span>
                      <div className="flex items-center gap-2">
                        <span className="text-red-600">{sector.crisis_1997.growth_rate}%</span>
                        <span>→</span>
                        <span className="text-green-600">{sector.current_2025.growth_rate}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectorAnalysis;
