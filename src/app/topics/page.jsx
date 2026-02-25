import Link from "next/link";

export const metadata = {
    title: "Topics - IC Markets",
    description: "Educational Academic Topics for Financial Education",
};

export default function Topics() {
    const pillars = [
        {
            id: "market-structure",
            title: "Market Structure & Liquidity",
            modules: [
                {
                    id: "liquidity-dimensions",
                    number: "1.1",
                    title: "Liquidity Dimensions & Market Depth",
                },
                {
                    id: "order-book-mechanics",
                    number: "1.2",
                    title: "Order Book Microstructure and Bid-Ask Formation",
                },
                {
                    id: "price-discovery",
                    number: "1.3",
                    title: "Information Aggregation and Price Discovery Theory",
                },
                {
                    id: "liquidity-stress",
                    number: "1.4",
                    title: "Market Liquidity Under Volatility and Structural Shock",
                },
            ],
        },
        {
            id: "risk-stability",
            title: "Risk, Volatility & Financial Stability",
            modules: [
                {
                    id: "market-risk",
                    number: "2.1",
                    title: "Statistical Volatility and Quantitative Risk Metrics",
                },
                {
                    id: "systemic-risk",
                    number: "2.2",
                    title: "Systemic Interconnectedness and Contagion Transmission",
                },
                {
                    id: "diversification",
                    number: "2.3",
                    title: "Correlation Structures and Portfolio Stability",
                },
                {
                    id: "behavioral-risk",
                    number: "2.4",
                    title: "Cognitive Bias and Risk Perception in Financial Markets",
                },
            ],
        },
        {
            id: "macroeconomic-systems",
            title: "Macroeconomic Systems & Monetary Policy",
            modules: [
                {
                    id: "inflation-measurement",
                    number: "3.1",
                    title: "Inflation Indices and Purchasing Power Dynamics",
                },
                {
                    id: "monetary-policy",
                    number: "3.2",
                    title: "Interest Rate Channels and Liquidity Cycles",
                },
                {
                    id: "yield-curve",
                    number: "3.3",
                    title: "Term Structure of Interest Rates and Economic Signaling",
                },
                {
                    id: "capital-flows",
                    number: "3.4",
                    title: "Cross-Border Capital Movement and Exchange Rate Dynamics",
                },
            ],
        },
    ];

    return (
        <main className="bg-[#f8fafc] text-neutral-900">
            {/* Header */}
            <section className="py-20 border-b bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <h1 className="text-4xl font-semibold mb-6">
                        Academic Topic Framework
                    </h1>
                    <p className="text-neutral-600">
                        Structured modules organized under three academic
                        pillars.
                    </p>
                </div>
            </section>

            {/* Pillars */}
            <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">
                {pillars.map((pillar) => (
                    <div key={pillar.id}>
                        <h2 className="text-2xl font-semibold mb-6 border-b pb-3">
                            {pillar.title}
                        </h2>

                        <ul className="space-y-3">
                            {pillar.modules.map((module) => (
                                <li key={module.id}>
                                    <Link
                                        href={`/topics/${module.id}`}
                                        className="flex justify-between border-b pb-2 hover:text-green-500 transition"
                                    >
                                        <span>
                                            {module.number} — {module.title}
                                        </span>
                                        <span className="text-sm text-green-500">
                                            Click
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </main>
    );
}
