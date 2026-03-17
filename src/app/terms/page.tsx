import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: 'Terms and Conditions | Devscale Lab',
    description: 'Terms and conditions for using Devscale Lab services.',
};

export default function TermsAndConditions() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-3xl mx-auto w-full bg-background transition-colors">
            <div className="mt-20">
                <Link href="/" className="inline-flex items-center gap-2 text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors text-sm font-medium mb-12">
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>

                <h1 className="text-4xl md:text-5xl font-display font-bold leading-[1.1] mb-8 text-black dark:text-white transition-colors">
                    Terms and Conditions
                </h1>

                <p className="text-black/40 dark:text-white/40 text-xs mb-8 transition-colors">Last updated: March 2026</p>

                <div className="flex flex-col gap-10 text-black/70 dark:text-white/70 text-sm leading-relaxed font-light transition-colors">
                    <section>
                        <h2 className="text-xl font-bold text-black dark:text-white mb-3 transition-colors">1. Agreement to Terms</h2>
                        <p>By accessing and using this website and our services, you agree to be bound by these terms and conditions. If you do not agree to any part of these terms, you may not use our services. We reserve the right to modify these terms at any time, and your continued use of the site constitutes acceptance of any changes.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black dark:text-white mb-3 transition-colors">2. Use License</h2>
                        <p>Permission is granted to temporarily download one copy of the materials (information or software) on Devscale Lab's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title. Under this license you may not: modify or copy the materials, use the materials for any commercial purpose or for any public display, attempt to decompile or reverse engineer any software contained on the website, remove any copyright or other proprietary notations from the materials, or transfer the materials to another person or "mirror" the materials on any other server.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black dark:text-white mb-3 transition-colors">3. Disclaimer</h2>
                        <p>The materials on Devscale Lab's website are provided on an "as is" basis. Devscale Lab makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black dark:text-white mb-3 transition-colors">4. Limitations</h2>
                        <p>In no event shall Devscale Lab or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Devscale Lab's website, even if Devscale Lab or a Devscale Lab authorized representative has been notified orally or in writing of the possibility of such damage.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black dark:text-white mb-3 transition-colors">5. Accuracy of Materials</h2>
                        <p>The materials appearing on Devscale Lab's website could include technical, typographical, or photographic errors. Devscale Lab does not warrant that any of the materials on the website are accurate, complete, or current. Devscale Lab may make changes to the materials contained on the website at any time without notice.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black dark:text-white mb-3 transition-colors">6. Links</h2>
                        <p>Devscale Lab has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Devscale Lab of the site. Use of any such linked website is at the user's own risk.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black dark:text-white mb-3 transition-colors">7. Modifications</h2>
                        <p>Devscale Lab may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black dark:text-white mb-3 transition-colors">8. Governing Law</h2>
                        <p>These terms and conditions are governed by and construed in accordance with international law, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black dark:text-white mb-3 transition-colors">9. Intellectual Property Rights</h2>
                        <p>Unless otherwise stated, Devscale Lab and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may view and print pages from the website for personal use, subject to restrictions set in these terms and conditions. You must not republish material from this website in any way without prior written permission from Devscale Lab.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black dark:text-white mb-3 transition-colors">10. Acceptable Use</h2>
                        <p>You agree not to use this website for any purpose that is unlawful or prohibited by these terms. You agree not to use this website to transmit any harmful, threatening, abusive, defamatory, obscene, or otherwise objectionable material or to conduct any activity that restricts or inhibits anyone's use or enjoyment of the website.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black dark:text-white mb-3 transition-colors">11. Contact Us</h2>
                        <p>If you have any questions about these terms and conditions, please contact us at contact@devscalelab.com or visit our contact page.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
