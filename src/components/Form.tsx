// AdvancedForm.tsx
import React, { useState } from "react";

interface FormData {
  email: string;
  password: string;
  select: string;
  multiSelect: string[];
  message: string;
  file: File | null;
  radio: string;
  checkbox: boolean;
}

const AdvancedForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    select: "1",
    multiSelect: [],
    message: "",
    file: null,
    radio: "",
    checkbox: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: files ? files[0] : null });
    } else if ((e.target as HTMLSelectElement).multiple) {
      const selected = Array.from(
        (e.target as HTMLSelectElement).selectedOptions,
        (option) => option.value
      );
      setFormData({ ...formData, [name]: selected });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Form Submitted!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Form Title */}
        <div className="col-span-full mb-6">
          <h1 className="text-3xl font-bold font-serif text-gray-800 text-center">Form</h1>
        </div>

        {/* Left Column */}
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Select</label>
            <select
              name="select"
              value={formData.select}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Select Multiple</label>
            <select
              multiple
              name="multiSelect"
              value={formData.multiSelect}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 h-24 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message..."
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">File</label>
            <div className="flex items-center space-x-4">
              <label
                htmlFor="file"
                className="cursor-pointer bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors"
              >
                Choose File
              </label>
              <span className="text-gray-600">
                {formData.file ? formData.file.name : "No file selected"}
              </span>
            </div>
            <input
              id="file"
              type="file"
              name="file"
              onChange={handleChange}
              className="hidden"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Radio Options</label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="radio"
                  value="option1"
                  checked={formData.radio === "option1"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Option One
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="radio"
                  value="option2"
                  checked={formData.radio === "option2"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Option Two
              </label>
            </div>
          </div>

          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="checkbox"
                checked={formData.checkbox}
                onChange={handleChange}
                className="mr-2 accent-blue-500"
              />
              Check me out
            </label>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-cyan-500 text-white py-3 rounded-lg hover:bg-cyan-600 transition-colors font-semibold"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdvancedForm;
