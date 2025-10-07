import React, { useState, useEffect, useMemo } from 'react';
import CountUp from 'react-countup';
import { TrendingDown, AlertTriangle, DollarSign, Zap, Target, Shield } from 'lucide-react';

const HeroSection: React.FC = React.memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  // 통계 데이터 메모이제이션
  const crisisStats = useMemo(() => [
    {
      icon: <TrendingDown className="w-10 h-10" />,
      value: 1695,
      suffix: "",
      unit: "원/USD",
      label: "환율 최고점",
      prefix: "₩",
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-500/20 to-pink-500/20",
      description: "사상 최악의 환율 폭등"
    },
    {
      icon: <AlertTriangle className="w-10 h-10" />,
      value: 6.8,
      suffix: "%",
      unit: "",
      label: "실업률 최고점",
      prefix: "",
      color: "from-orange-500 to-yellow-500",
      bgColor: "from-orange-500/20 to-yellow-500/20",
      description: "대량 실업 사태 발생"
    },
    {
      icon: <DollarSign className="w-10 h-10" />,
      value: 8.9,
      suffix: "B",
      unit: "USD",
      label: "외환보유액 최저점",
      prefix: "$",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/20 to-cyan-500/20",
      description: "국가 부도 직전 상황"
    }
  ], []);

  useEffect(() => {
    setIsVisible(true);

    // 통계 카드 순차 강조 효과
    const interval = setInterval(() => {
      setCurrentStat(prev => (prev + 1) % crisisStats.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [crisisStats.length]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black text-white overflow-hidden flex items-center">
      {/* 강화된 배경 효과 */}
      <div className="absolute inset-0">
        {/* 메인 그라디언트 */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-black/60 to-gray-900/80"></div>

        {/* 애니메이션 오버레이 */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-600/20 to-transparent animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-to-tl from-orange-600/15 to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        {/* 격자 패턴 */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #ef4444 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* 강화된 메인 타이틀 */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 bg-red-600/20 backdrop-blur-sm border border-red-500/30 rounded-full text-red-300 text-sm font-medium mb-4">
              <Zap className="w-4 h-4 mr-2" />
              역사적 경제 위기
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-red-400 via-orange-300 to-yellow-400 bg-clip-text text-transparent animate-pulse">
              THE WINTER
            </span>
            <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent text-4xl sm:text-5xl lg:text-6xl mt-2">
              OF '97 KOREA
            </span>
          </h1>

          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-xl sm:text-2xl text-gray-200 font-light">
              대한민국 경제사 최대의 시련
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-red-300 font-medium">
              <div className="flex items-center">
                <Target className="w-5 h-5 mr-2" />
                1997년 11월 21일
              </div>
              <span className="hidden sm:block">•</span>
              <div>IMF 구제금융 요청</div>
            </div>
          </div>
        </div>

        {/* 완전히 새로운 통계 카드들 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {crisisStats.map((stat, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-500 ${
                currentStat === index ? 'scale-105 z-10' : 'scale-100'
              }`}
            >
              {/* 카드 배경 */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} rounded-2xl blur-xl transition-all duration-500 ${
                currentStat === index ? 'opacity-80 scale-110' : 'opacity-40'
              }`}></div>

              <div className="relative bg-black/40 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:transform group-hover:scale-105">
                {/* 아이콘과 상태 표시 */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} text-white shadow-lg`}>
                    {stat.icon}
                  </div>

                  {currentStat === index && (
                    <div className="flex items-center text-xs text-green-400 bg-green-400/10 px-3 py-1 rounded-full border border-green-400/30">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      LIVE
                    </div>
                  )}
                </div>

                {/* 메인 수치 - 반응형 개선 */}
                <div className="text-center mb-6">
                  <div className="space-y-2">
                    <div className={`text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent leading-tight`}>
                      {isVisible && (
                        <div className="flex items-baseline justify-center gap-1 flex-wrap">
                          <span>{stat.prefix}</span>
                          <CountUp
                            end={stat.value}
                            duration={2.5}
                            delay={1.5 + index * 0.3}
                            decimals={stat.value % 1 !== 0 ? 1 : 0}
                          />
                          <span className="text-2xl sm:text-3xl">{stat.suffix}</span>
                          {stat.unit && (
                            <span className="text-lg sm:text-xl text-gray-400 ml-1">
                              {stat.unit}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-base font-semibold text-gray-300 mb-2">
                    {stat.label}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                {/* 진행 바 효과 */}
                <div className="relative">
                  <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-2000 ${
                        isVisible ? 'w-full' : 'w-0'
                      }`}
                      style={{ transitionDelay: `${1.5 + index * 0.3}s` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 강화된 경고 메시지 */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-r from-red-600/20 to-orange-600/20 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-red-500/30">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-orange-600/10 rounded-2xl blur-xl"></div>

            <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-shrink-0">
                <div className="p-3 bg-red-600 rounded-xl">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="flex-grow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="text-lg sm:text-xl font-bold text-red-300 mb-2 sm:mb-0">
                    🚨 경제 비상사태 선포
                  </h3>
                  <div className="flex items-center text-xs text-red-400 bg-red-400/10 px-3 py-1 rounded-full border border-red-400/30">
                    <Shield className="w-3 h-3 mr-1" />
                    위기 등급: 최고
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  외환 보유액 고갈로 인한 국가 부도 위기. IMF 긴급 구제금융 580억 달러 요청.
                  환율이 하루 만에 1,000원에서 1,700원으로 폭등하며 금융시장 패닉 상태.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 개선된 스크롤 유도 */}
        <div className="text-center mt-16">
          <div className="inline-block">
            <p className="text-gray-400 text-sm mb-4 font-medium">위기의 전개 과정 살펴보기</p>
            <div className="relative">
              <div className="w-8 h-12 border-2 border-gray-400 rounded-full flex justify-center mx-auto relative overflow-hidden">
                <div className="w-1 h-3 bg-gradient-to-b from-red-400 to-orange-400 rounded-full mt-2 animate-bounce"></div>
              </div>
              <div className="absolute -inset-2 border border-gray-600 rounded-full opacity-30 animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default HeroSection;
