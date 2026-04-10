const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Place = require('./models/Place');

dotenv.config();

const placesData = [
  {
    name: "Jaipur",
    location: "Rajasthan, India",
    description: "Known as the Pink City, Jaipur is home to majestic forts, opulent palaces, and vibrant bazaars.",
    image: "https://source.unsplash.com/featured/800x600/?jaipur,india"
  },
  {
    name: "Varanasi",
    location: "Uttar Pradesh, India",
    description: "One of the oldest continuously inhabited cities in the world, the spiritual heart of India on the banks of the Ganges.",
    image: "https://source.unsplash.com/featured/800x600/?varanasi,india"
  },
  {
    name: "Munnar",
    location: "Kerala, India",
    description: "A beautiful hill station in the Western Ghats famous for its vast, rolling tea estates and misty mountains.",
    image: "https://source.unsplash.com/featured/800x600/?munnar,india"
  },
  {
    name: "Taj Mahal",
    location: "Agra, Uttar Pradesh",
    description: "An immense mausoleum of white marble, it is a universal masterpiece and an enduring symbol of love.",
    image: "https://source.unsplash.com/featured/800x600/?tajmahal,india"
  },
  {
    name: "Goa Beaches",
    location: "Goa, India",
    description: "Famous for its stunning coastline, golden sunsets, vibrant nightlife, and relaxed lifestyle.",
    image: "https://source.unsplash.com/featured/800x600/?goa,beach,india"
  },
  {
    name: "Udaipur",
    location: "Rajasthan, India",
    description: "The City of Lakes is known for its romantic setting, historic palaces, and the sparkling view of Lake Pichola.",
    image: "https://source.unsplash.com/featured/800x600/?udaipur,india"
  },
  {
    name: "Hampi",
    location: "Karnataka, India",
    description: "A UNESCO World Heritage site filled with beautiful temple ruins amidst a surreal boulder-strewn landscape.",
    image: "https://source.unsplash.com/featured/800x600/?hampi,india"
  },
  {
    name: "Leh Ladakh",
    location: "Ladakh, India",
    description: "A breathtaking high-altitude desert featuring stark beautiful mountains, pristine blue lakes, and ancient monasteries.",
    image: "https://source.unsplash.com/featured/800x600/?leh,ladakh,india"
  }
];

const seedDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/tourism';
    await mongoose.connect(mongoUri);
    console.log('MongoDB connected for seeding...');
    
    await Place.deleteMany({});
    console.log('Existing places cleared!');
    
    await Place.insertMany(placesData);
    console.log('New places inserted!');
    
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedDB();
