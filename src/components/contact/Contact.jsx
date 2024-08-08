import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="container mx-auto p-4 mt-6 pb-12">
      <div className="bg-indigo-100 py-6">
        {/* Heading */}
        <h1 className="text-7xl font-bold text-center mb-4">Contact Us</h1>

        {/* Breadcrumb with Links */}
        <div className="text-center text-black mb-8 text-2xl">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="mt-4 bg-gray-100 max-w-lg ml-12 ">
          <h2 className="text-4xl font-semibold mb-4 mt-2 mx-10">Contact Info</h2>
          <div className="mb-4 mx-12">
            <h3 className="text-xl font-medium">Phone Numbers</h3>
            <p>+123 456 7890</p>
            <p>+098 765 4321</p>
          </div>
          <div className="mb-4 mx-12">
            <h3 className="text-xl font-medium">Email Addresses</h3>
            <p>contact@example.com</p>
            <p>support@example.com</p>
          </div>
          <div className="mx-12">
            <h3 className="text-xl font-medium">Addresses</h3>
            <p>123 Main St, City, Country</p>
            <p>456 Another St, City, Country</p>
          </div>
        </div>

        {/* Right Column */}
        <div className=" bg-gray-100 mt-4 mr-8">
          <h2 className="text-3xl font-semibold mb-4 mt-4 mx-8">Get In Touch</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" className="w-full border rounded px-2 py-1" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" className="w-full border rounded px-2 py-1" />
              </div>
            </div>
            <div className="mx-4">
              <label className="block text-sm font-medium mb-1" htmlFor="subject">Subject</label>
              <input type="text" id="subject" className="w-full border rounded px-2 py-1" />
            </div>
            <div className="mx-4">
              <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
              <textarea id="message" className="w-full border rounded px-2 py-1" rows="5"></textarea>
            </div>
            <div className="text-center pb-4">
              <button type="submit" className="bg-indigo-500 text-white py-2 px-12 rounded hover:bg-indigo-700 ">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
