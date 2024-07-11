import React from 'react';
import Image from 'next/image';
import xMansion from '../public/x-Mansion.png';
import kevinHart from '../public/kevinhart.jpg';
import purpleRain from '../public/purplerain.jpg';
import dojaCat from '../public/dojacat.jpg';
import house from '../public/house.jpg';

// Example experiences data. You can update it with actual images and categories.
const allExperiences = {
  Icons: [
    {
      title: "Train at the X-Mansion",
      host: "Hosted by Jubilee",
      price: "R$11,574 per guest",
      image: xMansion
    },

    {
      title: "Go VIP with Kevin Hart",
      host: "Hosted by Kevin Hart",
      price: "Comming July",
      image: kevinHart
    },

    {
      title: "Stay in Prince's Purple Rain house",
      host: "Hosted by Wendy and Lisa",
      price: "Coming August",
      image: purpleRain
    },

    {
      title: "Join a living room session with Doja",
      host: "Hosted by Doja Cat",
      price: "Coming October",
      image: dojaCat
    },

    {
      title: "Drift off in the Up house",
      host: "Hosted by Carl Fredricksen",
      price: "Sold out",
      image: house
    },

    {
      title: "Drift off in the Up house",
      host: "Hosted by Carl Fredricksen",
      price: "Sold out",
      image: house
    },

    {
      title: "Drift off in the Up house",
      host: "Hosted by Carl Fredricksen",
      price: "Sold out",
      image: house
    },

    {
      title: "Drift off in the Up house",
      host: "Hosted by Carl Fredricksen",
      price: "Sold out",
      image: house
    }
  ],
  Countryside: [
    {
      title: "Stay in Prince's Purple Rain house",
      host: "Hosted by Wendy and Lisa",
      price: "Coming August",
      image: purpleRain
    },

    {
      title: "Drift off in the Up house",
      host: "Hosted by Carl Fredricksen",
      price: "Sold out",
      image: house
    },

    {
      title: "Drift off in the Up house",
      host: "Hosted by Carl Fredricksen",
      price: "Sold out",
      image: house
    },

    {
      title: "Drift off in the Up house",
      host: "Hosted by Carl Fredricksen",
      price: "Sold out",
      image: house
    }
  ],
  Countryside: [
    {
      title: "Stay in Prince's Purple Rain house",
      host: "Hosted by Wendy and Lisa",
      price: "Coming August",
      image: purpleRain
    },

    {
      title: "Drift off in the Up house",
      host: "Hosted by Carl Fredricksen",
      price: "Sold out",
      image: house
    },

    {
      title: "Drift off in the Up house",
      host: "Hosted by Carl Fredricksen",
      price: "Sold out",
      image: house
    },

    {
      title: "Drift off in the Up house",
      host: "Hosted by Carl Fredricksen",
      price: "Sold out",
      image: house
    }
  ],
  "Bed & breakfasts": [
    {
      title: "Stay in Prince's Purple Rain house",
      host: "Hosted by Wendy and Lisa",
      price: "Coming August",
      image: purpleRain
    },
  
  ],
  "Design": [
    {
      title: "Go VIP with Kevin Hart",
      host: "Hosted by Kevin Hart",
      price: "Comming July",
      image: kevinHart
    },
    {
      title: "Stay in Prince's Purple Rain house",
      host: "Hosted by Wendy and Lisa",
      price: "Come August",
      image: purpleRain
    },
    {
      title: "Join a living room session with Doja Cat", 
      host: "Hosted by Doja Cat",
      price: "Come October",
      image: dojaCat
    },

  ],

  "Top of the world": [
    {
      title: "Drift off in the Up House",
      host: "Hosted by Carl Fredricksen",
      price: "Sold out",
      image: xMansion
    }
  ],

  "Castles": [
    {
      title: "Drift off in the Up House",
      host: "Hosted by Carl Fredricksen",
      price: "Sold out",
      image: house
    }
  ],

  "Domes": [
    {
      title: "Drift off in the Up House",
      host: "Hosted by Carl Fredricksen",
      price: "Sold out",
      image: dojaCat
    }
  ],

  "Cabins": [
    {
      title: "Drift off in the Up House",
      host: "Hosted by Carl Fredricksen",
      price: "Sold out",
      image: purpleRain
    }
  ],

  "Surfing": [
    {
      title: "Drift off in the Up House",
      host: "Hosted by Carl Fredricksen",
      price: "Sold out",
      image: house
    }
  ],

  "Beachfront": [
    {
      title: "Drift off in the Up House",
      host: "Hosted by Carl Fredricksen",
      price: "Sold out",
      image: xMansion
    }
  ],

  "Amazing views": [
    {
      title: "Drift off in the Up House",
      host: "Hosted by Carl Fredricksen",
      price: "Sold out",
      image: dojaCat
    }
  ],

  "Rooms": [
    {
      title: "Drift off in the Up House",
      host: "Hosted by Carl Fredricksen",
      price: "Sold out",
      image: purpleRain
    }
  ],

  "Camping": [
    {
      title: "Drift off in the Up House",
      host: "Hosted by Carl Fredricksen",
      price: "Sold out",
      image: xMansion
    }
  ],

  "Trending": [
    {
      title: "Drift off in the Up House",
      host: "Hosted by Carl Fredricksen",
      price: "Sold out",
      image: dojaCat
    }
  ],
  // Add more categories and experiences as needed
};

const Experiences = ({ category }) => {
  const experiences = allExperiences[category] || [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {experiences.map((exp, index) => (
        <div key={index} className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden">
          <Image src={exp.image} alt={exp.title} className="h-40 w-full object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-lg">{exp.title}</h3>
            <p className="text-gray-500">{exp.host}</p>
            <p className="text-pink-500">{exp.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experiences;
