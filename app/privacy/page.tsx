import SiteShell from "@/components/SiteShell";

export default function PrivacyPage() {
    return (
        <SiteShell title="Privacy Policy" subtitle="Your privacy matters to us" showHero={true}>
            <div className="prose prose-invert max-w-none">
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                    <p className="text-white/70 leading-relaxed">
                        Who Got Next™ ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                    <h3 className="text-xl font-semibold mb-3 mt-6">Personal Information</h3>
                    <p className="text-white/70 leading-relaxed mb-4">
                        We may collect personal information that you voluntarily provide to us when you:
                    </p>
                    <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                        <li>Register for an account</li>
                        <li>Create a user profile</li>
                        <li>Join or create games and events</li>
                        <li>Communicate with other users</li>
                        <li>Contact our support team</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 mt-6">Usage Data</h3>
                    <p className="text-white/70 leading-relaxed">
                        We automatically collect certain information when you use our app, including device information, IP address, app usage statistics, and location data (with your permission).
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                    <p className="text-white/70 leading-relaxed mb-4">
                        We use the information we collect to:
                    </p>
                    <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                        <li>Provide, operate, and maintain our services</li>
                        <li>Connect you with other players for basketball and pickleball games</li>
                        <li>Send you notifications about games, events, and updates</li>
                        <li>Improve and personalize your experience</li>
                        <li>Communicate with you about your account or our services</li>
                        <li>Detect, prevent, and address technical issues or fraudulent activity</li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Data Sharing and Disclosure</h2>
                    <p className="text-white/70 leading-relaxed mb-4">
                        We do not sell your personal information. We may share your information in the following circumstances:
                    </p>
                    <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                        <li><strong>With other users:</strong> Your profile information and game participation may be visible to other users</li>
                        <li><strong>Service providers:</strong> We may share data with third-party service providers who assist us in operating our app</li>
                        <li><strong>Legal requirements:</strong> We may disclose information if required by law or to protect our rights</li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                    <p className="text-white/70 leading-relaxed">
                        We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
                    <p className="text-white/70 leading-relaxed mb-4">
                        Depending on your location, you may have the following rights regarding your personal information:
                    </p>
                    <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                        <li>Access and receive a copy of your personal data</li>
                        <li>Correct inaccurate or incomplete data</li>
                        <li>Request deletion of your data</li>
                        <li>Object to or restrict processing of your data</li>
                        <li>Data portability</li>
                        <li>Withdraw consent at any time</li>
                    </ul>
                </section>

                <section className="mb-12 rounded-2xl border border-[#F78A3A]/20 bg-gradient-to-br from-[#F78A3A]/10 to-[#EE3D2C]/10 p-8">
                    <h2 className="text-2xl font-bold mb-4">Request Data Deletion</h2>
                    <p className="text-white/70 leading-relaxed mb-6">
                        If you would like to request the deletion of your personal data, please contact us at the email address below. We will process your request in accordance with applicable data protection laws.
                    </p>
                    <a
                        href="mailto:support@whogotnextapp.com?subject=Data%20Deletion%20Request&body=Please%20delete%20my%20account%20and%20all%20associated%20data.%0A%0AAccount%20Email%3A%20%0AAccount%20Username%3A%20"
                        className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#F78A3A] to-[#EE3D2C] px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Request Data Deletion
                    </a>
                    <p className="text-white/50 text-sm mt-4">
                        Email: <a href="mailto:support@whogotnextapp.com" className="text-[#F78A3A] hover:underline">support@whogotnextapp.com</a>
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
                    <p className="text-white/70 leading-relaxed">
                        Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
                    <p className="text-white/70 leading-relaxed">
                        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date below.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                    <p className="text-white/70 leading-relaxed mb-4">
                        If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                    </p>
                    <div className="text-white/70">
                        <p>Email: <a href="mailto:support@whogotnextapp.com" className="text-[#F78A3A] hover:underline">support@whogotnextapp.com</a></p>
                    </div>
                </section>

                <div className="text-white/50 text-sm pt-8 border-t border-white/10">
                    <p>Last Updated: January 22, 2026</p>
                </div>
            </div>
        </SiteShell>
    );
}
