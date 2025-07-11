import { MapPin, Phone, Mail, Clock, Users, Map } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import restaurantImage from '@/assets/restaurant-interior.jpg';

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Githunguri Foods
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bringing authentic Kenyan flavors to your table with passion, tradition, and community spirit.
          </p>
        </div>

        {/* Our Story */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Githunguri Foods was born from a deep love for authentic Kenyan cuisine and a desire to 
                  share our rich culinary heritage with the community. Our journey began with a simple 
                  vision: to serve the finest nyama choma and traditional Kenyan dishes using recipes 
                  passed down through generations.
                </p>
                <p>
                  What started as a small family business has grown into a beloved local restaurant, 
                  but we've never lost sight of our roots. Every dish we serve is prepared with the 
                  same care and attention to detail that our founders brought to their family table.
                </p>
                <p>
                  We believe that food brings people together, and our warm, welcoming atmosphere 
                  reflects the spirit of Kenyan hospitality. Whether you're a long-time fan of Kenyan 
                  cuisine or trying it for the first time, we're here to make your experience memorable.
                </p>
              </div>
            </div>
            <div>
              <img 
                src={restaurantImage} 
                alt="Our Restaurant"
                className="w-full h-[400px] object-cover rounded-lg shadow-warm"
              />
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center shadow-soft">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-warm rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Community</h3>
                <p className="text-muted-foreground">
                  We're proud to be part of the local community and support local farmers and suppliers.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-warm rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Tradition</h3>
                <p className="text-muted-foreground">
                  Our cooking methods honor traditional Kenyan techniques while ensuring consistent quality.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-warm rounded-full mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Quality</h3>
                <p className="text-muted-foreground">
                  We use only the freshest ingredients and never compromise on the quality of our dishes.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Get in Touch</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-foreground">Contact Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground">+254 XXX XXX XXX</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">info@githungurifoods.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Operating Hours</p>
                    <p className="text-muted-foreground">Mon - Sun: 10:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-foreground">Our Locations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Greenspot Gardens / Greenleaf Ruiru */}
                <div className="border-b pb-6 mb-6">
                  <h4 className="font-semibold text-lg text-foreground mb-3 flex items-center">
                    <MapPin className="h-5 w-5 text-primary mr-2" />
                    Greenspot Gardens / Greenleaf Ruiru
                  </h4>
                  <div className="pl-7 space-y-2">
                    <p className="text-muted-foreground">
                      On your way to Kamakis, Ruiru
                    </p>
                    <div className="aspect-w-16 aspect-h-9 w-full h-48 mt-3 rounded-lg overflow-hidden">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.854272156484!2d36.9623158!3d-1.2620679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3f8b5d5d5e5d%3A0x5e8e3e5d5d5e5d5e!2sGreenspot%20Gardens%2C%20Ruiru!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        className="rounded-lg"
                      ></iframe>
                    </div>
                  </div>
                </div>

                {/* Midnight Kimbo */}
                <div className="border-b pb-6 mb-6">
                  <h4 className="font-semibold text-lg text-foreground mb-3 flex items-center">
                    <MapPin className="h-5 w-5 text-primary mr-2" />
                    Midnight Kimbo
                  </h4>
                  <div className="pl-7 space-y-2">
                    <p className="text-muted-foreground">
                      Kimbo, Kiambu Road
                    </p>
                    <div className="aspect-w-16 aspect-h-9 w-full h-48 mt-3 rounded-lg overflow-hidden">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.854272156484!2d36.9623158!3d-1.2620679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3f8b5d5d5e5d%3A0x5e8e3e5d5d5e5d5e!2sKimbo%2C%20Kiambu%20Road!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        className="rounded-lg"
                      ></iframe>
                    </div>
                  </div>
                </div>

                {/* Daylight Thika */}
                <div className="border-b pb-6 mb-6">
                  <h4 className="font-semibold text-lg text-foreground mb-3 flex items-center">
                    <MapPin className="h-5 w-5 text-primary mr-2" />
                    Daylight Thika
                  </h4>
                  <div className="pl-7 space-y-2">
                    <p className="text-muted-foreground">
                      Thika Town
                    </p>
                    <div className="aspect-w-16 aspect-h-9 w-full h-48 mt-3 rounded-lg overflow-hidden">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.1912345678900!2d37.0834567!3d-1.0432100!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3f8b5d5d5e5d%3A0x5e8e3e5d5d5e5d5e!2sThika%20Town!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        className="rounded-lg"
                      ></iframe>
                    </div>
                  </div>
                </div>

                {/* Mfalme/Summit Kenol */}
                <div>
                  <h4 className="font-semibold text-lg text-foreground mb-3 flex items-center">
                    <MapPin className="h-5 w-5 text-primary mr-2" />
                    Mfalme/Summit Kenol
                  </h4>
                  <div className="pl-7 space-y-2">
                    <p className="text-muted-foreground">
                      On your way to Murang'a, Kenol
                    </p>
                    <div className="aspect-w-16 aspect-h-9 w-full h-48 mt-3 rounded-lg overflow-hidden">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.1912345678900!2d37.0834567!3d-1.0432100!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3f8b5d5d5e5d%3A0x5e8e3e5d5d5e5d5e!2sKenol%2C%20Murang%27a%20Road!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        className="rounded-lg"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Management Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Management Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center shadow-soft">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gradient-warm rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">[M]</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">[Manager Name]</h3>
                <p className="text-muted-foreground mb-2">General Manager</p>
                <p className="text-sm text-muted-foreground">
                  [Manager bio to be updated]
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gradient-warm rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">[C]</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">[Chef Name]</h3>
                <p className="text-muted-foreground mb-2">Head Chef</p>
                <p className="text-sm text-muted-foreground">
                  [Chef bio to be updated]
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gradient-warm rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">[O]</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">[Operations Name]</h3>
                <p className="text-muted-foreground mb-2">Operations Manager</p>
                <p className="text-sm text-muted-foreground">
                  [Operations manager bio to be updated]
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="bg-gradient-warm text-white shadow-warm">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Visit Us Today!</h2>
              <p className="text-xl mb-6 opacity-90">
                Experience the authentic taste of Kenya at Githunguri Foods
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  View Menu
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  Get Directions
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;