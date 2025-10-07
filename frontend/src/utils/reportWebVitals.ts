// Web Vitals 성능 모니터링
import { onCLS, onFCP, onLCP, onTTFB, onINP } from 'web-vitals';

const vitalsUrl = 'https://vitals.vercel-analytics.com/v1/vitals';

function getConnectionSpeed() {
  return 'connection' in navigator && 'effectiveType' in (navigator as any).connection
    ? (navigator as any).connection.effectiveType
    : '';
}

function sendToAnalytics(metric: any, options = {}) {
  const body = {
    dsn: import.meta.env.VITE_VERCEL_ANALYTICS_ID, // Vite 환경변수로 변경
    id: metric.id,
    page: window.location.pathname,
    href: window.location.href,
    event_name: metric.name,
    value: metric.value.toString(),
    speed: getConnectionSpeed(),
    ...options
  };

  if (import.meta.env.PROD) { // Vite 환경변수로 변경
    const blob = new Blob([new URLSearchParams(body).toString()], {
      type: 'application/x-www-form-urlencoded',
    });
    if (navigator.sendBeacon) {
      navigator.sendBeacon(vitalsUrl, blob);
    } else {
      fetch(vitalsUrl, {
        body: blob,
        method: 'POST',
        credentials: 'omit',
        keepalive: true,
      });
    }
  } else {
    console.log('[Web Vitals]', metric.name, metric.value, metric);
  }
}

export function reportWebVitals() {
  onCLS(sendToAnalytics);
  onINP(sendToAnalytics); // FID 대신 INP 사용 (web-vitals v5)
  onFCP(sendToAnalytics);
  onLCP(sendToAnalytics);
  onTTFB(sendToAnalytics);
}
