import React from 'react';
import Navbar from '../components/Navbar';
import LocationInfo from '../components/LocationInfo';
import Footer from '../components/Footer';

const locations = [
  {
    title: "USA",
    company: ["Hushh 🤫 Technologies LLC"],
    address: ["1021 5th St W ,Kirkland, WA 98033"],
    phone: "+1 (765) 532-4284"
  },
  // {
  //   title: "India",
  //   company: [
  //     "Hushh Technologies",

  //   ],
  //   address: ["Pune, Maharastra, India,411015"],
  //   phone: "+1 (765) 532-4284"
  // }
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-red-900 text-white py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-light mb-6">
                <span className="bg-white/20 px-4 py-2">Hushh 🤫 Technologies LLC</span>
              </h1>
              <p className="text-xl leading-relaxed">
              “Precision in Data. Power in Investing. Purpose in Results.” <br />
              <br />
              “At Hushh 🤫 Technologies, we leverage advanced math, AI, and statistics to generate sustainable alpha in a dynamic market. Invest in the future of wealth with us.”
            </p>
            </div>
          </div>
        </div>

        {/* Location Information */}
        <LocationInfo locations={locations} />
      </main>

      <Footer />
    </div>
  );
}