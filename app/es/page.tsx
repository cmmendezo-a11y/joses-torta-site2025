import Header from '@/components/Header';
import SignatureCards from '@/components/SignatureCards';

export default function PageES() {
  return (
    <main>
      <a href="#contento" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white px-3 py-2 rounded-md shadow">
        Saltar al contenido
      </a>
      <Header />
      <section aria-label="Hero" className="relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(255,200,0,0.25),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(0,0,0,0.06),transparent_60%)]" />
        <div className="container py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Nuestro orgullo. Nuestro sabor. Nuestra tradición.
            </h2>
            <p className="mt-4 text-neutral-700 text-lg">
              De tortas clásicas a tacos de mariscos, traemos recetas de familia — hechas con maíz, fuego y amor.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#menu" className="btn btn-secondary">Ver Menú</a>
              <a href="#visit" className="btn btn-secondary">Cómo Llegar</a>
              <a href="#order" className="btn btn-primary">Ordenar Online</a>
            </div>
            <p className="mt-3 text-sm text-neutral-500">Servicio completo después de las 4 PM • Familiar • Opciones vegetarianas</p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg border border-neutral-200">
              <img src="https://images.unsplash.com/photo-1617191518004-1d5a2ebfa75f?q=80&w=1200&auto=format&fit=crop" alt="Torta milanesa" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="signature" className="container py-16 md:py-20">
        <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Tortas Emblemáticas</h3>
        <p className="mt-2 text-neutral-600">Nuestras más queridas — ¡pide salsa extra!</p>
        <SignatureCards lang='es' />
      </section>

      <section id="menu" className="border-y border-neutral-200 bg-white">
        <div className="container py-16 md:py-20">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Menú</h3>
          <p className="mt-2 text-neutral-600">Escanea, navega o descarga.</p>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <a href="#" className="block card p-5 bg-neutral-50">
              <h5 className="font-semibold">Menú de Lunch</h5>
              <p className="text-sm text-neutral-600">11 AM – 4 PM</p>
            </a>
            <a href="#" className="block card p-5 bg-neutral-50">
              <h5 className="font-semibold">Menú de Cena</h5>
              <p className="text-sm text-neutral-600">Servicio completo después de las 4 PM</p>
            </a>
            <a href="#" className="block card p-5 bg-neutral-50">
              <h5 className="font-semibold">Bar de Tequila • Margaritas</h5>
              <p className="text-sm text-neutral-600">Pregunta por sabores de temporada</p>
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#" className="btn btn-secondary">Descargar PDF</a>
            <a href="#" className="btn btn-secondary">Ver Menú QR</a>
          </div>
        </div>
      </section>

      <section id="order" className="bg-neutral-900 text-neutral-50">
        <div className="container py-16 md:py-20">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Ordena en Línea</h3>
        </div>
      </section>

      <section id="visit" className="container py-16 md:py-20">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Visítanos</h3>
            <div className="mt-3 space-y-1 text-neutral-700">
              <p><strong>Dirección:</strong> [Actualiza con la calle, Arlington, MA]</p>
              <p><strong>Teléfono:</strong> (781) 316-0138</p>
              <p><strong>Correo:</strong> josestorta@gmail.com</p>
            </div>
            <div className="mt-6 rounded-2xl overflow-hidden border border-neutral-200">
              <iframe title="Mapa" src="https://maps.google.com/maps?q=Arlington%2C%20MA&t=&z=13&ie=UTF8&iwloc=&output=embed" className="w-full h-72" loading="lazy" />
            </div>
          </div>
          <aside>
            <div className="card p-5">
              <h4 className="font-semibold">Horario</h4>
              <ul className="mt-2 space-y-1 text-sm">
                <li className="flex justify-between"><span>Lun–Jue</span><span>11:00 AM – 9:00 PM</span></li>
                <li className="flex justify-between"><span>Vie–Sáb</span><span>11:00 AM – 9:30 PM</span></li>
                <li className="flex justify-between"><span>Domingo</span><span>11:00 AM – 9:00 PM</span></li>
              </ul>
              <p className="mt-2 text-xs text-neutral-500">Servicio completo después de las 4 PM</p>
            </div>
            <div className="card p-5 mt-4">
              <h4 className="font-semibold">Aviso de Alergias</h4>
              <p className="mt-2 text-sm text-neutral-700">Antes de ordenar, informe a su mesero si alguien en su grupo tiene alergias alimentarias.</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
