import React from "react";

const AboutSection = () => {
  return (
    <section className="px-6 max-w-5xl mx-auto  py-12 bg-white text-gray-800">
      {/* Top Label and Heading */}
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 text-sm rounded-full font-light mb-4">
          About Us
        </span>
        <h2 className="text-3xl md:text-4xl font-bold">
          About SINC Angel Network (SAN)
        </h2>
      </div>

      {/* Content Section 1 */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
        {/* Text */}
        <div className="md:w-1/2">
          <h3 className="text-xl font-normal text-blue-700 mb-4">
            Introduction
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            The SINC Angel Network (SAN), managed by SINC Partners, is an
            exclusive micro angel network that provides early-stage funding and
            mentorship to African startups. SAN offers a unique platform for
            family and friends to invest in the Family & Friends round of SINC
            Partners' portfolio companies, democratizing access to capital and
            creating essential growth opportunities for underrepresented
            entrepreneurs in Africa.
          </p>
        </div>
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="/public/about_1.svg"
            alt="Startup team"
            className="w-full rounded-md border-4 border-blue-300"
          />
        </div>
      </div>

      {/* Content Section 2 (reversed layout on desktop) */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10">
        {/* Text */}
        <div className="md:w-1/2">
          <h3 className="text-xl font-normal text-blue-700 mb-4">
            Mission and Vision
          </h3>
          <p className="text-gray-700 leading-relaxed text-sm">
            SAN's mission is to empower impactful African startups by leveraging
            a community of engaged micro-investors. SAN envisions creating an
            accessible environment where startups gain funding, mentorship, and
            strategic connections, transforming Africa's entrepreneurial
            landscape.
          </p>
        </div>
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="/public/about_2.svg"
            alt="Laptop with code"
            className="w-full rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
