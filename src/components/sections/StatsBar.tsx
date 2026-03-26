'use client';

import CountUp from '@/components/ui/CountUp';

const stats = [
  {
    number: 500,
    suffix: '+',
    label: 'Tamamlanan Eğitim',
    sublabel: 'İzmir genelinde aktif uygulamalar',
  },
  {
    number: 200,
    suffix: '+',
    label: 'Kurumsal Müşteri',
    sublabel: 'Farklı sektörlerden işletmeler',
  },
  {
    number: 30,
    suffix: '',
    label: 'İzmir İlçesi',
    sublabel: 'Yerinde hizmet',
  },
  {
    number: 10,
    suffix: '+',
    label: 'Yıllık Deneyim',
    sublabel: 'Saha tecrübesi',
  },
];

export default function StatsBar() {
  return (
    <section className="bg-white border-b border-slate-100">
      <div className="container-custom py-14 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center relative">
              <CountUp
                end={stat.number}
                suffix={stat.suffix}
                duration={2200}
                label={stat.label}
                className="text-4xl md:text-[3.25rem] font-extrabold text-navy-900 mb-1 tabular-nums leading-none"
                labelClassName="text-navy-900 text-sm font-semibold mt-2"
              />
              <p className="text-slate-400 text-xs mt-1">{stat.sublabel}</p>
              {i < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-slate-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
