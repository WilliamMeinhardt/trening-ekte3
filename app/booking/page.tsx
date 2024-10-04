"use client";

import { useState, useEffect } from "react";

type ClassInfo = {
  id: number;
  name: string;
  description: string;
  image: string;
  availableSpots: number;
};

type PTInfo = {
  id: number;
  name: string;
  description: string;
  image: string;
};

const Booking: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState<ClassInfo | null>(null);
  const [selectedPT, setSelectedPT] = useState<PTInfo | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

  // Laste inn tidligere booking-data fra localStorage
  useEffect(() => {
    const storedBooking = localStorage.getItem("bookingInfo");
    if (storedBooking) {
      const bookingData = JSON.parse(storedBooking);
      setSelectedClass(bookingData.selectedClass || null);
      setSelectedPT(bookingData.selectedPT || null);
      setSelectedDate(bookingData.selectedDate || "");
      setSelectedTime(bookingData.selectedTime || "");
      setUserName(bookingData.userName || "");
      setEmail(bookingData.email || "");
      setIsConfirmed(bookingData.isConfirmed || false);
    }
  }, []);

  // Oppdater localStorage når bookinginformasjonen endres
  useEffect(() => {
    if (isConfirmed) return; // Ikke lagre hvis booking er bekreftet
    localStorage.setItem("bookingInfo", JSON.stringify({
      selectedClass,
      selectedPT,
      selectedDate,
      selectedTime,
      userName,
      email,
      isConfirmed,
    }));
  }, [selectedClass, selectedPT, selectedDate, selectedTime, userName, email, isConfirmed]);

  const classes: ClassInfo[] = [
    { id: 1, name: "Yoga", description: "En avslappende yogaøkt.", image: "/yog.jpg", availableSpots: 5 },
    { id: 2, name: "Styrketrening", description: "Bygg styrke med intensiv trening.", image: "/styr.jpg", availableSpots: 8 },
    { id: 3, name: "Kondisjonstrening", description: "Forbedre utholdenheten din.", image: "/kon.jpg", availableSpots: 3 },
    { id: 4, name: "Spinning", description: "En intens spinningøkt for kaloriforbrenning.", image: "/spin.jpg", availableSpots: 10 },
  ];

  const trainers: PTInfo[] = [
    { id: 1, name: "The Rizzler", description: "Ekspert i styrke- og kardio-trening.", image: "/r.jpg" },
    { id: 2, name: "P Diddy", description: "Din motivator for hard trening.", image: "/p.jpg" },
    { id: 3, name: "Aslak Grytøyr", description: "Personlig trener med fokus på teknikk.", image: "/a.jpg" },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsConfirmed(true);
    
    // Lagre bekreftelse i localStorage
    localStorage.setItem("bookingInfo", JSON.stringify({
      selectedClass,
      selectedPT,
      selectedDate,
      selectedTime,
      userName,
      email,
      isConfirmed: true,
    }));
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-300 min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto p-8 bg-white shadow-xl rounded-lg relative">
        <h1 className="text-5xl font-bold text-center mb-12">Book en Treningstime eller PT-time</h1>

        {!isConfirmed ? (
          <>
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Velg en Gruppetime</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {classes.map((classInfo) => (
                  <div
                    key={classInfo.id}
                    onClick={() => { setSelectedClass(classInfo); setSelectedPT(null); }}
                    className={`relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 cursor-pointer group hover:scale-105 ${
                      selectedClass?.id === classInfo.id ? "ring-4 ring-pink-500" : "ring-1 ring-gray-300"
                    }`}
                  >
                    <img
                      src={classInfo.image}
                      alt={classInfo.name}
                      className="w-full h-48 object-cover transition-opacity duration-500 group-hover:opacity-80"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex flex-col justify-end p-4">
                      <h3 className="text-2xl font-bold text-white">{classInfo.name}</h3>
                      <p className="text-gray-200">{classInfo.description}</p>
                      <p className="text-sm text-pink-300 mt-2">{classInfo.availableSpots} plasser tilgjengelig</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t-4 border-gray-300 my-12"></div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">Velg en Personlig Trener</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {trainers.map((ptInfo) => (
                  <div
                    key={ptInfo.id}
                    onClick={() => { setSelectedPT(ptInfo); setSelectedClass(null); }}
                    className={`relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 cursor-pointer group hover:scale-105 ${
                      selectedPT?.id === ptInfo.id ? "ring-4 ring-blue-500" : "ring-1 ring-gray-300"
                    }`}
                  >
                    <img
                      src={ptInfo.image}
                      alt={ptInfo.name}
                      className="w-full h-48 object-cover transition-opacity duration-500 group-hover:opacity-80"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex flex-col justify-end p-4">
                      <h3 className="text-2xl font-bold text-white">{ptInfo.name}</h3>
                      <p className="text-gray-200">{ptInfo.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {selectedClass || selectedPT ? (
              <form onSubmit={handleSubmit} className="mt-8">
                <h2 className="text-3xl font-semibold mb-8 text-center text-gray-700">
                  {selectedClass ? `Du har valgt gruppetime: ${selectedClass.name}` : `Du har valgt PT: ${selectedPT?.name}`}
                </h2>

                <div className="mb-6">
                  <label className="block text-lg text-gray-700 mb-2">Fullt Navn</label>
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-lg text-gray-700 mb-2">E-postadresse</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
                    required
                  />
                </div>

                <div className="flex justify-between gap-6 mb-6">
                  <div className="w-1/2">
                    <label className="block text-lg text-gray-700 mb-2">Velg Dato</label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
                      required
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-lg text-gray-700 mb-2">Velg Tid</label>
                    <input
                      type="time"
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-200"
                >
                  Bekreft Booking
                </button>
              </form>
            ) : (
              <p className="text-center text-gray-500 mt-4">Vennligst velg en gruppe- eller PT-time for å fortsette.</p>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-6">
              <svg className="text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-semibold text-gray-800">Takk for din booking!</h2>
            <p className="text-gray-500 mt-4">Du vil motta en bekreftelse på e-post.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;
