import { Link, useLocation } from "react-router-dom";

const AllEquipments = () => {
  const location = useLocation();
  const { allImages } = location.state || { allImages: [] };

  return (
    <div className="bg-[#5F7252] min-h-screen py-16 px-6 lg:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-12">
<Link to="/" className="btn hover:bg-black btn-outline border-white text-white mb-4 md:mb-0 ">
    Back to Home
</Link>
        <h2 className="text-3xl lg:text-4xl text-white font-bold text-center">
        All Gym Equipments
      </h2>
      <h1>

      </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allImages.map((item) => (
          <img
            key={item.id}
            src={item.url}
            alt={`Equipment ${item.id}`}
            className="rounded-xl shadow-xl"
          />
        ))}
      </div>
    </div>
  );
};

export default AllEquipments;
