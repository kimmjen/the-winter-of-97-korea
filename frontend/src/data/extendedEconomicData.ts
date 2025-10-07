// import type { IEconomicTimeSeries } from './types';

/**
 * 확장된 경제 데이터 - 더 많은 지표 추가
 * GDP, 물가상승률, 수출입, 주가지수, 금리 등
 */

// 확장된 시계열 데이터 인터페이스
export interface IExtendedEconomicData {
  date: string;
  KRW_USD: number;
  unemployment_rate: number;
  fx_reserves_billion: number;
  gdp_growth_rate: number; // GDP 성장률
  inflation_rate: number; // 물가상승률
  kospi_index: number; // 주가지수
  base_interest_rate: number; // 기준금리
  export_billion: number; // 수출액 (억 달러)
  import_billion: number; // 수입액 (억 달러)
  trade_balance: number; // 무역수지
  household_debt_ratio: number; // 가계부채비율
  corporate_debt_ratio: number; // 기업부채비율
}

export const extendedEconomicData: IExtendedEconomicData[] = [
  // 1995년 - 위기 이전
  {
    date: '1995-01', KRW_USD: 771, unemployment_rate: 2.1, fx_reserves_billion: 32.7,
    gdp_growth_rate: 8.9, inflation_rate: 4.5, kospi_index: 882, base_interest_rate: 12.5,
    export_billion: 10.2, import_billion: 9.8, trade_balance: 0.4, household_debt_ratio: 55.2, corporate_debt_ratio: 68.3
  },
  {
    date: '1995-03', KRW_USD: 775, unemployment_rate: 2.0, fx_reserves_billion: 33.2,
    gdp_growth_rate: 8.8, inflation_rate: 4.4, kospi_index: 888, base_interest_rate: 12.3,
    export_billion: 10.4, import_billion: 9.9, trade_balance: 0.5, household_debt_ratio: 55.5, corporate_debt_ratio: 68.7
  },
  {
    date: '1995-06', KRW_USD: 785, unemployment_rate: 2.0, fx_reserves_billion: 35.0,
    gdp_growth_rate: 8.7, inflation_rate: 4.2, kospi_index: 895, base_interest_rate: 12.0,
    export_billion: 10.8, import_billion: 10.2, trade_balance: 0.6, household_debt_ratio: 56.1, corporate_debt_ratio: 69.2
  },
  {
    date: '1995-09', KRW_USD: 792, unemployment_rate: 2.0, fx_reserves_billion: 36.1,
    gdp_growth_rate: 8.6, inflation_rate: 4.1, kospi_index: 904, base_interest_rate: 11.8,
    export_billion: 11.2, import_billion: 10.5, trade_balance: 0.7, household_debt_ratio: 56.8, corporate_debt_ratio: 70.1
  },
  {
    date: '1995-12', KRW_USD: 801, unemployment_rate: 2.0, fx_reserves_billion: 37.1,
    gdp_growth_rate: 8.5, inflation_rate: 4.0, kospi_index: 912, base_interest_rate: 11.5,
    export_billion: 11.5, import_billion: 10.8, trade_balance: 0.7, household_debt_ratio: 57.8, corporate_debt_ratio: 71.5
  },

  // 1996년 - 경고 신호
  {
    date: '1996-01', KRW_USD: 804, unemployment_rate: 2.3, fx_reserves_billion: 37.4,
    gdp_growth_rate: 7.2, inflation_rate: 4.8, kospi_index: 895, base_interest_rate: 11.8,
    export_billion: 11.2, import_billion: 10.9, trade_balance: 0.3, household_debt_ratio: 59.3, corporate_debt_ratio: 73.2
  },
  {
    date: '1996-03', KRW_USD: 812, unemployment_rate: 2.3, fx_reserves_billion: 37.8,
    gdp_growth_rate: 7.0, inflation_rate: 4.9, kospi_index: 886, base_interest_rate: 12.0,
    export_billion: 11.5, import_billion: 11.2, trade_balance: 0.3, household_debt_ratio: 60.1, corporate_debt_ratio: 74.1
  },
  {
    date: '1996-06', KRW_USD: 824, unemployment_rate: 2.4, fx_reserves_billion: 38.4,
    gdp_growth_rate: 6.8, inflation_rate: 5.2, kospi_index: 878, base_interest_rate: 12.2,
    export_billion: 11.8, import_billion: 11.5, trade_balance: 0.3, household_debt_ratio: 61.7, corporate_debt_ratio: 75.8
  },
  {
    date: '1996-09', KRW_USD: 835, unemployment_rate: 2.6, fx_reserves_billion: 38.7,
    gdp_growth_rate: 6.7, inflation_rate: 5.4, kospi_index: 865, base_interest_rate: 12.5,
    export_billion: 12.0, import_billion: 11.8, trade_balance: 0.2, household_debt_ratio: 63.0, corporate_debt_ratio: 77.2
  },
  {
    date: '1996-12', KRW_USD: 848, unemployment_rate: 2.7, fx_reserves_billion: 39.0,
    gdp_growth_rate: 6.5, inflation_rate: 5.5, kospi_index: 851, base_interest_rate: 12.8,
    export_billion: 12.3, import_billion: 12.1, trade_balance: 0.2, household_debt_ratio: 64.2, corporate_debt_ratio: 78.9
  },

  // 1997년 - 위기 발발
  {
    date: '1997-01', KRW_USD: 852, unemployment_rate: 2.9, fx_reserves_billion: 39.1,
    gdp_growth_rate: 5.8, inflation_rate: 6.2, kospi_index: 834, base_interest_rate: 13.5,
    export_billion: 12.1, import_billion: 12.3, trade_balance: -0.2, household_debt_ratio: 66.8, corporate_debt_ratio: 82.3
  },
  {
    date: '1997-02', KRW_USD: 858, unemployment_rate: 3.0, fx_reserves_billion: 38.9,
    gdp_growth_rate: 5.6, inflation_rate: 6.4, kospi_index: 825, base_interest_rate: 13.8,
    export_billion: 12.0, import_billion: 12.4, trade_balance: -0.4, household_debt_ratio: 67.2, corporate_debt_ratio: 83.1
  },
  {
    date: '1997-03', KRW_USD: 864, unemployment_rate: 3.1, fx_reserves_billion: 38.5,
    gdp_growth_rate: 5.2, inflation_rate: 6.6, kospi_index: 816, base_interest_rate: 14.0,
    export_billion: 11.9, import_billion: 12.5, trade_balance: -0.6, household_debt_ratio: 67.8, corporate_debt_ratio: 84.2
  },
  {
    date: '1997-04', KRW_USD: 870, unemployment_rate: 3.1, fx_reserves_billion: 38.2,
    gdp_growth_rate: 4.8, inflation_rate: 6.8, kospi_index: 806, base_interest_rate: 14.1,
    export_billion: 11.8, import_billion: 12.6, trade_balance: -0.8, household_debt_ratio: 68.2, corporate_debt_ratio: 85.1
  },
  {
    date: '1997-05', KRW_USD: 875, unemployment_rate: 3.2, fx_reserves_billion: 37.9,
    gdp_growth_rate: 4.5, inflation_rate: 6.9, kospi_index: 800, base_interest_rate: 14.2,
    export_billion: 11.8, import_billion: 12.7, trade_balance: -0.9, household_debt_ratio: 68.7, corporate_debt_ratio: 86.0
  },
  {
    date: '1997-06', KRW_USD: 878, unemployment_rate: 3.2, fx_reserves_billion: 37.8,
    gdp_growth_rate: 4.2, inflation_rate: 7.1, kospi_index: 795, base_interest_rate: 14.2,
    export_billion: 11.8, import_billion: 12.8, trade_balance: -1.0, household_debt_ratio: 69.5, corporate_debt_ratio: 87.2
  },
  {
    date: '1997-07', KRW_USD: 885, unemployment_rate: 3.4, fx_reserves_billion: 37.2,
    gdp_growth_rate: 3.8, inflation_rate: 7.5, kospi_index: 782, base_interest_rate: 14.8,
    export_billion: 11.6, import_billion: 12.9, trade_balance: -1.3, household_debt_ratio: 70.1, corporate_debt_ratio: 88.5
  },
  {
    date: '1997-08', KRW_USD: 892, unemployment_rate: 3.6, fx_reserves_billion: 36.8,
    gdp_growth_rate: 3.2, inflation_rate: 8.0, kospi_index: 765, base_interest_rate: 15.2,
    export_billion: 11.4, import_billion: 13.0, trade_balance: -1.6, household_debt_ratio: 70.8, corporate_debt_ratio: 90.2
  },
  {
    date: '1997-09', KRW_USD: 902, unemployment_rate: 3.9, fx_reserves_billion: 36.2,
    gdp_growth_rate: 2.8, inflation_rate: 8.4, kospi_index: 742, base_interest_rate: 15.8,
    export_billion: 11.2, import_billion: 13.1, trade_balance: -1.9, household_debt_ratio: 71.4, corporate_debt_ratio: 92.1
  },
  {
    date: '1997-10', KRW_USD: 912, unemployment_rate: 4.2, fx_reserves_billion: 34.8,
    gdp_growth_rate: 2.1, inflation_rate: 8.9, kospi_index: 672, base_interest_rate: 16.8,
    export_billion: 10.9, import_billion: 13.2, trade_balance: -2.3, household_debt_ratio: 72.1, corporate_debt_ratio: 94.8
  },

  // 위기 절정 - 더 세밀한 데이터
  {
    date: '1997-11', KRW_USD: 1164, unemployment_rate: 5.7, fx_reserves_billion: 20.4,
    gdp_growth_rate: -2.8, inflation_rate: 12.3, kospi_index: 486, base_interest_rate: 25.0,
    export_billion: 8.9, import_billion: 11.2, trade_balance: -2.3, household_debt_ratio: 74.8, corporate_debt_ratio: 108.7
  },
  {
    date: '1997-12', KRW_USD: 1695, unemployment_rate: 6.8, fx_reserves_billion: 8.9,
    gdp_growth_rate: -5.8, inflation_rate: 15.7, kospi_index: 376, base_interest_rate: 30.0,
    export_billion: 7.2, import_billion: 9.8, trade_balance: -2.6, household_debt_ratio: 76.2, corporate_debt_ratio: 125.4
  },

  // 1998년 - 회복 시작 (더 세밀한 변화)
  {
    date: '1998-01', KRW_USD: 1678, unemployment_rate: 7.1, fx_reserves_billion: 12.8,
    gdp_growth_rate: -6.7, inflation_rate: 14.2, kospi_index: 398, base_interest_rate: 28.5,
    export_billion: 7.8, import_billion: 9.2, trade_balance: -1.4, household_debt_ratio: 73.5, corporate_debt_ratio: 118.9
  },
  {
    date: '1998-02', KRW_USD: 1632, unemployment_rate: 7.0, fx_reserves_billion: 15.2,
    gdp_growth_rate: -6.2, inflation_rate: 13.8, kospi_index: 425, base_interest_rate: 26.8,
    export_billion: 8.1, import_billion: 8.9, trade_balance: -0.8, household_debt_ratio: 72.8, corporate_debt_ratio: 115.2
  },
  {
    date: '1998-03', KRW_USD: 1598, unemployment_rate: 6.8, fx_reserves_billion: 18.7,
    gdp_growth_rate: -5.8, inflation_rate: 13.2, kospi_index: 452, base_interest_rate: 24.5,
    export_billion: 8.4, import_billion: 8.7, trade_balance: -0.3, household_debt_ratio: 72.1, corporate_debt_ratio: 112.8
  },
  {
    date: '1998-04', KRW_USD: 1542, unemployment_rate: 6.6, fx_reserves_billion: 22.8,
    gdp_growth_rate: -5.5, inflation_rate: 12.5, kospi_index: 478, base_interest_rate: 22.2,
    export_billion: 8.7, import_billion: 8.5, trade_balance: 0.2, household_debt_ratio: 71.5, corporate_debt_ratio: 108.9
  },
  {
    date: '1998-05', KRW_USD: 1512, unemployment_rate: 6.4, fx_reserves_billion: 26.2,
    gdp_growth_rate: -5.2, inflation_rate: 11.8, kospi_index: 495, base_interest_rate: 20.5,
    export_billion: 9.0, import_billion: 8.3, trade_balance: 0.7, household_debt_ratio: 70.8, corporate_debt_ratio: 105.2
  },
  {
    date: '1998-06', KRW_USD: 1456, unemployment_rate: 6.2, fx_reserves_billion: 32.1,
    gdp_growth_rate: -5.1, inflation_rate: 9.8, kospi_index: 512, base_interest_rate: 18.2,
    export_billion: 9.2, import_billion: 8.1, trade_balance: 1.1, household_debt_ratio: 68.9, corporate_debt_ratio: 98.7
  },
  {
    date: '1998-07', KRW_USD: 1398, unemployment_rate: 5.8, fx_reserves_billion: 35.8,
    gdp_growth_rate: -4.8, inflation_rate: 9.2, kospi_index: 535, base_interest_rate: 16.8,
    export_billion: 9.6, import_billion: 7.9, trade_balance: 1.7, household_debt_ratio: 67.2, corporate_debt_ratio: 94.8
  },
  {
    date: '1998-08', KRW_USD: 1356, unemployment_rate: 5.4, fx_reserves_billion: 38.9,
    gdp_growth_rate: -4.2, inflation_rate: 8.6, kospi_index: 562, base_interest_rate: 15.2,
    export_billion: 10.1, import_billion: 7.7, trade_balance: 2.4, household_debt_ratio: 65.8, corporate_debt_ratio: 91.2
  },
  {
    date: '1998-09', KRW_USD: 1325, unemployment_rate: 5.0, fx_reserves_billion: 41.2,
    gdp_growth_rate: -3.8, inflation_rate: 8.0, kospi_index: 588, base_interest_rate: 14.0,
    export_billion: 10.5, import_billion: 7.6, trade_balance: 2.9, household_debt_ratio: 64.5, corporate_debt_ratio: 88.1
  },
  {
    date: '1998-10', KRW_USD: 1298, unemployment_rate: 4.8, fx_reserves_billion: 43.5,
    gdp_growth_rate: -3.2, inflation_rate: 7.4, kospi_index: 612, base_interest_rate: 13.2,
    export_billion: 10.8, import_billion: 7.8, trade_balance: 3.0, household_debt_ratio: 63.8, corporate_debt_ratio: 85.5
  },
  {
    date: '1998-11', KRW_USD: 1275, unemployment_rate: 4.6, fx_reserves_billion: 44.8,
    gdp_growth_rate: -2.8, inflation_rate: 6.9, kospi_index: 635, base_interest_rate: 13.0,
    export_billion: 11.0, import_billion: 7.9, trade_balance: 3.1, household_debt_ratio: 62.5, corporate_debt_ratio: 83.8
  },
  {
    date: '1998-12', KRW_USD: 1238, unemployment_rate: 4.5, fx_reserves_billion: 46.8,
    gdp_growth_rate: -2.1, inflation_rate: 6.2, kospi_index: 698, base_interest_rate: 12.8,
    export_billion: 11.2, import_billion: 7.8, trade_balance: 3.4, household_debt_ratio: 61.2, corporate_debt_ratio: 82.3
  },

  // 1999년 - 빠른 회복
  {
    date: '1999-01', KRW_USD: 1215, unemployment_rate: 4.2, fx_reserves_billion: 52.8,
    gdp_growth_rate: -0.8, inflation_rate: 5.8, kospi_index: 728, base_interest_rate: 11.5,
    export_billion: 11.8, import_billion: 8.2, trade_balance: 3.6, household_debt_ratio: 60.5, corporate_debt_ratio: 79.8
  },
  {
    date: '1999-03', KRW_USD: 1202, unemployment_rate: 3.9, fx_reserves_billion: 58.2,
    gdp_growth_rate: 0.5, inflation_rate: 5.2, kospi_index: 768, base_interest_rate: 10.2,
    export_billion: 12.5, import_billion: 8.6, trade_balance: 3.9, household_debt_ratio: 59.8, corporate_debt_ratio: 76.5
  },
  {
    date: '1999-06', KRW_USD: 1189, unemployment_rate: 3.8, fx_reserves_billion: 68.9,
    gdp_growth_rate: 4.2, inflation_rate: 4.1, kospi_index: 845, base_interest_rate: 8.5,
    export_billion: 13.8, import_billion: 9.2, trade_balance: 4.6, household_debt_ratio: 58.7, corporate_debt_ratio: 72.1
  },
  {
    date: '1999-09', KRW_USD: 1165, unemployment_rate: 3.5, fx_reserves_billion: 76.5,
    gdp_growth_rate: 6.8, inflation_rate: 3.5, kospi_index: 912, base_interest_rate: 7.2,
    export_billion: 15.2, import_billion: 10.1, trade_balance: 5.1, household_debt_ratio: 57.2, corporate_debt_ratio: 68.8
  },
  {
    date: '1999-12', KRW_USD: 1135, unemployment_rate: 3.2, fx_reserves_billion: 86.2,
    gdp_growth_rate: 8.9, inflation_rate: 2.8, kospi_index: 1028, base_interest_rate: 6.2,
    export_billion: 16.2, import_billion: 11.8, trade_balance: 4.4, household_debt_ratio: 55.3, corporate_debt_ratio: 65.8
  },

  // 2000년대 - 안정화
  {
    date: '2000-06', KRW_USD: 1148, unemployment_rate: 3.0, fx_reserves_billion: 92.8,
    gdp_growth_rate: 8.2, inflation_rate: 2.5, kospi_index: 758, base_interest_rate: 6.0,
    export_billion: 16.8, import_billion: 15.2, trade_balance: 1.6, household_debt_ratio: 56.8, corporate_debt_ratio: 67.2
  },
  {
    date: '2000-12', KRW_USD: 1158, unemployment_rate: 2.8, fx_reserves_billion: 96.2,
    gdp_growth_rate: 8.5, inflation_rate: 2.3, kospi_index: 504, base_interest_rate: 5.8,
    export_billion: 17.2, import_billion: 16.1, trade_balance: 1.1, household_debt_ratio: 58.2, corporate_debt_ratio: 69.8
  },

  // 중간 데이터 점들 추가
  {
    date: '2005-12', KRW_USD: 1013, unemployment_rate: 3.5, fx_reserves_billion: 210.4,
    gdp_growth_rate: 3.9, inflation_rate: 2.8, kospi_index: 1379, base_interest_rate: 3.25,
    export_billion: 28.4, import_billion: 26.1, trade_balance: 2.3, household_debt_ratio: 72.8, corporate_debt_ratio: 76.5
  },
  {
    date: '2008-12', KRW_USD: 1259, unemployment_rate: 3.2, fx_reserves_billion: 201.1,
    gdp_growth_rate: 2.8, inflation_rate: 4.7, kospi_index: 1124, base_interest_rate: 3.0,
    export_billion: 42.2, import_billion: 43.5, trade_balance: -1.3, household_debt_ratio: 82.1, corporate_debt_ratio: 78.9
  },
  {
    date: '2010-12', KRW_USD: 1156, unemployment_rate: 3.7, fx_reserves_billion: 291.6,
    gdp_growth_rate: 6.5, inflation_rate: 2.9, kospi_index: 2051, base_interest_rate: 2.5,
    export_billion: 46.6, import_billion: 42.5, trade_balance: 4.1, household_debt_ratio: 87.2, corporate_debt_ratio: 82.4
  },
  {
    date: '2015-12', KRW_USD: 1172, unemployment_rate: 3.6, fx_reserves_billion: 367.9,
    gdp_growth_rate: 2.8, inflation_rate: 0.7, kospi_index: 1961, base_interest_rate: 1.5,
    export_billion: 52.7, import_billion: 43.6, trade_balance: 9.1, household_debt_ratio: 95.8, corporate_debt_ratio: 86.2
  },
  {
    date: '2020-12', KRW_USD: 1088, unemployment_rate: 4.0, fx_reserves_billion: 443.1,
    gdp_growth_rate: -0.9, inflation_rate: 0.5, kospi_index: 2873, base_interest_rate: 0.5,
    export_billion: 51.2, import_billion: 46.7, trade_balance: 4.5, household_debt_ratio: 104.2, corporate_debt_ratio: 91.8
  },
  {
    date: '2022-12', KRW_USD: 1268, unemployment_rate: 2.9, fx_reserves_billion: 423.7,
    gdp_growth_rate: 3.1, inflation_rate: 5.1, kospi_index: 2236, base_interest_rate: 3.25,
    export_billion: 68.3, import_billion: 73.1, trade_balance: -4.8, household_debt_ratio: 108.5, corporate_debt_ratio: 94.8
  },
  {
    date: '2025-01', KRW_USD: 1342, unemployment_rate: 2.8, fx_reserves_billion: 421.8,
    gdp_growth_rate: 2.8, inflation_rate: 3.1, kospi_index: 2596, base_interest_rate: 3.5,
    export_billion: 68.9, import_billion: 61.2, trade_balance: 7.7, household_debt_ratio: 102.8, corporate_debt_ratio: 95.3
  }
];

// 현재 상세 경제 데이터 (2025년 기준)
export const currentDetailedEconomicData = {
  digital_economy_share: 8.9, // GDP 대비 디지털 경제 비중 (%)
  renewable_energy_share: 12.8, // 전체 에너지 중 재생에너지 비중 (%)
  trade_balance: 7.7, // 무역수지 (억 달러)
  fx_reserves_billion: 421.8, // 외환보유액 (억 달러)
  global_gdp_rank: 10, // 세계 GDP 순위
  innovation_index_rank: 10, // 글로벌 혁신 지수 순위
  competitiveness_rank: 13, // 국가경쟁력 순위
  startup_ecosystem_rank: 9, // 스타트업 생태계 순위
  education_rank: 2, // 교육 수준 순위
  digital_competitiveness_rank: 8 // 디지털 경쟁력 순위
};

// 산업별 데이터 인터페이스
export interface ISectorData {
  sector: string;
  crisis_1997: {
    employment_share: number;  // 고용 비중 (%)
    gdp_contribution: number;  // GDP 기여도 (%)
    growth_rate: number;       // 성장률 (%)
  };
  current_2025: {
    employment_share: number;
    gdp_contribution: number;
    growth_rate: number;
  };
}

// 산업별 비교 데이터
export const sectorComparisonData: ISectorData[] = [
  {
    sector: '제조업',
    crisis_1997: {
      employment_share: 28.5,
      gdp_contribution: 32.1,
      growth_rate: -8.2
    },
    current_2025: {
      employment_share: 24.8,
      gdp_contribution: 28.9,
      growth_rate: 3.2
    }
  },
  {
    sector: 'IT/디지털',
    crisis_1997: {
      employment_share: 2.8,
      gdp_contribution: 3.2,
      growth_rate: -12.8
    },
    current_2025: {
      employment_share: 8.9,
      gdp_contribution: 12.8,
      growth_rate: 8.9
    }
  },
  {
    sector: '금융업',
    crisis_1997: {
      employment_share: 4.2,
      gdp_contribution: 6.8,
      growth_rate: -18.9
    },
    current_2025: {
      employment_share: 6.1,
      gdp_contribution: 8.9,
      growth_rate: 4.2
    }
  },
  {
    sector: '건설업',
    crisis_1997: {
      employment_share: 9.8,
      gdp_contribution: 8.9,
      growth_rate: -15.2
    },
    current_2025: {
      employment_share: 7.2,
      gdp_contribution: 6.8,
      growth_rate: 2.1
    }
  },
  {
    sector: '서비스업',
    crisis_1997: {
      employment_share: 54.7,
      gdp_contribution: 48.9,
      growth_rate: -4.8
    },
    current_2025: {
      employment_share: 53.0,
      gdp_contribution: 42.6,
      growth_rate: 3.8
    }
  }
];
