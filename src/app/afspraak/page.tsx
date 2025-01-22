'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function Afspraak() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqData = [
    {
      question: "Hoe kan ik de juiste configuratie bespreken tijdens een afspraak?",
      answer: "Tijdens de afspraak zal onze expert al uw wensen en mogelijkheden doorspreken en u adviseren over de beste oplossingen voor uw ruimte."
    },
    {
      question: "Wat gebeurt er na de afspraak?",
      answer: "Na de afspraak ontvangt u van ons een gedetailleerde offerte op basis van de besproken wensen. Hierna kunt u in alle rust een beslissing nemen."
    },
    {
      question: "Hoe lang duurt een afspraak gemiddeld?",
      answer: "Een afspraak duurt gemiddeld 1 tot 1,5 uur. Zo hebben we voldoende tijd om al uw wensen te bespreken en de ruimte op te meten."
    },
    {
      question: "Kan ik de afspraak ook online doen?",
      answer: "Voor de beste ervaring en het meest accurate advies komen we graag bij u thuis. Dit stelt ons in staat om de ruimte goed op te meten en de mogelijkheden ter plekke te bekijken."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      {/* Top bar */}
      <div className="h-[27px] w-full bg-[#F5F5F5] flex justify-end items-center pr-[257px]">
        <Image
          src="/images/trustpilot.png"
          alt="Top bar image"
          width={235}
          height={20}
        />
      </div>
      
      {/* Navbar */}
      <div className="mx-[200px]">
        <nav className="flex justify-between items-center py-4 bg-white">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Kastrix logo"
              width={150}
              height={60}
            />
          </Link>
          <div className="flex items-center gap-[100px]">
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
      <div className="relative h-[300px] w-full bg-[#F5F5F5] flex items-center justify-center">
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
      <div className="mx-[257px] py-[50px] -mt-20">
        {/* Featured Image */}
        <div className="relative h-[500px] w-full mb-12 rounded-lg overflow-hidden z-10 shadow-lg">
          <Image
            src="/images/overons2.png"
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
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              inline
              minDate={new Date()}
              dateFormat="dd/MM/yyyy"
              showPopperArrow={false}
              calendarClassName="custom-datepicker"
              monthsShown={1}
              fixedHeight
            />
            {selectedDate && (
              <div className="mt-4 text-[#2E4D55]">
                Gekozen datum: {selectedDate.toLocaleDateString()}
              </div>
            )}
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
          {faqData.map((faq, index) => (
            <div key={index} className="border rounded p-4">
              <button 
                className="flex justify-between items-center w-full text-left text-[#2E4D55] font-redhat-medium"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                {faq.question}
                <span>{openFaq === index ? '−' : '+'}</span>
              </button>
              {openFaq === index && (
                <div className="mt-4 text-[#2E4D55] font-redhat-regular">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-[#F5F5F5] py-12 mt-20">
        <div className="mx-[160px]">
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
