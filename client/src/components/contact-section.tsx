import { useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Github, Calendar, Clock } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you as soon as possible.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "wrootmike@gmail.com",
      link: "mailto:wrootmike@gmail.com",
      color: "text-cyan-400"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+254 792 618 156",
      link: "tel:+254792618156",
      color: "text-purple-400"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Nairobi, Kenya",
      link: "https://maps.google.com/?q=Nairobi,Kenya",
      color: "text-green-400"
    },
    {
      icon: Clock,
      title: "Availability",
      value: "Mon-Fri, 9AM-5PM EAT",
      link: null,
      color: "text-yellow-400"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Mike Kagera",
      link: "https://www.linkedin.com/in/mike-kagera-a265b318a",
      color: "text-blue-400"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "garymike07",
      link: "https://github.com/garymike07",
      color: "text-slate-400"
    },
    {
      icon: Calendar,
      title: "Schedule a Meeting",
      value: "Book a time slot",
      link: "https://calendly.com/mikekagera",
      color: "text-orange-400"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 gradient-text" data-testid="contact-title">
          Get In Touch
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-card p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-primary" data-testid="contact-connect-title">
              Let's Connect
            </h3>
            <p className="text-lg text-muted-foreground mb-8" data-testid="contact-description">
              I'm always interested in new opportunities, collaborations, and technical discussions. Whether you have a project in mind, need technical consultation, or just want to connect, feel free to reach out through any of these channels.
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-secondary">
                      <IconComponent className={`${item.color} text-xl`} />
                    </div>
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          className={`${item.color} hover:underline`}
                          data-testid={`contact-${item.title.toLowerCase()}`}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-muted-foreground" data-testid={`contact-${item.title.toLowerCase()}`}>
                          {item.value}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <h4 className="text-xl font-semibold mb-4 text-primary">
              Connect on Social Media
            </h4>
            <div className="space-y-4">
              {socialLinks.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <a 
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <IconComponent className={`${item.color} text-xl`} />
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
          
          <div className="bg-card p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Send a Message
            </h3>
            <p className="text-muted-foreground mb-6">
              Have a specific question or project inquiry? Fill out the form below and I'll get back to you as soon as possible.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your full name"
                  data-testid="input-name"
                  className="bg-background"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                  data-testid="input-email"
                  className="bg-background"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What's this about?"
                  data-testid="input-subject"
                  className="bg-background"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  required
                  placeholder="Tell me about your project, questions, or just say hello!"
                  data-testid="textarea-message"
                  className="bg-background"
                />
              </div>
              
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full btn-primary"
                data-testid="button-submit"
              >
                <Send className="inline-block w-4 h-4 mr-2" />
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
              
              <p className="text-xs text-muted-foreground text-center mt-4">
                I typically respond to messages within 24-48 hours during business days.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}