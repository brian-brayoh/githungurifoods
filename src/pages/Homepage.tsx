import { ArrowRight, MapPin, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroImage from '@/assets/hero-nyama-choma.jpg';
import restaurantImage from '@/assets/restaurant-interior.jpg';

const Homepage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-br from-primary/10 to-accent/5 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Delicious Nyama Choma"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-earth-brown/80 to-earth-brown/40"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Authentic Kenyan
              <span className="text-golden-yellow block">Nyama Choma</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Experience the rich flavors of traditional Kenyan cuisine at Githunguri Foods. 
              We serve the finest grilled meats and authentic local dishes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/menu">
                <Button size="lg" className="bg-terracotta hover:bg-terracotta/90 text-white">
                  View Our Menu <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-earth-brown">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Githunguri Foods?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We pride ourselves on serving authentic Kenyan flavors with the freshest ingredients 
              and traditional cooking methods passed down through generations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center shadow-soft hover:shadow-warm transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-warm rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Fresh Daily</h3>
                <p className="text-muted-foreground">
                  All our meats are fresh and grilled to perfection daily using traditional techniques.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft hover:shadow-warm transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-warm rounded-full mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Local Ingredients</h3>
                <p className="text-muted-foreground">
                  We source our ingredients locally to support our community and ensure freshness.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft hover:shadow-warm transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-warm rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Family Tradition</h3>
                <p className="text-muted-foreground">
                  Our recipes have been perfected over generations, bringing authentic taste to every dish.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-gradient-earth">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={restaurantImage} 
                alt="Restaurant Interior"
                className="w-full h-[400px] object-cover rounded-lg shadow-warm"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Welcome to Our Family
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Githunguri Foods has been serving the community with authentic Kenyan cuisine for years. 
                Our passion for traditional cooking methods and fresh ingredients makes every meal a 
                celebration of Kenyan culture.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Whether you're craving perfectly grilled nyama choma, hearty ugali, or fresh kachumbari, 
                we have something special waiting for you.
              </p>
              <Link to="/about">
                <Button variant="default" size="lg">
                  Our Story <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience Authentic Kenyan Flavors?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Visit us today and taste the difference that traditional cooking makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu">
              <Button variant="secondary" size="lg">
                Browse Menu
              </Button>
            </Link>
            <a href="tel:+254XXXXXXXXX">
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Call Now: +254 XXX XXX XXX
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;