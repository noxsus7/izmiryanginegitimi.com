'use client';

import { useState, useCallback, useEffect, useRef } from 'react';

/* ─── Review Data ─── */
const reviews = [
  {
    quote:
      'Yangın tatbikatı sonrası ekibimizin eksiklerini net şekilde gördük. Süreç profesyonel ve kontrollü ilerledi.',
    author: 'Üretim Müdürü',
    company: 'OSB Fabrika — Torbalı',
    rating: 5,
  },
  {
    quote:
      'Denetim öncesi tüm belgelerimizi eksiksiz hazırladılar. Eğitmenler saha deneyimli ve çözüm odaklıydı.',
    author: 'İnsan Kaynakları Müdürü',
    company: 'Kurumsal Ofis — Bayraklı',
    rating: 5,
  },
  {
    quote:
      'Gece ve gündüz senaryoları ile personelimiz her duruma hazır hale geldi. Tahliye tatbikatı çok gerçekçiydi.',
    author: 'Genel Müdür',
    company: '4 Yıldızlı Otel — Çeşme',
    rating: 5,
  },
  {
    quote:
      'Yangın söndürücü kullanım eğitimi çok etkili oldu. Personel artık panik yapmadan müdahale edebiliyor.',
    author: 'İdari İşler Sorumlusu',
    company: 'Lojistik Deposu — Aliağa',
    rating: 5,
  },
  {
    quote:
      'Belgelendirme süreci hızlı ve eksiksizdi. Denetimde hiçbir eksik tespit edilmedi.',
    author: 'İSG Uzmanı',
    company: 'Gıda Fabrikası — Kemalpaşa',
    rating: 5,
  },
  {
    quote:
      'Öğretmenlerimize ve öğrencilerimize yönelik tatbikat çok faydalı oldu. Okul güvenlik planımız güncellendi.',
    author: 'Okul Müdürü',
    company: 'Özel Eğitim Kurumu — Bornova',
    rating: 5,
  },
];

/* ─── Star Rating ─── */
function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-amber-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/* ─── Google Badge ─── */
function GoogleBadge() {
  return (
    <div className="flex items-center gap-1.5 text-xs text-slate-400">
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
      </svg>
      <span>Google Yorumu</span>
    </div>
  );
}

/* ─── Arrow Button ─── */
function ArrowButton({
  direction,
  onClick,
  disabled,
}: {
  direction: 'left' | 'right';
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === 'left' ? 'Önceki' : 'Sonraki'}
      className={`w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:border-slate-400 hover:text-navy-900 transition-all duration-200 shadow-sm ${
        disabled ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'
      }`}
    >
      <svg
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {direction === 'left' ? (
          <polyline points="15 18 9 12 15 6" />
        ) : (
          <polyline points="9 6 15 12 9 18" />
        )}
      </svg>
    </button>
  );
}

/* ─── Main Component ─── */
export default function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);

  // Responsive visible count
  useEffect(() => {
    function handleResize() {
      const w = window.innerWidth;
      if (w < 768) setVisibleCount(1);
      else if (w < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, reviews.length - visibleCount);

  // Clamp index when visible count changes
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  }, [maxIndex]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  // Touch/swipe handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const threshold = 50;
    if (touchDeltaX.current < -threshold) goNext();
    else if (touchDeltaX.current > threshold) goPrev();
  }, [goNext, goPrev]);

  const gapPx = visibleCount === 1 ? 0 : 24; // no gap on mobile single-card

  return (
    <section className="section-padding bg-white border-y border-slate-200 overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Müşteri Yorumları
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-3">
              İşletmeler Bizimle Daha Güvende
            </h2>
            <p className="text-slate-600 max-w-2xl text-lg">
              İzmir genelinde yüzlerce kurum ve işletme eğitim hizmetlerimizden faydalanıyor.
            </p>
          </div>

          {/* Desktop arrows */}
          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            <ArrowButton direction="left" onClick={goPrev} disabled={currentIndex === 0} />
            <ArrowButton direction="right" onClick={goNext} disabled={currentIndex >= maxIndex} />
          </div>
        </div>

        {/* Carousel Track */}
        <div
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            ref={trackRef}
            className="flex transition-transform duration-500 ease-out"
            style={{
              gap: `${gapPx}px`,
              transform: `translateX(calc(${-currentIndex} * ((100% + ${gapPx}px) / ${visibleCount})))`,
            }}
          >
            {reviews.map((review, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex flex-col"
                style={{
                  width: `calc((100% - ${(visibleCount - 1) * gapPx}px) / ${visibleCount})`,
                }}
              >
                <div className="bg-white border border-slate-200 rounded-2xl p-7 flex flex-col h-full shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-300">
                  {/* Top: Stars + Google Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <Stars count={review.rating} />
                    <GoogleBadge />
                  </div>

                  {/* Quote */}
                  <p className="text-slate-700 text-[0.938rem] leading-relaxed flex-1 mb-6">
                    &ldquo;{review.quote}&rdquo;
                  </p>

                  {/* Reviewer */}
                  <div className="border-t border-slate-100 pt-4 mt-auto">
                    <div className="flex items-center gap-3">
                      {/* Avatar placeholder */}
                      <div className="w-10 h-10 rounded-full bg-navy-900/5 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-navy-900/40"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-navy-900 font-semibold text-sm">{review.author}</p>
                        <p className="text-slate-500 text-xs">{review.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators + Mobile Arrows */}
        <div className="flex items-center justify-center gap-4 mt-8">
          {/* Mobile arrows */}
          <div className="flex md:hidden">
            <ArrowButton direction="left" onClick={goPrev} disabled={currentIndex === 0} />
          </div>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Yorum ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? 'w-6 h-2 bg-red-600'
                    : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          {/* Mobile arrows */}
          <div className="flex md:hidden">
            <ArrowButton direction="right" onClick={goNext} disabled={currentIndex >= maxIndex} />
          </div>
        </div>

        {/* Trust summary strip */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <svg className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-semibold text-navy-900">5.0</span>
            <span>ortalama puan</span>
          </div>
          <div className="w-px h-4 bg-slate-200 hidden sm:block" />
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <span>500+ eğitim tamamlandı</span>
          </div>
          <div className="w-px h-4 bg-slate-200 hidden sm:block" />
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <span>%100 müşteri memnuniyeti</span>
          </div>
        </div>
      </div>
    </section>
  );
}
