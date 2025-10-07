import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, TrendingDown, Building, Globe, AlertCircle } from 'lucide-react';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  impact: 'critical' | 'high' | 'medium';
  icon: React.ReactNode;
  stats?: string;
}

const CrisisTimeline: React.FC = React.memo(() => {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  // 타임라인 이벤트 데이터 메모이제이션
  const timelineEvents: TimelineEvent[] = useMemo(() => [
    {
      date: '1997.07',
      title: '태국 바트화 폭락',
      description: '태국 정부가 바트화 고정환율제를 포기하면서 아시아 금융위기의 서막이 오름',
      impact: 'medium',
      icon: <Globe className="w-5 h-5" />,
      stats: '바트화 20% 급락'
    },
    {
      date: '1997.10',
      title: '한보철강 부도',
      description: '대기업 연쇄 부도 시작. 기아자동차, 한라그룹 등 재벌 기업들의 유동성 위기 심화',
      impact: 'high',
      icon: <Building className="w-5 h-5" />,
      stats: '부채 6조원'
    },
    {
      date: '1997.11.17',
      title: '환율 급등 시작',
      description: '원/달러 환율이 1,000원 돌파. 외국인 투자자들의 대규모 자금 이탈 시작',
      impact: 'critical',
      icon: <TrendingDown className="w-5 h-5" />,
      stats: '1,000원/달러 돌파'
    },
    {
      date: '1997.11.21',
      title: 'IMF 구제금융 요청',
      description: '정부가 국제통화기금(IMF)에 긴급 구제금융을 공식 요청. 국가 신용등급 급락',
      impact: 'critical',
      icon: <AlertCircle className="w-5 h-5" />,
      stats: '580억 달러 지원 요청'
    },
    {
      date: '1997.12.03',
      title: 'IMF 협정 체결',
      description: 'IMF와 구제금융 협정 체결. 고금리 정책, 긴축 재정, 구조조정 등 강도 높은 조건부 지원',
      impact: 'critical',
      icon: <Calendar className="w-5 h-5" />,
      stats: '기준금리 30% 인상'
    },
    {
      date: '1998.01',
      title: '환율 최고점 도달',
      description: '원/달러 환율이 1,695원까지 폭등. 경제 전반의 디플레이션과 대량 실업 사태',
      impact: 'critical',
      icon: <TrendingDown className="w-5 h-5" />,
      stats: '1,695원/달러'
    }
  ], []);

  // 이벤트 선택 핸들러 메모이제이션
  const handleEventClick = useCallback((index: number) => {
    setSelectedEvent(selectedEvent === index ? null : index);
  }, [selectedEvent]);

  // 임팩트 레벨에 따른 스타일 메모이제이션
  const getImpactStyle = useMemo(() => (impact: TimelineEvent['impact']) => {
    switch (impact) {
      case 'critical':
        return {
          bg: 'from-red-600 to-red-700',
          border: 'border-red-500',
          text: 'text-red-100',
          glow: 'shadow-red-500/30'
        };
      case 'high':
        return {
          bg: 'from-orange-600 to-orange-700',
          border: 'border-orange-500',
          text: 'text-orange-100',
          glow: 'shadow-orange-500/30'
        };
      case 'medium':
        return {
          bg: 'from-yellow-600 to-yellow-700',
          border: 'border-yellow-500',
          text: 'text-yellow-100',
          glow: 'shadow-yellow-500/30'
        };
    }
  }, []);

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
            위기의 전개 과정
          </h2>
          <p className="text-xl text-gray-300">
            6개월 만에 벌어진 경제 대참사의 타임라인
          </p>
        </motion.div>

        <div className="relative">
          {/* 타임라인 메인 라인 */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-500 via-orange-500 to-red-500"></div>

          {/* 타임라인 이벤트들 */}
          <div className="space-y-8">
            {timelineEvents.map((event, index) => {
              const impactStyle = getImpactStyle(event.impact);

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="relative flex items-start"
                >
                  {/* 타임라인 포인트 */}
                  <motion.div
                    className={`relative z-10 w-16 h-16 rounded-full border-4 ${impactStyle.border} flex items-center justify-center cursor-pointer`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleEventClick(index)}
                  >
                    {event.icon}

                    {/* 펄스 효과 */}
                    {event.impact === 'critical' && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-red-500"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      />
                    )}
                  </motion.div>

                  {/* 이벤트 카드 */}
                  <motion.div
                    className="ml-8 flex-1"
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div
                      className={`bg-gray-800 rounded-lg p-6 border-l-4 hover:bg-gray-750 transition-all duration-300 cursor-pointer ${impactStyle.border}`}
                      onClick={() => handleEventClick(index)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-400 bg-gray-700 px-3 py-1 rounded-full">
                          {event.date}
                        </span>
                        {event.stats && (
                          <span className={`text-sm font-bold px-3 py-1 rounded-full ${
                            event.impact === 'critical' ? 'bg-red-600/20 text-red-300' :
                            event.impact === 'high' ? 'bg-orange-600/20 text-orange-300' :
                            'bg-yellow-600/20 text-yellow-300'
                          }`}>
                            {event.stats}
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-bold mb-2 text-white">
                        {event.title}
                      </h3>

                      <AnimatePresence>
                        {(selectedEvent === index || selectedEvent === null) && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-gray-300 leading-relaxed"
                          >
                            {event.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 임팩트 범례 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 flex justify-center space-x-6"
        >
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            <span className="text-sm text-gray-400">치명적 영향</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
            <span className="text-sm text-gray-400">높은 영향</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
            <span className="text-sm text-gray-400">중간 영향</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default CrisisTimeline;
