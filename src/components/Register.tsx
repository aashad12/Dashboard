import React, { useState } from "react";

const RegistrationForm: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const handleNextPage = () => {
    if (!firstName || !lastName || !email || !phone || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    setCurrentPage(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!country || !city || !postalCode) {
      alert("Please fill all address fields");
      return;
    }
    alert("Registration successful!");
    console.log({ firstName, lastName, email, phone, country, city, postalCode });
  };

  return (
    <div className="min-h-screen bg-gray flex items-center justify-center p-6">
      
      {/* PAGE 1: Personal Information */}
      {currentPage === 1 && (
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Sign Up</h1>
            <p className="text-gray-600 mt-2">Step 1 of 2 - Personal Details</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="John"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="+1 234 567 8900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="••••••••"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            onClick={handleNextPage}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold mt-8 hover:bg-blue-700 transition"
          >
            Continue to Address
          </button>

          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              Sign In
            </a>
          </p>
        </div>
      )}

      {/* PAGE 2: Address Information */}
      {currentPage === 2 && (
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Register</h1>
            <p className="text-gray-600 mt-2">Step 2 of 2 - Address Details</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Country
                </label>
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="United Kingdom"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Leeds"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Postal Code
                </label>
                <input
                  type="text"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="ERT 1254"
                />
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mt-6">
              <h3 className="font-semibold text-gray-800 mb-4">Review Your Info</h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <p><span className="font-medium">Name:</span> {firstName} {lastName}</p>
                <p><span className="font-medium">Email:</span> {email}</p>
                <p><span className="font-medium">Phone:</span> {phone}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <button
                type="button"
                onClick={() => setCurrentPage(1)}
                className="border border-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Complete Registration
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;