export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div>
          <div className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Trust Infrastructure Nexus Africa (TINA)
          </div>

          <h1 className="text-6xl font-extrabold leading-tight">
            Trust360™
          </h1>

          <h2 className="text-3xl mt-6 text-yellow-400 font-semibold">
            Africa's Trust Infrastructure Platform
          </h2>

          <p className="mt-8 text-xl text-slate-300 leading-9">
            Delivering trusted workforce verification, business verification,
            TrustScore™, compliance intelligence, digital identity verification,
            AI-powered trust analytics and enterprise APIs.
          </p>

          <div className="flex gap-6 mt-10">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl">
              Request Demo
            </button>

            <button className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-xl transition">
              Explore Platform
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 text-slate-900">

          <h3 className="text-2xl font-bold mb-6">
            Trust360™ Dashboard Preview
          </h3>

          <div className="space-y-4">

            <div className="flex justify-between bg-slate-100 rounded-lg p-4">
              <span>Workforce Verification</span>
              <span className="text-green-600 font-bold">✓ Online</span>
            </div>

            <div className="flex justify-between bg-slate-100 rounded-lg p-4">
              <span>Business Verification</span>
              <span className="text-green-600 font-bold">✓ Active</span>
            </div>

            <div className="flex justify-between bg-slate-100 rounded-lg p-4">
              <span>TrustScore™ Engine</span>
              <span className="text-blue-700 font-bold">AI Ready</span>
            </div>

            <div className="flex justify-between bg-slate-100 rounded-lg p-4">
              <span>PIP Screening</span>
              <span className="text-yellow-600 font-bold">Monitoring</span>
            </div>

            <div className="flex justify-between bg-slate-100 rounded-lg p-4">
              <span>Compliance Intelligence</span>
              <span className="text-green-600 font-bold">Operational</span>
            </div>

            <div className="flex justify-between bg-slate-100 rounded-lg p-4">
              <span>Enterprise API</span>
              <span className="text-purple-700 font-bold">Connected</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}