export const metadata = {
    title: "Privacy Policy - IC Markets",
    description: "Privacy Policy of IC Markets",
};

export default function PrivacyPolicy() {
    return (
        <main className="bg-[#f8fafc] text-neutral-900 py-20">
            <div className="max-w-4xl mx-auto px-6 space-y-12">
                <header>
                    <h1 className="text-4xl font-semibold mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-neutral-600 text-sm">
                        Effective Date: February 2026
                    </p>
                </header>

                <Section title="1. Introduction">
                    <p>
                        This Privacy Policy explains how this educational
                        platform collects, uses, and protects information when
                        users access the website. The platform provides academic
                        content related to financial systems and does not offer
                        financial services, brokerage activity, or investment
                        products.
                    </p>
                </Section>

                <Section title="2. Information We Collect">
                    <p>
                        We may collect limited non-personal information
                        automatically, including:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Browser type and version</li>
                        <li>Device type</li>
                        <li>IP address (anonymized where applicable)</li>
                        <li>Pages visited and interaction metrics</li>
                    </ul>
                    <p>
                        Personal information is only collected if voluntarily
                        submitted through contact forms or communication
                        channels.
                    </p>
                </Section>

                <Section title="3. Use of Information">
                    <p>Information collected is used solely for:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            Improving website functionality and user experience
                        </li>
                        <li>Analyzing traffic and engagement trends</li>
                        <li>Responding to user inquiries</li>
                    </ul>
                    <p>
                        We do not sell, rent, or distribute personal information
                        to third parties.
                    </p>
                </Section>

                <Section title="4. Cookies and Tracking Technologies">
                    <p>
                        The website may use cookies or analytics tools to
                        understand visitor behavior and improve performance.
                        Users may disable cookies in browser settings.
                    </p>
                </Section>

                <Section title="5. Data Security">
                    <p>
                        Reasonable technical and organizational measures are
                        implemented to protect data from unauthorized access or
                        misuse. However, no internet-based system is entirely
                        secure.
                    </p>
                </Section>

                <Section title="6. Third-Party Links">
                    <p>
                        The website may contain links to external educational or
                        informational resources. We are not responsible for the
                        privacy practices of third-party websites.
                    </p>
                </Section>

                <Section title="7. Children's Privacy">
                    <p>
                        This platform is intended for general educational
                        audiences and does not knowingly collect personal data
                        from individuals under the age of 18.
                    </p>
                </Section>

                <Section title="8. Policy Updates">
                    <p>
                        This Privacy Policy may be updated periodically.
                        Continued use of the website constitutes acceptance of
                        any revisions.
                    </p>
                </Section>

                <Section title="9. Contact">
                    <p>
                        For privacy-related inquiries, users may contact the
                        platform through the official communication channels
                        provided on the website.
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
