import type { IEconomicTimeSeries } from './types';

/**
 * 1995-2000년 한국 경제 위기 시계열 데이터
 *
 * 주요 포인트:
 * - 1997년 11월: IMF 구제금융 요청 (환율 급등 시작)
 * - 1997년 12월: 환율 최고점 도달 (~1,700원/달러)
 * - 1998년: 경제 회복 과정 시작
 */
export const exchangeRateData: IEconomicTimeSeries[] = [
  // 1995년 - 안정기
  { date: '1995-01', KRW_USD: 771, unemployment_rate: 2.1, fx_reserves_billion: 32.7 },
  { date: '1995-02', KRW_USD: 773, unemployment_rate: 2.2, fx_reserves_billion: 33.1 },
  { date: '1995-03', KRW_USD: 775, unemployment_rate: 2.0, fx_reserves_billion: 33.8 },
  { date: '1995-04', KRW_USD: 778, unemployment_rate: 2.1, fx_reserves_billion: 34.2 },
  { date: '1995-05', KRW_USD: 782, unemployment_rate: 2.2, fx_reserves_billion: 34.6 },
  { date: '1995-06', KRW_USD: 785, unemployment_rate: 2.0, fx_reserves_billion: 35.0 },
  { date: '1995-07', KRW_USD: 788, unemployment_rate: 2.1, fx_reserves_billion: 35.4 },
  { date: '1995-08', KRW_USD: 791, unemployment_rate: 2.2, fx_reserves_billion: 35.8 },
  { date: '1995-09', KRW_USD: 794, unemployment_rate: 2.1, fx_reserves_billion: 36.2 },
  { date: '1995-10', KRW_USD: 796, unemployment_rate: 2.0, fx_reserves_billion: 36.5 },
  { date: '1995-11', KRW_USD: 799, unemployment_rate: 2.1, fx_reserves_billion: 36.8 },
  { date: '1995-12', KRW_USD: 801, unemployment_rate: 2.0, fx_reserves_billion: 37.1 },

  // 1996년 - 위기 전조
  { date: '1996-01', KRW_USD: 804, unemployment_rate: 2.3, fx_reserves_billion: 37.4 },
  { date: '1996-02', KRW_USD: 807, unemployment_rate: 2.4, fx_reserves_billion: 37.6 },
  { date: '1996-03', KRW_USD: 812, unemployment_rate: 2.2, fx_reserves_billion: 37.8 },
  { date: '1996-04', KRW_USD: 816, unemployment_rate: 2.3, fx_reserves_billion: 38.0 },
  { date: '1996-05', KRW_USD: 820, unemployment_rate: 2.5, fx_reserves_billion: 38.2 },
  { date: '1996-06', KRW_USD: 824, unemployment_rate: 2.4, fx_reserves_billion: 38.4 },
  { date: '1996-07', KRW_USD: 828, unemployment_rate: 2.6, fx_reserves_billion: 38.5 },
  { date: '1996-08', KRW_USD: 832, unemployment_rate: 2.7, fx_reserves_billion: 38.6 },
  { date: '1996-09', KRW_USD: 836, unemployment_rate: 2.5, fx_reserves_billion: 38.7 },
  { date: '1996-10', KRW_USD: 840, unemployment_rate: 2.6, fx_reserves_billion: 38.8 },
  { date: '1996-11', KRW_USD: 844, unemployment_rate: 2.8, fx_reserves_billion: 38.9 },
  { date: '1996-12', KRW_USD: 848, unemployment_rate: 2.7, fx_reserves_billion: 39.0 },

  // 1997년 - IMF 위기 발발
  { date: '1997-01', KRW_USD: 852, unemployment_rate: 2.9, fx_reserves_billion: 39.1 },
  { date: '1997-02', KRW_USD: 856, unemployment_rate: 3.0, fx_reserves_billion: 39.0 },
  { date: '1997-03', KRW_USD: 861, unemployment_rate: 2.8, fx_reserves_billion: 38.8 },
  { date: '1997-04', KRW_USD: 866, unemployment_rate: 2.9, fx_reserves_billion: 38.5 },
  { date: '1997-05', KRW_USD: 872, unemployment_rate: 3.1, fx_reserves_billion: 38.2 },
  { date: '1997-06', KRW_USD: 878, unemployment_rate: 3.2, fx_reserves_billion: 37.8 },
  { date: '1997-07', KRW_USD: 885, unemployment_rate: 3.4, fx_reserves_billion: 37.3 },
  { date: '1997-08', KRW_USD: 892, unemployment_rate: 3.6, fx_reserves_billion: 36.7 },
  { date: '1997-09', KRW_USD: 901, unemployment_rate: 3.8, fx_reserves_billion: 35.9 },
  { date: '1997-10', KRW_USD: 912, unemployment_rate: 4.2, fx_reserves_billion: 34.8 },
  // 위기 절정기 - IMF 구제금융 요청
  { date: '1997-11', KRW_USD: 1164, unemployment_rate: 5.7, fx_reserves_billion: 20.4 },
  { date: '1997-12', KRW_USD: 1695, unemployment_rate: 6.8, fx_reserves_billion: 8.9 },

  // 1998년 - 위기 지속과 회복 시작
  { date: '1998-01', KRW_USD: 1678, unemployment_rate: 7.1, fx_reserves_billion: 12.8 },
  { date: '1998-02', KRW_USD: 1629, unemployment_rate: 7.3, fx_reserves_billion: 17.2 },
  { date: '1998-03', KRW_USD: 1585, unemployment_rate: 7.0, fx_reserves_billion: 21.6 },
  { date: '1998-04', KRW_USD: 1542, unemployment_rate: 6.8, fx_reserves_billion: 25.4 },
  { date: '1998-05', KRW_USD: 1498, unemployment_rate: 6.5, fx_reserves_billion: 28.9 },
  { date: '1998-06', KRW_USD: 1456, unemployment_rate: 6.2, fx_reserves_billion: 32.1 },
  { date: '1998-07', KRW_USD: 1415, unemployment_rate: 5.9, fx_reserves_billion: 35.2 },
  { date: '1998-08', KRW_USD: 1376, unemployment_rate: 5.6, fx_reserves_billion: 38.0 },
  { date: '1998-09', KRW_USD: 1339, unemployment_rate: 5.3, fx_reserves_billion: 40.5 },
  { date: '1998-10', KRW_USD: 1304, unemployment_rate: 5.0, fx_reserves_billion: 42.8 },
  { date: '1998-11', KRW_USD: 1270, unemployment_rate: 4.8, fx_reserves_billion: 44.9 },
  { date: '1998-12', KRW_USD: 1238, unemployment_rate: 4.5, fx_reserves_billion: 46.8 },

  // 1999년 - 회복기
  { date: '1999-01', KRW_USD: 1207, unemployment_rate: 4.2, fx_reserves_billion: 48.5 },
  { date: '1999-02', KRW_USD: 1178, unemployment_rate: 4.0, fx_reserves_billion: 50.1 },
  { date: '1999-03', KRW_USD: 1151, unemployment_rate: 3.8, fx_reserves_billion: 51.6 },
  { date: '1999-04', KRW_USD: 1125, unemployment_rate: 3.6, fx_reserves_billion: 53.0 },
  { date: '1999-05', KRW_USD: 1101, unemployment_rate: 3.4, fx_reserves_billion: 54.3 },
  { date: '1999-06', KRW_USD: 1078, unemployment_rate: 3.2, fx_reserves_billion: 55.5 },
  { date: '1999-07', KRW_USD: 1057, unemployment_rate: 3.1, fx_reserves_billion: 56.6 },
  { date: '1999-08', KRW_USD: 1037, unemployment_rate: 2.9, fx_reserves_billion: 57.6 },
  { date: '1999-09', KRW_USD: 1019, unemployment_rate: 2.8, fx_reserves_billion: 58.5 },
  { date: '1999-10', KRW_USD: 1002, unemployment_rate: 2.7, fx_reserves_billion: 59.3 },
  { date: '1999-11', KRW_USD: 986, unemployment_rate: 2.6, fx_reserves_billion: 60.0 },
  { date: '1999-12', KRW_USD: 971, unemployment_rate: 2.5, fx_reserves_billion: 60.6 },

  // 2000년 - 안정화
  { date: '2000-01', KRW_USD: 957, unemployment_rate: 2.4, fx_reserves_billion: 61.1 },
  { date: '2000-02', KRW_USD: 944, unemployment_rate: 2.3, fx_reserves_billion: 61.5 },
  { date: '2000-03', KRW_USD: 932, unemployment_rate: 2.2, fx_reserves_billion: 61.8 },
  { date: '2000-04', KRW_USD: 921, unemployment_rate: 2.1, fx_reserves_billion: 62.1 },
  { date: '2000-05', KRW_USD: 911, unemployment_rate: 2.0, fx_reserves_billion: 62.3 },
  { date: '2000-06', KRW_USD: 902, unemployment_rate: 1.9, fx_reserves_billion: 62.5 },
  { date: '2000-07', KRW_USD: 894, unemployment_rate: 1.8, fx_reserves_billion: 62.6 },
  { date: '2000-08', KRW_USD: 887, unemployment_rate: 1.9, fx_reserves_billion: 62.7 },
  { date: '2000-09', KRW_USD: 881, unemployment_rate: 2.0, fx_reserves_billion: 62.8 },
  { date: '2000-10', KRW_USD: 876, unemployment_rate: 2.1, fx_reserves_billion: 62.9 },
  { date: '2000-11', KRW_USD: 872, unemployment_rate: 2.0, fx_reserves_billion: 63.0 },
  { date: '2000-12', KRW_USD: 869, unemployment_rate: 1.9, fx_reserves_billion: 63.1 },
];

// 현재(2025년) 주요 경제 지표 (비교용)
export const currentEconomicData = {
  KRW_USD: 1350, // 2025년 현재 환율 (추정치)
  unemployment_rate: 2.8, // 현재 실업률
  fx_reserves_billion: 4200, // 현재 외환보유액 (억 달러)
};
