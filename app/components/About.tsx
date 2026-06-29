export default function About() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-slate-900 text-center">
          Building Africa's Digital Trust Infrastructure
        </h2>

        <p className="mt-8 text-lg text-slate-600 text-center max-w-4xl mx-auto leading-8">
          Trust360™ is the flagship platform of Trust Infrastructure Nexus Africa (TINA),
          providing enterprise-grade workforce verification, business due diligence,
          compliance intelligence, digital identity verification and AI-powered trust
          analytics for governments, regulators, financial institutions and businesses
          across Africa.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="bg-slate-50 rounded-xl p-8 shadow">
            <h3 className="text-2xl font-bold text-blue-900">
              Workforce Verification
            </h3>

            <p className="mt-4 text-slate-600">
              Verify employment history, qualifications, criminal records,
              references and identity from one trusted platform.
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl p-8 shadow">
            <h3 className="text-2xl font-bold text-blue-900">
              Business Due Diligence
            </h3>

            <p className="mt-4 text-slate-600">
              Corporate verification, beneficial ownership, sanctions,
              compliance screening and supplier risk intelligence.
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl p-8 shadow">
            <h3 className="text-2xl font-bold text-blue-900">
              TrustScore™ Intelligence
            </h3>

            <p className="mt-4 text-slate-600">
              AI-powered trust scoring that transforms verification data
              into actionable business intelligence.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}