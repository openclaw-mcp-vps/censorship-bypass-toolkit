export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Developers in Restricted Regions
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Government Firewall Bypass Tools
          <span className="block text-[#58a6ff]">Built for Developers</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Proxy configurations, DNS alternatives, and step-by-step connection guides so you can access GitHub, npm, and your stack — no matter where you are.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Access — $19/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. Instant access after payment.</p>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 max-w-md mx-auto">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-white text-xl font-bold">Developer Plan</h2>
            <span className="bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-2 py-1 rounded">POPULAR</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to code without borders.</p>
          <div className="mb-6">
            <span className="text-4xl font-bold text-white">$19</span>
            <span className="text-[#8b949e] ml-1">/month</span>
          </div>
          <ul className="space-y-3 mb-8">
            {[
              "Curated proxy server configs (HTTP/SOCKS5)",
              "Alternative DNS resolver list (DoH/DoT)",
              "WireGuard & OpenVPN setup guides",
              "Real-time tool status dashboard",
              "Country-specific bypass playbooks",
              "Private Discord community",
              "Monthly updated configs"
            ].map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5 shrink-0">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border-b border-[#30363d] pb-6">
            <h3 className="text-white font-semibold mb-2">Is this legal to use?</h3>
            <p className="text-[#8b949e] text-sm">We provide technical documentation and configuration guides. Legality depends on your local laws — consult a local legal expert. Many developers use these tools to access professional resources like GitHub, Stack Overflow, and package registries.</p>
          </div>
          <div className="border-b border-[#30363d] pb-6">
            <h3 className="text-white font-semibold mb-2">How do I get access after subscribing?</h3>
            <p className="text-[#8b949e] text-sm">Immediately after payment you receive an email with login credentials to the member portal. All guides, configs, and the status dashboard are available instantly — no waiting period.</p>
          </div>
          <div className="pb-6">
            <h3 className="text-white font-semibold mb-2">What if the tools stop working?</h3>
            <p className="text-[#8b949e] text-sm">We monitor all listed tools 24/7 and update configs monthly (or sooner when blocks occur). The real-time status dashboard shows which tools are currently active so you always know what works.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
