"use client";

import { useState } from "react";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
    }

    return (
        <main className="bg-[#f8fafc] text-neutral-900">
            {/* HEADER */}
            <section className="bg-white border-b py-20">
                <div className="max-w-4xl mx-auto px-6">
                    <h1 className="text-4xl font-semibold mb-6">Contact Us</h1>
                    <h3>Tel: +357 25 761455</h3>
                    <h3>Email: support@icmarkets.com</h3>
                    <p className="text-neutral-600 max-w-2xl leading-relaxed">
                        For academic inquiries, research collaboration requests,
                        or general questions regarding our educational
                        materials, please use the contact form below.
                    </p>
                </div>
            </section>

            {/* CONTACT FORM */}
            <section className="py-20">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="bg-white shadow-sm border rounded-2xl p-10">
                        {submitted ? (
                            <div className="text-center space-y-4">
                                <h2 className="text-2xl font-semibold">
                                    Thank you for your message.
                                </h2>
                                <p className="text-neutral-600">
                                    Your inquiry has been received. We will
                                    respond as appropriate to academic and
                                    informational requests.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        rows={6}
                                        required
                                        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition font-medium"
                                >
                                    Submit Inquiry
                                </button>
                            </form>
                        )}
                    </div>

                    {/* CONTACT INFO BLOCK */}
                    <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
                        <div className="bg-white border rounded-xl p-6">
                            <h3 className="font-semibold mb-2">
                                Academic Inquiries
                            </h3>
                            <p className="text-neutral-600 text-sm">
                                Questions related to curriculum structure and
                                educational materials.
                            </p>
                        </div>

                        <div className="bg-white border rounded-xl p-6">
                            <h3 className="font-semibold mb-2">
                                Research Collaboration
                            </h3>
                            <p className="text-neutral-600 text-sm">
                                Institutional partnerships and academic
                                collaboration requests.
                            </p>
                        </div>

                        <div className="bg-white border rounded-xl p-6">
                            <h3 className="font-semibold mb-2">
                                General Questions
                            </h3>
                            <p className="text-neutral-600 text-sm">
                                Website-related feedback or technical issues.
                            </p>
                        </div>
                    </div>

                    {/* REGISTERED OFFICE */}
                    <div className="mt-20 bg-white border rounded-2xl p-10 text-center">
                        <h3 className="text-xl font-semibold mb-8">
                            Registered Office
                        </h3>

                        <div className="grid md:grid-cols-2 gap-12 text-sm text-neutral-600">
                            <div>
                                <p className="font-semibold text-neutral-900 mb-3">
                                    English
                                </p>
                                <p>
                                    141 Omonoias Avenue
                                    <br />
                                    Th. Maritime 1FL
                                    <br />
                                    3045 Limassol
                                    <br />
                                    Cyprus
                                </p>
                            </div>

                            <div>
                                <p className="font-semibold text-neutral-900 mb-3">
                                    Ελληνικά
                                </p>
                                <p>
                                    Λεωφ. Ομονοίας 141
                                    <br />
                                    Th. Maritime 1FL
                                    <br />
                                    3045 Λεμεσός
                                    <br />
                                    Κύπρος
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* DISCLAIMER */}
                    <div className="mt-16 text-sm text-neutral-500 leading-relaxed text-center max-w-2xl mx-auto">
                        This platform provides educational content only. It does
                        not offer investment services, financial advice,
                        brokerage accounts, or trading execution. Messages
                        requesting financial advice will not receive a response.
                    </div>
                </div>
            </section>
        </main>
    );
}
