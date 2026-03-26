'use client';

import { useState, useRef, useEffect } from 'react';
import { siteConfig } from '@/data/site-config';

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Auto-focus input when opened
      setTimeout(() => inputRef.current?.focus(), 300);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  function handleSend() {
    const text = message.trim() || 'Merhaba, bilgi almak istiyorum.';
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${encoded}`, '_blank');
    setMessage('');
    setIsOpen(false);
  }

  return (
    <div ref={panelRef} className="fixed bottom-6 right-6 z-50 hidden lg:block">
      {/* ── Chat Panel ── */}
      <div
        className={`absolute bottom-[68px] right-0 w-[360px] transition-all duration-300 ease-out origin-bottom-right ${
          isOpen
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-[0.92] translate-y-3 pointer-events-none'
        }`}
      >
        <div className="bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.16)] border border-slate-200/80 overflow-hidden">
          {/* ── Header ── */}
          <div className="bg-[#075E54] px-5 py-4 flex items-center gap-3.5">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div className="w-11 h-11 bg-white/15 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              {/* Online indicator */}
              <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#25D366] rounded-full border-2 border-[#075E54]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-[0.938rem] leading-tight">WhatsApp Destek</p>
              <p className="text-emerald-200/80 text-xs mt-0.5">Genellikle birkaç dakika içinde yanıtlıyoruz</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white rounded-full hover:bg-white/10 transition-colors"
              aria-label="Kapat"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* ── Chat Body ── */}
          <div
            className="px-4 py-5 space-y-3"
            style={{
              backgroundColor: '#ECE5DD',
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23c8c0b8\' fill-opacity=\'0.15\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            }}
          >
            {/* Support message bubble */}
            <div
              className="max-w-[88%]"
              style={{
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateY(0)' : 'translateY(8px)',
                transition: 'opacity 350ms ease 120ms, transform 350ms ease 120ms',
              }}
            >
              <div className="bg-white rounded-2xl rounded-tl-md px-4 py-3 shadow-[0_1px_2px_rgba(0,0,0,0.08)] relative">
                {/* Triangle */}
                <div className="absolute -left-1.5 top-0 w-3 h-3 bg-white" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }} />
                <p className="text-slate-800 text-sm leading-relaxed">
                  Merhaba! 👋 Size nasıl yardımcı olabiliriz?
                </p>
                <p className="text-slate-600 text-[13px] leading-relaxed mt-1.5">
                  Yangın eğitimi, tatbikat veya teklif talebi için mesajınızı yazabilirsiniz.
                </p>
                <p className="text-[10px] text-slate-400 text-right mt-2 flex items-center justify-end gap-1">
                  Şimdi
                  <svg className="w-3.5 h-3.5 text-[#53bdeb]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="1 12 5 16 10 9" />
                    <polyline points="7 12 11 16 20 5" />
                  </svg>
                </p>
              </div>
            </div>

            {/* Example user message (ghost) */}
            <div
              className="max-w-[80%] ml-auto"
              style={{
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateY(0)' : 'translateY(8px)',
                transition: 'opacity 350ms ease 250ms, transform 350ms ease 250ms',
              }}
            >
              <div className="bg-[#DCF8C6] rounded-2xl rounded-tr-md px-4 py-3 shadow-[0_1px_2px_rgba(0,0,0,0.06)] relative">
                <div className="absolute -right-1.5 top-0 w-3 h-3 bg-[#DCF8C6]" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />
                <p className="text-slate-700 text-sm italic opacity-60">
                  Yangın eğitimi hakkında bilgi almak istiyorum...
                </p>
                <p className="text-[10px] text-slate-400 text-right mt-1.5">•••</p>
              </div>
            </div>
          </div>

          {/* ── Input Area ── */}
          <div className="px-4 py-3 bg-[#F0F0F0] border-t border-slate-200/50">
            <div className="flex items-center gap-2.5">
              <div className="flex-1 relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Mesajınızı buraya yazın..."
                  className="w-full bg-white border-0 rounded-full px-5 py-3 text-sm text-navy-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#25D366]/25 shadow-sm transition-shadow"
                />
              </div>
              <button
                onClick={handleSend}
                className="w-11 h-11 bg-[#25D366] hover:bg-[#1ea855] active:scale-95 rounded-full flex items-center justify-center text-white transition-all flex-shrink-0 shadow-md shadow-[#25D366]/25"
                aria-label="Gönder"
              >
                <svg className="w-5 h-5 translate-x-[1px]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>
            <p className="text-[10px] text-slate-400 text-center mt-2.5 flex items-center justify-center gap-1">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              </svg>
              Mesajınız WhatsApp üzerinden güvenle iletilir
            </p>
          </div>
        </div>
      </div>

      {/* ── Floating Trigger Button ── */}
      <div className="relative group">
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <div className="bg-navy-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
            WhatsApp&apos;tan yazın
            <div className="absolute top-full right-4 w-2 h-2 bg-navy-900 rotate-45 -translate-y-1" />
          </div>
        </div>

        {/* Pulse ring (only when closed) */}
        {!isOpen && (
          <div className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-[wa-pulse_2.5s_ease-in-out_infinite]" />
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative flex items-center gap-2.5 bg-[#25D366] text-white rounded-full shadow-lg shadow-[#25D366]/25 hover:shadow-xl hover:shadow-[#25D366]/30 transition-all duration-300 ${
            isOpen
              ? 'pl-3.5 pr-4 py-3'
              : 'pl-4 pr-5 py-3.5 hover:scale-105'
          }`}
          aria-label="WhatsApp ile iletişime geçin"
          aria-expanded={isOpen}
        >
          {/* WhatsApp icon / Close icon transition */}
          <div className="w-6 h-6 relative">
            <svg
              className={`w-6 h-6 absolute inset-0 transition-all duration-300 ${
                isOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
              }`}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <svg
              className={`w-5 h-5 absolute inset-0 m-auto transition-all duration-300 ${
                isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </div>
          <span className={`font-semibold text-sm transition-all duration-200 ${isOpen ? 'hidden' : ''}`}>
            WhatsApp
          </span>
        </button>
      </div>
    </div>
  );
}
