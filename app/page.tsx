import Header from '../components/Header';
import SignatureCards from '../components/SignatureCards';
import Image from 'next/image'; // arriba con los otros imports

export default function Page() {
  return (
    <main>
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white px-3 py-2 rounded-md shadow">
        Skip to content
      </a>
      <Header />
      <section aria-label="Hero" className="relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(255,200,0,0.25),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(0,0,0,0.06),transparent_60%)]" />
        <div className="container py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Our pride. Our flavor. Our tradition.
            </h2>
            <p className="mt-4 text-neutral-700 text-lg">
              From classic tortas to fresh seafood tacos, we bring family recipes from Mexico — made with maíz, fuego y amor.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#menu" className="btn btn-secondary">See Menu</a>
              <a href="#visit" className="btn btn-secondary">Get Directions</a>
              <a href="#order" className="btn btn-primary">Order Online</a>
            </div>
            <p className="mt-3 text-sm text-neutral-500">Full service after 4 PM • Family-friendly • Vegetarian options</p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg border border-neutral-200">
              <img src="/70270364_127636468588392_5807982599620001792_o.jpg" alt="Milanesa torta" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="signature" className="container py-16 md:py-20">
        <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Signature Tortas</h3>
        <p className="mt-2 text-neutral-600">Our most loved sandwiches — ask for extra salsa!</p>
        <SignatureCards lang='en' />
      </section>

      <section id="menu" className="border-y border-neutral-200 bg-white">
        <div className="container py-16 md:py-20">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Menu</h3>
          <p className="mt-2 text-neutral-600">Scan, browse, or download.</p>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <a href="#" className="block card p-5 bg-neutral-50">
              <h5 className="font-semibold">Lunch Menu</h5>
              <p className="text-sm text-neutral-600">11 AM – 4 PM</p>
            </a>
            <a href="#" className="block card p-5 bg-neutral-50">
              <h5 className="font-semibold">Dinner Menu</h5>
              <p className="text-sm text-neutral-600">Full service after 4 PM</p>
            </a>
            <a href="#" className="block card p-5 bg-neutral-50">
              <h5 className="font-semibold">Tequila Bar • Margaritas</h5>
              <p className="text-sm text-neutral-600">Ask about seasonal flavors</p>
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#" className="btn btn-secondary">Download PDF</a>
            <a href="#" className="btn btn-secondary">View QR Menu</a>
          </div>
        </div>
      </section>

      <section id="about" className="container py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Family recipes since day one</h3>
            <p className="mt-3 text-neutral-700">
              We’re a local, family-run kitchen celebrating Mexico’s regional flavors. Our mission is simple: great ingredients,
              warm hospitality, and tortas that make you say ‘qué rico!’.
            </p>
            <ul className="mt-4 space-y-2 text-neutral-700">
              <li>• Fish tacos are our top seller</li>
              <li>• Vegetarian and vegan options</li>
              <li>• Catering for events and offices</li>
            </ul>
          </div>
          <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg border border-neutral-200">
import Image from 'next/image'; // arriba con los otros imports

          <Image
            src="/70270364_127636468588392_5807982599620001792_o.jpg"   // tu archivo en /public
            alt="Signature torta from José’s"
            width={1200}
            height={800}
            priority
            className="h-full w-full object-cover"
          />
            
          </div>
        </div>
      </section>

      <section id="order" className="bg-neutral-900 text-neutral-50">
        <div className="container py-16 md:py-20">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Order Online</h3>
          <p className="mt-2 text-neutral-300">Pickup or delivery through our partners.</p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            <a href="https://www.ubereats.com" target="_blank" className="block rounded-xl bg-white text-neutral-900 p-5 font-semibold text-center">Uber Eats</a>
            <a href="https://www.doordash.com" target="_blank" className="block rounded-xl bg-white text-neutral-900 p-5 font-semibold text-center">DoorDash</a>
            <a href="https://www.grubhub.com" target="_blank" className="block rounded-xl bg-white text-neutral-900 p-5 font-semibold text-center">Grubhub</a>
          </div>
          <p className="mt-3 text-xs text-neutral-400">Update these with your official URLs.</p>
        </div>
      </section>

      <section id="visit" className="container py-16 md:py-20">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Visit Us</h3>
            <div className="mt-3 space-y-1 text-neutral-700">
              <p><strong>Address:</strong> [Update with street, Arlington, MA]</p>
              <p><strong>Phone:</strong> (781) 316-0138</p>
              <p><strong>CATERING HOTLINE:</strong> (617) 922-4704</p>
              <p><strong>Email:</strong> josestorta@gmail.com</p>
            </div>
            <div className="mt-6 rounded-2xl overflow-hidden border border-neutral-200">
              <iframe title="Map" src="https://maps.google.com/maps?q=Arlington%2C%20MA&t=&z=13&ie=UTF8&iwloc=&output=embed" className="w-full h-72" loading="lazy" />
            </div>
          </div>
          <aside>
            <div className="card p-5">
              <h4 className="font-semibold">Hours</h4>
              <ul className="mt-2 space-y-1 text-sm">
                <li className="flex justify-between"><span>Mon–Thu</span><span>11:00 AM – 9:00 PM</span></li>
                <li className="flex justify-between"><span>Fri–Sat</span><span>11:00 AM – 9:30 PM</span></li>
                <li className="flex justify-between"><span>Sunday</span><span>11:00 AM – 9:00 PM</span></li>
              </ul>
              <p className="mt-2 text-xs text-neutral-500">Full service after 4 PM</p>
            </div>
            <div className="card p-5 mt-4">
              <h4 className="font-semibold">Allergy Notice</h4>
              <p className="mt-2 text-sm text-neutral-700">Before placing your order, please inform your server if a person in your party has a food allergy.</p>
            </div>
          </aside>
        </div>
      </section>

      <footer className="border-t border-neutral-200 bg-white">
        <div className="container py-8 text-sm text-neutral-600 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Jose’s Torta Mexicana. All rights reserved.</p>
          <p>Site by Carlos Méndez • <a className="underline" href="https://JosesTorta.com" target="_blank">JosesTorta.com</a></p>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Restaurant',
            name: "Jose's Torta Mexicana",
            image: 'https://JosesTorta.com/og-image.jpg',
            telephone: '(###) ###-####',
            address: { '@type': 'PostalAddress', streetAddress: '[Update street]', addressLocality: 'Arlington', addressRegion: 'MA', postalCode: '[ZIP]' },
            url: 'https://JosesTorta.com',
            servesCuisine: ['Mexican', 'Latin American'],
            openingHoursSpecification: [
              { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday'], opens: '11:00', closes: '21:00' },
              { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Friday','Saturday'], opens: '11:00', closes: '21:30' },
              { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Sunday'], opens: '11:00', closes: '21:00' }
            ],
            priceRange: '$$'
          })
        }}
      />
    </main>
  );
}
