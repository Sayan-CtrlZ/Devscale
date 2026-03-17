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
                        <p>We collect information that you voluntarily submit to us, such as your full name, email address, phone number, and project details via our contact and booking forms. We may also automatically collect standard web analytics data including your IP address, browser type, operating system, referring URLs, and pages visited. This technical information is used solely to maintain and improve the security and performance of our website.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black dark:text-white mb-3 transition-colors">2. How We Use Your Information</h2>
                        <p>The personal information we collect is used exclusively to respond to your inquiries, schedule consultations, process project requests, send service-related communications, and deliver updates related to our digital ecosystem services. We do not use your information for any marketing purposes without your prior consent. We may use anonymized, aggregated data to improve our services and website experience.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black dark:text-white mb-3 transition-colors">3. Cookies and Tracking Technologies</h2>
                        <p>Our website may use cookies and similar tracking technologies to enhance your browsing experience. These are small data files stored on your browser that help us remember your preferences and analyze site usage. You can configure your browser to refuse cookies or alert you when cookies are being sent. Note that some parts of our website may not function correctly if cookies are disabled. We do not use cookies for advertising or cross-site tracking.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black dark:text-white mb-3 transition-colors">4. Third-Party Services</h2>
                        <p>We use trusted third-party services to operate our business, including Cal.com for appointment scheduling, Make.com for form submission automation, and Vercel for website hosting. These providers process certain data on our behalf under strict confidentiality agreements and are not permitted to use your data for their own purposes. We encourage you to review the privacy policies of any third-party services you interact with via our website.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black dark:text-white mb-3 transition-colors">5. Data Sharing</h2>
                        <p>We do not sell, trade, or rent your personal identification information to third parties. We may share generic aggregated demographic information — not linked to any personal identification information — about our visitors and users with our business partners and advertisers. We may also disclose your information where required by law or to protect the rights, property, or safety of DevScale Lab, our clients, or others.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black dark:text-white mb-3 transition-colors">6. Data Security</h2>
                        <p>We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. This includes using HTTPS encryption for all data in transit, and limiting access to personal information to only those staff members who need it to perform their duties. However, no method of transmission over the internet is 100% secure — while we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black dark:text-white mb-3 transition-colors">7. Your Rights</h2>
                        <p>Depending on your location, you may have the following rights regarding your personal data: the right to access a copy of the information we hold about you; the right to request correction of inaccurate or incomplete data; the right to request deletion of your personal data; the right to withdraw consent at any time where processing is based on consent; and the right to lodge a complaint with a supervisory authority. To exercise any of these rights, please contact us directly via email.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black dark:text-white mb-3 transition-colors">8. Children&apos;s Privacy</h2>
                        <p>Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information without parental consent, please contact us so that we may take appropriate action.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black dark:text-white mb-3 transition-colors">9. Changes to This Policy</h2>
                        <p>We reserve the right to update this Privacy Policy at any time. Changes will be effective immediately upon publication to this page. We encourage you to review this page periodically to stay informed about how we are protecting your information. Your continued use of our website after changes are posted constitutes your acknowledgment of the updated policy.</p>
                    </section>

                    <section className="mt-8 pt-8 border-t border-black/10 dark:border-white/10 transition-colors">
                        <p>If you have any questions about this Privacy Policy, the practices of this site, or your dealings with DevScale Lab, please contact us at:</p>
                        <p className="mt-2 text-black dark:text-white font-medium transition-colors">devscale.labs@gmail.com</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
