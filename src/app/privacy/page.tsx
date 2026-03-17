"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Privacy() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-3xl mx-auto w-full bg-background transition-colors">
            <div className="mt-20">
                <Link href="/" className="inline-flex items-center gap-2 text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors text-sm font-medium mb-12">
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>

                <h1 className="text-4xl md:text-5xl font-display font-bold leading-[1.1] mb-8 text-black dark:text-white transition-colors">
                    Privacy Policy
                </h1>

                <p className="text-black/40 dark:text-white/40 text-xs mb-8 transition-colors">Last updated: March 2026</p>

                <div className="flex flex-col gap-10 text-black/70 dark:text-white/70 text-sm leading-relaxed font-light transition-colors">
                    <section>
                        <h2 className="text-xl font-bold text-black dark:text-white mb-3 transition-colors">1. Information We Collect</h2>
                        <p>We collect information when you fill out forms, like your name, email, and phone number. We also collect technical info like your IP address and what pages you visit. We use this only to improve and secure our website.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black dark:text-white mb-3 transition-colors">2. How We Use Your Information</h2>
                        <p>We use your information only to respond to you, schedule meetings, process requests, and send service updates. We don't use it for marketing. We may use anonymous data to improve our website.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black dark:text-white mb-3 transition-colors">3. Cookies and Tracking Technologies</h2>
                        <p>We use cookies to remember your preferences and see how people use our site. You can disable cookies in your browser. Some features may not work if cookies are off. We don't use cookies for ads or tracking.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black dark:text-white mb-3 transition-colors">4. Third-Party Services</h2>
                        <p>We work with companies like Cal.com for scheduling, Make.com for forms, and Vercel for hosting. These companies follow strict privacy rules and can't use your data for their own purposes. We recommend reading their privacy policies too.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black dark:text-white mb-3 transition-colors">5. Data Sharing</h2>
                        <p>We don't sell or share your personal information. We may share general information about our visitors with partners (not linked to you). If required by law, we will disclose information to protect our business or people's safety.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black dark:text-white mb-3 transition-colors">6. Data Security</h2>
                        <p>We use industry-standard security like HTTPS encryption to protect your data. Only staff who need it can access your information. However, no internet method is 100% safe. We do our best to protect you.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black dark:text-white mb-3 transition-colors">7. Your Rights</h2>
                        <p>Depending on where you are, you may be able to: get a copy of your data, ask us to fix it, ask us to delete it, or withdraw consent. Contact us at our email to ask for any of these.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black dark:text-white mb-3 transition-colors">8. Children&apos;s Privacy</h2>
                        <p>Our services are for people 13 and older. We don't knowingly collect info from kids. If you know a child gave us info, please let us know.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black dark:text-white mb-3 transition-colors">9. Changes to This Policy</h2>
                        <p>We may update this policy anytime. Changes happen immediately when posted. Check back to see updates.</p>
                    </section>

                    <section className="mt-8 pt-8 border-t border-black/20 dark:border-white/10 transition-colors">
                        <p>If you have any questions about this Privacy Policy, the practices of this site, or your dealings with Devscale Lab, please contact us at:</p>
                        <p className="mt-2 text-black dark:text-white font-medium transition-colors">contact@devscalelab.com</p>
                    </section>
                </div>
            </div>
        </div>
    );
}

