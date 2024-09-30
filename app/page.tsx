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
      {/* Studio Trening Card */}
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <h3 className="text-xl font-bold mb-4">Studio Trening</h3>
        <img src="/1.jpg" alt="Studio Trening" className="mb-4 rounded" />
        <p className="text-gray-600">ta treningen din til et neste nivaet med høy kvalitet mangfoldig utstyr.</p>
        {/* Medlemskap button */}
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">
          Medlemskap
        </button>
      </div>
      
      {/* Personlig Trener Card */}
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <h3 className="text-xl font-bold mb-4">Personlig Trener</h3>
        <img src="/4.jpg" alt="Personlig Trener" className="mb-4 rounded" />
        <p className="text-gray-600">Få skreddersydd trening og kostholdsveiledning tilpasset dine mål.</p>
        {/* Booking button */}
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">
          Booking
        </button>
      </div>
      
      {/* Gruppetrening Card */}
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <h3 className="text-xl font-bold mb-4">Gruppetrening</h3>
        <img src="/3.jpg" alt="Gruppetrening" className="mb-4 rounded" />
        <p className="text-gray-600">Bli med på morsomme og motiverende gruppetreninger!</p>
        {/* Booking button */}
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">
          Booking
        </button>
      </div>
    </div>
  </div>
</section>




     



    </div>
  );
}