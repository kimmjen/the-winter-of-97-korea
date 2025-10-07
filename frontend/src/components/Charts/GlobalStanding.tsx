import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { currentDetailedEconomicData } from '@data/extendedEconomicData';
import {
  Award,
  Globe,
  Trophy,
  TrendingUp,
  GraduationCap,
  Zap,
  Leaf,
  Rocket
} from 'lucide-react';

interface GlobalRankingData {
  category: string;
  rank: number;
  total: number;
  description: string;
  icon: React.ReactNode;
  color: string;
  trend: 'up' | 'down' | 'stable';
  improvement: string;
}

const GlobalStanding: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const rankingData: GlobalRankingData[] = [
    {
      category: '경제 규모',
      rank: 10,
      total: 195,
      description: '명목 GDP 기준 세계 10위',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      trend: 'stable',
      improvement: '1997년 11위 → 현재 10위'
    },
    {
      category: '혁신 지수',
      rank: 10,
      total: 130,
      description: 'Global Innovation Index',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      trend: 'up',
      improvement: '2010년 28위 → 현재 10위'
    },
    {
      category: '국가 경쟁력',
      rank: 13,
      total: 140,
      description: 'WEF 국가경쟁력 순위',
      icon: <Trophy className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      trend: 'up',
      improvement: '꾸준한 상승세'
    },
    {
      category: '스타트업 생태계',
      rank: 9,
      total: 100,
      description: 'Global Startup Ecosystem',
      icon: <Rocket className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      trend: 'up',
      improvement: '빠른 성장 중'
    },
    {
      category: '교육 수준',
      rank: 2,
      total: 195,
      description: '고등교육 이수율 70.4%',
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'from-indigo-500 to-blue-500',
      trend: 'stable',
      improvement: '지속적 세계 최고 수준'
    },
    {
      category: '디지털 경쟁력',
      rank: 8,
      total: 64,
      description: 'IMD Digital Competitiveness',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-cyan-500 to-teal-500',
      trend: 'up',
      improvement: '디지털 전환 가속화'
    }
  ];

  const economicHighlights = [
    {
      title: '디지털 경제',
      value: `${currentDetailedEconomicData.digital_economy_share}%`,
      subtitle: 'GDP 대비 비중',
      icon: <Zap className="w-5 h-5" />,
      color: 'text-purple-600 bg-purple-100'
    },
    {
      title: '재생에너지',
      value: `${currentDetailedEconomicData.renewable_energy_share}%`,
      subtitle: '전체 에너지 중 비중',
      icon: <Leaf className="w-5 h-5" />,
      color: 'text-green-600 bg-green-100'
    },
    {
      title: '무역수지',
      value: `$${currentDetailedEconomicData.trade_balance}B`,
      subtitle: '연간 흑자',
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'text-blue-600 bg-blue-100'
    },
    {
      title: '외환보유액',
      value: `$${currentDetailedEconomicData.fx_reserves_billion}B`,
      subtitle: '세계 9위 수준',
      icon: <Award className="w-5 h-5" />,
      color: 'text-orange-600 bg-orange-100'
    }
  ];

  const getRankColor = (rank: number, total: number) => {
    const percentage = (rank / total) * 100;
    if (percentage <= 5) return 'text-yellow-600 bg-yellow-50';
    if (percentage <= 10) return 'text-orange-600 bg-orange-50';
    if (percentage <= 20) return 'text-blue-600 bg-blue-50';
    return 'text-gray-600 bg-gray-50';
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'down': return <motion.div animate={{ rotate: 180 }}><TrendingUp className="w-4 h-4 text-red-500" /></motion.div>;
      default: return <div className="w-4 h-4 rounded-full bg-gray-400"></div>;
    }
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-blue-200 text-sm font-medium mb-6">
            <Globe className="w-4 h-4 mr-2" />
            글로벌 위상
          </div>

          <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
            Korea's Global Standing
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto">
            1997년 위기를 극복하고 달성한 대한민국의 현재 글로벌 위상과 경쟁력
          </p>
        </motion.div>

        {/* 경제 하이라이트 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {economicHighlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl mb-4 ${item.color}`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-1">{item.value}</h3>
              <p className="text-blue-200 text-sm font-medium mb-1">{item.title}</p>
              <p className="text-blue-300 text-xs">{item.subtitle}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* 글로벌 순위 카드들 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {rankingData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative group"
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              {/* 글로우 효과 */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-3xl blur-xl transition-all duration-500 ${
                hoveredCard === index ? 'opacity-60 scale-110' : 'opacity-30'
              }`}></div>

              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300">
                {/* 헤더 */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-xl`}>
                    {item.icon}
                  </div>
                  <div className="text-right">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${getRankColor(item.rank, item.total)}`}>
                      Top {Math.round((item.rank / item.total) * 100)}%
                    </div>
                  </div>
                </div>

                {/* 순위 표시 */}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-4xl font-black">{item.rank}</span>
                    <span className="text-lg text-blue-200">/ {item.total}</span>
                    {getTrendIcon(item.trend)}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.category}</h3>
                  <p className="text-blue-200 text-sm">{item.description}</p>
                </div>

                {/* 개선도 */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-green-300 font-medium">{item.improvement}</span>
                  </div>
                </div>

                {/* 순위 시각화 바 */}
                <div className="mt-4">
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div
                      className={`h-2 bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000`}
                      style={{ width: `${((item.total - item.rank) / item.total) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-blue-300 mt-1">
                    <span>1위</span>
                    <span>{item.total}위</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 종합 분석 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-3xl p-8 border border-purple-300/30"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">🇰🇷 대한민국의 성취</h3>
            <p className="text-blue-100 text-lg max-w-4xl mx-auto">
              28년 전 경제 위기 국가에서 현재 글로벌 톱 10 수준의 선진국으로 도약
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-2">🏆</div>
              <div className="text-2xl font-bold text-yellow-300 mb-1">Top 10</div>
              <div className="text-blue-200 text-sm">글로벌 경제 규모</div>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-2">💡</div>
              <div className="text-2xl font-bold text-cyan-300 mb-1">Top 10</div>
              <div className="text-blue-200 text-sm">혁신 지수</div>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-2">🚀</div>
              <div className="text-2xl font-bold text-pink-300 mb-1">Top 10</div>
              <div className="text-blue-200 text-sm">스타트업 생태계</div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/10">
            <h4 className="text-xl font-bold text-center mb-4 text-yellow-300">
              📈 지속적인 상승 곡선
            </h4>
            <p className="text-blue-100 text-center leading-relaxed">
              1997년 위기 이후 구조개혁과 혁신을 통해 달성한 성과들입니다.
              특히 디지털 전환, 교육 수준, 기술 혁신 분야에서 세계적 수준의 경쟁력을 확보했습니다.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalStanding;
