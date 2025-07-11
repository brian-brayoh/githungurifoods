import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Menu = () => {
  const menuCategories = [
    {
      title: "Nyama Choma Specials",
      description: "Premium cuts, expertly grilled to perfection",
      image: "/images/githunguri foods_page-0001.jpg",
      items: [
        {
          name: "Nyama Choma (Goat) - 1/2 KG",
          description: "Tender goat meat, marinated with our secret spice blend and slow-grilled over charcoal",
          price: "KSH 1,200",
          popular: true
        },
        {
          name: "Nyama Choma (Beef) - 1/2 KG",
          description: "Juicy beef ribs and short ribs, perfectly seasoned and grilled to your liking",
          price: "KSH 1,500",
          popular: true
        },
        {
          name: "Chicken Choma - Full",
          description: "Whole chicken marinated in a special blend of spices and grilled to juicy perfection",
          price: "KSH 1,000"
        },
        {
          name: "Mixed Grill Platter",
          description: "A combination of goat, beef, and chicken with all the fixings (serves 2-3)",
          price: "KSH 3,500",
          popular: true
        }
      ]
    },
    {
      title: "Accompaniments",
      description: "The perfect sides for your nyama choma",
      image: "/images/WhatsApp Image 2025-07-11 at 14.10.43.jpeg",
      items: [
        {
          name: "Ugali (Per Serving)",
          description: "Freshly made from the finest maize flour, served hot and soft",
          price: "KSH 80"
        },
        {
          name: "Ugali (Family Size)",
          description: "Large portion, perfect for sharing (serves 3-4)",
          price: "KSH 200",
          popular: true
        },
        {
          name: "Chips (Regular)",
          description: "Golden, crispy potato fries, lightly seasoned",
          price: "KSH 250"
        },
        {
          name: "Chips (Jumbo)",
          description: "Extra-large portion of our famous chips, great for sharing",
          price: "KSH 400",
          popular: true
        },
        {
          name: "Kachumbari (Small)",
          description: "Fresh tomato, red onion, and coriander with a hint of lime",
          price: "KSH 100"
        },
        {
          name: "Kachumbari (Large)",
          description: "Generous serving of our signature fresh tomato and onion salad",
          price: "KSH 180",
          popular: true
        }
      ]
    },
    {
      title: "Combos & Specials",
      description: "Perfect meals for one or to share",
      image: "/images/githunguri foods_page-0001.jpg",
      items: [
        {
          name: "Nyama Choma Combo",
          description: "1/2 kg nyama choma (your choice) with ugali, kachumbari, and a soda",
          price: "KSH 1,800",
          popular: true
        },
        {
          name: "Family Feast",
          description: "1kg mixed nyama choma, large ugali, jumbo chips, large kachumbari (serves 4-5)",
          price: "KSH 4,500",
          popular: true
        },
        {
          name: "Quick Lunch Special",
          description: "1/4 kg nyama choma with ugali and kachumbari",
          price: "KSH 600"
        }
      ]
    },
    {
      title: "Beverages",
      description: "Refresh yourself with our selection of drinks",
      image: "/images/WhatsApp Image 2025-07-11 at 14.10.43.jpeg",
      items: [
        {
          name: "Soda (300ml)",
          description: "Coca-Cola, Fanta, Sprite, or Stoney",
          price: "KSH 100"
        },
        {
          name: "Bottled Water (500ml)",
          description: "Still or sparkling",
          price: "KSH 80"
        },
        {
          name: "Fresh Juice (Glass)",
          description: "Passion, mango, or orange",
          price: "KSH 150"
        },
        {
          name: "Traditional African Tea",
          description: "Kenyan chai with milk and spices",
          price: "KSH 100"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 md:h-96 mb-12 overflow-hidden">
        <img 
          src="/images/githunguri foods_page-0001.jpg" 
          alt="Githunguri Nyama Choma"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Menu</h1>
            <p className="text-xl md:text-2xl">Premium nyama choma served with the freshest ugali, chips, and kachumbari</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Menu Categories */}
        <div className="space-y-16">
          {menuCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground">{category.title}</h2>
                <p className="text-muted-foreground mt-2">{category.description}</p>
              </div>
              
              {/* Category Image */}
              {category.image && (
                <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
              )}
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="h-full flex flex-col shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                    {/* Placeholder for item-specific images */}
                    <div className="h-40 bg-gray-100 flex items-center justify-center text-gray-400">
                      <span>Photo: {item.name}</span>
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{item.name}</CardTitle>
                        <span className="font-bold text-primary whitespace-nowrap ml-2">{item.price}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                      {item.popular && (
                        <div className="mt-3">
                          <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                            Customer Favorite
                          </Badge>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Image Gallery Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Food Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "/images/githunguri foods_page-0001.jpg",
              "/images/WhatsApp Image 2025-07-11 at 14.10.43.jpeg"
            ].map((img, idx) => (
              <div key={idx} className="aspect-square overflow-hidden rounded-lg shadow-md">
                <img 
                  src={img} 
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Special Note */}
        <div className="mt-16 p-6 bg-white rounded-lg shadow-sm border border-gray-100 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-2">Special Requests?</h3>
          <p className="text-muted-foreground">
            Have specific preferences? Just ask our staff about custom orders and special preparations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;