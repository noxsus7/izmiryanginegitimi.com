'use client';

import { siteConfig } from '@/data/site-config';

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      <div
        className="flex rounded-t-2xl overflow-hidden shadow-[0_-4px_24px_rgba(0,0,0,0.18)]"
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      >
        {/* Left: Teklif Al */}
        <a
          href="#teklif-formu"
          className="flex-1 basis-1/2 flex items-center justify-center gap-2 bg-red-600 text-white py-4 font-bold text-sm active:bg-red-700 transition-colors duration-200 border-r border-white/20"
        >
          <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="m9 15 2 2 4-4" />
          </svg>
          Ücretsiz Teklif Al
        </a>


        {/* Right: Hemen Ara */}
        <a
          href={`tel:${siteConfig.phone}`}
          className="flex-1 basis-1/2 flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 font-bold text-sm active:bg-[#1ea855] transition-colors duration-200"
        >
          <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Hemen Ara
        </a>
      </div>
    </div>
  );
}
