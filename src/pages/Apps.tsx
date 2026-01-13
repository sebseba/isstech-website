import Layout from "@/components/Layout";
import somnioApp from "@/assets/somnio-app.png";
import HairyPotterApp from "@/assets/HairyPotter.png"

const Apps = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12 relative z-10">
        <div className="container-width text-center">
          <h1 className="section-heading mb-6 text-white">Apps & Products</h1>
          <p className="subtitle mx-auto text-white/70">
            Explore our portfolio of applications and products. Each solution is crafted
            with attention to detail and a focus on user experience.
          </p>
        </div>
      </section>

      {/* Somnio App */}
      <section className="section-padding relative z-10">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[hsl(260,60%,15%)] via-[hsl(280,50%,20%)] to-[hsl(220,60%,15%)] rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
                <div>
                  <span className="text-xs uppercase tracking-wider text-purple-300 mb-4 block">
                    Mobile App
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Somnio</h2>
                  <p className="text-white/80 leading-relaxed mb-6">
                    Dream interpretation and visualization app using AI technology. 
                    Explore the depths of your subconscious and bring your dreams to life 
                    with stunning AI-generated visuals.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Flutter", "AI/ML"].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/10 text-white/90 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-2xl" />
                  <img 
                    src={somnioApp} 
                    alt="Somnio - Dream interpretation and visualization app" 
                    className="relative w-full max-w-sm mx-auto rounded-xl shadow-2xl shadow-purple-500/30"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Hairy Potter App */}
      <section className="section-padding relative z-10">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[hsl(30,70%,14%)] via-[hsl(18,60%,12%)] to-[hsl(240,40%,10%)] rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
                <div>
                  <span className="text-xs uppercase tracking-wider text-amber-300 mb-4 block">
                    Barber / Hairdresser App
                  </span>

                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Hairy Potter
                  </h2>

                  <p className="text-white/80 leading-relaxed mb-6">
                    AI-powered consultation app for modern barbers and hair stylists.
                    Helps clients preview realistic styles and supports better decisions
                    before the first cut.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {["AI Consultation", "Camera Flow", "Style Preview"].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/10 text-white/90 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/15 rounded-2xl blur-2xl" />
                  <img
                    src={HairyPotterApp}
                    alt="Hairy Potter - AI consultation app for barbers"
                    className="relative w-full max-w-sm mx-auto rounded-xl shadow-2xl shadow-amber-500/20"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Custom Solutions CTA */}
      <section className="section-padding relative z-10">
        <div className="container-width text-center">
          <h2 className="section-heading mb-6">Need a Custom Solution?</h2>
          <p className="text-background/70 max-w-2xl mx-auto mb-10">
            We build tailored applications for unique business requirements.
            Let's discuss your project.
          </p>
          <a
            href="/contact"
            className="btn-primary inline-flex items-center gap-2 !bg-purple-600/90 hover:!bg-purple-600 border border-purple-500/40 hover:shadow-[0_0_28px_rgba(217,70,239,0.35)]"
          >
            Start Your Project
          </a>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-black/35" />
      </section>
    </Layout>
  );
};

export default Apps;
