'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation } from '@/data/site-config';
import { siteConfig } from '@/data/site-config';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  /* ── Lock body scroll when mobile menu is open ── */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="container-custom">
        <nav className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-navy-900 rounded-lg flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2c1 3 4 6 4 10a4 4 0 0 1-8 0c0-4 3-7 4-10z" />
                <path d="M12 22v-4" />
              </svg>
            </div>
            <div className="leading-tight">
              <span className="block text-navy-900 font-bold text-lg tracking-tight">İzmir Yangın</span>
              <span className="block text-slate-500 text-xs font-medium tracking-wide">EĞİTİM & GÜVENLİK</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="flex items-center gap-1 px-4 py-2 text-slate-700 hover:text-navy-900 font-medium text-[0.938rem] transition-colors rounded-lg hover:bg-slate-50">
                    {item.label}
                    <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 pt-1">
                      <div className="w-64 bg-white rounded-xl shadow-lg border border-slate-200 py-2 overflow-hidden">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:text-navy-900 hover:bg-slate-50 text-[0.938rem] font-medium transition-colors"
                          >
                            <span className="w-1.5 h-1.5 bg-red-600 rounded-full flex-shrink-0" />
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-slate-700 hover:text-navy-900 font-medium text-[0.938rem] transition-colors rounded-lg hover:bg-slate-50"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href={`tel:${siteConfig.phone}`} className="text-slate-600 hover:text-navy-900 font-medium text-sm transition-colors flex items-center gap-1.5">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {siteConfig.phone}
            </a>
            <Link href="/#teklif-formu" className="btn-primary text-sm !py-2.5 !px-5">
              Ücretsiz Teklif Alın
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center text-slate-700 hover:text-navy-900 rounded-lg hover:bg-slate-50 transition-colors"
            aria-label="Menü"
            aria-expanded={mobileOpen}
          >
            {/* Animated hamburger → X */}
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <span
                className={`block h-[2px] bg-current rounded-full transition-all duration-300 ease-in-out origin-center ${
                  mobileOpen ? 'translate-y-[7px] rotate-45' : ''
                }`}
              />
              <span
                className={`block h-[2px] bg-current rounded-full transition-all duration-300 ease-in-out ${
                  mobileOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
                }`}
              />
              <span
                className={`block h-[2px] bg-current rounded-full transition-all duration-300 ease-in-out origin-center ${
                  mobileOpen ? '-translate-y-[7px] -rotate-45' : ''
                }`}
              />
            </div>
          </button>
        </nav>
      </div>

      {/* ═══════════ MOBILE MENU ═══════════ */}

      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 z-40 bg-navy-900/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: '72px' }}
        onClick={closeMobile}
        aria-hidden="true"
      />

      {/* Menu panel */}
      <div
        className={`fixed left-0 right-0 z-50 bg-white shadow-2xl lg:hidden transition-all duration-320 ease-in-out overflow-y-auto ${
          mobileOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-3 pointer-events-none'
        }`}
        style={{
          top: '72px',
          maxHeight: 'calc(100dvh - 72px)',
        }}
      >
        <div className="px-5 pt-6 pb-8 space-y-1">
          {/* Navigation links */}
          {navigation.map((item, groupIndex) =>
            item.children ? (
              <div key={item.label} className="mb-2">
                {/* Section label */}
                <div
                  className="flex items-center gap-2 px-3 pt-4 pb-2"
                  style={{
                    opacity: mobileOpen ? 1 : 0,
                    transform: mobileOpen ? 'translateY(0)' : 'translateY(6px)',
                    transition: `opacity 300ms ease ${groupIndex * 40 + 60}ms, transform 300ms ease ${groupIndex * 40 + 60}ms`,
                  }}
                >
                  <span className="text-[0.7rem] font-bold text-slate-400 uppercase tracking-[0.12em]">
                    {item.label}
                  </span>
                  <div className="flex-1 h-px bg-slate-100" />
                </div>

                {/* Service links */}
                {item.children.map((child, childIndex) => {
                  const isActive = pathname === child.href;
                  const delay = groupIndex * 40 + (childIndex + 1) * 40 + 80;
                  return (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={closeMobile}
                      className={`flex items-center gap-3 px-3 py-3 rounded-xl font-medium text-[0.938rem] transition-colors active:scale-[0.98] ${
                        isActive
                          ? 'bg-red-50 text-red-700'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-navy-900 active:bg-slate-100'
                      }`}
                      style={{
                        opacity: mobileOpen ? 1 : 0,
                        transform: mobileOpen ? 'translateY(0)' : 'translateY(6px)',
                        transition: `opacity 300ms ease ${delay}ms, transform 300ms ease ${delay}ms`,
                      }}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isActive ? 'bg-red-600' : 'bg-slate-300'}`} />
                      {child.label}
                    </Link>
                  );
                })}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobile}
                className={`flex items-center gap-3 px-3 py-3 rounded-xl font-medium text-[0.938rem] transition-colors active:scale-[0.98] ${
                  pathname === item.href
                    ? 'bg-red-50 text-red-700'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-navy-900 active:bg-slate-100'
                }`}
                style={{
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? 'translateY(0)' : 'translateY(6px)',
                  transition: `opacity 300ms ease ${groupIndex * 40 + 60}ms, transform 300ms ease ${groupIndex * 40 + 60}ms`,
                }}
              >
                {item.label}
              </Link>
            )
          )}

          {/* ── Bottom CTA Area ── */}
          <div
            className="mt-4 pt-5 border-t border-slate-200"
            style={{
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? 'translateY(0)' : 'translateY(6px)',
              transition: 'opacity 300ms ease 280ms, transform 300ms ease 280ms',
            }}
          >
            <div className="bg-slate-50 rounded-2xl p-5 space-y-4">
              {/* Phone */}
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center justify-center gap-2.5 text-navy-900 font-bold text-base hover:text-red-700 transition-colors active:scale-[0.98]"
              >
                <div className="w-9 h-9 bg-navy-900/5 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-navy-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                {siteConfig.phone}
              </a>

              {/* CTA Button */}
              <Link
                href="/#teklif-formu"
                onClick={closeMobile}
                className="btn-primary w-full text-center text-base py-3.5 shadow-lg shadow-red-600/20"
              >
                Ücretsiz Teklif Alın
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
