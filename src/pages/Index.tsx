import { Link } from "react-router-dom";
import { Globe, Smartphone, Settings, Code, ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import heroBg from "@/assets/hero-bg.jpg";
import somnioApp from "@/assets/somnio-app.png";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies. From landing pages to complex platforms.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
  },
  {
    icon: Settings,
    title: "IT Consulting",
    description:
      "Strategic technology guidance to optimize your infrastructure and drive digital transformation.",
  },
  {
    icon: Code,
    title: "Software Solutions",
    description:
      "Custom software development tailored to your unique business needs and workflows.",
  },
];


const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden isolate">
        
  {/* image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${heroBg})` }}
  />

  {/* darken for readability */}
  <div className="absolute inset-0 bg-black/45" />

  {/* purple tint layer */}
  <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-700/35 via-purple-600/20 to-indigo-700/30 mix-blend-color" />

  

  {/* content */}
  <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
    <h1 className="hero-heading animate-fade-in-up mb-6">
      Technology That<br />Drives Success
    </h1>
    <p className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-10 animate-fade-in-delay-1">
      We build innovative digital solutions for startups and small businesses.
      From concept to deployment, your vision is our mission.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
      <Link
        to="/services"
        className="btn-primary inline-flex items-center gap-2 !bg-purple-600/90 hover:!bg-purple-600 border border-purple-500/40 hover:shadow-[0_0_28px_rgba(217,70,239,0.35)]"
      >
        Our Services <ArrowRight size={16} />
      </Link>

      <Link
        to="/contact"
        className="btn-outline border-white/20 text-white hover:bg-white/10"
      >
        Get in Touch
      </Link>
    </div>
  </div>
</section>



      {/* Latest Mobile App - Somnio */}
      <section className="section-padding relative z-10 overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
       <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-fuchsia-600/14 blur-[160px]" />
        </div>
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="section-heading text-white">Latest Mobile App</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Somnio
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                Dream interpretation and visualization app using AI technology. 
                Explore the depths of your subconscious and bring your dreams to life 
                with stunning AI-generated visuals.
              </p>
              <Link 
                to="/apps" 
                className="btn-primary inline-flex items-center gap-2 !bg-purple-600/90 hover:!bg-purple-600 !text-white border border-purple-500/40 hover:shadow-[0_0_28px_rgba(217,70,239,0.35)]"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/20 to-purple-500/20 rounded-3xl blur-3xl" />
              <img 
                src={somnioApp} 
                alt="Somnio - Dream interpretation and visualization app" 
                className="relative w-full max-w-lg mx-auto rounded-2xl shadow-2xl shadow-purple-500/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding relative z-10">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="section-heading mb-4 text-white">Our Services</h2>
            <p className="subtitle mx-auto text-white/70">
              Comprehensive technology solutions designed to help your business thrive in the digital age.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 100}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary inline-flex items-center gap-2 !bg-purple-600 !text-white border border-purple-500/40 hover:shadow-[0_0_28px_rgba(217,70,239,0.35)]">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding relative z-10">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-heading mb-6 text-white">
                Why Choose<br />ISS Tech?
              </h2>
              <p className="text-white/70 mb-8 leading-relaxed">
                We combine technical expertise with a deep understanding of business needs.
                Our approach ensures that every solution we deliver is not just technically
                sound, but also drives real business value.
              </p>
              <ul className="space-y-4">
                {[
                  "Dedicated team of experienced professionals",
                  "Transparent communication throughout projects",
                  "Scalable solutions that grow with your business",
                  "Ongoing support and maintenance",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/80">
                    <CheckCircle className="w-5 h-5 text-fuchsia-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl p-12 text-center bg-white/5 backdrop-blur-md border border-white/10">
              <div className="text-6xl md:text-7xl font-bold text-fuchsia-400 mb-4">5+</div>
              <div className="text-lg uppercase tracking-wider text-white/60">
                Years of Excellence
              </div>
              <p className="mt-6 text-white/70">
                Trusted by startups and growing businesses to deliver exceptional technology solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative z-10 overflow-hidden">
        <div className="container-width text-center">
          <h2 className="section-heading mb-6 text-white">
            Ready to Start<br />Your Project?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-10">
            Let's discuss how we can help bring your ideas to life.
            Get in touch for a free consultation.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2 !bg-purple-600/90 hover:!bg-purple-600 !text-white border border-purple-500/40 hover:shadow-[0_0_28px_rgba(217,70,239,0.35)]">
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-black/35" />
      </section>
    </Layout>
  );
};

export default Index;
