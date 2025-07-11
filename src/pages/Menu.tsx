import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Menu = () => {
  const menuCategories = [
    {
      title: "Grilled Specialties",
      description: "Our signature nyama choma and grilled meats",
      items: [
        {
          name: "Nyama Choma (Goat)",
          description: "Tender grilled goat meat seasoned with traditional spices, served with ugali and kachumbari",
          price: "KSH 800 - 1,500",
          popular: true
        },
        {
          name: "Nyama Choma (Beef)",
          description: "Succulent grilled beef cuts marinated in local herbs, perfect with our homemade sides",
          price: "KSH 700 - 1,200",
          popular: true
        },
        {
          name: "Chicken Tikka",
          description: "Spiced grilled chicken pieces with a smoky flavor that melts in your mouth",
          price: "KSH 600 - 900"
        },
        {
          name: "Fish (Tilapia)",
          description: "Fresh tilapia grilled to perfection with aromatic spices and lemon",
          price: "KSH 500 - 800"
        }
      ]
    },
    {
      title: "Traditional Staples",
      description: "Authentic Kenyan carbohydrates and sides",
      items: [
        {
          name: "Ugali",
          description: "Traditional cornmeal staple, perfectly cooked and served hot",
          price: "KSH 50 - 100"
        },
        {
          name: "Mukimo",
          description: "Delicious mashed mix of potatoes, green peas, maize, and pumpkin leaves",
          price: "KSH 150 - 250",
          popular: true
        },
        {
          name: "Githeri",
          description: "Hearty mix of boiled maize and beans, seasoned with traditional spices",
          price: "KSH 120 - 200"
        },
        {
          name: "Rice (Pilau/Plain)",
          description: "Fragrant pilau rice or simple steamed rice to complement your meal",
          price: "KSH 150 - 300"
        }
      ]
    },
    {
      title: "Fresh Vegetables",
      description: "Garden-fresh vegetables prepared the traditional way",
      items: [
        {
          name: "Kachumbari",
          description: "Fresh tomato and onion salad with coriander, perfect accompaniment to nyama choma",
          price: "KSH 100 - 150",
          popular: true
        },
        {
          name: "Sukuma Wiki",
          description: "Sautéed collard greens with onions and traditional seasonings",
          price: "KSH 100 - 150"
        },
        {
          name: "Managu",
          description: "Traditional African nightshade vegetables, rich in nutrients and flavor",
          price: "KSH 120 - 180"
        },
        {
          name: "Terere",
          description: "Tender amaranth leaves cooked with onions and spices",
          price: "KSH 100 - 150"
        }
      ]
    },
    {
      title: "Beverages",
      description: "Refresh yourself with our selection of drinks",
      items: [
        {
          name: "Traditional Muratina",
          description: "Traditional fermented honey wine (seasonal availability)",
          price: "KSH 200 - 400"
        },
        {
          name: "Fresh Fruit Juices",
          description: "Passion fruit, mango, orange, or mixed tropical juices",
          price: "KSH 150 - 250"
        },
        {
          name: "Sodas & Water",
          description: "Coca-Cola, Fanta, Sprite, bottled water",
          price: "KSH 50 - 100"
        },
        {
          name: "Tea & Coffee",
          description: "Kenyan tea or coffee served hot",
          price: "KSH 80 - 150"
        }
      ]
    },
    {
      title: "Special Combinations",
      description: "Complete meals for the full experience",
      items: [
        {
          name: "Full Nyama Choma Combo",
          description: "Choice of meat + ugali + kachumbari + sukuma wiki + drink",
          price: "KSH 1,200 - 2,000",
          popular: true
        },
        {
          name: "Vegetarian Traditional Plate",
          description: "Mukimo + githeri + managu + kachumbari + traditional tea",
          price: "KSH 600 - 800"
        },
        {
          name: "Family Feast",
          description: "Large portions for 4-6 people with assorted meats and sides",
          price: "KSH 3,500 - 5,000"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Hero Section with Images */}
      <div className="mb-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Logo and Welcome Text */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              GITHUNGURI
              <span className="block text-2xl md:text-3xl text-primary mt-2">Fresh Quality Foods</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Experience authentic Kenyan flavors with our signature grilled specialties and traditional dishes
            </p>
          </div>
          
          {/* Main Food Image */}
          <div className="relative rounded-xl overflow-hidden shadow-xl h-80 md:h-96">
            <img 
              src="/images/githunguri foods_page-0001.jpg" 
              alt="Githunguri Fresh Foods"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Additional Images Grid */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
          <div className="rounded-lg overflow-hidden h-48">
            <img 
              src="/images/WhatsApp Image 2025-07-11 at 14.10.43.jpeg" 
              alt="Delicious food from Githunguri"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden h-48">
            <img 
              src="/images/WhatsApp Image 2025-07-11 at 14.10.43.jpeg" 
              alt="Fresh ingredients"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden md:block rounded-lg overflow-hidden h-48">
            <img 
              src="/images/WhatsApp Image 2025-07-11 at 14.10.43.jpeg" 
              alt="Our restaurant"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Menu
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover the authentic flavors of Kenya with our carefully prepared traditional dishes. 
            All prices are approximate and may vary based on portion size and market rates.
          </p>
          
          {/* Featured Image */}
          <div className="max-w-2xl mx-auto mb-12">
            <img 
              src="/images/githunguri foods_page-0001.jpg" 
              alt="Traditional Kenyan Meal"
              className="w-full h-[300px] object-cover rounded-lg shadow-warm"
            />
          </div>
        </div>

        {/* Menu Categories */}
        <div className="space-y-12">
          {menuCategories.map((category, categoryIndex) => (
            <section key={categoryIndex}>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  {category.title}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {category.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="shadow-soft hover:shadow-warm transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg text-foreground flex items-center gap-2">
                          {item.name}
                          {item.popular && (
                            <Badge variant="secondary" className="bg-terracotta text-white">
                              Popular
                            </Badge>
                          )}
                        </CardTitle>
                        <span className="text-lg font-semibold text-primary">
                          {item.price}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Special Notes */}
        <section className="mt-16">
          <Card className="bg-gradient-earth shadow-soft">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                Special Notes
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Freshness Guarantee</h4>
                  <p>All our meats are fresh and grilled to order. Some items may have limited availability based on daily stock.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Dietary Options</h4>
                  <p>We offer vegetarian options and can accommodate specific dietary requirements with advance notice.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Group Orders</h4>
                  <p>Large group orders and catering services available. Please call ahead for arrangements.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Pricing</h4>
                  <p>Prices may vary based on current market rates and portion sizes. Please confirm with staff when ordering.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact for Orders */}
        <section className="mt-12 text-center">
          <Card className="bg-gradient-warm text-white shadow-warm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Order?</h3>
              <p className="text-xl mb-6 opacity-90">
                Visit us or call ahead to ensure your favorites are available
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+254XXXXXXXXX" 
                  className="inline-block bg-white text-primary px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
                >
                  Call: +254 XXX XXX XXX
                </a>
                <a 
                  href="#" 
                  className="inline-block border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-primary transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Menu;