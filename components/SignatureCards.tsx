export default function SignatureCards({ lang = 'en' }: { lang?: 'en' | 'es' }) {
  const t = (en: string, es: string) => (lang === 'en' ? en : es);
  const cards = [
    {
      name: t('Milanesa','Milanesa'),
      desc: t('Your choice of chicken or steak — grilled, breaded, and served with all the traditional garnishes.','A elegir pollo o res — asada, empanizada y con acompañamientos tradicionales.'),
      price: t('Chicken $22 | Steak $25','Pollo $22 | Res $25'),
      img: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: t('Cubana','Cubana'),
      desc: t('Super jumbo torta with grilled chicken, ham, sausage, chorizo, and carnitas, topped with special sauce, melted cheese, and fries.','Súper jumbo con pollo a la parrilla, jamón, salchicha, chorizo y carnitas; salsa especial, queso fundido y papas.'),
      price: '$25',
      img: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: t('Ahogada','Ahogada'),
      desc: t('Jalisco-style beef with pickled onions, smothered in traditional Jalisco sauce.','Res estilo Jalisco con cebolla encurtida, bañada en salsa jalisciense.'),
      price: '$21',
      img: 'https://images.unsplash.com/photo-1604908815790-5b2dcfcfb4ad?q=80&w=1200&auto=format&fit=crop',
    },
  ];
  return (
    <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((c, i) => (
        <article key={i} className="group rounded-2xl border border-neutral-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
          <img src={c.img} alt={c.name} className="h-48 w-full object-cover" />
          <div className="p-5">
            <h4 className="text-lg font-bold">{c.name}</h4>
            <p className="mt-1 text-sm text-neutral-600">{c.desc}</p>
            <p className="mt-3 font-semibold">{c.price}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
