import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
 <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      <div className="h-[27px] w-full bg-[#F5F5F5] flex justify-end items-center pr-[257px]">
        <Image
          src="/images/trustpilot.png"
          alt="Top bar image"
          width={235}
          height={20}
        />
      </div>
      
      <div className="mx-[200px]">
      <nav className="flex justify-between items-center py-4 bg-white relative z-10">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Kastrix logo"
              width={150}
              height={60}
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
      <div className="relative h-[605px] w-full">
        <Image
          src="/images/kastrixkast.png"
          alt="Luxury laundry room"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start mt-[-200px] pl-[1000px]">
          <h1 className="text-white text-6xl font-redhat-bold mb-4 text-shadow-lg">Opbergen in stijl.</h1>
          <p className="text-white font-redhat-bold text-6xl text-shadow-lg">Samen met Kastrix</p>
        </div>
      </div>

      {/* Content with margins */}
      <div className="mx-[160px]">
        {/* Action Buttons */}
        <div className="flex justify-center gap-[138px] mt-12">
          <Link href="/bijkeukenkasten" className="bg-[#2F4858] text-white px-6 py-3 rounded font-redhat-bold">
            Bekijk onze collectie
          </Link>
          <Link href="/magazine" className="bg-[#2F4858] text-white px-6 py-3 rounded font-redhat-bold">
            Vraag inspiratie magazine aan
          </Link>
          <Link href="/afspraak" className="bg-[#C5A572] text-white px-6 py-3 rounded font-redhat-bold">
            Plan een afspraak
          </Link>
        </div>

        <section className="py-16 mt-12">
          <h2 className="font-redhat-bold text-2xl mb-8 text-[#C5A572] font-redhat-bold">Maak kennis met Kastrix</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative h-[530px] w-[420px] bg-[#2E4D55]">
              <Image
                src="/images/kastrixman.png"
                alt="Gemak en eigen werkplaats"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 p-4 text-white">
                <h3 className="text-sm font-redhat-medium">Gemak en eigen werkplaats</h3>
                <p className="text-xs opacity-75 font-redhat-regular">Meer informatie &gt;</p>
              </div>
            </div>
            <div className="relative h-[530px] w-[420px] bg-[#2E4D55]">
              <Image
                src="/service.jpg"
                alt="Advies aan huis"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 p-4 text-white">
                <h3 className="text-sm font-redhat-medium">Advies aan huis</h3>
                <p className="text-xs opacity-75 font-redhat-regular">Meer informatie &gt;</p>
              </div>
            </div>
            <div className="relative h-[530px] w-[420px] bg-[#2E4D55]">
              <Image
                src="/service.jpg"
                alt="Het inspiratie magazijn"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 p-4 text-white">
                <h3 className="text-sm font-redhat-medium">Het inspiratie magazijn</h3>
                <p className="text-xs opacity-75 font-redhat-regular">Meer informatie &gt;</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Reviews Section */}
      <div className="w-full bg-[#F5F5F5] py-24">
        <div className="mx-[160px]">
          <h2 className="font-redhat-bold text-2xl font-bold mb-8 text-center text-[#2F4858]">Onze klanten waarderen ons met een 4,5 uit 5!</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-[#A79571] p-6 rounded-[9px] h-[350px] flex flex-col justify-between">
                <div>
                  <p className="text-white font-bold mb-2 font-redhat-bold">Fantastische service</p>
                  <p className="text-white text-sm mb-4 font-redhat-regular">Ik ben hartelijk ontvangen in de zaak. Ik werd heel goed geholpen en kon kiezen uit zo veel opties! en het kastontwerp ziet er echt geweldig uit. De levering is...</p>
                  <p className="text-white text-sm">Lees meer</p>
                </div>
                <div>
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-white">★</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                    <span className="text-white font-redhat-medium">Anna Elshout</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-[160px]">
        {/* Process Section */}
        <section className="py-16">
          <div>
            <h2 className="font-redhat-bold text-2xl font-bold mb-4 text-[#2E4D55]">Ontdek hoe je jouw droomkast kunt realiseren!</h2>
            <p className="font-redhat-medium text-[#2E4D55] mb-8">
              Een bijkeukenkast kopen? Bij de aanschaf van bijkeukenkasten komt veel kijken.<br/>
              We begeleiden je graag door elke stap van het proces, zodat je zonder zorgen je ideale bijkeukenkast vindt.<br/>
              <span className="text-[#2E4D55] cursor-pointer">Klik op een van de stappen voor meer informatie.</span>
            </p>
            
            {/* Process Steps */}
            <div className="grid grid-cols-5 gap-[90px] mb-12">
              <div className="flex flex-col items-center">
                <Image src="/images/advies.png" alt="Advies aan huis" width={240} height={220} />
              </div>
              <div className="flex flex-col items-center">
                <Image src="/images/bouwen.png" alt="Advies aan huis" width={240} height={220} />
              </div>
              <div className="flex flex-col items-center">
                <Image src="/images/montage.png" alt="Montage" width={240} height={220} />
              </div>
              <div className="flex flex-col items-center">
                <Image src="/images/opleveren.png" alt="Opleveren van uw kast" width={240} height={220} />
              </div>
              <div className="flex flex-col items-center">
                <Image src="/images/service.png" alt="Service en Garantie" width={210} height={200} />
              </div>
            </div>

            {/* Image and Text */}
            <div className="relative h-[550px] w-full mb-8">
              <Image
                src="/images/genieten.png"
                alt="Man in laundry room"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div>
              <h3 className="text-[32px] font-redhat-bold mb-6 text-[#2E4D55]">Onze vaste werkwijze</h3>
              <p className="font-redhat-medium text-[#2E4D55] text-lg mb-6 leading-relaxed font-redhat-medium">
                Bij ons staat een uitstekende klantervaring voorop. Daarom zorgen wij voor alles, van het maken van je bijkeukenkast op 
                maat tot de levering en installatie. Jij bepaalt de indeling en het ontwerp van de kast, wij regelen de rest. Zo makkelijk kan 
                het zijn.
              </p>
              <a href="#" className="text-[#2E4D55] text-lg flex items-center hover:text-[#C5A572] transition-colors font-redhat-medium">
                Over ons
                <span className="ml-2">›</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      <footer className="w-full bg-[#F5F5F5] py-12">
        <div className="mx-[160px]">  {/* Container for footer content */}
          <div className="flex justify-between">
            <div>
              <Image
                src="/images/logo.png"
                alt="Kastrix logo"
                width={150}
                height={60}
              />
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
