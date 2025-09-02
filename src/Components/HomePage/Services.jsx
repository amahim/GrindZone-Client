
const servs = [
  {
    title: "CrossFit Group Classes",
    img: "https://media.istockphoto.com/id/1207041834/photo/group-of-young-happy-fit-people-doing-exercises-in-gym.jpg?s=612x612&w=0&k=20&c=3LkL97NzJct4YwSNc_X70FEX9uH-BkKBMY9Vgy1O5sg=",
  },
  {
    title: "Strength Training",
    img: "https://img.freepik.com/premium-photo/man-demonstrating-back-press-exercise-with-barbell-gym-fitness-back-pain-hands-man-gym-training-with-muscle-ai-generated_538213-23771.jpg",
  },
  {
    title: "Personal Training",
    img: "https://www.anytimefitness.co.in/wp-content/uploads/2023/03/Productive-Workout.jpg",
  },
  {
    title: "Member Only Events",
    img: "https://cdn.prod.website-files.com/61713dc07218ee71af5413af/66eaba82dd85b800ae40eef4_66eaba5410605bbc78ecf3d2_A%2520bustling%2520gym%2520grand%2520opening%2520event.jpeg",
  },
];

const Services = () => {
  return (
    <div className="bg-[#121212] py-32 px-6 lg:px-20" id="services">
      {/* Title */}
      <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
        We offer something for <br  /> <span className="text-[#97FB57]">everybody
     
          </span> </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {servs.map((service, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden group shadow-lg"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h3 className="text-white text-xl font-bold text-center px-4">
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
