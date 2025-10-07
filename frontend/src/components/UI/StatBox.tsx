import React from 'react';
import type { IStatBoxProps } from '../../data/types';

const StatBox: React.FC<IStatBoxProps> = ({
  title,
  crisisValue,
  currentValue,
  comparisonText,
  isCrisisHigh
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-xl border-l-4 border-blue-500">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        {title}
      </h3>

      <div className="space-y-4">
        {/* 위기 시점 값 */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">1997년 위기 시점</span>
          <span className={`text-xl font-bold ${
            isCrisisHigh ? 'text-red-600' : 'text-gray-600'
          }`}>
            {crisisValue}
          </span>
        </div>

        {/* 현재 시점 값 */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">현재 (2025년)</span>
          <span className={`text-xl font-bold ${
            isCrisisHigh ? 'text-green-600' : 'text-red-600'
          }`}>
            {currentValue}
          </span>
        </div>

        {/* 구분선 */}
        <hr className="border-gray-200" />

        {/* 비교 설명 */}
        <div className="bg-gray-50 p-3 rounded-md">
          <p className="text-sm text-gray-700 font-medium text-center">
            📊 {comparisonText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatBox;
