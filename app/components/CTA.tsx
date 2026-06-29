export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-slate-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold">
          Why Trust360™?
        </h2>

        <p className="mt-8 text-xl text-slate-300 max-w-3xl mx-auto">
          Trust360™ combines workforce verification, business intelligence,
          digital identity, compliance intelligence and AI-powered TrustScore™
          into one secure enterprise platform.
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-16">

          <div>
            <h3 className="text-5xl font-bold text-yellow-400">
              AI
            </h3>

            <p className="mt-4">
              Trust Intelligence
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-yellow-400">
              360°
            </h3>

            <p className="mt-4">
              Verification Coverage
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-yellow-400">
              API
            </h3>

            <p className="mt-4">
              Enterprise Integration
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-yellow-400">
              SaaS
            </h3>

            <p className="mt-4">
              Cloud Platform
            </p>
          </div>

        </div>

        <button className="mt-16 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-10 py-4 rounded-xl">
          Schedule a Demo
        </button>

      </div>
    </section>
  );
}