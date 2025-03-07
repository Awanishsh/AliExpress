import React from "react";

function About() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-lg shadow-lg">
        {/* Title Section */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 text-center">
          About Us
        </h1>

        {/* Introduction Section */}
        <p className="text-md sm:text-lg text-gray-600 mb-8 text-center">
          Welcome to our company! We are committed to providing the best
          products and services to our customers.
        </p>

        {/* Our Story Section */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Our Story
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Our journey began with a small group of passionate individuals who
            believed in the power of innovation. Over the years, we have grown
            into a company that values creativity, hard work, and customer
            satisfaction. Our goal is to bring high-quality products to the
            market that improve everyday life.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Our mission is to create value for our customers by delivering
            excellent products and outstanding customer service. We believe in
            making a positive impact on the communities we serve and being a
            force for good.
          </p>
        </div>

        {/* Values Section */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Our Values
          </h2>
          <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-2">
            <li>
              Integrity: We believe in doing the right thing, even when no one
              is watching.
            </li>
            <li>
              Innovation: We are constantly looking for ways to improve and
              innovate.
            </li>
            <li>
              Customer Focus: Our customers are at the heart of everything we
              do.
            </li>
            <li>
              Collaboration: We achieve more when we work together as a team.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
