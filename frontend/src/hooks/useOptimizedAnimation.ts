import { useCallback, useRef, useEffect } from 'react';

/**
 * 애니메이션 성능 최적화를 위한 커스텀 훅
 * - requestAnimationFrame을 사용한 효율적인 애니메이션 처리
 * - 메모리 누수 방지를 위한 자동 정리
 */
export const useOptimizedAnimation = (
  callback: () => void,
  dependencies: any[] = [],
  enabled: boolean = true
) => {
  const requestRef = useRef<number | undefined>(undefined);
  const callbackRef = useRef(callback);

  // 콜백 레퍼런스 업데이트
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const animate = useCallback(() => {
    if (enabled) {
      callbackRef.current();
      requestRef.current = requestAnimationFrame(animate);
    }
  }, [enabled]);

  const startAnimation = useCallback(() => {
    if (enabled && !requestRef.current) {
      requestRef.current = requestAnimationFrame(animate);
    }
  }, [animate, enabled]);

  const stopAnimation = useCallback(() => {
    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
      requestRef.current = undefined;
    }
  }, []);

  // 의존성 변경 시 애니메이션 재시작
  useEffect(() => {
    if (enabled) {
      startAnimation();
    } else {
      stopAnimation();
    }

    return stopAnimation;
  }, [...dependencies, enabled]);

  // 컴포넌트 언마운트 시 정리
  useEffect(() => {
    return stopAnimation;
  }, [stopAnimation]);

  return { startAnimation, stopAnimation };
};

/**
 * 인터섹션 옵저버를 사용한 스크롤 기반 애니메이션 최적화
 */
export const useInViewAnimation = (
  options: IntersectionObserverInit = {}
) => {
  const elementRef = useRef<HTMLElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const observe = useCallback((callback: (inView: boolean) => void) => {
    if (!elementRef.current) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        callback(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options,
      }
    );

    observerRef.current.observe(elementRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [options]);

  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return { elementRef, observe };
};
