import { CheckCircle } from "lucide-react";

const plans = [
  {
    title: "1 Month Plan",
    price: "৳1500",
    period: "/mo",
    features: ["All classes", "Full gym access", "1 Free diet consultation"],
    // note: "Charges every month unless you cancel",
  },
  // {
  //   title: "Basic Plan",
  //   price: "৳2000",
  //   period: "/mo",
  //   features: ["Gym access", "2 group classes per week", "Locker access"],
  //   note: "Perfect for beginners just starting out",
  // },
  {
    title: "3 Month Plan",
    price: "৳2300",
    period: "/3mo",
    features: ["All classes", "Full gym access", "Member-only events"],
    // note: "Charges every 3 months unless you cancel",
  },
  {
    title: "6 Month Plan",
    price: "৳3500",
    period: "/6mo",
    features: [
      "All classes",
      "Full gym access",
      "Member-only events",
      "Free t-shirt & bottle",
    ],
    // note: "Charges every 6 months unless you cancel",
  },
];

const Membership = () => {
  return (
    <div className=" py-24 px-6 lg:px-20 bg-[#5F7252]" id="membership">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
        Membership Plans
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white border rounded-2xl shadow-md p-8 flex flex-col justify-between hover:shadow-lg transition"
          >
            {/* Title */}
            <h3 className="text-xl font-bold mb-4 text-center">{plan.title}</h3>

            {/* Price */}
            <p className="text-3xl font-extrabold text-green-700 text-center mb-6">
              {plan.price}
              <span className="text-base font-medium text-gray-600">
                {plan.period}
              </span>
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="text-green-600 w-5 h-5" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Note */}
            <p className="text-sm text-gray-500 mb-4">{plan.note}</p>

            {/* Button */}
            <button className="bg-black text-white rounded-full py-2 px-4 font-medium hover:bg-green-600 transition">
              Start 7 day free trial
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Membership;
