import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Radio, Volume2, VolumeX, Calendar, AlertTriangle, Tv, Wifi } from 'lucide-react';

interface NewsItem {
  date: string;
  headline: string;
  subtext: string;
  urgency: 'breaking' | 'urgent' | 'important';
  source: string;
  impact: number; // 1-10 scale
}

const NewsHeadlines: React.FC = () => {
  const [currentNews, setCurrentNews] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const newsItems: NewsItem[] = [
    {
      date: '1997.11.17',
      headline: '원화 급락, 1달러=1,000원 돌파',
      subtext: '외국인 투자자금 대거 이탈... 정부 "시장 개입 검토"',
      urgency: 'urgent',
      source: 'KBS 9시 뉴스',
      impact: 8
    },
    {
      date: '1997.11.21',
      headline: '정부, IMF에 긴급 구제금융 요청',
      subtext: '580억 달러 지원 요청... "국가 신용도 최악 상황"',
      urgency: 'breaking',
      source: 'MBC 뉴스데스크',
      impact: 10
    },
    {
      date: '1997.12.03',
      headline: 'IMF 협정 체결, 강도 높은 구조조정 불가피',
      subtext: '금리 30% 인상, 긴축재정 시행... "고통스런 선택"',
      urgency: 'breaking',
      source: 'SBS 8뉴스',
      impact: 9
    },
    {
      date: '1997.12.23',
      headline: '환율 1,700원 육박, 금 모으기 운동 확산',
      subtext: '전국민 금 모으기 열풍... "나라 빚 갚기 범국민 운동"',
      urgency: 'important',
      source: 'YTN 뉴스',
      impact: 7
    },
    {
      date: '1998.01.15',
      headline: '대기업 구조조정 가속화, 대량실업 우려',
      subtext: '현대, 삼성, LG 등 인력감축... 실업률 7% 돌파',
      urgency: 'urgent',
      source: 'KBS 뉴스9',
      impact: 8
    }
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentNews((prev) => (prev + 1) % newsItems.length);
    }, 5000); // 5초로 늘림

    return () => clearInterval(interval);
  }, [isPlaying, newsItems.length]);

  const getUrgencyConfig = (urgency: string) => {
    switch (urgency) {
      case 'breaking':
        return {
          color: 'from-red-600 to-red-500',
          bg: 'bg-red-600/20',
          border: 'border-red-500',
          text: 'text-red-100',
          label: '🚨 긴급속보'
        };
      case 'urgent':
        return {
          color: 'from-orange-600 to-orange-500',
          bg: 'bg-orange-500/20',
          border: 'border-orange-400',
          text: 'text-orange-100',
          label: '⚠️ 긴급'
        };
      case 'important':
        return {
          color: 'from-blue-600 to-blue-500',
          bg: 'bg-blue-600/20',
          border: 'border-blue-500',
          text: 'text-blue-100',
          label: '📢 중요'
        };
      default:
        return {
          color: 'from-gray-600 to-gray-500',
          bg: 'bg-gray-600/20',
          border: 'border-gray-500',
          text: 'text-gray-100',
          label: '📰 뉴스'
        };
    }
  };

  const currentConfig = getUrgencyConfig(newsItems[currentNews].urgency);

  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      {/* 강화된 배경 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-red-900/30"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-600/10 to-transparent animate-pulse"></div>
        </div>

        {/* TV 스캔라인 효과 */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 4px)',
          animation: 'scan 0.1s linear infinite'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 bg-red-600/20 backdrop-blur-sm border border-red-500/30 rounded-full text-red-300 text-sm font-medium mb-6">
            <Tv className="w-4 h-4 mr-2" />
            1997년 당시 뉴스 재현
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
            그날의 뉴스
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            대한민국을 뒤흔든 충격적인 헤드라인들
          </p>
        </motion.div>

        {/* 강화된 뉴스 컨트롤 패널 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <div className="flex items-center bg-gray-900/50 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-700">
            <Radio className="w-5 h-5 text-red-500 mr-3" />
            <Wifi className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-sm font-medium text-gray-300 mr-4">Live Broadcast</span>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-full bg-red-600 hover:bg-red-700 transition-colors group"
            >
              {isPlaying ?
                <Volume2 className="w-4 h-4 group-hover:scale-110 transition-transform" /> :
                <VolumeX className="w-4 h-4 group-hover:scale-110 transition-transform" />
              }
            </button>
          </div>

          <div className="flex items-center text-xs text-green-400 bg-green-400/10 px-3 py-2 rounded-full border border-green-400/30">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            <span className="font-medium">{newsItems.length}개 특보 대기중</span>
          </div>
        </div>

        {/* 완전히 새로운 메인 뉴스 디스플레이 */}
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-3xl border border-red-500/20 overflow-hidden">
            {/* TV 화면 효과 강화 */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent"></div>

            {/* 상태 표시 바 */}
            <div className="relative bg-black/60 px-6 py-4 border-b border-gray-700/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center text-red-400">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-sm font-bold">ON AIR</span>
                  </div>

                  <div className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${currentConfig.color} ${currentConfig.text}`}>
                    {currentConfig.label}
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>충격도: {newsItems[currentNews].impact}/10</span>
                  <div className="flex gap-1">
                    {Array.from({length: 10}).map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i < newsItems[currentNews].impact ? 'bg-red-500' : 'bg-gray-700'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 sm:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentNews}
                  initial={{ opacity: 0, x: 100, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -100, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="space-y-8"
                >
                  {/* 날짜와 소스 */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-300 font-medium">
                        {newsItems[currentNews].date}
                      </span>
                    </div>

                    <div className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full">
                      {newsItems[currentNews].source}
                    </div>
                  </div>

                  {/* 메인 헤드라인 */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
                  >
                    {newsItems[currentNews].headline}
                  </motion.h3>

                  {/* 부제목 */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-xl sm:text-2xl text-gray-300 leading-relaxed"
                  >
                    {newsItems[currentNews].subtext}
                  </motion.p>

                  {/* 진행 표시 */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="pt-6 border-t border-gray-700/50"
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-400">
                        뉴스 {currentNews + 1} / {newsItems.length}
                      </div>

                      {/* 자동 재생 진행 바 */}
                      <div className="flex space-x-2">
                        {newsItems.map((_, index) => (
                          <motion.div
                            key={index}
                            className={`h-1 rounded-full transition-all duration-300 ${
                              index === currentNews ? `bg-gradient-to-r ${currentConfig.color}` : 'bg-gray-700'
                            }`}
                            initial={{ width: 0 }}
                            animate={{
                              width: index === currentNews ? '60px' : '20px',
                            }}
                            transition={{ duration: 0.3 }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* 뉴스 네비게이션 - 개선된 버전 */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {newsItems.map((item, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setCurrentNews(index);
                setIsPlaying(false);
              }}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                index === currentNews
                  ? `bg-gradient-to-r ${getUrgencyConfig(item.urgency).color} text-white shadow-lg scale-105`
                  : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex flex-col items-center gap-1">
                <span className="text-xs opacity-80">{item.date}</span>
                <span>{getUrgencyConfig(item.urgency).label.split(' ')[0]}</span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* 하단 경고 메시지 - 강화된 버전 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 backdrop-blur-lg p-8 rounded-2xl border border-red-500/20">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-semibold text-red-300 mb-3">
                  📺 역사적 순간의 기록
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  이 뉴스들은 1997년 IMF 위기 당시 실제 방송된 내용을 바탕으로 재구성했습니다.
                  28년이 지난 지금, 우리는 이 위기를 교훈 삼아 더 강한 경제 체질을 만들어왔습니다.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs bg-red-500/20 text-red-300 px-2 py-1 rounded">역사적 기록</span>
                  <span className="text-xs bg-orange-500/20 text-orange-300 px-2 py-1 rounded">교육 목적</span>
                  <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">재구성 콘텐츠</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
      `}</style>
    </section>
  );
};

export default NewsHeadlines;
