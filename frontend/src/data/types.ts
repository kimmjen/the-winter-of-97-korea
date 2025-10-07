// 1997년 IMF 위기와 현재를 비교하는 대시보드를 위한 TypeScript 인터페이스

/**
 * 경제 시계열 데이터 인터페이스
 * 1995년부터 2000년까지의 월별 경제 지표 데이터
 */
export interface IEconomicTimeSeries {
  date: string; // YYYY-MM 형식
  KRW_USD: number; // 월별 환율
  unemployment_rate: number; // 월별 실업률 (%)
  fx_reserves_billion: number; // 월별 외환보유액 (단위: 억 달러)
}

/**
 * 통계 박스 컴포넌트 Props 인터페이스
 * 위기 시점과 현재 시점의 주요 지표를 비교 표시
 */
export interface IStatBoxProps {
  title: string; // 지표 이름 (예: "외환보유액")
  crisisValue: string; // 위기 시점 값 (예: "$3.9B")
  currentValue: string; // 현재 시점 값 (예: ">$400B")
  comparisonText: string; // 비교 설명 문구 (예: "위기 대비 100배 증가")
  isCrisisHigh: boolean; // 위기 시점 값이 높을 때 true (예: 환율, 실업률)
}

/**
 * 차트 컴포넌트 Props 인터페이스
 */
export interface ITimeSeriesChartProps {
  data: IEconomicTimeSeries[];
  title: string;
  dataKey: keyof Omit<IEconomicTimeSeries, 'date'>;
  color?: string;
}
