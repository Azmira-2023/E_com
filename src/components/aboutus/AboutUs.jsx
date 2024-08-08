import { Link } from "react-router-dom";
import Laptop from "../../assets/Laptop.png";
import Earbuds from "../../assets/Earbuds.png";

const AboutUs = () => {
  return (
    <div className="container mx-auto p-4 ">
      <div className="bg-sky-200 py-6">
        {/* Heading */}
        <h1 className="text-7xl font-bold text-center mb-4">About Us</h1>

        {/* Breadcrumb with Links */}
        <div className="text-center text-black mb-8 text-2xl">
          <Link to="/" className="hover:underline">
            Home
          </Link>

          <Link to="/about" className="hover:underline text-black text-2xl">
            /About
          </Link>
        </div>
      </div>

      {/* About Content */}
      <div className="mt-8 p-8">
        <p className="text-lg mb-4 text-center ">
          Welcome to our e-commerce website, where we offer a wide range of
          products to suit all your needs. From the latest gadgets to trendy
          fashion, we have it all. Our products are curated with quality and
          affordability in mind, ensuring that you get the best value for your
          money.
        </p>
      </div>

      {/* Images Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <img
            src={Laptop}
            alt="Product Display 1"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
        <div>
          <img
            src={Earbuds}
            alt="Product Display 2"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Our Stores and Our Mission in Two Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 ">
        <div>
          <h2 className="text-2xl font-semibold mb-4 ">Our Stores</h2>
          <p className="text-xl mb-4 bg-gray-50">
            We have stores located in major cities across the country. Each
            store offers a unique shopping experience with a wide selection of
            products. Visit our stores to explore the latest arrivals and
            exclusive deals.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4 ">Our Mission</h2>
          <p className="text-xl bg-gray-50">
            Our mission is to provide high-quality products at competitive
            prices. We are dedicated to offering excellent customer service and
            ensuring a seamless shopping experience. We believe in building
            long-term relationships with our customers and strive to meet their
            expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
