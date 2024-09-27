import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
<section className="relative bg-cover bg-center h-[70vh]" style={{ backgroundImage: "url('/tre.jpg')" }}>
  <div className="absolute inset-0 bg-black opacity-50"></div>

  <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
    <h1 className="text-4xl font-bold mb-4">Sammen bygger vi styrke</h1>
    <p className="mb-6">Få en gratis prøvetime og kom i gang</p>
    <div>
      <Link href="/membership" className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full">
        Bli Medlem
      </Link>
    </div>
  </div>

</section>


      {/* Promo Section */}
      <section className="py-12 bg-white text-center">
  <div className="max-w-6xl mx-auto">
    {/* Single Box with Shared Padding */}
    <div className="bg-pink-500 p-6 rounded-lg shadow-lg shadow-slate-500">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex justify-center flex-col">
          <h2 className="text-2xl font-bold mb-4 text-white">50% rabatt på første PT-time</h2>
          <p className="mb-4 text-white">
            Meld deg på som medlem og få hele 50% rabatt på din første PT-time.
          </p>
          <Link href="/learn-more" className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg">
            Les mer
          </Link>
        </div>
        <div>
          <img src="/tre2.jpg" alt="Gym Image" className="w-full h-auto rounded" />
        </div>
      </div>
    </div>
  </div>
</section>

{/* Services Section */}
<section className="py-12 bg-gray-100">
  <div className="max-w-6xl mx-auto text-center">
    {/* Heading for Services */}
    <h2 className="text-3xl font-bold mb-8">Tjenester</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-lg shadow-slate-500">
        <h3 className="text-xl font-bold mb-4">Studio Trening</h3>
        <img src="/1.jpg" alt="Studio Trening" className="mb-4" />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg shadow-slate-500">
        <h3 className="text-xl font-bold mb-4">Personlig Trener</h3>
        <img src="/2.jpg" alt="Personlig Trener" className="mb-4" />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg shadow-slate-500">
        <h3 className="text-xl font-bold mb-4">Gruppetrening</h3>
        <img src="/3.jpg" alt="Gruppetrening" className="mb-4" />
      </div>
    </div>
  </div>
</section>


     
      <footer className="py-12 bg-blue-600 text-white">
  <div className="max-w-6xl mx-auto px-4">
    

    {/* Additional Footer Information */}
    <div className="mt-8 border-t border-blue-500 pt-4 text-blue-200 text-sm text-center">
      <p>© 2024 FitFokus. All rights reserved.</p>
    </div>
  </div>
</footer>


    </div>
  );
}