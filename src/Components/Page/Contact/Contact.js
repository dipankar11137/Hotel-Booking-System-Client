import React from "react";
import Footer from "../../Share/Footer";
import contact from "../../image/icon/contact.jpg";

const Contact = () => {
  return (
    <div>
      <div className="py-16 lg:px-16 bg-slate-50 rounded-xl">
        <h2 className="text-indigo-600 text-center text-3xl font-bold uppercase mb-5">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:justify-items-center items-center lg:gap-3 border-2 bg-slate-200 p-10 rounded-xl">
          <div>
            <img className="shadow-2xl rounded-xl" src={contact} alt="" />
          </div>
          <div className="lg:max-w-lg mt-5">
            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="text-center input input-bordered w-full"
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Company</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Company"
                    className="text-center input input-bordered w-full"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="text-center input input-bordered w-full"
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Phone"
                    className="text-center input input-bordered w-full"
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  type="text"
                  placeholder="How can I help you ?"
                  className="text-center textarea textarea-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="bg-indigo-600 py-4 rounded-xl text-2xl font-bold uppercase text-white">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
