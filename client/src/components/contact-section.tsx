import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send } from "lucide-react";
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
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 gradient-text" data-testid="contact-title">
          Get In Touch
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="neuro-box p-8">
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400" data-testid="contact-connect-title">
                Let's Connect
              </h3>
              <p className="text-lg text-slate-300 mb-8" data-testid="contact-description">
                I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just want to chat about technology, feel free to reach out!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="neuro-inset p-4 rounded-full">
                    <Mail className="text-cyan-400 text-xl" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-slate-400" data-testid="contact-email">wrootmike@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="neuro-inset p-4 rounded-full">
                    <Phone className="text-purple-400 text-xl" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-slate-400" data-testid="contact-phone">+254 792 618 156</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="neuro-inset p-4 rounded-full">
                    <MapPin className="text-green-400 text-xl" />
                  </div>
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-slate-400" data-testid="contact-location">Nairobi, Kenya</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://linkedin.com/in/mr-mike-654bb2344" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="neuro-inset p-3 rounded-full hover:text-cyan-400 transition-colors duration-300"
                    data-testid="contact-linkedin"
                  >
                    <Linkedin className="text-xl" />
                  </a>
                  <a 
                    href="https://github.com/garymike07" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="neuro-inset p-3 rounded-full hover:text-purple-400 transition-colors duration-300"
                    data-testid="contact-github"
                  >
                    <Github className="text-xl" />
                  </a>
                  <a 
                    href="#" 
                    className="neuro-inset p-3 rounded-full hover:text-green-400 transition-colors duration-300"
                    data-testid="contact-twitter"
                  >
                    <Twitter className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass-card p-8 rounded-2xl">
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
                  className="w-full px-4 py-3 neuro-inset rounded-xl bg-transparent text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 border-0"
                  placeholder="Your full name"
                  data-testid="input-name"
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
                  className="w-full px-4 py-3 neuro-inset rounded-xl bg-transparent text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 border-0"
                  placeholder="your.email@example.com"
                  data-testid="input-email"
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
                  className="w-full px-4 py-3 neuro-inset rounded-xl bg-transparent text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 border-0"
                  placeholder="What's this about?"
                  data-testid="input-subject"
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
                  className="w-full px-4 py-3 neuro-inset rounded-xl bg-transparent text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none transition-all duration-300 border-0"
                  placeholder="Tell me about your project or just say hello!"
                  data-testid="textarea-message"
                />
              </div>
              
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full neuro-box hover-lift px-8 py-4 text-lg font-semibold text-white transition-all duration-300 flex items-center justify-center gap-3 border-0"
                data-testid="button-submit"
              >
                <Send className="text-xl" />
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
