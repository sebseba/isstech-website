import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const glassCard =
  "relative rounded-2xl p-6 md:p-8 bg-black/35 backdrop-blur-md border border-fuchsia-500/15 shadow-lg shadow-black/40";

const inputBase =
  "w-full rounded-xl px-4 py-3 bg-black/35 text-white placeholder:text-white/35 " +
  "border border-white/10 outline-none transition " +
  "focus:border-fuchsia-500/40 focus:ring-2 focus:ring-fuchsia-500/20";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.error || "Failed to send message.");
      }

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });

      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (err: any) {
      toast({
        title: "Something went wrong",
        description: err?.message || "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-12 relative z-10">
        <div className="container-width text-center">
          <h1 className="section-heading mb-5 text-white">Get in Touch</h1>
          <p className="subtitle mx-auto text-white/70">
            Have a project in mind? We&#39;d love to hear from you. Send us a message
            and we&#39;ll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding pt-10 relative z-10">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            {/* Contact Info */}
            <div className={glassCard}>
              <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-2xl">
                <div className="absolute -top-24 left-[-120px] h-64 w-64 rounded-full bg-fuchsia-600/15 blur-[90px]" />
                <div className="absolute -bottom-28 right-[-120px] h-72 w-72 rounded-full bg-indigo-500/12 blur-[110px]" />
              </div>

              <h2 className="text-xl md:text-2xl font-bold tracking-wider uppercase mb-6 text-white">
                Contact Information
              </h2>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-fuchsia-200" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <p className="text-white/70">info@isstech.ca</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-fuchsia-200" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Phone</h3>
                    <p className="text-white/70">(437) 669-9343</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-fuchsia-200" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Location</h3>
                    <p className="text-white/70 leading-relaxed">
                      Based in Toronto, Ontario, Canada <br />
                      Remote-first technology services
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={glassCard}>
              <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-2xl">
                <div className="absolute -top-24 right-[-140px] h-64 w-64 rounded-full bg-purple-500/14 blur-[95px]" />
              </div>

              <h2 className="text-xl md:text-2xl font-bold tracking-wider uppercase mb-6 text-white">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-white/80">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={inputBase}
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-white/80">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={inputBase}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2 text-white/80">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={inputBase}
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-white/80">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`${inputBase} resize-none`}
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3 text-sm font-semibold tracking-wider uppercase
                             bg-purple-600/90 hover:bg-purple-600 text-white
                             border border-purple-500/40
                             hover:shadow-[0_0_28px_rgba(217,70,239,0.35)]
                             transition disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
