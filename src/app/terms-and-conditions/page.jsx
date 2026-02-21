export default function TermsAndConditions() {
    return (
        <main className="bg-[#f8fafc] text-neutral-900 py-20">
            <div className="max-w-4xl mx-auto px-6 space-y-12">
                <header>
                    <h1 className="text-4xl font-semibold mb-4">
                        Terms and Conditions
                    </h1>
                    <p className="text-neutral-600 text-sm">
                        Effective Date: February 2026
                    </p>
                </header>

                <Section title="1. Acceptance of Terms">
                    <p>
                        By accessing this website, users agree to comply with
                        and be bound by these Terms and Conditions. If users do
                        not agree, they should discontinue use of the platform.
                    </p>
                </Section>

                <Section title="2. Nature of the Platform">
                    <p>
                        This website provides educational content related to
                        financial systems, macroeconomics, market structure, and
                        risk analysis.
                    </p>
                    <p>The platform does not provide:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Investment advice</li>
                        <li>Trading services</li>
                        <li>Brokerage services</li>
                        <li>Financial product recommendations</li>
                    </ul>
                </Section>

                <Section title="3. No Financial Advice">
                    <p>
                        All materials are provided for informational and
                        academic purposes only. Nothing on this website
                        constitutes financial, legal, or investment advice.
                    </p>
                    <p>
                        Users are solely responsible for their own financial
                        decisions.
                    </p>
                </Section>

                <Section title="4. Intellectual Property">
                    <p>
                        All content on this website, including text, design,
                        structure, and layout, is the intellectual property of
                        the platform unless otherwise stated. Unauthorized
                        reproduction is prohibited.
                    </p>
                </Section>

                <Section title="5. Limitation of Liability">
                    <p>
                        The platform shall not be liable for any loss or damage
                        arising from reliance on the information provided.
                    </p>
                    <p>
                        Educational materials are provided "as is" without
                        warranties of any kind.
                    </p>
                </Section>

                <Section title="6. External Links">
                    <p>
                        References to external resources are provided for
                        educational purposes only. The platform is not
                        responsible for third-party content.
                    </p>
                </Section>

                <Section title="7. Modifications">
                    <p>
                        These Terms may be updated periodically. Continued use
                        of the website constitutes acceptance of revised terms.
                    </p>
                </Section>

                <Section title="8. Governing Law">
                    <p>
                        These Terms shall be governed by applicable local laws,
                        without regard to conflict of law principles.
                    </p>
                </Section>
            </div>
        </main>
    );
}

function Section({ title, children }) {
    return (
        <section>
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            <div className="text-neutral-700 leading-relaxed space-y-4">
                {children}
            </div>
        </section>
    );
}
