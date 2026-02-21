import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
    return (
        <main className="bg-[#f8fafc] text-neutral-900">
            {/* HERO */}
            <section className="relative pt-28 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
                {/* Soft background gradient */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-white to-indigo-50" />

                <div className="relative max-w-6xl mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6">
                        Financial Systems
                        <span className="block text-indigo-600">
                            Education Institute
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto mb-10">
                        Structured academic resources exploring market
                        structure, financial risk systems, and macroeconomic
                        dynamics.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" asChild>
                            <Link
                                href="/topics"
                                className="flex items-center gap-2"
                            >
                                Explore Topics
                                <ArrowRight size={16} />
                            </Link>
                        </Button>

                        {/* <Button variant="outline" size="lg" asChild>
                            <Link href="/resources">Academic Library</Link>
                        </Button> */}
                    </div>
                </div>
            </section>

            <section className="py-20 lg:py-28 bg-[#f1f5f9]">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
                        Institutional Clarity in Complex Systems
                    </h2>

                    <p className="text-neutral-600 leading-relaxed">
                        Financial systems are interconnected and multi-layered.
                        This institute delivers academically structured material
                        designed to simplify foundational mechanisms without
                        promotional bias.
                    </p>
                </div>
            </section>

            {/* PILLARS */}
            <section className="py-20 lg:py-28 bg-white bg-linear-to-br from-blue-50 via-white to-indigo-50">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
                            Core Academic Pillars
                        </h2>
                        <p className="text-neutral-600 max-w-2xl mx-auto">
                            Three integrated domains forming the structural
                            foundation of financial system education.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <PillarCard
                            title="Market Structure & Liquidity"
                            description="Price discovery, liquidity theory, and institutional flow mechanics."
                        />

                        <PillarCard
                            title="Risk & Financial Stability"
                            description="Volatility frameworks, systemic interconnectedness, and risk modeling."
                        />

                        <PillarCard
                            title="Macroeconomic Systems"
                            description="Inflation dynamics, monetary policy transmission, and global capital flows."
                        />
                    </div>
                </div>
            </section>

            <section className="py-36 bg-white border-y border-neutral-200 ">
                <div className="max-w-4xl mx-auto px-8">
                    <h2 className="text-3xl font-semibold text-center mb-16">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-10 text-neutral-600">
                        <div>
                            <h3 className="font-semibold text-neutral-900 mb-2">
                                Do you provide trading services?
                            </h3>
                            <p>
                                No. This platform provides educational content
                                only and does not offer trading, brokerage, or
                                execution services.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-neutral-900 mb-2">
                                Is this financial advice?
                            </h3>
                            <p>
                                No. All material is informational and academic
                                in nature.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-neutral-900 mb-2">
                                Who is this suitable for?
                            </h3>
                            <p>
                                Individuals seeking structured understanding of
                                financial market systems and macroeconomic
                                dynamics.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-24 lg:py-32 bg-white text-center border-t bg-linear-to-br from-blue-50 via-white to-indigo-50 ">
                <div className="max-w-3xl mx-auto px-6 lg:px-8 ">
                    <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
                        Begin Structured Learning
                    </h2>

                    <p className="text-neutral-600 mb-10">
                        Access detailed academic publications within our
                        research library.
                    </p>

                    <Button size="lg" asChild>
                        <Link href="/topics">View Library</Link>
                    </Button>
                </div>
            </section>

        </main>
    );
}

/* Pillar Card */
function PillarCard({ title, description }) {
    return (
        <div className="group rounded-2xl border bg-white p-8 shadow-sm transition duration-300 hover:shadow-lg hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-3 group-hover:text-indigo-600 transition">
                {title}
            </h3>
            <p className="text-neutral-600 leading-relaxed">{description}</p>
        </div>
    );
}
