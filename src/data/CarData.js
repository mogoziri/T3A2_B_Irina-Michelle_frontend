import img1 from "../Assets/all-images/cars-img/Toyota-Land-Cruiser.png";
import img2 from "../Assets/all-images/cars-img/Nissan-X-Trail.png";
import img3 from "../Assets/all-images/cars-img/Land-Rover-Defender.png";
import img4 from "../Assets/all-images/cars-img/Mazda-3.png";
import img5 from "../Assets/all-images/cars-img/Toyota-Corolla.png";
import img6 from "../Assets/all-images/cars-img/Hyundai-i30.png";

const carData = [
  {
    id: 1,
    imgUrl: img1 /*Add URL for photos in postman*/,
    type: "SUV",
    model: "Toyota Land Cruiser",
    rating: 5,
    location: "Sydney",
    price_per_day: 260,
    transmission: "Auto",
    description: "Off Road, tow capability of 2 tones, great family car.",
  },
  {
    id: 2,
    imgUrl: img2,
    type: "SUV",
    model: "Nissan X Trail",
    rating: 4.8,
    location: "North Sydney",
    price_per_day: 180,
    transmission: "Auto",
    description:
      "Off Road, tow capability of 2 tones, great adventure vehicle.",
  },
  {
    id: 3,
    imgUrl: img3,
    type: "SUV",
    model: "Land Rover Defender",
    rating: 5,
    location: "Mosman",
    price_per_day: 1500,
    transmission: "Auto",
    description: "Top End Luxury car.",
  },
  {
    id: 4,
    imgUrl: img4,
    type: "Sedan",
    model: "Mazda 3",
    rating: 4.5,
    location: "Lane Cove",
    price_per_day: 120,
    transmission: "Manual",
    description:
      "Great family car, good boot space for luggage, child seat available.",
  },
  {
    id: 5,
    imgUrl: img5,
    type: "Hatch Back",
    model: "Toyota Corolla",
    rating: 5,
    location: "Glebe",
    price_per_day: 100,
    transmission: "Manual",
    description: "Perfect for around the city driving. Easy to park.",
  },
  {
    id: 6,
    imgUrl: img6,
    type: "Hatch Back",
    model: "Hyundai i30",
    rating: 4.2,
    location: "Redfern",
    price_per_day: 90,
    transmission: "Auto",
    description: "Perfect for around the city driving.",
  },
];

export default carData;
