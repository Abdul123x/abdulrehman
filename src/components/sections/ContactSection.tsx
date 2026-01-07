import { useState } from "react";
import {
  Mail,
  MessageSquare,
  Phone,
  Send,
  MapPin,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

// Initialize EmailJS once
emailjs.init("6warsnzb6OKVB93pr");

const contactInfo = [
  { icon: Mail, label: "Email", value: "work.abdulrehman2@gmail.com", href: "mailto:work.abdulrehman2@gmail.com" },
  { icon: MapPin, label: "Location", value: "Available Worldwide (Remote)", href: null },
  { icon: Phone, label: "Phone", value: "+923265825015", href: null },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/Abdul123x", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/abdulrehman-saleem", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_3y7pn4e",      // Service ID
        "template_kz31d8r",     // Template ID
        {
          from_name: formData.name,    // Template variable {{from_name}}
          reply_to: formData.email,    // Template variable {{reply_to}}
          subject: formData.subject,   // Template variable {{subject}}
          message: formData.message,   // Template variable {{message}}
        }
      );

      toast({
        title: "Message sent!",
        description: "Your message has been delivered. I’ll get back to you soon.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });

    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Message failed",
        description: "Something went wrong. Try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider mb-4 block">CONTACT</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="font-medium hover:text-primary transition-colors">{item.value}</a>
                    ) : (
                      <div className="font-medium">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm text-muted-foreground mb-4">Connect with me</h4>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center"
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary border border-primary/20">
              <MessageSquare className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-semibold mb-2">Ready to start?</h4>
              <p className="text-sm text-muted-foreground">
                Let's schedule a call to discuss your project requirements and how I can help achieve your goals.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="bg-card" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="bg-card" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Project inquiry" required className="bg-card" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project..." rows={6} required className="bg-card resize-none" />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : <>Send Message <Send className="w-4 h-4" /></>}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
