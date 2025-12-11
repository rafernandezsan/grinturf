import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Droplets, Sun, Shield, Leaf, Phone, Mail, CheckCircle, Star, ArrowRight, Menu } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <a href="/" className="flex items-center gap-2">
            <Image
              src="/images/grin-turf-logo.jpg"
              alt="GrinTurf Logo"
              width={200}
              height={56}
              className="h-14 w-auto"
            />
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#products"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Products
            </a>
            <a
              href="#benefits"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Benefits
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
            <Button>Get Free Quote</Button>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="text-primary">
                Eco-Friendly Lawn Solutions
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
                A Perfect Lawn, <span className="text-primary">Every Day</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Transform your outdoor space with premium artificial turf. Save up to 70% on water bills while enjoying
                a lush, green lawn that stays beautiful year-round with zero maintenance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2">
                  Get Free Estimate <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  View Our Products
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">10-Year Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Free Installation Quote</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/beautiful-artificial-turf-lawn-in-backyard-with-pa.jpg"
                  alt="Beautiful artificial turf lawn"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Droplets className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">70%</p>
                    <p className="text-sm text-muted-foreground">Water Savings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold">Become one of our</p>
              <p className="text-sm opacity-90">Happy Customers</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold">10 Years</p>
              <p className="text-sm opacity-90">Warranty Coverage</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold">100%</p>
              <p className="text-sm opacity-90">Satisfaction Rate</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold">24/7</p>
              <p className="text-sm opacity-90">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Our Products
            </Badge>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4 text-balance">
              Premium Turf for Every Need
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Choose from our range of high-quality artificial turf options, each designed for specific uses and
              preferences.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="aspect-[16/10] overflow-hidden rounded-lg mb-4">
                  <Image
                    src="/lush-green-residential-lawn-artificial-turf.jpg"
                    alt="Residential Lawn Turf"
                    width={480}
                    height={300}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-foreground">Residential Lawn</CardTitle>
                <CardDescription>Perfect for home lawns and gardens</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary" /> Ultra-soft blade technology
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary" /> Pet-friendly and safe
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary" /> Natural color variation
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <p className="text-2xl font-bold text-primary">
                  $4.99<span className="text-sm font-normal text-muted-foreground">/sq ft</span>
                </p>
                <Button variant="outline">Learn More</Button>
              </CardFooter>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow border-primary">
              <CardHeader>
                <Badge className="w-fit mb-2">Most Popular</Badge>
                <div className="aspect-[16/10] overflow-hidden rounded-lg mb-4">
                  <Image
                    src="/sports-field-artificial-turf-soccer-field.jpg"
                    alt="Sports Field Turf"
                    width={480}
                    height={300}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-foreground">Sports Field</CardTitle>
                <CardDescription>Built for athletic performance</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary" /> High-durability fibers
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary" /> Shock-absorbing backing
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary" /> FIFA certified options
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <p className="text-2xl font-bold text-primary">
                  $6.99<span className="text-sm font-normal text-muted-foreground">/sq ft</span>
                </p>
                <Button>Get Quote</Button>
              </CardFooter>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="aspect-[16/10] overflow-hidden rounded-lg mb-4">
                  <Image
                    src="/putting-green-artificial-turf-golf.jpg"
                    alt="Putting Green Turf"
                    width={480}
                    height={300}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-foreground">Putting Green</CardTitle>
                <CardDescription>Professional golf practice at home</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary" /> True ball roll
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary" /> Multiple speed options
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary" /> UV resistant coating
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <p className="text-2xl font-bold text-primary">
                  $8.99<span className="text-sm font-normal text-muted-foreground">/sq ft</span>
                </p>
                <Button variant="outline">Learn More</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4 text-balance">The GrinTurf Advantage</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover why thousands of homeowners trust GrinTurf for their artificial lawn solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center bg-background">
              <CardHeader>
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Droplets className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg text-foreground">Save Water</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Reduce your water consumption by up to 70% and lower your utility bills significantly.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-background">
              <CardHeader>
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Sun className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg text-foreground">Year-Round Beauty</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Enjoy a lush, green lawn in every season without worrying about weather conditions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-background">
              <CardHeader>
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg text-foreground">10-Year Warranty</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Rest easy with our industry-leading warranty that covers materials and installation.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-background">
              <CardHeader>
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg text-foreground">Eco-Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  No fertilizers, pesticides, or gas-powered mowers needed. Better for you and the planet.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Testimonials
            </Badge>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4 text-balance">What Our Customers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Join thousands of satisfied customers who have transformed their outdoor spaces with GrinTurf.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic leading-relaxed">
                  "Best investment we've made for our home! The lawn looks amazing year-round and we've saved so much on
                  water bills. The installation team was professional and efficient."
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-semibold">SM</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Sarah M.</p>
                    <p className="text-sm text-muted-foreground">Phoenix, AZ</p>
                  </div>
                </div>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic leading-relaxed">
                  "Our kids and dogs love the new turf! It's soft, safe, and stays clean. No more muddy footprints or
                  brown patches. Highly recommend GrinTurf to every family."
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-semibold">JT</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">James T.</p>
                    <p className="text-sm text-muted-foreground">San Diego, CA</p>
                  </div>
                </div>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic leading-relaxed">
                  "The putting green turned out perfect! I practice every day now and my golf game has improved
                  significantly. Worth every penny for the quality you get."
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-semibold">RK</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Robert K.</p>
                    <p className="text-sm text-muted-foreground">Austin, TX</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Badge variant="outline" className="mb-4">
                Get In Touch
              </Badge>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4 text-balance">
                Ready to Transform Your Lawn?
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Contact us today for a free consultation and estimate. Our team of experts will help you choose the
                perfect turf solution for your space.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Call Us</p>
                    <p className="text-muted-foreground">(404) 301-8718</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email Us</p>
                    <p className="text-muted-foreground">info@grinturf.com</p>
                  </div>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">Request a Free Quote</CardTitle>
                <CardDescription>Fill out the form and we'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Phone
                    </label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Tell us about your project
                    </label>
                    <Textarea
                      id="message"
                      placeholder="I'm interested in artificial turf for my backyard..."
                      rows={4}
                    />
                  </div>
                  <Button className="w-full" size="lg">
                    Submit Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <a href="/" className="flex items-center gap-2 mb-4">
                <Image
                  src="/images/grin-turf-logo.jpg"
                  alt="GrinTurf Logo"
                  width={200}
                  height={56}
                  className="h-14 w-auto brightness-0 invert"
                />
              </a>
              <p className="text-background/70 text-sm leading-relaxed">
                Premium artificial turf solutions for homes and businesses. Creating beautiful, sustainable lawns since
                2010.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-background mb-4">Products</h3>
              <ul className="space-y-2 text-sm text-background/70">
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Residential Lawn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Sports Field
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Putting Green
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Pet Turf
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-background mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-background/70">
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Our Process
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-background mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-background/70">
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Warranty Info
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Maintenance Tips
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/70">
            <p>&copy; {new Date().getFullYear()} GrinTurf. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
