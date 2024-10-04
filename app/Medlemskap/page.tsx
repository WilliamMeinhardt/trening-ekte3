import Link from "next/link";

const Page = () => {
    return (
        <div className="bg-gray-200 min-h-screen">
            <main className="pt-24 px-4">

            <section className="bg-gray-200 text-black py-12"> 
    <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-4">Velkommen til FitFokus</h2>
        <p className="text-xl max-w-2xl mx-auto mb-8">
            Hos oss får du kvalitetstrening til den beste prisen i markedet. 
            Enten med eller uten bindingstid - Vi kaller det høy puls til lav pris.
        </p>
    </div>

    <div className="flex justify-center mt-8">
        <img
            src="/69.jpg" 
            alt="Training Equipment" 
            className="rounded-lg shadow-lg max-w-full h-auto hover:shadow-xl"
            style={{ maxHeight: '500px', objectFit: 'cover' }}
        />
    </div>

    <div className="max-w-4xl mx-auto mt-10 text-center">
        <h3 className="text-3xl font-bold mb-6">Hvorfor Velge FitFokus?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-2">Fleksible Alternativer</h4>
                <p className="text-gray-700">Tren med eller uten bindingstid. Velg det som passer best for deg!</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-2">Moderne Utstyr</h4>
                <p className="text-gray-700">Tilgang til topp moderne treningsutstyr og fasiliteter.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-2">Kvalifiserte Trenere</h4>
                <p className="text-gray-700">Våre erfarne trenere er her for å hjelpe deg med å nå dine mål.</p>
            </div>
        </div>
    </div>
</section>


                <section className="text-center mb-12 bg-gray-200 py-10">
    <h3 className="text-4xl font-bold mb-6 text-black">Medlemskap og Priser</h3>
    <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
        Velg det medlemskapet som passer best for deg, og start reisen mot en sunnere livsstil. 
        Hos FitFokus får du fleksibilitet og kvalitet, uansett hvilket alternativ du velger.
    </p>

    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-black transition-shadow duration-300">
            <div className="flex items-center mb-4">
                <div className="bg-pink-500 text-white rounded-full p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v18H3V3z" />
                    </svg>
                </div>
                <h4 className="text-2xl font-bold">FitFokus vanlig</h4>
            </div>
            <p className="text-gray-700">Velg ditt treningssenter</p>
            <p className="text-gray-800 text-2xl font-semibold my-4">Uten bindingstid: <strong>399,- / mnd.</strong></p>
            <p className="text-gray-800 text-2xl font-semibold">Med bindingstid: <strong>299,- / mnd.</strong></p>
            <p className="text-gray-600 mt-4">Perfekt for deg som ønsker å trene lokalt og fleksibelt!</p>
            <Link href="/membership-join" className="mt-6 inline-block bg-pink-500 hover:bg-pink-600 text-white text-lg font-bold py-2 px-4 rounded-full transition">
                    Bli Medlem
            </Link>
        </div>

    
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-black transition-shadow duration-300">
            <div className="flex items-center mb-4">
                <div className="bg-pink-500 text-white rounded-full p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v18H3V3z" />
                    </svg>
                </div>
                <h4 className="text-2xl font-bold">FitFokus+</h4>
            </div>
            <p className="text-gray-700">Tren hvor du vil</p>
            <p className="text-gray-800 text-2xl font-semibold my-4">Uten bindingstid: <strong>599,- / mnd.</strong></p>
            <p className="text-gray-800 text-2xl font-semibold">Med bindingstid: <strong>499,- / mnd.</strong></p>
            <p className="text-gray-600 mt-4">Ideell for deg som ønsker full fleksibilitet og tilgang til alle våre sentre!</p>
            <Link href="/membership-join" className="mt-6 inline-block bg-pink-500 hover:bg-pink-600 text-white text-lg font-bold py-2 px-4 rounded-full transition">
                    Bli Medlem
            </Link>
        </div>
    </div>

    <div className="mt-12 max-w-2xl mx-auto">
        <p className="text-gray-700 mt-6">
            FitFokus+ gir deg full fleksibilitet til å trene på alle våre sentre i Norge. 
            Med dette medlemskapet får du ikke bare fordelene fra basismedlemskapet, 
            men også tilgang til 30 moderne og velutstyrte treningssentre.
        </p>
        <p className="text-gray-700 mt-4">
            Våre medlemmer får også tilgang til eksklusive treningsøkter, workshops, og spesialtilbud på kosthold og velvære.
        </p>
    </div>
</section>


                

                <section className="text-center mb-12">
                    <h3 className="text-2xl font-bold mb-6 text-black">Hva våre medlemmer sier</h3>
                    <div className="max-w-2xl mx-auto space-y-4">
                        <blockquote className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-gray-700 italic">"FitFokus har forandret livet mitt! Jeg føler meg sterkere og sunnere enn noensinne!"</p>
                            <footer className="mt-2 text-gray-600">- Maria N.</footer>
                        </blockquote>
                        <blockquote className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-gray-700 italic">"Jeg elsker de personlige trenerne! De er alltid tilgjengelige for støtte og motivasjon."</p>
                            <footer className="mt-2 text-gray-600">- Erik J.</footer>
                        </blockquote>
                    </div>
                </section>

                
            </main>
        </div>
    )
};

export default Page;