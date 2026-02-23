import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
    return (
        <footer className="border-slate-800 bg-slate-950">
            <section className="py-20 bg-slate-950 border-t border-neutral-200">
                <div className="max-w-4xl mx-auto px-8 text-center">
                    <p className="text-sm text-slate-400 leading-relaxed">
                        This website provides educational content only. It does
                        not offer financial advice, brokerage services, or
                        trading execution. Users remain responsible for their
                        own financial decisions.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-4 gap-10 text-sm text-slate-400">

                    {/* About */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">
                            IC Markets Group
                        </h4>
                        <p>
                            Independent financial market education focused on
                            transparency, fundamentals, and responsible
                            participation.
                        </p>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">
                            Company
                        </h4>
                        <div className="flex flex-col gap-2">
                            <Link href="/about">About</Link>
                            <Link href="/topics">Topics</Link>
                            <Link href="/contact-us">Contact</Link>
                        </div>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">
                            Legal
                        </h4>
                        <div className="flex flex-col gap-2">
                            <Link href="/privacy-policy">
                                Privacy Policy
                            </Link>
                            <Link href="/terms-and-conditions">
                                Terms & Conditions
                            </Link>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">
                            Contact
                        </h4>

                        <p className="mb-3">
                            Contact: +248 467 19 76
                        </p>
                        <p className="mb-3">
                            Email: support@icmarkets.com
                        </p>

                        <div className="space-y-3">
                            <div>
                                <p className="text-white font-medium">
                                    Registered Address (English)
                                </p>
                                <p>
                                    141 Omonoias Avenue<br />
                                    Th. Maritime 1FL<br />
                                    3045 Limassol<br />
                                    Cyprus
                                </p>
                            </div>

                            <div>
                                <p className="text-white font-medium">
                                    Εγγεγραμμένη Διεύθυνση (Ελληνικά)
                                </p>
                                <p>
                                    Λεωφ. Ομονοίας 141<br />
                                    Th. Maritime 1FL<br />
                                    3045 Λεμεσός<br />
                                    Κύπρος
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <Separator className="my-8 bg-slate-800" />

                <div className="text-center text-xs text-slate-500">
                    © {new Date().getFullYear()} IC Markets Group LTD . All rights reserved.
                </div>
            </div>
        </footer>
    );
}