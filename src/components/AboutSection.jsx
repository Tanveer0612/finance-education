export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-10">Educational Resources</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="border p-6 rounded">
            <h3 className="font-semibold mb-3">Understanding Forex Markets</h3>
            <p className="text-sm text-gray-600">
              An overview of how currency markets function and the factors
              influencing exchange rate movements.
            </p>
          </div>

          <div className="border p-6 rounded">
            <h3 className="font-semibold mb-3">Introduction to Risk Management</h3>
            <p className="text-sm text-gray-600">
              Core principles of risk control, position sizing, and capital
              preservation strategies.
            </p>
          </div>

          <div className="border p-6 rounded">
            <h3 className="font-semibold mb-3">Market Volatility Explained</h3>
            <p className="text-sm text-gray-600">
              Understanding price fluctuations and macroeconomic influences
              across global markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
