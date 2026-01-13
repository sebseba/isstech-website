import { Target, Eye, Award } from "lucide-react";
import Layout from "@/components/Layout";
import WhyWorkWithUsShowcase from "@/components/WhyWorkWithUSShowCase";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12 relative z-10">
        <div className="container-width text-center">
          <h1 className="section-heading mb-6 text-white">About ISS Tech</h1>
          <p className="subtitle mx-auto text-white/70">
            A technology partner committed to helping businesses succeed through
            innovative digital solutions.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding relative z-10">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-wider uppercase mb-6 text-white">
                Our Story
              </h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  ISS Tech was founded with a simple mission: to make quality technology
                  accessible to businesses of all sizes. We saw too many small businesses
                  struggling with outdated systems or unable to afford enterprise-level
                  solutions.
                </p>
                <p>
                  Today, we work with startups, small businesses, and growing companies
                  to deliver technology solutions that drive real results. Whether it&apos;s
                  a new website, a custom application, or strategic IT guidance, we
                  bring the same dedication and expertise to every project.
                </p>
                <p>
                  Our team combines years of industry experience with a passion for
                  innovation. We stay current with the latest technologies and best
                  practices to ensure our clients always receive cutting-edge solutions.
                </p>
              </div>
            </div>

            {/* Replace the solid blue block with a premium glass card */}
            <div className="rounded-2xl p-12 text-center bg-white/5 backdrop-blur-md border border-white/10">
              <div className="text-6xl font-bold mb-4 text-fuchsia-300">ISS</div>
              <div className="text-lg uppercase tracking-[0.3em] text-white/80">Tech</div>
              <div className="mt-8 pt-8 border-t border-white/10 text-sm text-white/60">
                Innovative Software Solutions
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding relative z-10">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="section-heading mb-4 text-white">Our Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                Icon: Target,
                title: "Mission",
                desc:
                  "To empower businesses with technology solutions that are practical, scalable, and deliver measurable results.",
              },
              {
                Icon: Eye,
                title: "Vision",
                desc:
                  "To be the trusted technology partner for businesses seeking digital transformation and growth.",
              },
              {
                Icon: Award,
                title: "Commitment",
                desc:
                  "Excellence in every project, transparency in communication, and dedication to long-term client success.",
              },
            ].map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="
            relative
            rounded-2xl p-6
            bg-black/35 backdrop-blur-md
            border border-fuchsia-500/15
            shadow-lg shadow-black/40
            transition-all duration-300
            hover:-translate-y-1
            hover:border-fuchsia-500/40
            hover:shadow-[0_0_34px_rgba(217,70,239,0.28)]
          "
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-lg bg-fuchsia-500/10 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-fuchsia-300" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold tracking-wider uppercase mb-3 text-white">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-white/65 text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <WhyWorkWithUsShowcase />
      
    </Layout>
  );
};

export default About;

