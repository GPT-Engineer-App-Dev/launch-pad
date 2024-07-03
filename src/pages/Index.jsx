import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Welcome to StartupX</h1>
        <p className="text-lg text-muted-foreground">Empowering your startup journey with innovative solutions.</p>
        <Button size="lg" className="mt-4">Get Started</Button>
        <div className="mt-8">
          <AspectRatio ratio={16 / 9}>
            <img src="/placeholder.svg" alt="Startup Illustration" className="rounded-md object-cover" />
          </AspectRatio>
        </div>
      </section>

      {/* Features Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Feature One</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Innovative solution to boost your productivity.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Two</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Seamless integration with your existing tools.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Three</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Scalable infrastructure to grow with your business.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Us Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">About Us</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <p>At StartupX, our mission is to empower startups with the tools and resources they need to succeed. Our vision is to create a world where innovative ideas can thrive and make a positive impact.</p>
          </div>
          <div className="flex-1">
            <AspectRatio ratio={4 / 3}>
              <img src="/placeholder.svg" alt="About Us Illustration" className="rounded-md object-cover" />
            </AspectRatio>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Testimonials</h2>
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <Card>
                <CardContent className="flex flex-col items-center">
                  <Avatar className="mb-4">
                    <AvatarImage src="/placeholder.svg" alt="User 1" />
                    <AvatarFallback>U1</AvatarFallback>
                  </Avatar>
                  <p>"StartupX has transformed the way we work. Highly recommend!"</p>
                  <Badge variant="outline" className="mt-4">John Doe, CEO of ExampleCorp</Badge>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
                <CardContent className="flex flex-col items-center">
                  <Avatar className="mb-4">
                    <AvatarImage src="/placeholder.svg" alt="User 2" />
                    <AvatarFallback>U2</AvatarFallback>
                  </Avatar>
                  <p>"The best investment we've made for our startup."</p>
                  <Badge variant="outline" className="mt-4">Jane Smith, CTO of TechStart</Badge>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>

      {/* Call to Action Section */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Ready to take your startup to the next level?</h2>
        <Button size="lg">Sign Up Now</Button>
      </section>
    </div>
  );
};

export default Index;