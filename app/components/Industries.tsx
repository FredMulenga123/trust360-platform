export default function Industries() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-slate-900">
          Industries We Serve
        </h2>

        <p className="mt-6 text-center text-slate-600 max-w-3xl mx-auto">
          Trust360™ delivers trust infrastructure solutions across Africa's
          most critical sectors.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="border rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-blue-900">
              Banking & Financial Services
            </h3>
          </div>

          <div className="border rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-blue-900">
              Mining & Natural Resources
            </h3>
          </div>

          <div className="border rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-blue-900">
              Government & Public Sector
            </h3>
          </div>

          <div className="border rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-blue-900">
              Healthcare
            </h3>
          </div>

          <div className="border rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-blue-900">
              NGOs & Development Partners
            </h3>
          </div>

          <div className="border rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-blue-900">
              Procurement & Supply Chains
            </h3>
          </div>

        </div>

      </div>
    </section>
  );
}