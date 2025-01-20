import Image from "next/image";

export default function Afspraak() {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      {/* Top bar */}
      <div className="h-[27px] w-full bg-[#F5F5F5]"></div>
      
      {/* Navbar */}
      <div className="mx-[257px]">
        <nav className="flex justify-between items-center py-4 bg-white">
          <Image
            src="/logo.svg"
            alt="Kastrix logo"
            width={120}
            height={40}
          />
          <div className="flex items-center gap-[180px]">
            <a href="#" className="text-[#2F4858] font-redhat-bold">Bijkeukenkasten</a>
            <a href="#" className="text-[#2F4858] font-redhat-bold">Showroom</a>
            <a href="#" className="text-[#2F4858] font-redhat-bold">Over ons</a>
            <button 
              className="w-[140px] h-[38px] bg-[#A79571] text-white rounded font-redhat-bold"
            >
              Afspraak maken
            </button>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="relative h-[200px] w-full bg-[#F5F5F5] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-[#2E4D55] text-[32px] font-redhat-bold mb-4">
            "Wij komen graag bij u langs!"
          </h1>
          <p className="text-[#2E4D55] font-redhat-medium">
            Plan uw afspraak in
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-[257px] my-16">
        {/* Featured Image */}
        <div className="relative h-[300px] w-full rounded-lg overflow-hidden mb-12">
          <Image
            src="/images/team.jpg"
            alt="Kastrix team"
            fill
            className="object-cover"
          />
        </div>

        <h2 className="text-center text-2xl font-redhat-bold text-[#2E4D55] mb-12">
          Plan uw afspraak in!
        </h2>

        {/* Appointment Section */}
        <div className="grid grid-cols-2 gap-16">
          {/* Calendar Section */}
          <div className="calendar-section">
            <div className="text-[#2E4D55] mb-4">
              Kies uw datum en tijd
            </div>
            {/* Calendar component would go here */}
          </div>

          {/* Form Section */}
          <div className="form-section">
            <form className="space-y-6">
              <div>
                <label className="block text-[#2E4D55] mb-2">Uw gegevens</label>
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Voornaam" 
                    className="p-2 border rounded w-full"
                  />
                  <input 
                    type="text" 
                    placeholder="Achternaam" 
                    className="p-2 border rounded w-full"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#2E4D55] mb-2">E-mailadres</label>
                <input 
                  type="email" 
                  className="p-2 border rounded w-full"
                />
              </div>

              <div>
                <label className="block text-[#2E4D55] mb-2">Telefoonnummer</label>
                <input 
                  type="tel" 
                  className="p-2 border rounded w-full"
                />
              </div>

              <div>
                <label className="block text-[#2E4D55] mb-2">Postcode</label>
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Postcode" 
                    className="p-2 border rounded w-full"
                  />
                  <input 
                    type="text" 
                    placeholder="Huisnummer" 
                    className="p-2 border rounded w-full"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#2E4D55] mb-2">Straatnaam</label>
                <input 
                  type="text" 
                  className="p-2 border rounded w-full"
                />
              </div>

              <div>
                <label className="block text-[#2E4D55] mb-2">Plaatsnaam</label>
                <input 
                  type="text" 
                  className="p-2 border rounded w-full"
                />
              </div>

              <div className="flex items-start gap-2">
                <input 
                  type="checkbox" 
                  className="mt-1"
                />
                <label className="text-sm text-[#2E4D55]">
                  Ik ga ermee akkoord dat mijn gegevens worden gebruikt om contact met mij op te nemen en mijn afspraak te kunnen inplannen.
                </label>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#A79571] text-white py-2 rounded font-redhat-bold"
              >
                Plan uw Afspraak
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 space-y-4">
          <div className="border rounded p-4">
            <button className="flex justify-between items-center w-full text-left text-[#2E4D55] font-redhat-medium">
              Hoe kan ik de juiste configuratie op een online afspraak?
              <span>+</span>
            </button>
          </div>
          <div className="border rounded p-4">
            <button className="flex justify-between items-center w-full text-left text-[#2E4D55] font-redhat-medium">
              Wat gebeurt er na de afspraak?
              <span>+</span>
            </button>
          </div>
          <div className="border rounded p-4">
            <button className="flex justify-between items-center w-full text-left text-[#2E4D55] font-redhat-medium">
              Wat gebeurt er na de afspraak?
              <span>+</span>
            </button>
          </div>
          <div className="border rounded p-4">
            <button className="flex justify-between items-center w-full text-left text-[#2E4D55] font-redhat-medium">
              Wat gebeurt er na de afspraak?
              <span>+</span>
            </button>
          </div>
          <div className="border rounded p-4">
            <button className="flex justify-between items-center w-full text-left text-[#2E4D55] font-redhat-medium">
              Wat gebeurt er na de afspraak?
              <span>+</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-[#F5F5F5] py-12 mt-20">
        <div className="mx-[160px]">
          <div className="flex justify-between">
            <div>
              <Image
                src="/logo.svg"
                alt="Kastrix logo"
                width={120}
                height={40}
              />
            </div>
            
            <div className="grid grid-cols-4 gap-20">
              <div>
                <h3 className="font-medium text-[#2E4D55] mb-4 font-redhat-medium">Pagina's</h3>
                <ul className="space-y-2 text-[#2E4D55] font-redhat-regular">
                  <li>Home</li>
                  <li>Afspraak maken</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-[#2E4D55] mb-4 font-redhat-medium">Producten</h3>
                <ul className="space-y-2 text-[#2E4D55] font-redhat-regular">
                  <li>Bijkeukenkasten</li>
                  <li>Inloopkasten</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-[#2E4D55] mb-4 font-redhat-medium">Over ons</h3>
                <ul className="space-y-2 text-[#2E4D55] font-redhat-regular">
                  <li>Over ons</li>
                  <li>Showroom</li>
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
