import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

// List of equipment images (12 total)
const equipmentImages = [
  { id: 1, url: "https://images.pexels.com/photos/703012/pexels-photo-703012.jpeg" }, // Dumbbells
  { id: 2, url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438" }, // Barbell with weights

  { id: 3, url: "https://trainingstation.co.uk/cdn/shop/articles/Jordan_flat_bed_chest_press_1157x.png?v=1725100070" }, // Dumbbells

  { id: 4, url: "https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg" }, // Treadmill
  { id: 5, url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48" }, // Weight bench

  { id: 6, url: "https://www.marcypro.com/cdn/shop/files/HOME_GYM_-_CATEGORY-min.jpg?v=1741777597&width=1500" }, // Barbell

  { id: 7, url: "https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg" }, // Kettlebell

  { id: 8, url: "https://www.usnews.com/object/image/0000018b-72bc-d15f-a3db-fffea06d0000/gettyimages-1342504672.jpg?update-time=1698437080300&size=responsive640" }, // Cable machine

  { id: 9, url: "https://wod.guru/wp-content/uploads/2024/08/17.jpeg" }, // Weight rack

  { id: 10, url: "https://images.pexels.com/photos/949126/pexels-photo-949126.jpeg" }, // Stationary bike

  { id: 11, url: "https://www.nortusfitness.com/public/cache/unique-types-commercial-gym-equipments-you-need-the-most_1500_x_843.webp" }, // Squat rack
  { id: 12, url: "https://image.made-in-china.com/202f0j00wkFzmHgApcbq/Gym-Unique-Adjustment-System-Power-Smith-Machine-Dual-System-for-Bench-Press-Exercise.webp" }, // Weight plates
];

const Equipments = () => {
  const [allImages] = useState(equipmentImages);

  return (
    <div className="bg-[#121212] py-24 px-6 lg:px-20 " id="equipments">
      {/* Heading */}
      <h2 className="text-3xl lg:text-4xl text-white font-bold text-center mb-12">
        Our Gym Equipments
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* Only show first 4 images */}
        <figure className="hover-gallery max-w-60">
          {allImages.slice(0, 4).map((item) => (
            <img
              key={item.id}
              src={item.url}
              className="rounded-xl shadow-xl"
            />
          ))}
        </figure>

        {/* Send images to AllEquipments via state */}
        <Link to="/all-equipments" state={{ allImages }}>
          <button className="btn btn-outline hover:bg-white hover:text-black text-white border-2 rounded-full flex items-center gap-2">
            View all equipments <FaArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Equipments;
