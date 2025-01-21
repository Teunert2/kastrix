import Image from "next/image";
import Link from "next/link";

export default function OverOns() {
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
            "Geboren uit passie voor interieurbouw,<br />
            maken wij bijkeukenkasten op maat."
          </h1>
          <Link href="/afspraak" className="text-[#2E4D55] font-redhat-medium hover:text-[#A79571] transition-colors">
            Plan uw afspraak in &gt;
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-[257px] py-86 -mt-20">
        {/* Team Image */}
        <div className="relative h-[650px] w-full mb-12 rounded-lg overflow-hidden z-10 shadow-lg">
          <Image
            src="/images/overons.png"
            alt="Kastrix team in werkplaats"
            fill
            className="object-cover"
          />
        </div>

        {/* About Text */}
        <div className="mb-16 mx-[350px]">
          <p className="text-[#2E4D55] text-lg mb-6 font-redhat-medium">
            Kastrix.nl is opgericht door Job en Arjan. Twee vrienden met een grote passie 
            voor de interieurbouw. Ons doel is om maatwerk bijkeukenkasten voor iedereen 
            toegankelijk te maken.
          </p>
          <p className="text-[#2E4D55] text-lg mb-6 font-redhat-medium">
            Wat ons onderscheidt, is onze persoonlijke service. Wij komen bij u aan de deur voor advies 
            en montage, zodat u nergens naar toe hoeft. Dit maakt het proces niet alleen gemakkelijker, 
            maar ook efficiënter. Bovendien bieden wij garantie en uitstekende service, zodat u zeker 
            weet dat u een kwaliteitsproduct in huis haalt.
          </p>
          <p className="text-[#2E4D55] text-lg mb-8 font-redhat-medium">
            Onze combinatie van technologie en vakmanschap zorgt ervoor dat we reststromen 
            verminderen en scherpe prijzen kunnen aanbieden. Met onze configurator maken we het 
            aankoopproces eenvoudig en overzichtelijk. In onze moderne werkplaats, uitgerust met 
            computer-gestuurde machines, leveren we millimeterprecies werk af. Maak een afspraak 
            en ervaar zelf onze service en kwaliteit!
          </p>
          <div className="flex justify-center">
            <Link href="/afspraak" className="text-[#2E4D55] font-redhat-medium hover:text-[#A79571] transition-colors">
              Maak een afspraak &gt;
            </Link>
          </div>
        </div>

        {/* Team Section */}
        <div className="relative" style={{zIndex: 1}}>
          {/* Gray background */}
          <div 
            className="absolute top-0 left-[calc(-257px)] right-[calc(-257px)] bg-[#F5F5F5] w-[100vw] h-[700px]" 
            style={{
              zIndex: -1,
              transform: 'translateZ(-1px)'
            }}
          ></div>
          
          <h2 className="text-[32px] font-redhat-bold text-[#2E4D55] mb-12 text-center">
            Ons Team
          </h2>
          <div className="grid grid-cols-3 gap-8 mb-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-square bg-[#A79571] rounded-lg"></div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-square bg-[#A79571] rounded-lg"></div>
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
