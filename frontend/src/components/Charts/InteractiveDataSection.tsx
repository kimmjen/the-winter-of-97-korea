import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  Area,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine
} from 'recharts';
import type { IExtendedEconomicData } from '@data/extendedEconomicData';
import {
  Play,
  Pause,
  RotateCcw,
  AlertTriangle,
  Target,
  ChevronRight,
  BarChart3,
  Activity
} from 'lucide-react';

interface InteractiveDataSectionProps {
  data: IExtendedEconomicData[];
}

const InteractiveDataSection: React.FC<InteractiveDataSectionProps> = React.memo(({ data }) => {
  const [selectedMetric, setSelectedMetric] = useState('KRW_USD');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);

  // 메트릭 데이터를 메모이제이션
  const metrics = useMemo(() => [
    {
      key: 'KRW_USD',
      name: '원/달러 환율',
      icon: '💱',
      color: '#ef4444',
      suffix: '원',
      crisis: true,
      description: '통화위기의 핵심 지표'
    },
    {
      key: 'unemployment_rate',
      name: '실업률',
      icon: '👥',
      color: '#f59e0b',
      suffix: '%',
      crisis: true,
      description: '사회적 충격의 크기'
    },
    {
      key: 'base_interest_rate',
      name: '기준금리',
      icon: '📈',
      color: '#8b5cf6',
      suffix: '%',
      crisis: true,
      description: '정부의 위기 대응'
    },
    {
      key: 'fx_reserves_billion',
      name: '외환보유액',
      icon: '🛡️',
      color: '#22c55e',
      suffix: '억$',
      crisis: false,
      description: '경제 안전판 재건'
    },
    {
      key: 'kospi_index',
      name: 'KOSPI 지수',
      icon: '📊',
      color: '#3b82f6',
      suffix: 'pt',
      crisis: false,
      description: '자본시장 회복'
    }
  ], []);

  const selectedMetricData = useMemo(
    () => metrics.find(m => m.key === selectedMetric),
    [metrics, selectedMetric]
  );

  // 컴포넌트 초기화 애니메이션
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialized(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // 애니메이션 재생
  useEffect(() => {
    let interval: number | undefined;
    if (isPlaying && isInitialized) {
      interval = window.setInterval(() => {
        setCurrentIndex(prev => {
          if (prev >= data.length - 1) {
            setIsPlaying(false);
            return data.length - 1;
          }
          return prev + 1;
        });
      }, 150); // 200ms에서 150ms로 단축하여 더 부드럽게
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPlaying, data.length, isInitialized]);

  // 함수들을 useCallback으로 메모이제이션
  const getCurrentData = useCallback(() => {
    if (!isInitialized) {
      // 초기에는 첫 번째 데이터 포인트만 표시
      return [data[0]];
    }
    return data.slice(0, Math.max(1, currentIndex + 1));
  }, [data, isInitialized, currentIndex]);

  const getMetricValue = useCallback((item: IExtendedEconomicData, metricKey: string) => {
    return item[metricKey as keyof IExtendedEconomicData];
  }, []);

  const getCrisisLevel = useCallback((value: number, metricKey: string) => {
    switch (metricKey) {
      case 'KRW_USD':
        if (value > 1500) return 'extreme';
        if (value > 1200) return 'severe';
        if (value > 1000) return 'moderate';
        return 'normal';
      case 'unemployment_rate':
        if (value > 6) return 'extreme';
        if (value > 4) return 'severe';
        if (value > 3) return 'moderate';
        return 'normal';
      case 'base_interest_rate':
        if (value > 25) return 'extreme';
        if (value > 15) return 'severe';
        if (value > 10) return 'moderate';
        return 'normal';
      default:
        return 'normal';
    }
  }, []);

  const getCrisisColor = useCallback((level: string) => {
    switch (level) {
      case 'extreme': return '#dc2626';
      case 'severe': return '#ea580c';
      case 'moderate': return '#ca8a04';
      default: return '#16a34a';
    }
  }, []);

  const resetAnimation = useCallback(() => {
    setIsPlaying(false);
    setCurrentIndex(0);
  }, []);

  const togglePlayPause = useCallback(() => {
    if (currentIndex >= data.length - 1) {
      resetAnimation();
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
    }
  }, [currentIndex, data.length, isPlaying, resetAnimation]);

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
      {/* 배경 파티클 효과 - 성능 최적화 */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full will-change-transform"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* 대형 글로우 파티클 - 수량 최적화 */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`glow-${i}`}
            className="absolute w-3 h-3 bg-blue-400/10 rounded-full blur-sm will-change-transform"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* 헤더 - 더 부드러운 애니메이션 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-blue-200 text-sm font-semibold mb-8"
            animate={{
              boxShadow: [
                "0 0 20px rgba(59, 130, 246, 0.3)",
                "0 0 40px rgba(59, 130, 246, 0.5)",
                "0 0 20px rgba(59, 130, 246, 0.3)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="mr-2"
            >
              <Activity className="w-4 h-4" />
            </motion.div>
            INTERACTIVE DATA ANALYSIS
          </motion.div>

          <motion.h2
            className="text-6xl md:text-7xl font-black mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <motion.span
              className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              데이터로 보는
            </motion.span>
            <br />
            <motion.span
              className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              style={{ backgroundSize: "200% 200%" }}
            >
              위기의 흔적
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-xl text-blue-100 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            1997년 위기부터 현재까지의 경제 데이터를 실시간으로 탐색해보세요
          </motion.p>
        </motion.div>

        {/* 메트릭 선택 패널 - 더 부드러운 호버 효과 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 mb-8"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {metrics.map((metric) => (
              <motion.button
                key={metric.key}
                onClick={() => setSelectedMetric(metric.key)}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl border transition-all duration-500 ${selectedMetric === metric.key
                  ? 'bg-white/20 border-white/30 text-white shadow-lg'
                  : 'bg-white/5 border-white/10 text-blue-200 hover:bg-white/10'
                  }`}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(255, 255, 255, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                animate={selectedMetric === metric.key ? {
                  boxShadow: [
                    "0 0 20px rgba(255, 255, 255, 0.3)",
                    "0 0 30px rgba(255, 255, 255, 0.5)",
                    "0 0 20px rgba(255, 255, 255, 0.3)"
                  ]
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.span
                  className="text-2xl"
                  animate={selectedMetric === metric.key ? { rotate: [0, 5, -5, 0] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {metric.icon}
                </motion.span>
                <div className="text-left">
                  <div className="font-bold">{metric.name}</div>
                  <div className="text-xs opacity-70">{metric.description}</div>
                </div>
                <motion.div
                  animate={selectedMetric === metric.key ? { x: [0, 5, 0] } : { x: 0 }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  {selectedMetric === metric.key && (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </motion.div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* 메인 차트 */}
          <div className="xl:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10"
            >
              {/* 차트 컨트롤 */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <motion.div
                    className="p-3 rounded-xl"
                    style={{ backgroundColor: selectedMetricData?.color + '20' }}
                    animate={{
                      boxShadow: [
                        `0 0 20px ${selectedMetricData?.color}40`,
                        `0 0 30px ${selectedMetricData?.color}60`,
                        `0 0 20px ${selectedMetricData?.color}40`
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <motion.span
                      className="text-2xl"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {selectedMetricData?.icon}
                    </motion.span>
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold">{selectedMetricData?.name}</h3>
                    <p className="text-blue-200 text-sm">{selectedMetricData?.description}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <motion.button
                    onClick={resetAnimation}
                    className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all"
                    whileHover={{ scale: 1.1, rotate: -180 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <RotateCcw className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    onClick={togglePlayPause}
                    className="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl transition-all font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={isPlaying ? {
                      boxShadow: [
                        "0 0 20px rgba(59, 130, 246, 0.5)",
                        "0 0 30px rgba(59, 130, 246, 0.8)",
                        "0 0 20px rgba(59, 130, 246, 0.5)"
                      ]
                    } : {}}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <motion.div
                      animate={isPlaying ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 0.6, repeat: Infinity }}
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </motion.div>
                    {isPlaying ? '일시정지' : '재생'}
                  </motion.button>
                </div>
              </div>

              {/* 실시간 값 표시 - 더 부드러운 전환 */}
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-2">
                  <motion.div
                    className="text-4xl font-black"
                    style={{ color: selectedMetricData?.color }}
                    key={`${selectedMetric}-${currentIndex}`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {data[currentIndex] ?
                      Number(getMetricValue(data[currentIndex], selectedMetric)).toLocaleString() + selectedMetricData?.suffix
                      : '---'
                    }
                  </motion.div>
                  <motion.div
                    className="text-sm text-blue-200"
                    key={`date-${currentIndex}`}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {data[currentIndex]?.date ?
                      new Date(data[currentIndex].date).toLocaleDateString('ko-KR', {
                        year: 'numeric',
                        month: 'long'
                      })
                      : '---'
                    }
                  </motion.div>
                </div>

                {/* 위기 레벨 인디케이터 - 더 부드러운 애니메이션 */}
                {selectedMetricData?.crisis && data[currentIndex] && (
                  <motion.div
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <motion.div
                      className="w-3 h-3 rounded-full"
                      style={{
                        backgroundColor: getCrisisColor(
                          getCrisisLevel(getMetricValue(data[currentIndex], selectedMetric) as number, selectedMetric)
                        )
                      }}
                      animate={{
                        boxShadow: [
                          `0 0 10px ${getCrisisColor(getCrisisLevel(getMetricValue(data[currentIndex], selectedMetric) as number, selectedMetric))}40`,
                          `0 0 20px ${getCrisisColor(getCrisisLevel(getMetricValue(data[currentIndex], selectedMetric) as number, selectedMetric))}80`,
                          `0 0 10px ${getCrisisColor(getCrisisLevel(getMetricValue(data[currentIndex], selectedMetric) as number, selectedMetric))}40`
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-sm text-blue-200">
                      위기 수준: {getCrisisLevel(getMetricValue(data[currentIndex], selectedMetric) as number, selectedMetric)}
                    </span>
                  </motion.div>
                )}
              </div>

              {/* 차트 */}
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={getCurrentData()}>
                    <defs>
                      <linearGradient id={`gradient-${selectedMetric}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={selectedMetricData?.color} stopOpacity={0.4} />
                        <stop offset="50%" stopColor={selectedMetricData?.color} stopOpacity={0.2} />
                        <stop offset="95%" stopColor={selectedMetricData?.color} stopOpacity={0.05} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff15" />
                    <XAxis
                      dataKey="date"
                      tick={{ fill: '#cbd5e1', fontSize: 12 }}
                      tickFormatter={(value) => {
                        const [year, month] = value.split('-');
                        return month === '01' ? year : '';
                      }}
                    />
                    <YAxis
                      tick={{ fill: '#cbd5e1', fontSize: 12 }}
                      tickFormatter={(value) => Number(value).toLocaleString()}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(15, 23, 42, 0.95)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '12px',
                        color: 'white',
                        backdropFilter: 'blur(10px)'
                      }}
                      formatter={(value: any) => [
                        `${Number(value).toLocaleString()}${selectedMetricData?.suffix}`,
                        selectedMetricData?.name
                      ]}
                      labelFormatter={(label) => {
                        const [year, month] = label.split('-');
                        return `${year}년 ${month}월`;
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey={selectedMetric}
                      stroke={selectedMetricData?.color}
                      strokeWidth={3}
                      fill={`url(#gradient-${selectedMetric})`}
                      dot={{
                        fill: selectedMetricData?.color,
                        strokeWidth: 2,
                        r: 3
                      }}
                      activeDot={{
                        r: 6,
                        fill: selectedMetricData?.color,
                        stroke: '#fff',
                        strokeWidth: 2,
                        filter: `drop-shadow(0 0 10px ${selectedMetricData?.color})`
                      }}
                    />

                    {/* 위기 기간 표시 */}
                    <ReferenceLine x="1997-11" stroke="#ef4444" strokeDasharray="5 5" strokeWidth={2} />
                    <ReferenceLine x="1997-12" stroke="#dc2626" strokeDasharray="5 5" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* 프로그레스 바 - 더 부드러운 애니메이션 */}
              <div className="mt-6">
                <div className="flex items-center justify-between text-sm text-blue-200 mb-2">
                  <span>진행률</span>
                  <motion.span
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {Math.round((currentIndex / (data.length - 1)) * 100)}%
                  </motion.span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className="h-3 rounded-full relative"
                    style={{ backgroundColor: selectedMetricData?.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${(currentIndex / (data.length - 1)) * 100}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 사이드 패널 - 개선된 애니메이션 */}
          <div className="space-y-6">
            {/* 현재 상태 카드 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
            >
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Target className="w-5 h-5" />
                핵심 지표
              </h4>

              <div className="space-y-4">
                {data[currentIndex] && [
                  { key: 'KRW_USD', name: '환율', suffix: '원', icon: '💱', color: '#ef4444' },
                  { key: 'unemployment_rate', name: '실업률', suffix: '%', icon: '👥', color: '#f59e0b' },
                  { key: 'fx_reserves_billion', name: '외환보유액', suffix: '억$', icon: '🛡️', color: '#22c55e' }
                ].map((item, index) => (
                  <motion.div
                    key={item.key}
                    className="flex items-center justify-between p-3 bg-white/5 rounded-lg"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-2">
                      <motion.span
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      >
                        {item.icon}
                      </motion.span>
                      <span className="text-sm text-blue-200">{item.name}</span>
                    </div>
                    <motion.span
                      className="font-bold"
                      style={{ color: item.color }}
                      key={`${item.key}-${currentIndex}`}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {Number(getMetricValue(data[currentIndex], item.key)).toLocaleString()}{item.suffix}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* 위기 타임라인 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
            >
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                위기 타임라인
              </h4>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 p-2 rounded-lg bg-red-500/20">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <div>
                    <div className="font-medium">1997.11</div>
                    <div className="text-red-200 text-xs">IMF 구제금융 신청</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2 rounded-lg bg-orange-500/20">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <div>
                    <div className="font-medium">1997.12</div>
                    <div className="text-orange-200 text-xs">환율 ₩1,695 최고점</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2 rounded-lg bg-green-500/20">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <div>
                    <div className="font-medium">1999.01</div>
                    <div className="text-green-200 text-xs">회복 신호 감지</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 비교 분석 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.0 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
            >
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                1997 vs 2025
              </h4>

              {selectedMetricData && data[currentIndex] && (
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-red-200">1997년 최악</span>
                    <span className="font-bold text-red-300">
                      {selectedMetric === 'KRW_USD' ? '₩1,695' :
                        selectedMetric === 'unemployment_rate' ? '7.1%' :
                          selectedMetric === 'base_interest_rate' ? '30%' : '---'}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-blue-200">현재 ({data[currentIndex].date})</span>
                    <span className="font-bold text-blue-300">
                      {Number(getMetricValue(data[currentIndex], selectedMetric)).toLocaleString()}{selectedMetricData.suffix}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-green-200">2025년 현재</span>
                    <span className="font-bold text-green-300">
                      {selectedMetric === 'KRW_USD' ? '₩1,342' :
                        selectedMetric === 'unemployment_rate' ? '2.8%' :
                          selectedMetric === 'fx_reserves_billion' ? '$422B' : '---'}
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
});

InteractiveDataSection.displayName = 'InteractiveDataSection';

export default InteractiveDataSection;
