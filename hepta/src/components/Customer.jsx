import React from "react";
import Customer1 from "../assets/image/person_1.jpg.webp"; // Replace with actual image path
import Customer2 from "../assets/image/person_2.jpg.webp"; // Replace with actual image path
import Customer3 from "../assets/image/person_3.jpg.webp"; // Replace with actual image path

const HappyCustomers = () => {
  const customers = [
    {
      id: 1,
      image: Customer1,
      text: "“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”",
      writer: "John Doe",
    },
    {
      id: 2,
      image: Customer2,
      text: "“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.rdquo;",
      writer: "Jane Smith",
    },
    {
      id: 3,
      image: Customer3,
      text: "“Far far away, behind the word  mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”",
      writer: "Michael Lee",
    },
  ];

  return (
    <div
      className="happy-customers-section "
      style={{
        background: "#f5f5f5",
        padding: "350px 30px",
        textAlign: "center",
        
      }}
    >
      {/* Main heading */}
      <h1 className="text-7xl font-bold mb-9 mt-20">Happy Customers</h1>

      {/* Customers' feedback */}
      <div className="grid grid-cols-1 md:grid-cols-3  gap-8 max-w-8xl  mx-auto">
        {customers.map((customer) => (
          <div
            key={customer.id}
            className=" p-6 rounded-md flex flex-col items-center"
          >
            {/* Customer Image */}
            <img
              src={customer.image}
              alt={customer.writer}
              className="w-20 h-20 rounded-full mb-8 object-cover"
            />
            {/* Feedback Text */}
            <p className="text-black  text-4xl mb-4">{customer.text}</p>
            {/* Writer's Name */}
            <span className=" text-4xl text-gray-500">
              __{customer.writer}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};



export default HappyCustomers;
