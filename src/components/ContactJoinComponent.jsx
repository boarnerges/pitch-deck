import React, { useState } from "react";

const ContactJoinComponent = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      setSubmitStatus({
        submitted: true,
        success: false,
        message: "Please fill all fields",
      });
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setSubmitStatus({
        submitted: true,
        success: true,
        message: "Message sent successfully!",
      });

      // Reset form after successful submission
      setContactForm({
        name: "",
        email: "",
        message: "",
      });

      // Clear success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus({
          submitted: false,
          success: false,
          message: "",
        });
      }, 3000);
    }, 1000);
  };

  return (
    <div id="contact" className=" bg-[#333333] text-white">
      <div className="max-w-5xl mx-auto py-12 px-6 flex flex-col md:flex-row justify-between w-full gap-6">
        {/* Left Section */}
        <div className="w-full md:w-1/3 flex flex-col justify-center">
          <h1 className="text-xl md:text-xl font-bold mb-6">
            Join the Movement
          </h1>
          <p className="text-sm font-thin mb-8">
            The SINC Angel Network is a community-driven, founder-first
            investment model that fills the early-stage funding gap in Africa.
            By combining accessible micro-investments with mentorship, SAN
            empowers family and friends to support transformative ventures.
          </p>
          <button
            className="bg-white text-gray-900 py-3 px-6 rounded flex items-center w-fit hover:bg-gray-200 transition-colors"
            onClick={() => window.open("#", "_blank")}
          >
            <span className="font-normal">Join the Network</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center mt-6 sm:mt-0 ">
          <div className="bg-[#444444] p-8 rounded-lg">
            <h2 className="text-xl font-bold mb-6">Contact Us</h2>

            <form onSubmit={handleContactSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={contactForm.name}
                  onChange={handleContactChange}
                  className="w-full p-3 rounded bg-[#666666] border-[#99999] focus:outline-none focus:ring-2 focus:ring-white"
                  placeholder="Your name"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleContactChange}
                  className="w-full p-3 rounded bg-[#666666] focus:outline-none focus:ring-2 focus:ring-white"
                  placeholder="Your email"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={contactForm.message}
                  onChange={handleContactChange}
                  className="w-full p-3 rounded bg-[#666666] h-32 focus:outline-none focus:ring-2 focus:ring-white"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-gray-900 font-normal py-3 px-6 rounded hover:bg-gray-200 transition-colors"
              >
                {submitStatus.submitted && !submitStatus.success
                  ? "Sending..."
                  : "Send Message"}
              </button>

              {submitStatus.submitted && (
                <div
                  className={`mt-4 p-2 rounded ${
                    submitStatus.success ? "bg-green-800" : "bg-red-800"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactJoinComponent;
