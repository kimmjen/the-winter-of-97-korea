

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
  // 1995년 - 위기 이전 (안정기)
  {
    date: '1995-01', KRW_USD: 771, unemployment_rate: 2.1, fx_reserves_billion: 32.7,
    gdp_growth_rate: 9.6, inflation_rate: 4.5, kospi_index: 920, base_interest_rate: 12.5,
    export_billion: 10.2, import_billion: 9.8, trade_balance: 0.4, household_debt_ratio: 52.0, corporate_debt_ratio: 85.0
  },
  {
    date: '1995-06', KRW_USD: 760, unemployment_rate: 1.9, fx_reserves_billion: 35.0,
    gdp_growth_rate: 9.8, inflation_rate: 4.3, kospi_index: 930, base_interest_rate: 12.0,
    export_billion: 11.5, import_billion: 10.5, trade_balance: 1.0, household_debt_ratio: 53.0, corporate_debt_ratio: 86.0
  },
  {
    date: '1995-12', KRW_USD: 775, unemployment_rate: 2.0, fx_reserves_billion: 32.7,
    gdp_growth_rate: 7.2, inflation_rate: 4.7, kospi_index: 882, base_interest_rate: 11.5,
    export_billion: 12.9, import_billion: 11.8, trade_balance: 1.1, household_debt_ratio: 54.0, corporate_debt_ratio: 87.0
  },

  // 1996년 - 경고 신호 (경상수지 적자 확대)
  {
    date: '1996-01', KRW_USD: 780, unemployment_rate: 2.0, fx_reserves_billion: 33.0,
    gdp_growth_rate: 7.0, inflation_rate: 4.9, kospi_index: 870, base_interest_rate: 11.8,
    export_billion: 10.5, import_billion: 11.5, trade_balance: -1.0, household_debt_ratio: 56.0, corporate_debt_ratio: 90.0
  },
  {
    date: '1996-06', KRW_USD: 810, unemployment_rate: 1.9, fx_reserves_billion: 36.0,
    gdp_growth_rate: 6.8, inflation_rate: 5.5, kospi_index: 850, base_interest_rate: 12.2,
    export_billion: 11.0, import_billion: 12.5, trade_balance: -1.5, household_debt_ratio: 58.0, corporate_debt_ratio: 95.0
  },
  {
    date: '1996-12', KRW_USD: 844, unemployment_rate: 2.6, fx_reserves_billion: 33.2,
    gdp_growth_rate: 6.0, inflation_rate: 4.9, kospi_index: 651, base_interest_rate: 12.6,
    export_billion: 11.8, import_billion: 13.8, trade_balance: -2.0, household_debt_ratio: 60.0, corporate_debt_ratio: 100.0
  },

  // 1997년 - 위기 발발 (환율 급등, 외환보유액 고갈)
  {
    date: '1997-01', KRW_USD: 850, unemployment_rate: 2.6, fx_reserves_billion: 31.0,
    gdp_growth_rate: 5.5, inflation_rate: 4.7, kospi_index: 670, base_interest_rate: 12.6,
    export_billion: 9.5, import_billion: 11.0, trade_balance: -1.5, household_debt_ratio: 62.0, corporate_debt_ratio: 110.0
  },
  {
    date: '1997-03', KRW_USD: 890, unemployment_rate: 2.8, fx_reserves_billion: 29.1,
    gdp_growth_rate: 5.0, inflation_rate: 4.5, kospi_index: 650, base_interest_rate: 13.2,
    export_billion: 10.8, import_billion: 12.5, trade_balance: -1.7, household_debt_ratio: 63.0, corporate_debt_ratio: 115.0
  },
  {
    date: '1997-06', KRW_USD: 888, unemployment_rate: 2.3, fx_reserves_billion: 33.3,
    gdp_growth_rate: 4.5, inflation_rate: 4.0, kospi_index: 750, base_interest_rate: 11.8,
    export_billion: 11.5, import_billion: 12.0, trade_balance: -0.5, household_debt_ratio: 64.0, corporate_debt_ratio: 120.0
  },
  {
    date: '1997-09', KRW_USD: 914, unemployment_rate: 2.2, fx_reserves_billion: 30.4,
    gdp_growth_rate: 4.0, inflation_rate: 4.2, kospi_index: 640, base_interest_rate: 13.4,
    export_billion: 11.8, import_billion: 11.5, trade_balance: 0.3, household_debt_ratio: 65.0, corporate_debt_ratio: 130.0
  },
  {
    date: '1997-10', KRW_USD: 965, unemployment_rate: 2.1, fx_reserves_billion: 30.5,
    gdp_growth_rate: 3.0, inflation_rate: 4.5, kospi_index: 500, base_interest_rate: 13.8,
    export_billion: 11.5, import_billion: 10.5, trade_balance: 1.0, household_debt_ratio: 66.0, corporate_debt_ratio: 140.0
  },
  {
    date: '1997-11', KRW_USD: 1163, unemployment_rate: 2.6, fx_reserves_billion: 24.4, // IMF 구제금융 신청
    gdp_growth_rate: -1.5, inflation_rate: 5.0, kospi_index: 400, base_interest_rate: 14.5,
    export_billion: 11.0, import_billion: 9.5, trade_balance: 1.5, household_debt_ratio: 68.0, corporate_debt_ratio: 150.0
  },
  {
    date: '1997-12', KRW_USD: 1695, unemployment_rate: 3.1, fx_reserves_billion: 8.9, // 가용 외환보유액 최저
    gdp_growth_rate: -3.0, inflation_rate: 6.6, kospi_index: 376, base_interest_rate: 30.0, // 금리 폭등
    export_billion: 12.5, import_billion: 8.5, trade_balance: 4.0, household_debt_ratio: 70.0, corporate_debt_ratio: 170.0
  },

  // 1998년 - 고통과 구조조정 (실업률 급증, 금리 고공행진)
  {
    date: '1998-01', KRW_USD: 1707, unemployment_rate: 4.5, fx_reserves_billion: 12.3,
    gdp_growth_rate: -7.0, inflation_rate: 8.5, kospi_index: 480, base_interest_rate: 23.1,
    export_billion: 9.0, import_billion: 6.0, trade_balance: 3.0, household_debt_ratio: 72.0, corporate_debt_ratio: 180.0
  },
  {
    date: '1998-02', KRW_USD: 1570, unemployment_rate: 5.9, fx_reserves_billion: 18.0,
    gdp_growth_rate: -8.0, inflation_rate: 9.5, kospi_index: 520, base_interest_rate: 22.5,
    export_billion: 10.5, import_billion: 7.0, trade_balance: 3.5, household_debt_ratio: 71.0, corporate_debt_ratio: 175.0
  },
  {
    date: '1998-03', KRW_USD: 1647, unemployment_rate: 6.5, fx_reserves_billion: 24.0,
    gdp_growth_rate: -9.0, inflation_rate: 9.0, kospi_index: 450, base_interest_rate: 22.6,
    export_billion: 11.0, import_billion: 7.5, trade_balance: 3.5, household_debt_ratio: 70.0, corporate_debt_ratio: 170.0
  },
  {
    date: '1998-04', KRW_USD: 1383, unemployment_rate: 6.7, fx_reserves_billion: 30.0,
    gdp_growth_rate: -9.5, inflation_rate: 8.2, kospi_index: 400, base_interest_rate: 20.3,
    export_billion: 11.5, import_billion: 7.8, trade_balance: 3.7, household_debt_ratio: 69.0, corporate_debt_ratio: 160.0
  },
  {
    date: '1998-05', KRW_USD: 1342, unemployment_rate: 6.9, fx_reserves_billion: 35.0,
    gdp_growth_rate: -9.0, inflation_rate: 7.5, kospi_index: 350, base_interest_rate: 18.3,
    export_billion: 11.2, import_billion: 7.2, trade_balance: 4.0, household_debt_ratio: 68.0, corporate_debt_ratio: 155.0
  },
  {
    date: '1998-06', KRW_USD: 1406, unemployment_rate: 7.0, fx_reserves_billion: 37.0,
    gdp_growth_rate: -8.5, inflation_rate: 7.0, kospi_index: 320, base_interest_rate: 16.9,
    export_billion: 11.0, import_billion: 7.0, trade_balance: 4.0, household_debt_ratio: 67.0, corporate_debt_ratio: 150.0
  },
  {
    date: '1998-07', KRW_USD: 1383, unemployment_rate: 8.2, fx_reserves_billion: 39.2, // 실업률 최고점
    gdp_growth_rate: -8.0, inflation_rate: 6.5, kospi_index: 340, base_interest_rate: 14.0,
    export_billion: 10.5, import_billion: 6.5, trade_balance: 4.0, household_debt_ratio: 66.0, corporate_debt_ratio: 145.0
  },
  {
    date: '1998-08', KRW_USD: 1344, unemployment_rate: 7.4, fx_reserves_billion: 41.0,
    gdp_growth_rate: -7.5, inflation_rate: 6.0, kospi_index: 310, base_interest_rate: 11.2,
    export_billion: 10.0, import_billion: 6.0, trade_balance: 4.0, household_debt_ratio: 65.0, corporate_debt_ratio: 140.0
  },
  {
    date: '1998-09', KRW_USD: 1400, unemployment_rate: 7.3, fx_reserves_billion: 43.0,
    gdp_growth_rate: -7.0, inflation_rate: 5.5, kospi_index: 315, base_interest_rate: 10.4,
    export_billion: 10.8, import_billion: 6.8, trade_balance: 4.0, household_debt_ratio: 64.0, corporate_debt_ratio: 135.0
  },
  {
    date: '1998-10', KRW_USD: 1362, unemployment_rate: 7.1, fx_reserves_billion: 45.0,
    gdp_growth_rate: -6.0, inflation_rate: 5.0, kospi_index: 380, base_interest_rate: 8.1,
    export_billion: 11.0, import_billion: 7.5, trade_balance: 3.5, household_debt_ratio: 63.0, corporate_debt_ratio: 130.0
  },
  {
    date: '1998-11', KRW_USD: 1340, unemployment_rate: 7.3, fx_reserves_billion: 46.0,
    gdp_growth_rate: -5.0, inflation_rate: 4.5, kospi_index: 450, base_interest_rate: 7.7,
    export_billion: 11.5, import_billion: 8.0, trade_balance: 3.5, household_debt_ratio: 62.0, corporate_debt_ratio: 125.0
  },
  {
    date: '1998-12', KRW_USD: 1200, unemployment_rate: 7.9, fx_reserves_billion: 48.5,
    gdp_growth_rate: -4.0, inflation_rate: 4.0, kospi_index: 562, base_interest_rate: 6.0,
    export_billion: 12.0, import_billion: 8.5, trade_balance: 3.5, household_debt_ratio: 61.0, corporate_debt_ratio: 120.0
  },

  // 1999년 - 빠른 회복 (V자 반등)
  {
    date: '1999-06', KRW_USD: 1180, unemployment_rate: 6.2, fx_reserves_billion: 60.4,
    gdp_growth_rate: 11.3, inflation_rate: 0.8, kospi_index: 880, base_interest_rate: 5.0,
    export_billion: 13.0, import_billion: 10.0, trade_balance: 3.0, household_debt_ratio: 60.0, corporate_debt_ratio: 100.0
  },
  {
    date: '1999-12', KRW_USD: 1138, unemployment_rate: 4.8, fx_reserves_billion: 74.0,
    gdp_growth_rate: 10.9, inflation_rate: 0.8, kospi_index: 1028, base_interest_rate: 4.8,
    export_billion: 14.0, import_billion: 11.5, trade_balance: 2.5, household_debt_ratio: 58.0, corporate_debt_ratio: 90.0
  },

  // 2024-2025년 - 현재 (안정적 성장과 새로운 도전)
  {
    date: '2024-06', KRW_USD: 1380, unemployment_rate: 2.9, fx_reserves_billion: 412.0,
    gdp_growth_rate: 2.3, inflation_rate: 2.4, kospi_index: 2750, base_interest_rate: 3.5,
    export_billion: 58.0, import_billion: 53.0, trade_balance: 5.0, household_debt_ratio: 100.0, corporate_debt_ratio: 120.0
  },
  {
    date: '2024-12', KRW_USD: 1472, unemployment_rate: 2.8, fx_reserves_billion: 391.9,
    gdp_growth_rate: 2.2, inflation_rate: 2.0, kospi_index: 2399, base_interest_rate: 3.0,
    export_billion: 57.0, import_billion: 52.0, trade_balance: 5.0, household_debt_ratio: 101.0, corporate_debt_ratio: 122.0
  },
  {
    date: '2025-01', KRW_USD: 1450, unemployment_rate: 2.9, fx_reserves_billion: 387.3,
    gdp_growth_rate: 2.1, inflation_rate: 2.1, kospi_index: 2450, base_interest_rate: 3.0,
    export_billion: 56.0, import_billion: 51.0, trade_balance: 5.0, household_debt_ratio: 101.5, corporate_debt_ratio: 123.0
  },
  {
    date: '2025-05', KRW_USD: 1350, unemployment_rate: 2.7, fx_reserves_billion: 400.0,
    gdp_growth_rate: 2.3, inflation_rate: 2.0, kospi_index: 2600, base_interest_rate: 2.75,
    export_billion: 60.0, import_billion: 54.0, trade_balance: 6.0, household_debt_ratio: 102.0, corporate_debt_ratio: 122.0
  },
  {
    date: '2025-10', KRW_USD: 1467, unemployment_rate: 2.6, fx_reserves_billion: 428.8,
    gdp_growth_rate: 2.4, inflation_rate: 1.9, kospi_index: 2550, base_interest_rate: 2.5,
    export_billion: 62.0, import_billion: 55.0, trade_balance: 7.0, household_debt_ratio: 102.5, corporate_debt_ratio: 121.0
  }
];

// 현재 상세 경제 데이터 (2025년 기준)
export const currentDetailedEconomicData = {
  digital_economy_share: 8.9, // GDP 대비 디지털 경제 비중 (%)
  renewable_energy_share: 12.8, // 전체 에너지 중 재생에너지 비중 (%)
  trade_balance: 7.0, // 무역수지 (억 달러)
  fx_reserves_billion: 428.8, // 외환보유액 (억 달러)
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

// 딥다이브: 위기 절정기 일별 환율 데이터 (1997년 11월 ~ 1998년 1월)
export const dailyExchangeRates = [
  // 1997년 11월 - 위기의 서막
  { date: '1997-11-10', rate: 999.00 },
  { date: '1997-11-12', rate: 995.00 },
  { date: '1997-11-14', rate: 992.00 },
  { date: '1997-11-17', rate: 999.00 },
  { date: '1997-11-20', rate: 992.00 },
  { date: '1997-11-24', rate: 1020.00 }, // 환율 방어 포기 시점 근접
  { date: '1997-11-26', rate: 1040.00 },
  { date: '1997-11-27', rate: 1139.00 }, // 1100원 돌파

  // 1997년 12월 - 패닉
  { date: '1997-12-01', rate: 1188.00 },
  { date: '1997-12-03', rate: 1199.00 }, // IMF 협정 체결
  { date: '1997-12-05', rate: 1233.00 },
  { date: '1997-12-08', rate: 1342.40 }, // 1300원 돌파
  { date: '1997-12-09', rate: 1465.70 }, // 1400원 돌파
  { date: '1997-12-10', rate: 1565.90 }, // 1500원 돌파
  { date: '1997-12-11', rate: 1719.80 }, // 1700원 돌파 (충격)
  { date: '1997-12-16', rate: 1430.00 }, // 일시적 안정
  { date: '1997-12-19', rate: 1580.00 },
  { date: '1997-12-23', rate: 1960.00 }, // 장중 최고치 1960원 기록 (역사적 고점)
  { date: '1997-12-24', rate: 1695.00 },

  // 1998년 1월 - 여진
  { date: '1998-01-05', rate: 1740.00 },
  { date: '1998-01-12', rate: 1650.00 },
  { date: '1998-01-20', rate: 1580.00 },
  { date: '1998-01-30', rate: 1550.00 }
];

// 딥다이브: 주요 재벌 부도 일지 (1997년)
export const chaebolBankruptcies = [
  { date: '1997-01-23', name: '한보그룹', rank: 14, debt: '5.7조원', cause: '무리한 제철소 투자' },
  { date: '1997-03-19', name: '삼미그룹', rank: 26, debt: '1.9조원', cause: '특수강 사업 부진' },
  { date: '1997-04-21', name: '진로그룹', rank: 19, debt: '3.5조원', cause: '무리한 사업 다각화' },
  { date: '1997-07-15', name: '기아그룹', rank: 8, debt: '9.5조원', cause: '자동차 산업 불황 및 경영권 분쟁' },
  { date: '1997-11-01', name: '해태그룹', rank: 24, debt: '2.8조원', cause: '전자/중공업 무리한 확장' },
  { date: '1997-11-04', name: '뉴코아', rank: 25, debt: '1.2조원', cause: '백화점 무리한 출점' },
  { date: '1997-12-06', name: '한라그룹', rank: 12, debt: '6.5조원', cause: '중공업 투자 실패' }
];

// 딥다이브: 사회적 지표 (금모으기, 자살률 등)
export const socialIndicators = {
  goldCollection: {
    participants: '351만명', // 약 350만명
    totalAmount: '227톤',
    valueUSD: '22억 달러',
    period: '1998.01 ~ 1998.04'
  },
  suicideRate: {
    year1996: 14.4, // 인구 10만명당
    year1997: 14.5,
    year1998: 20.4, // 급증
    increaseRate: '+40.7%'
  },
  homeless: {
    year1997: '약 1,000명',
    year1998: '약 6,000명', // 6배 급증
    description: '실직 노숙자 급증'
  }
};
