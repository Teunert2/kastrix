import Image from "next/image";
import Link from "next/link";

export default function Bijkeukenkasten() {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      {/* Top bar */}
      <div className="h-[27px] w-full bg-[#F5F5F5]"></div>
      
      {/* Navbar */}
      <div className="mx-[257px]">
        <nav className="flex justify-between items-center py-4 bg-white">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Kastrix logo"
              width={120}
              height={40}
            />
          </Link>
          <div className="flex items-center gap-[180px]">
            <Link href="/bijkeukenkasten" className="text-[#2F4858] font-redhat-bold">Bijkeukenkasten</Link>
            <Link href="/showroom" className="text-[#2F4858] font-redhat-bold">Showroom</Link>
            <Link href="/overons" className="text-[#2F4858] font-redhat-bold">Over ons</Link>
            <Link href="/afspraak" className="w-[140px] h-[38px] bg-[#A79571] text-white rounded font-redhat-bold flex items-center justify-center">
              Afspraak maken
            </Link>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="relative h-[550px] w-full bg-[#F5F5F5] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-[#2E4D55] text-[32px] font-redhat-bold mb-4">
            "Bijkeukenkasten: Praktische opslag<br />
            voor al uw benodigdheden."
          </h1>
          <p className="text-[#2E4D55] font-redhat-medium mb-4">
            Een opgeruimde bijkeuken
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative mx-[257px]">
        {/* Featured Image - Repositioned */}
        <div className="relative h-[650px] w-full rounded-lg overflow-hidden shadow-lg" 
             style={{ 
               marginTop: '-80px',
               zIndex: 10 
             }}>
          <Image
            src="/images/bijkeukenkast.png"
            alt="Bijkeukenkast met wasmachine"
            fill
            className="object-cover"
          />
        </div>

        {/* Text Content - Adjusted spacing */}
        <div className="mt-16 mb-16 mx-[257px]">
          <p className="text-[#2E4D55] text-lg mb-6 font-redhat-medium">
            In veel huishoudens is de bijkeuken een onmisbare ruimte geworden. Het is dé plek voor uw 
            was en andere schoonmaakspullen, opbergruimte en soms zelfs voor vriezen en potten kook 
            spullen. Maar hoe zorgt u ervoor dat deze ruimte prettig blijft? Bij kastrix.nl zit je nooit 
            tussen verschillende gebruikers het lijf!
          </p>
          <p className="text-[#2E4D55] text-lg mb-6 font-redhat-medium">
            Bij ons de grootste voordelen van een bijkeukenkast is de ruimtebesparing. Door de 
            wasmachine hoger te plaatsen en eronder te plaatsen, benut je de beschikbare ruimte 
            optimaal. Dit is vooral handig in kleinere woningen waar elke vierkante meter telt.
          </p>
          <p className="text-[#2E4D55] text-lg mb-8 font-redhat-medium">
            Onze bijkeukenkasten zijn niet alleen functioneel, maar ook stijlvol. We bieden een ruime 
            keuze aan kastindelingen en materialen, waarbij we de wasmachine op ooghoogte kunnen 
            plaatsen. Dit maakt het gebruik ervan veel prettiger, waardoor de ruimte echt het verlengde 
            van je keuken wordt. Bovendien zijn onze planken en meubels niet alleen sterk maar en 
            duurzaam geproduceerd.
          </p>
          <div className="flex justify-center">
            <Link href="/afspraak" className="text-[#2E4D55] font-redhat-medium hover:text-[#A79571] transition-colors">
              Maak een afspraak &gt;
            </Link>
          </div>
        </div>

        {/* Inspiration Section */}
        <div className="relative" style={{zIndex: 1}}>
          {/* Gray background */}
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#F5F5F5] w-screen h-[700px]" 
            style={{
              zIndex: -1
            }}
          ></div>
          
          <h2 className="text-[32px] font-redhat-bold text-[#2E4D55] mb-12 text-center">
            Inspiratie vanuit de showroom
          </h2>
          <div className="grid grid-cols-2 gap-8 mb-8">
            {[1, 2].map((i) => (
              <div key={i} className="aspect-[4/3] bg-[#A79571] rounded-lg"></div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="aspect-[4/3] bg-[#A79571] rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-[#F5F5F5] py-12 mt-20">
        <div className="mx-[160px]">
          <div className="flex justify-between">
            <div>
              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="Kastrix logo"
                  width={120}
                  height={40}
                />
              </Link>
            </div>
            
            <div className="grid grid-cols-4 gap-20">
              <div>
                <h3 className="font-medium text-[#2E4D55] mb-4 font-redhat-medium">Pagina's</h3>
                <ul className="space-y-2 text-[#2E4D55] font-redhat-regular">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/afspraak">Afspraak maken</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-[#2E4D55] mb-4 font-redhat-medium">Producten</h3>
                <ul className="space-y-2 text-[#2E4D55] font-redhat-regular">
                  <li><Link href="/bijkeukenkasten">Bijkeukenkasten</Link></li>
                  <li><Link href="/inloopkasten">Inloopkasten</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-[#2E4D55] mb-4 font-redhat-medium">Over ons</h3>
                <ul className="space-y-2 text-[#2E4D55] font-redhat-regular">
                  <li><Link href="/overons">Over ons</Link></li>
                  <li><Link href="/showroom">Showroom</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-[#2E4D55] mb-4 font-redhat-medium">Contactgegevens</h3>
                <ul className="space-y-2 text-[#2E4D55] font-redhat-regular">
                  <li>Stationsstraat 110A</li>
                  <li>3881 AG Putten</li>
                  <li className="mt-4">info@kastrix.nl</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 text-[#2E4D55] text-sm">
            Kastrix 2023
          </div>
        </div>
      </footer>
    </div>
  );
}