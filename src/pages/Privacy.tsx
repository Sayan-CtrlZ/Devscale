import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Privacy() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-3xl mx-auto w-full">
            <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-medium mb-12">
                <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>

            <h1 className="text-4xl md:text-5xl font-display font-bold leading-[1.1] mb-8">
                Privacy Policy
            </h1>

            <div className="flex flex-col gap-8 text-white/70 text-sm leading-relaxed font-light">
                <section>
                    <h2 className="text-xl font-bold text-white mb-3">1. Information We Collect</h2>
                    <p>We collect information that you manually submit to us such as names, email addresses, and phone numbers via our contact and booking forms. We may also automatically collect standard web analytical data.</p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-white mb-3">2. How We Use Your Information</h2>
                    <p>The information we collect is solely used to communicate with you regarding your inquiries, booked appointments, and updates related to our ecosystem services.</p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-white mb-3">3. Data Sharing</h2>
                    <p>We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users.</p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-white mb-3">4. Your Rights</h2>
                    <p>You have the right to request access to your personal data, and to instruct us to correct, update, or delete it. Please contact us to exercise these rights.</p>
                </section>

                <section className="mt-8 pt-8 border-t border-white/10">
                    <p>If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:</p>
                    <p className="mt-2 text-white font-medium">devscale.labs@gmail.com</p>
                </section>
            </div>
        </div>
    );
}
