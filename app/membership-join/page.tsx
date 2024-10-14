"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { FaCheckCircle, FaDumbbell, FaMapMarkerAlt } from "react-icons/fa";

const MembershipJoin: React.FC = () => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [gymLocation, setGymLocation] = useState<string>("Oslo");
  const [contractType, setContractType] = useState<string>("Uten bindingstid");
  const [price, setPrice] = useState<number>(399);
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    Cookies.set(
      "membershipInfo",
      JSON.stringify({ fullName, email, gymLocation, contractType, price }),
      { expires: 7 }
    );

    setIsConfirmed(true);
  };

  useEffect(() => {
    const storedMembership = Cookies.get("membershipInfo");
    if (storedMembership) {
      const membershipData = JSON.parse(storedMembership);
      setFullName(membershipData.fullName || "");
      setEmail(membershipData.email || "");
      setGymLocation(membershipData.gymLocation || "Oslo");
      setContractType(membershipData.contractType || "Uten bindingstid");
      setPrice(membershipData.price || 399);
    }
  }, []);

  const handleContractChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedContract = e.target.value;
    setContractType(selectedContract);
    setPrice(selectedContract === "Med bindingstid" ? 299 : 399);
  };

  return (
    <div className="bg-gradient-to-br from-blue-200 to-blue-400 min-h-screen flex items-center justify-center py-16 px-4">
      <div className="max-w-4xl w-full p-8 bg-white shadow-lg rounded-lg relative overflow-hidden">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
          Velg ditt Medlemskap
        </h1>

        {!isConfirmed ? (
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="mb-6">
                <label className=" text-lg font-semibold text-gray-700 mb-2">Fullt Navn</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 transition duration-300"
                  placeholder="Skriv inn ditt fulle navn"
                  required
                />
              </div>

              <div className="mb-6">
                <label className=" text-lg font-semibold text-gray-700 mb-2">E-postadresse</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 transition duration-300"
                  placeholder="Skriv inn din e-postadresse"
                  required
                />
              </div>
            </div>

            <div className="mb-10">
              <label className=" text-lg font-semibold text-gray-700 mb-4 flex items-center">
                <FaMapMarkerAlt className="mr-2 text-blue-600" />
                Velg ditt treningssenter
              </label>
              <select
                value={gymLocation}
                onChange={(e) => setGymLocation(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 transition duration-300"
                required
              >
                <option value="Oslo">Oslo</option>
                <option value="Bergen">Bergen</option>
                <option value="Trondheim">Trondheim</option>
                <option value="Stavanger">Stavanger</option>
              </select>
            </div>

            <div className="mb-10">
              <label className=" text-lg font-semibold text-gray-700 mb-4 flex items-center">
                <FaDumbbell className="mr-2 text-green-600" />
                Velg abonnementstype
              </label>
              <div className="flex justify-between">
                <div
                  onClick={() => { setContractType("Uten bindingstid"); setPrice(399); }}
                  className={`p-6 w-full md:w-1/2 cursor-pointer rounded-lg border-2 transition-all duration-300 ${contractType === "Uten bindingstid" ? "border-green-500 bg-green-50 shadow-lg" : "border-gray-300 hover:border-blue-300"}`}
                >
                  <p className="text-xl font-semibold text-gray-800">Uten bindingstid</p>
                  <p className="text-gray-600">399,- / mnd</p>
                </div>
                <div
                  onClick={() => { setContractType("Med bindingstid"); setPrice(299); }}
                  className={`p-6 w-full md:w-1/2 cursor-pointer rounded-lg border-2 transition-all duration-300 ${contractType === "Med bindingstid" ? "border-green-500 bg-green-50 shadow-lg" : "border-gray-300 hover:border-blue-300"}`}
                >
                  <p className="text-xl font-semibold text-gray-800">Med bindingstid</p>
                  <p className="text-gray-600">299,- / mnd</p>
                </div>
              </div>
              <p className="text-gray-600 mt-4">Perfekt for deg som ønsker å trene lokalt og fleksibelt!</p>
            </div>

            <div className="mb-6">
              <p className="text-xl font-semibold text-gray-700">Total pris: <strong>{price},- / mnd.</strong></p>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-pink-400 text-white font-bold rounded-lg hover:bg-pink-600 transition duration-300 flex justify-center items-center shadow-md"
            >
              <FaCheckCircle className="mr-2" />
              Bli Medlem
            </button>
          </form>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-6">
              <svg
                className="text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-semibold text-gray-800">Takk for at du ble medlem!</h2>
            <p className="text-gray-500 mt-4">Treningssenter: <strong>{gymLocation}</strong></p>
            <p className="text-gray-500 mt-2">Abonnementstype: <strong>{contractType}</strong></p>
            <p className="text-gray-500 mt-2">Vi har sendt en bekreftelse til <strong>{email}</strong>.</p>
            <p className="text-gray-500 mt-4">Månedlig kostnad: <strong>{price},- / mnd.</strong></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MembershipJoin;
