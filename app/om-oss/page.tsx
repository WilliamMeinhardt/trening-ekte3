import { PrismaClient } from "@prisma/client";
import Link from "next/link";

export default async function Page() {

  return(
      <div>
        
        <section className="relative bg-cover bg-center h-[50vh]" style={{ backgroundImage: "url('/bg.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
            <h1 className="text-4xl font-bold mb-4">Om Oss</h1>
            <p className="mb-6">Bli kjent med vårt team og vår visjon.</p>
          </div>
        </section>
  
        <section className="py-12 bg-gray-200 text-center">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Vår Historie</h2>
            <p className="text-lg text-gray-700 mb-4">
              Vi er et dedikert team av treningsentusiaster som brenner for å hjelpe folk med å nå sine helse- og treningsmål. Vår reise startet med en enkel idé om å skape et inkluderende og motiverende miljø for alle.
            </p>
            <p className="text-lg text-gray-700">
              Hos oss er alle velkomne, uansett ferdighetsnivå. Vi ønsker å skape en støttende fellesskap hvor man kan trene, lære, og vokse sammen.
            </p>
          </div>
        </section>
  
        <section className="py-12">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Vår Misjon og Verdier</h2>
            <p className="text-lg text-gray-700 mb-4">
              Vår misjon er å inspirere og motivere folk til å leve et sunnere liv. Vi tror på kraften av trening og fellesskap, og vi er forpliktet til å gi den beste opplevelsen for våre medlemmer.
            </p>
            <ul className="list-disc list-inside text-left mx-auto max-w-xl">
              <li className="mb-2">Inkludering: Alle er velkomne hos oss.</li>
              <li className="mb-2">Kvalitet: Vi tilbyr høy kvalitet på trening og veiledning.</li>
              <li className="mb-2">Fellesskap: Vi tror på styrken av å trene sammen.</li>
            </ul>
          </div>
        </section>
  
        <section className="py-12 bg-pink-300">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Møt Teamet Vårt</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/*   {trainers?.map((x: any, i: any) => {
                return(
                  <div key={i} className="bg-white p-6 rounded-lg shadow-lg">
                    <img src="a.jpg" alt={x.name} className="mb-4 rounded-full w-32 h-32 mx-auto" />
                    <h3 className="text-xl font-bold">{x.name}</h3>
                    <h2 className="text-gray-500">stilling: Personlig trener</h2>
              
                    
                  </div>
                )})}

                */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img src="r.jpg" alt="Team Member 1" className="mb-4 rounded-full w-32 h-32 mx-auto" />
                <h3 className="text-xl font-bold">the Rizzler</h3>
                <p className="text-gray-600">Stilling: Personlig trener</p>
                <p className="text-gray-700">The Rizzler tar deg fra sofa til beast mode! Mewing for kjeven, looksmaxing for stilen, og edging for å nå ditt fulle potensial.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img src="/p.jpg" alt="Team Member 2" className="mb-4 rounded-full w-32 h-32 mx-auto" />
                <h3 className="text-xl font-bold">P diddy</h3>
                <p className="text-gray-600">Stilling: Personlig trener</p>
                <p className="text-gray-700">god på utoldnhet, dyktig i smidig og effektiv trening ved hjelp av babyolje.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img src="/a.jpg" alt="Team Member 3" className="mb-4 rounded-full w-32 h-32 mx-auto" />
                <h3 className="text-xl font-bold">Aslak Grytøyr</h3>
                <p className="text-gray-600">Stilling: Gruppetreningsinstruktør</p>
                <p className="text-gray-700">tidligere proff ultimate frisbee spiller og ekspert i gruppertrening instruksjon.</p>
              </div>
            </div>
          </div>
        </section>
  
        <section className="py-12 text-center bg-gray-200">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Bli Medlem i Dag!</h2>
            <Link href="/medlemskap" className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full">
              Bli Medlem
            </Link>
          </div>
        </section>
      </div>
  )
}