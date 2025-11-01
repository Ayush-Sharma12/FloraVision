// Plant and review data - could move to API later
import R1 from '../assets/RoseGoldFemanine1.png'
import R2 from '../assets/RoseGoldFemanine2.png'
import R4 from '../assets/RoseGoldFemanine4.png'
import R5 from '../assets/RoseGoldFemanine5.png'
import R6 from '../assets/RoseGoldFemanine6.png'
import R7 from '../assets/RoseGoldFemanine7.png'
import user1 from '../assets/userrev1.png'
import user2 from '../assets/userrev2.png'
import user3 from '../assets/userrev3.png'


export const trendyPlants = [
  { 
    id: 1,
    name: "Aglaonema plant", 
    price: 300, 
    description: "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care",
    image: R1,
    category: ""
  },
  { 
    id: 2,
    name: "Plantain Lilies", 
    price: 380, 
    description: "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,",
    image: R2,
    category: ""
  },
  { 
    id: 3,
    name: "Cactus", 
    price: 259, 
    description: "It is known for their ability to thrive in arid environments",
    image: R4,
    category: ""
  },
  { 
    id: 4,
    name: "Swiss cheese Plant", 
    price: 400, 
    description: "It is a popular tropical houseplant known for its distinctive, perforated leaves",
    image: R5,
    category: ""
  },
  { 
    id: 5,
    name: "Sansevieria plant", 
    price: 450, 
    description: "It is a popular indoor plant admired for its striking appearance and low-maintenance nature.",
    image: R6,
    category: ""
  },
  { 
    id: 6,
    name: "Agave plant", 
    price: 359, 
    description: "The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.",
    image: R7,
    category: ""
  }
];

export const topSellingPlants = [
  { 
    id: 7,
    name: "Fiddle Leaf Fig", 
    price: 550, 
    description: "Large, violin-shaped leaves create a dramatic focal point. Popular designer choice",
    image: "https://images.unsplash.com/photo-1598880940371-c756e015faf4?w=500&h=500&fit=crop",
    category: "Indoor Tree"
  },
  { 
    id: 8,
    name: "Rubber Plant", 
    price: 420, 
    description: "Thick, glossy leaves and easy care. Excellent for purifying indoor air",
    image: "https://images.unsplash.com/photo-1617517407710-e9a0dda44627?w=500&h=500&fit=crop",
    category: "Indoor Plant"
  },
  { 
    id: 9,
    name: "Bird of Paradise", 
    price: 680, 
    description: "Exotic tropical plant with large paddle-shaped leaves. Makes a stunning statement",
    image: "https://images.unsplash.com/photo-1604932594604-40ef9f8f6648?w=500&h=500&fit=crop",
    category: "Tropical"
  },
  { 
    id: 10,
    name: "Calathea", 
    price: 380, 
    description: "Beautiful patterned foliage that moves throughout the day. Loves humidity",
    image: "https://images.unsplash.com/photo-1615671524827-c1fe3973b648?w=500&h=500&fit=crop",
    category: "Tropical"
  },
  { 
    id: 11,
    name: "String of Hearts", 
    price: 290, 
    description: "Delicate trailing vine with heart-shaped leaves. Perfect for hanging baskets",
    image: "https://images.unsplash.com/photo-1614594895304-fe7116ac3b58?w=500&h=500&fit=crop",
    category: "Trailing"
  },
  { 
    id: 12,
    name: "Philodendron", 
    price: 340, 
    description: "Classic houseplant with heart-shaped leaves. Fast growing and easy to propagate",
    image: "https://images.unsplash.com/photo-1616012891556-f490d60df04b?w=500&h=500&fit=crop",
    category: "Tropical"
  }
];

export const customerReviews = [
  { 
    id: 1,
    name: "Shelly Russel", 
    rating: 5, 
    text: "Just got my hands on some absolutely awesome plants, and I couldn’t be happier!",
    avatar: user1,
    date: "2 weeks ago"
  },
  { 
    id: 2,
    name: "Lula Rolfson", 
    rating: 5, 
    text: "Each one has its own unique charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
    avatar: user2,
    date: "1 month ago"
  },
  { 
    id: 3,
    name: "Carol Huels", 
    rating: 5, 
    text: "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!",
    avatar: user3,
    date: "3 weeks ago"
  },
  
];