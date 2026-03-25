"use client"

import Image from "next/image"
import { Phone, MapPin, GraduationCap, Users, Award, Clock, BookOpen, Star, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function RachanaHomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <a href="tel:+919016404174" className="hover:underline">+91 90164 04174</a>
          </div>
          <div className="flex items-center gap-2 mt-1 sm:mt-0">
            <MapPin className="h-4 w-4" />
            <span>Katargam, Surat, Gujarat</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-card shadow-sm sticky top-0 z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/channels4_profile-8rSEifJtPNw4PuPVFgGNnnYSYDEkVD.jpg"
              alt="Rachana Classes Logo"
              width={60}
              height={60}
              className="rounded-lg"
            />
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-primary">Rachana Classes</h1>
              <p className="text-xs text-muted-foreground">Excellence in Education</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">About</a>
            <a href="#stats" className="text-foreground hover:text-primary transition-colors font-medium">Stats</a>
            <a href="#programs" className="text-foreground hover:text-primary transition-colors font-medium">Programs</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Contact</a>
          </nav>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="tel:+919016404174">
              <Phone className="h-4 w-4 mr-2" />
              Enquire Now
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-4 border-primary-foreground"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full border-4 border-primary-foreground"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border-4 border-primary-foreground"></div>
        </div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/20 rounded-full px-4 py-2 mb-6">
              <Award className="h-5 w-5" />
              <span className="text-sm font-medium">37+ Years of Trust & Excellence</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-balance">
              Shaping Futures, Building Dreams
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90 text-pretty">
              Rachana Classes has been a beacon of educational excellence in Surat for over three decades. 
              Join thousands of successful students who started their journey with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8">
                <a href="tel:+919016404174" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now: +91 90164 04174
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8">
                <a href="#programs" className="flex items-center gap-2">
                  View Programs
                  <ChevronRight className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <StatCard icon={<Clock className="h-8 w-8" />} number="37+" label="Years Experience" />
            <StatCard icon={<Users className="h-8 w-8" />} number="40,000+" label="Students Taught" />
            <StatCard icon={<GraduationCap className="h-8 w-8" />} number="30+" label="Expert Teachers" />
            <StatCard icon={<BookOpen className="h-8 w-8" />} number="1-12" label="All Standards" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6 text-balance">
                A Legacy of Educational Excellence
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Founded and led by <strong className="text-foreground">Kishor Sir</strong>, a Master of Commerce 
                with over 37 years of teaching experience, Rachana Classes has been nurturing young minds 
                and helping them achieve academic success.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our institute offers comprehensive coaching for students from 1st to 12th standard in 
                Gujarati medium. With a team of 30+ dedicated teachers, we ensure 
                personalized attention and quality education for every student.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">Gujarati Medium</span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-primary/10 rounded-2xl p-8">
                <div className="bg-card rounded-xl shadow-lg p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <GraduationCap className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg">Kishor Sir</h4>
                      <p className="text-muted-foreground text-sm">Founder & Director</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    M.Com qualified educator with 37+ years of experience in shaping students careers 
                    and building strong academic foundations.
                  </p>
                  <div className="flex items-center gap-1 mt-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">Trusted by thousands</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Programs</span>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
              Comprehensive Education for All Standards
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <ProgramCard
              title="Primary (1-5)"
              description="Building strong foundations with focus on basic concepts, reading, writing, and mathematical skills."
              features={["Interactive Learning", "Basic Concepts", "Activity Based"]}
            />
            <ProgramCard
              title="Secondary (6-10)"
              description="Comprehensive coaching for board exams with detailed subject coverage and regular assessments."
              features={["Board Preparation", "All Subjects", "Weekly Tests"]}
              highlighted
            />
            <ProgramCard
              title="Higher Secondary (11-12)"
              description="Specialized coaching for Commerce, Science, and Arts streams with career guidance."
              features={["Stream Specific", "Career Guidance", "Expert Faculty"]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
            Ready to Start Your Child&apos;s Success Story?
          </h3>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-pretty">
            Join thousands of successful students who have achieved their academic goals with Rachana Classes. 
            Enroll now and give your child the best educational foundation.
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8">
            <a href="tel:+919016404174" className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Enquire Now: +91 90164 04174
            </a>
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Contact Us</span>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6 text-balance">
                Get in Touch
              </h3>
              <p className="text-muted-foreground mb-8">
                Have questions about admissions or want to learn more about our programs? 
                Reach out to us and we&apos;ll be happy to help.
              </p>
              <div className="space-y-6">
                <ContactItem
                  icon={<Phone className="h-6 w-6" />}
                  title="Phone"
                  content="+91 90164 04174"
                  href="tel:+919016404174"
                />
                <ContactItem
                  icon={<MapPin className="h-6 w-6" />}
                  title="Address"
                  content="A/B/69, Hariom Society, Katargam, Surat, Gujarat 395004"
                  href="https://maps.google.com/?q=A/B/69,+Hariom+Society,+Katargam,+Surat,+Gujarat+395004"
                />
              </div>
            </div>
            <div className="bg-card rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.6755!2d72.8404!3d21.2200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKatargam%2C%20Surat%2C%20Gujarat%20395004!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rachana Classes Location"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/channels4_profile-8rSEifJtPNw4PuPVFgGNnnYSYDEkVD.jpg"
                alt="Rachana Classes Logo"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <div>
                <h4 className="font-bold">Rachana Classes</h4>
                <p className="text-sm opacity-70">Excellence in Education Since 37+ Years</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm opacity-70">
                &copy; {new Date().getFullYear()} Rachana Classes. All rights reserved.
              </p>
              <p className="text-sm opacity-70 mt-1">
                Katargam, Surat, Gujarat 395004
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function StatCard({ icon, number, label }: { icon: React.ReactNode; number: string; label: string }) {
  return (
    <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-6 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
          {icon}
        </div>
        <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{number}</div>
        <div className="text-muted-foreground text-sm">{label}</div>
      </CardContent>
    </Card>
  )
}

function ProgramCard({
  title,
  description,
  features,
  highlighted = false,
}: {
  title: string
  description: string
  features: string[]
  highlighted?: boolean
}) {
  return (
    <Card className={`border-0 shadow-md hover:shadow-lg transition-all ${highlighted ? "ring-2 ring-primary scale-105" : ""}`}>
      <CardContent className="p-6">
        {highlighted && (
          <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Most Popular
          </span>
        )}
        <h4 className="text-xl font-bold text-foreground mb-3">{title}</h4>
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-foreground">
              <ChevronRight className="h-4 w-4 text-accent" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

function ContactItem({
  icon,
  title,
  content,
  href,
}: {
  icon: React.ReactNode
  title: string
  content: string
  href: string
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        {icon}
      </div>
      <div>
        <h5 className="font-semibold text-foreground">{title}</h5>
        <p className="text-muted-foreground group-hover:text-primary transition-colors">{content}</p>
      </div>
    </a>
  )
}
