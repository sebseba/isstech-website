import { Globe, Smartphone, Settings, Code, Database, Shield, Zap, Users, CloudCog } from "lucide-react";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";

const services = [
   {
    icon: CloudCog,
    title: "DevOps & Cloud Infrastructure",
    description:
      "Scalable DevOps solutions including CI/CD pipelines, cloud infrastructure, monitoring, and automation to ensure reliable, high-performance deployments.",
  },
  {
    
    icon: Globe,
    title: "Web Development",
    description:
      "Custom websites and web applications built with React, Next.js, and other modern frameworks. We create responsive, fast, and SEO-optimized solutions.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native iOS and Android apps, or cross-platform solutions with React Native and Flutter. Beautiful interfaces with seamless performance.",
  },
  {
    icon: Settings,
    title: "IT Consulting",
    description:
      "Strategic guidance on technology decisions, infrastructure planning, and digital transformation. We help you make informed choices.",
  },
  {
    icon: Code,
    title: "Software Solutions",
    description:
      "Custom software development for specific business needs. From internal tools to customer-facing applications, built to your specifications.",
  },
  {
    icon: Database,
    title: "Database Design",
    description:
      "Efficient database architecture and optimization. We design scalable data solutions that support your business growth.",
  },
  {
    icon: Shield,
    title: "Security Audits",
    description:
      "Comprehensive security assessments to identify vulnerabilities. We help protect your digital assets and customer data.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Speed up your existing applications and websites. We analyze bottlenecks and implement solutions for faster load times.",
  },
 
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
     <section className="section-padding relative z-10 overflow-hidden text-white">
     <div className="container-width text-center">
     <h1 className="section-heading mb-6">Our Services</h1>
       <p className="subtitle mx-auto text-white/70">
      Comprehensive technology solutions tailored to your business needs.
      From development to consulting, we've got you covered.
      </p>
   </div>
  </section>


      {/* Services Grid */}
      <section className="section-padding relative z-10">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 50}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding relative z-10">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="section-heading mb-4 text-white">Our Process</h2>
            <p className="subtitle mx-auto text-white/70">
              A structured approach to delivering successful projects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We learn about your business, goals, and technical requirements." },
              { step: "02", title: "Planning", description: "Detailed project roadmap with milestones and deliverables." },
              { step: "03", title: "Development", description: "Agile development with regular updates and feedback cycles." },
              { step: "04", title: "Launch", description: "Thorough testing, deployment, and ongoing support." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-5xl font-bold text-fuchsia-400/25 mb-4">{item.step}</div>
                <h3 className="text-lg font-semibold tracking-wider uppercase mb-3 text-white">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-black/35" />
        </div>
      </section>
    </Layout>
  );
};

export default Services;
