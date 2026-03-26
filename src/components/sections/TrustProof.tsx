/* ─── Trust / Proof Section ─── */

const sectorBadges = [
  { label: 'OSB & Fabrika', icon: '🏭' },
  { label: 'Otel & Turizm', icon: '🏨' },
  { label: 'Ofis & Plaza', icon: '🏢' },
  { label: 'Okul & Kampüs', icon: '🎓' },
  { label: 'Depo & Lojistik', icon: '📦' },
  { label: 'AVM & Perakende', icon: '🛒' },
];

const trustCards = [
  {
    title: 'Yerinde Eğitim',
    description: 'Eğitimi sizin işletmenizde, sizin çalışma ortamınıza uygun şekilde veriyoruz. Ek mekân masrafı yok.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: 'Uygulamalı Tatbikat',
    description: 'Gerçek senaryolarla, yangın söndürücü ve tahliye uygulamaları dahil sahada tatbikat yapıyoruz.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c1 3 4 6 4 10a4 4 0 0 1-8 0c0-4 3-7 4-10z" /><path d="M12 22v-4" />
      </svg>
    ),
  },
  {
    title: 'Katılım Belgesi & Raporlama',
    description: 'Her eğitim sonrası katılım belgesi, tatbikat raporu ve sertifikalar eksiksiz teslim edilir.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="m9 15 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Hızlı Teklif Dönüşü',
    description: 'Teklif formunu doldurduktan sonra en geç 30 dakika içinde size özel fiyat teklifi sunuyoruz.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

export default function TrustProof() {
  return (
    <section className="section-padding bg-slate-50 border-y border-slate-100">
      <div className="container-custom">
        {/* Headline */}
        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">Güvenilir Eğitim Ortağınız</p>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">
            İzmir Genelinde Yüzlerce İşletme Tarafından Tercih Ediliyoruz
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            6331 Sayılı İş Sağlığı ve Güvenliği Kanunu kapsamında, işletmelerin düzenli olarak yangın eğitimi ve tatbikat yaptırması zorunludur. Denetimlerde eksik kalmayın — biz yanınızdayız.
          </p>
        </div>

        {/* Sector badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {sectorBadges.map((s) => (
            <div
              key={s.label}
              className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 text-sm text-navy-900 font-medium shadow-sm"
            >
              <span className="text-base">{s.icon}</span>
              {s.label}
            </div>
          ))}
        </div>

        {/* Trust cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustCards.map((card) => (
            <div
              key={card.title}
              className="bg-white border border-slate-200 rounded-xl p-7 text-center hover:shadow-lg hover:border-slate-300 hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <div className="w-14 h-14 mx-auto bg-navy-900 rounded-xl flex items-center justify-center text-white mb-5 group-hover:bg-red-600 transition-colors">
                {card.icon}
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">{card.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Legal & urgency strip */}
        <div className="mt-12 bg-navy-900 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4 max-w-2xl">
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>
            <div>
              <p className="text-white font-semibold text-base mb-1">
                Yangın eğitimi yasal bir zorunluluktur
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                6331 Sayılı Kanun gereği tüm işverenler çalışanlarına yangın güvenliği eğitimi vermekle yükümlüdür. Denetimlerde eksiklik tespit edilmesi halinde idari para cezası ve iş durdurma yaptırımları uygulanır. Geç kalmadan önlem alın.
              </p>
            </div>
          </div>
          <a
            href="/#teklif-formu"
            className="btn-primary whitespace-nowrap text-sm px-6 py-3 shadow-lg shadow-red-600/25 flex-shrink-0"
          >
            Hemen Teklif Alın
          </a>
        </div>
      </div>
    </section>
  );
}
