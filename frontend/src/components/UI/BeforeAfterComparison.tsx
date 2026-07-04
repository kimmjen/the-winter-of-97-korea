import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, TrendingUp, TrendingDown, Shield, Zap, BarChart3, DollarSign } from 'lucide-react';
import CountUp from 'react-countup';

interface ComparisonData {
  metric: string;
  icon: React.ReactNode;
  crisis: {
    value: number;
    unit: string;
    displayUnit: string;
    description: string;
    status: 'danger' | 'warning';
  };
  current: {
    value: number;
    unit: string;
    displayUnit: string;
    description: string;
    status: 'success' | 'good';
  };
  improvement: string;
  improvementPercent: number;
  category: 'exchange' | 'employment' | 'reserves';
}

const BeforeAfterComparison: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<'crisis' | 'current'>('crisis');
  const [animationKey, setAnimationKey] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const comparisonData: ComparisonData[] = [
    {
      metric: '원/달러 환율',
      icon: <TrendingDown className="w-8 h-8" />,
      crisis: {
        value: 1695,
        unit: '원/USD',
        displayUnit: '원',
        description: '역사상 최고치 기록',
        status: 'danger'
      },
      current: {
        value: 1467,
        unit: '원/USD',
        displayUnit: '원',
        description: '최근 환율 상승세',
        status: 'success'
      },
      improvement: '안정적 관리 중',
      improvementPercent: 13,
      category: 'exchange'
    },
    {
      metric: '실업률',
      icon: <BarChart3 className="w-8 h-8" />,
      crisis: {
        value: 6.8,
        unit: '%',
        displayUnit: '%',
        description: '사상 최악의 실업 대란',
        status: 'danger'
      },
      current: {
        value: 2.6,
        unit: '%',
        displayUnit: '%',
        description: '완전 고용 수준',
        status: 'success'
      },
      improvement: '62% 감소한 건전한 고용',
      improvementPercent: 62,
      category: 'employment'
    },
    {
      metric: '외환보유액',
      icon: <Shield className="w-8 h-8" />,
      crisis: {
        value: 8.9,
        unit: 'B USD',
        displayUnit: 'B',
        description: '국가 부도 직전 상황',
        status: 'danger'
      },
      current: {
        value: 428.8,
        unit: 'B USD',
        displayUnit: 'B',
        description: '세계 9위 보유 수준',
        status: 'success'
      },
      improvement: '4,700% 증가한 방어막',
      improvementPercent: 4700,
      category: 'reserves'
    }
  ];

  const getCategoryConfig = (category: string) => {
    switch (category) {
      case 'exchange':
        return {
          gradient: 'from-red-500 via-orange-500 to-pink-500',
          bgGradient: 'from-red-500/10 to-pink-500/10',
          borderColor: 'border-red-500/30',
          glowColor: 'shadow-red-500/20'
        };
      case 'employment':
        return {
          gradient: 'from-orange-500 via-yellow-500 to-amber-500',
          bgGradient: 'from-orange-500/10 to-amber-500/10',
          borderColor: 'border-orange-500/30',
          glowColor: 'shadow-orange-500/20'
        };
      case 'reserves':
        return {
          gradient: 'from-blue-500 via-cyan-500 to-teal-500',
          bgGradient: 'from-blue-500/10 to-teal-500/10',
          borderColor: 'border-blue-500/30',
          glowColor: 'shadow-blue-500/20'
        };
      default:
        return {
          gradient: 'from-gray-500 to-gray-400',
          bgGradient: 'from-gray-500/10 to-gray-400/10',
          borderColor: 'border-gray-500/30',
          glowColor: 'shadow-gray-500/20'
        };
    }
  };

  const handleYearChange = (year: 'crisis' | 'current') => {
    setSelectedYear(year);
    setAnimationKey(prev => prev + 1);
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 py-24 overflow-hidden">
      {/* 강화된 배경 효과 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30"></div>

        {/* 애니메이션 패턴 */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-200/20 to-orange-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* 격자 패턴 */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(90deg, #000 1px, transparent 1px), linear-gradient(#000 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            28년간의 변화
          </div>

          <h2 className="text-5xl sm:text-6xl font-black mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            Then vs Now
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            1997년 위기에서 2025년 현재까지, 대한민국의 놀라운 회복과 성장 스토리
          </p>
        </motion.div>

        {/* 강화된 년도 선택 토글 */}
        <div className="flex justify-center mb-16">
          <div className="relative bg-white rounded-2xl p-2 shadow-2xl border border-gray-200">
            <div className="flex">
              <motion.button
                onClick={() => handleYearChange('crisis')}
                className={`relative px-8 py-4 rounded-xl font-bold text-lg transition-all duration-500 ${selectedYear === 'crisis'
                    ? 'text-white shadow-lg'
                    : 'text-gray-600 hover:text-red-600'
                  }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {selectedYear === 'crisis' && (
                  <motion.div
                    layoutId="yearSelector"
                    className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-pink-500 rounded-xl shadow-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <TrendingDown className="w-5 h-5" />
                  1997년 위기
                </span>
              </motion.button>

              <motion.button
                onClick={() => handleYearChange('current')}
                className={`relative px-8 py-4 rounded-xl font-bold text-lg transition-all duration-500 ${selectedYear === 'current'
                    ? 'text-white shadow-lg'
                    : 'text-gray-600 hover:text-green-600'
                  }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {selectedYear === 'current' && (
                  <motion.div
                    layoutId="yearSelector"
                    className="absolute inset-0 bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 rounded-xl shadow-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  2025년 현재
                </span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* 완전히 새로운 비교 카드들 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {comparisonData.map((data, index) => {
            const currentData = selectedYear === 'crisis' ? data.crisis : data.current;
            const isCurrentYear = selectedYear === 'current';
            const categoryConfig = getCategoryConfig(data.category);

            return (
              <motion.div
                key={`${index}-${animationKey}`}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
                className="relative group"
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                {/* 카드 글로우 효과 */}
                <div className={`absolute inset-0 bg-gradient-to-br ${categoryConfig.bgGradient} rounded-3xl blur-xl transition-all duration-500 ${hoveredCard === index ? 'opacity-60 scale-105' : 'opacity-30'
                  }`}></div>

                <div className={`relative bg-white/80 backdrop-blur-lg rounded-3xl p-8 border-2 ${categoryConfig.borderColor} transition-all duration-500 hover:shadow-2xl ${categoryConfig.glowColor} group-hover:scale-[1.02]`}>
                  {/* 헤더 섹션 */}
                  <div className="flex items-center justify-between mb-8">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${categoryConfig.gradient} text-white shadow-xl`}>
                      {data.icon}
                    </div>

                    <div className="text-right">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${isCurrentYear ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}>
                        {isCurrentYear ? '✅ 개선됨' : '🚨 위기'}
                      </div>
                    </div>
                  </div>

                  {/* 메인 수치 - 완전히 개선된 반응형 */}
                  <div className="text-center mb-8">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">
                      {data.metric}
                    </h3>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${selectedYear}-${index}`}
                        initial={{ opacity: 0, scale: 0.5, rotateX: 90 }}
                        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                        exit={{ opacity: 0, scale: 0.5, rotateX: -90 }}
                        transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                        className="space-y-4"
                      >
                        {/* 숫자 표시 - 원/달러 환율 문제 해결 */}
                        <div className={`text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r ${categoryConfig.gradient} bg-clip-text text-transparent leading-tight`}>
                          <div className="flex items-baseline justify-center gap-2 flex-wrap">
                            {data.category === 'exchange' ? (
                              <>
                                <span className="text-2xl sm:text-3xl">₩</span>
                                <CountUp
                                  key={`${selectedYear}-${index}-count`}
                                  end={currentData.value}
                                  duration={1.5}
                                  separator=","
                                  decimals={0}
                                />
                                <span className="text-lg sm:text-xl text-gray-500">/USD</span>
                              </>
                            ) : data.category === 'reserves' ? (
                              <>
                                <span className="text-2xl sm:text-3xl">$</span>
                                <CountUp
                                  key={`${selectedYear}-${index}-count`}
                                  end={currentData.value}
                                  duration={1.5}
                                  decimals={currentData.value % 1 !== 0 ? 1 : 0}
                                />
                                <span className="text-lg sm:text-xl text-gray-500">{currentData.displayUnit}</span>
                              </>
                            ) : (
                              <>
                                <CountUp
                                  key={`${selectedYear}-${index}-count`}
                                  end={currentData.value}
                                  duration={1.5}
                                  decimals={currentData.value % 1 !== 0 ? 1 : 0}
                                />
                                <span className="text-2xl sm:text-3xl">{currentData.displayUnit}</span>
                              </>
                            )}
                          </div>
                        </div>

                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                          className={`text-sm font-medium ${isCurrentYear ? 'text-green-700' : 'text-red-700'
                            }`}
                        >
                          {currentData.description}
                        </motion.p>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* 개선 지표 */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-2xl border border-blue-200"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-blue-600">개선도</span>
                      <span className="text-xs font-bold text-blue-800">{data.improvementPercent}%</span>
                    </div>

                    <div className="w-full bg-blue-100 rounded-full h-2 mb-3">
                      <motion.div
                        className={`h-2 bg-gradient-to-r ${categoryConfig.gradient} rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min(data.improvementPercent, 100)}%` }}
                        transition={{ delay: 0.7, duration: 1.5, ease: "easeOut" }}
                      />
                    </div>

                    <div className="flex items-center justify-center space-x-2 text-blue-700">
                      <ArrowRight className="w-4 h-4" />
                      <span className="text-sm font-semibold">{data.improvement}</span>
                    </div>
                  </motion.div>

                  {/* 호버 시 추가 정보 */}
                  <AnimatePresence>
                    {hoveredCard === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 pt-4 border-t border-gray-200"
                      >
                        <div className="grid grid-cols-2 gap-4 text-xs">
                          <div className="text-center">
                            <div className="font-semibold text-red-600">1997년</div>
                            <div className="text-gray-600">
                              {data.category === 'exchange' ? `₩${data.crisis.value.toLocaleString()}` :
                                data.category === 'reserves' ? `$${data.crisis.value}B` :
                                  `${data.crisis.value}%`}
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold text-green-600">2025년</div>
                            <div className="text-gray-600">
                              {data.category === 'exchange' ? `₩${data.current.value.toLocaleString()}` :
                                data.category === 'reserves' ? `$${data.current.value}B` :
                                  `${data.current.value}%`}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 강화된 마무리 메시지 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center"
        >
          <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white p-12 rounded-3xl shadow-2xl max-w-5xl mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-sm"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                  <DollarSign className="w-8 h-8" />
                </div>
              </div>

              <h3 className="text-3xl sm:text-4xl font-black mb-6">
                🇰🇷 대한민국의 경제 회복력
              </h3>
              <p className="text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto mb-8">
                1997년 IMF 위기는 우리에게 쓰라린 교훈을 주었지만,
                동시에 대한민국의 놀라운 회복력과 발전 가능성을 보여주었습니다.
                현재 우리는 더 강하고 안정적인 경제 기반을 구축했습니다.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold">28년</div>
                  <div className="text-sm opacity-90">회복 기간</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">580억$</div>
                  <div className="text-sm opacity-90">IMF 지원금</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">세계 10위</div>
                  <div className="text-sm opacity-90">현재 경제 규모</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterComparison;
