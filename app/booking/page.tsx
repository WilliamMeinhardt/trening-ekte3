"use client";

import { useState } from "react";

type ClassInfo = {
  id: number;
  name: string;
  description: string;
  image: string;
  availableSpots: number;
};

const Booking: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState<ClassInfo | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

  const classes: ClassInfo[] = [
    { id: 1, name: "Yoga", description: "En avslappende yogaøkt.", image: "/yog.jpg", availableSpots: 5 },
    { id: 2, name: "Styrketrening", description: "Bygg styrke med intensiv trening.", image: "/styr.jpg", availableSpots: 8 },
    { id: 3, name: "Kondisjonstrening", description: "Forbedre utholdenheten din.", image: "/kon.jpg", availableSpots: 3 },
    { id: 4, name: "Spinning", description: "En intens spinningøkt for kaloriforbrenning.", image: "/spin.jpg", availableSpots: 10 },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsConfirmed(true);
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-300 min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto p-8 bg-white shadow-xl rounded-lg relative">
        <h1 className="text-5xl font-bold text-center mb-12">Book en Treningstime</h1>

        {!isConfirmed ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
              {classes.map((classInfo) => (
                <div
                  key={classInfo.id}
                  onClick={() => setSelectedClass(classInfo)}
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
                    <p className="text-sm text-pink-300 mt-2">
                      {classInfo.availableSpots} plasser tilgjengelig
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {selectedClass && (
              <form onSubmit={handleSubmit} className="mt-8">
                <h2 className="text-3xl font-semibold mb-8 text-center text-gray-700">
                  Du har valgt: {selectedClass.name}
                </h2>

                {/* User Information */}
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

                {/* Date and Time Selection */}
                <div className="flex justify-between gap-6 mb-6">
                  <div className="w-1/2">
                    <label className="block text-lg text-gray-700 mb-2">Velg Dato</label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3M3 9h18M4 5h16a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2z" />
                        </svg>
                      </span>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg shadow-sm"
                        required
                      />
                    </div>
                  </div>

                  <div className="w-1/2">
                    <label className="block text-lg text-gray-700 mb-2">Velg Tidspunkt</label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-4a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      <input
                        type="time"
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg shadow-sm"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-10 rounded-full shadow-lg transition transform hover:scale-105"
                  >
                    Bekreft Booking
                  </button>
                </div>
              </form>
            )}
          </>
        ) : (
          <div className="text-center">
            <div className="text-green-500 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2l4 -4m1 -1a9 9 0 1 1 -9 9 9 9 0 0 1 9 -9z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-green-600 mb-4">Takk for din booking!</h2>
            <p className="text-lg">Din treningsklasse er bekreftet.</p>
            <p className="mt-2">
              Klasse: <strong>{selectedClass?.name}</strong>
            </p>
            <p>
              Dato: <strong>{selectedDate}</strong>
            </p>
            <p>
              Tidspunkt: <strong>{selectedTime}</strong>
            </p>
            <p className="mt-4 text-gray-700">Vi gleder oss til å se deg!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;
