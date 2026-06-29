export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-3xl font-bold text-yellow-400">
            Trust360™
          </h2>

          <p className="mt-4">
            Africa's Trust Infrastructure Platform.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-white mb-4">
            Platform
          </h3>

          <ul className="space-y-2">
            <li>Workforce Verification</li>
            <li>Business Verification</li>
            <li>TrustScore™</li>
            <li>Compliance Intelligence</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-white mb-4">
            Industries
          </h3>

          <ul className="space-y-2">
            <li>Banking</li>
            <li>Mining</li>
            <li>Government</li>
            <li>Healthcare</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-white mb-4">
            Contact
          </h3>

          <p>Lusaka, Zambia</p>
          <p>info@trust360.africa</p>
          <p>www.trust360.africa</p>
        </div>

      </div>

      <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm">
        © 2026 Trust360™ | Trust Infrastructure Nexus Africa (TINA). All Rights Reserved.
      </div>
    </footer>
  );
}