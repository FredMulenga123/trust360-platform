export default function Stats() {
  return (
    <section className="bg-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-slate-900">
          Trust Infrastructure at Scale
        </h2>

        <p className="text-center text-slate-600 mt-6 max-w-3xl mx-auto">
          Building trusted people, trusted businesses and trusted decisions
          across Africa.
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-16">

          <div className="bg-white rounded-xl shadow p-8 text-center">
            <h3 className="text-5xl font-bold text-blue-900">25+</h3>
            <p className="mt-4">Verification Services</p>
          </div>

          <div className="bg-white rounded-xl shadow p-8 text-center">
            <h3 className="text-5xl font-bold text-blue-900">8</h3>
            <p className="mt-4">Core Platform Modules</p>
          </div>

          <div className="bg-white rounded-xl shadow p-8 text-center">
            <h3 className="text-5xl font-bold text-blue-900">24/7</h3>
            <p className="mt-4">Digital Platform</p>
          </div>

          <div className="bg-white rounded-xl shadow p-8 text-center">
            <h3 className="text-5xl font-bold text-blue-900">AI</h3>
            <p className="mt-4">Trust Intelligence</p>
          </div>

        </div>

      </div>
    </section>
  );
}