import React from "react";

const Membership = () => (
  <section id="membership" className="py-12 bg-gray-100 text-center">
    <h2 className="text-3xl font-bold mb-4">Membership Plans</h2>
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
      <div className="bg-white p-6 rounded shadow w-64">
        <h3 className="text-xl font-semibold mb-2">Basic</h3>
        <p className="mb-4">Access to community resources</p>
        <span className="text-2xl font-bold">Free</span>
      </div>
      <div className="bg-white p-6 rounded shadow w-64 border-2 border-blue-500">
        <h3 className="text-xl font-semibold mb-2">Pro</h3>
        <p className="mb-4">Exclusive content & events</p>
        <span className="text-2xl font-bold">$9.99/mo</span>
      </div>
      <div className="bg-white p-6 rounded shadow w-64">
        <h3 className="text-xl font-semibold mb-2">Elite</h3>
        <p className="mb-4">1-on-1 coaching & networking</p>
        <span className="text-2xl font-bold">$29.99/mo</span>
      </div>
    </div>
  </section>
);

export default Membership;
