'use client';

import { useState } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/data/site-config';
import { services } from '@/data/services';

const izmir_districts = [
  'Aliağa', 'Balçova', 'Bayındır', 'Bayraklı', 'Bergama', 'Beydağ',
  'Bornova', 'Buca', 'Çeşme', 'Çiğli', 'Dikili', 'Foça',
  'Gaziemir', 'Güzelbahçe', 'Karabağlar', 'Karaburun', 'Karşıyaka', 'Kemalpaşa',
  'Kınık', 'Kiraz', 'Konak', 'Menderes', 'Menemen', 'Narlıdere',
  'Ödemiş', 'Seferihisar', 'Selçuk', 'Tire', 'Torbalı', 'Urla',
];

export default function LeadFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [phoneVal, setPhoneVal] = useState('0');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');

    if (val.startsWith('905')) {
      val = '0' + val.substring(2);
    } else if (val.startsWith('5')) {
      val = '0' + val;
    } else if (!val.startsWith('0') && val.length > 0) {
      val = '0' + val;
    } else if (val === '') {
      val = '0';
    }

    val = val.substring(0, 11);

    if (val.length > 1 && val[1] !== '5') {
      val = '0';
    }

    setPhoneVal(val);
    if (errors.phone) {
      setErrors(prev => ({ ...prev, phone: false }));
    }
  };

  const formatPhone = (val: string) => {
    if (!val || val === '0') return '0';
    let formatted = '';
    for (let i = 0; i < val.length; i++) {
      if (i === 4 || i === 7 || i === 9) formatted += ' ';
      formatted += val[i];
    }
    return formatted;
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const required = ['contactName', 'district', 'service'];
    const newErrors: Record<string, boolean> = {};
    let hasError = false;

    for (const field of required) {
      if (!formData.get(field)?.toString().trim()) {
        newErrors[field] = true;
        hasError = true;
      }
    }

    // Phone validation: must be exactly 11 digits and start with 05
    const cleanPhone = phoneVal.replace(/\D/g, '');
    if (cleanPhone.length !== 11 || !cleanPhone.startsWith('05')) {
      newErrors['phone'] = true;
      hasError = true;
    }

    setErrors(newErrors);
    setApiError('');
    if (hasError) return;

    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          adSoyad: formData.get('contactName')?.toString().trim(),
          telefon: cleanPhone,
          ilce: formData.get('district')?.toString().trim(),
          hizmet: formData.get('service')?.toString().trim(),
          mesaj: formData.get('message')?.toString().trim() || '',
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Bir hata oluştu.');
      }

      setSubmitted(true);
    } catch (err) {
      setApiError(err instanceof Error ? err.message : 'Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <section id="teklif-formu" className="section-padding bg-slate-50 border-y border-slate-100">
        <div className="container-custom">
          <div className="max-w-xl mx-auto text-center py-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-navy-900 mb-3">Talebiniz Alındı!</h3>
            <p className="text-slate-600 mb-2">En geç <strong>30 dakika</strong> içinde size dönüş yapacağız.</p>
            <p className="text-slate-500 text-sm">
              Acil ihtiyacınız varsa{' '}
              <a href={`tel:${siteConfig.phone}`} className="text-red-600 font-semibold hover:underline">{siteConfig.phone}</a>
              {' '}numarasından bize ulaşabilirsiniz.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const inputBase = 'w-full px-4 py-3 bg-white border rounded-lg text-sm text-navy-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-colors';
  const inputError = 'border-red-400 bg-red-50';
  const inputNormal = 'border-slate-200';

  return (
    <section id="teklif-formu" className="section-padding bg-slate-50 border-y border-slate-100">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">Ücretsiz Teklif</p>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">
            İşletmeniz İçin En Uygun Yangın Eğitim Teklifini Alın
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Kısa formu doldurun, uzman ekibimiz en geç 30 dakika içinde sizinle iletişime geçsin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
          {/* FORM */}
          <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-2xl p-7 md:p-9 order-1">
            {/* Ad Soyad + Telefon */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="contactName" className="block text-sm font-medium text-navy-900 mb-1.5">Ad Soyad *</label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  placeholder="Adınız Soyadınız"
                  className={`${inputBase} ${errors.contactName ? inputError : inputNormal}`}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-navy-900 mb-1.5">Telefon *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="05XX XXX XX XX"
                  inputMode="tel"
                  value={formatPhone(phoneVal)}
                  onChange={handlePhoneChange}
                  className={`${inputBase} ${errors.phone ? inputError : inputNormal}`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1.5 font-medium">Lütfen geçerli bir telefon numarası girin</p>
                )}
              </div>
            </div>

            {/* İlçe + Hizmet */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="district" className="block text-sm font-medium text-navy-900 mb-1.5">İlçe *</label>
                <select
                  id="district"
                  name="district"
                  className={`${inputBase} ${errors.district ? inputError : inputNormal}`}
                  defaultValue=""
                >
                  <option value="" disabled>İlçe Seçin</option>
                  {izmir_districts.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-navy-900 mb-1.5">Hizmet Seçimi *</label>
                <select
                  id="service"
                  name="service"
                  className={`${inputBase} ${errors.service ? inputError : inputNormal}`}
                  defaultValue=""
                >
                  <option value="" disabled>Hizmet Seçin</option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.slug}>{s.title}</option>
                  ))}
                </select>
              </div>
            </div>


            {/* Mesaj */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-navy-900 mb-1.5">Mesaj</label>
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="Eğitim ihtiyacınızla ilgili ek bilgi..."
                className={`${inputBase} ${inputNormal} resize-none`}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full text-base py-4 shadow-lg shadow-red-600/25 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Gönderiliyor...
                </>
              ) : (
                'Ücretsiz Teklif Al'
              )}
            </button>

            {/* API Error */}
            {apiError && (
              <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700 text-center">
                {apiError}
              </div>
            )}

            {/* Trust strip */}
            <div className="mt-4 flex items-center justify-center gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <span>30 dk dönüş garantisi</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <span>Taahhüt yok</span>
              </div>
            </div>
          </form>

          {/* IMAGE SIDE */}
          <div className="relative rounded-2xl overflow-hidden min-h-[400px] lg:min-h-[520px] order-2">
            <Image
              src="/images/service-yangin-egitimi.png"
              alt="Yangın eğitimi — uygulamalı söndürücü kullanımı"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent" />

            {/* Overlay content */}
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-semibold text-navy-900">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  Aktif Hizmet Veriyoruz
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Katılım Belgesi', 'Tatbikat Raporu', 'Yerinde Eğitim'].map((label) => (
                    <span key={label} className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-1.5 text-xs text-white font-medium">
                      <svg className="w-3 h-3 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
