import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const metadata = {
    title: "Contact Us | Rithu by AAha",
    description: "Get in touch with our jewelry experts. We're here to help you find the perfect piece.",
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <section className="bg-gradient-to-b from-white to-[#FDFBF7] py-20">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center max-w-3xl mx-auto space-y-6">
                        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#1a4749]">
                            Get in Touch
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                            We'd love to hear from you. Whether you have a question about our collections,
                            need assistance, or want to discuss a custom piece, our team is ready to help.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Information & Form */}
            <section className="py-20">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Information */}
                        <div className="space-y-10">
                            <div>
                                <h2 className="font-heading text-3xl font-light text-[#1a4749] mb-8">
                                    Contact Information
                                </h2>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FDFBF7] flex items-center justify-center">
                                            <Phone className="h-5 w-5 text-[#D4AF37]" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-900 mb-1">Phone</h3>
                                            <p className="text-gray-600">+91 (800) 123-4567</p>
                                            <p className="text-sm text-gray-500 mt-1">Mon-Sat, 10 AM - 7 PM</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FDFBF7] flex items-center justify-center">
                                            <Mail className="h-5 w-5 text-[#D4AF37]" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                                            <p className="text-gray-600">info@rithubyaaha.com</p>
                                            <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FDFBF7] flex items-center justify-center">
                                            <MapPin className="h-5 w-5 text-[#D4AF37]" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-900 mb-1">Showroom</h3>
                                            <p className="text-gray-600">
                                                123 Jewelers Lane<br />
                                                Luxury Plaza, 2nd Floor<br />
                                                Mumbai, Maharashtra 400001
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FDFBF7] flex items-center justify-center">
                                            <Clock className="h-5 w-5 text-[#D4AF37]" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-900 mb-1">Business Hours</h3>
                                            <p className="text-gray-600">
                                                Monday - Saturday: 10:00 AM - 7:00 PM<br />
                                                Sunday: 11:00 AM - 5:00 PM
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Additional Info */}
                            <div className="bg-[#FDFBF7] p-8 rounded-sm">
                                <h3 className="font-heading text-xl font-light text-[#1a4749] mb-4">
                                    Visit Our Showroom
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Experience our collections in person. Our jewelry consultants are available
                                    to help you find the perfect piece or discuss custom design options.
                                </p>
                                <Button className="bg-[#1a4749] hover:bg-[#1a4749]/90 text-white rounded-none">
                                    Schedule a Visit
                                </Button>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <div className="bg-white border border-gray-200 p-8 lg:p-10">
                                <h2 className="font-heading text-3xl font-light text-[#1a4749] mb-8">
                                    Send us a Message
                                </h2>
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName">First Name *</Label>
                                            <Input
                                                id="firstName"
                                                placeholder="John"
                                                className="rounded-none border-gray-300"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName">Last Name *</Label>
                                            <Input
                                                id="lastName"
                                                placeholder="Doe"
                                                className="rounded-none border-gray-300"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email *</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="john.doe@example.com"
                                            className="rounded-none border-gray-300"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone</Label>
                                        <Input
                                            id="phone"
                                            type="tel"
                                            placeholder="+91 98765 43210"
                                            className="rounded-none border-gray-300"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="subject">Subject *</Label>
                                        <Input
                                            id="subject"
                                            placeholder="How can we help you?"
                                            className="rounded-none border-gray-300"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message *</Label>
                                        <Textarea
                                            id="message"
                                            rows={6}
                                            placeholder="Tell us more about your inquiry..."
                                            className="rounded-none border-gray-300 resize-none"
                                            required
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-[#1a4749] hover:bg-[#1a4749]/90 text-white h-12 rounded-none text-sm uppercase tracking-wider"
                                    >
                                        Send Message
                                    </Button>

                                    <p className="text-xs text-gray-500 text-center">
                                        We respect your privacy. Your information will never be shared with third parties.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-20 bg-[#FDFBF7]">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-3xl md:text-4xl font-light text-[#1a4749]">
                            Find Us
                        </h2>
                    </div>
                    <div className="aspect-video bg-gray-200 rounded-sm overflow-hidden">
                        <div className="w-full h-full flex items-center justify-center text-gray-500">
                            <div className="text-center">
                                <MapPin className="h-12 w-12 mx-auto mb-4 text-[#D4AF37]" />
                                <p className="text-lg">Map integration placeholder</p>
                                <p className="text-sm mt-2">123 Jewelers Lane, Mumbai, Maharashtra 400001</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
