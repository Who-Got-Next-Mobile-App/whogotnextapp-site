import SiteShell from "../_components/SiteShell";

export default function SupportPage() {
    return (
        <SiteShell>
            <div className="mx-auto max-w-4xl px-6 py-24">
                <h1 className="text-4xl font-extrabold tracking-tight text-white mb-8">
                    Support
                </h1>

                <div className="space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-[#F78A3A]">Contact Us</h2>
                        <p className="text-white/80 leading-relaxed">
                            Need help with the Who Got Next™ app? We're here to assist you.
                            The best way to get support is to email us directly.
                        </p>
                        <div className="mt-6">
                            <a
                                href="mailto:support@whogotnextapp.com"
                                className="inline-flex items-center rounded-xl bg-white/10 px-6 py-3 text-sm font-semibold text-white border border-white/20 hover:bg-white/15 transition-colors"
                            >
                                support@whogotnextapp.com
                            </a>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-[#F78A3A]">Safety & Reporting</h2>
                        <p className="text-white/80 leading-relaxed mb-4">
                            Your safety is our priority. If you encounter any issues with other users, inappropriate content, or safety concerns at a court, please let us know immediately.
                        </p>
                        <div className="space-y-4">
                            <div className="rounded-xl bg-red-500/10 border border-red-500/20 p-4">
                                <h3 className="text-red-400 font-semibold">Report Absence of Safety</h3>
                                <p className="text-sm text-white/70 mt-1">
                                    To report urgent safety concerns or abusive behavior, please email <a href="mailto:safety@whogotnextapp.com" className="text-red-400 hover:underline">safety@whogotnextapp.com</a> with the subject "SAFETY REPORT".
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-[#F78A3A]">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold text-white/90">How do I find local courts?</h3>
                                <p className="mt-2 text-white/60">
                                    Open the app and use the map view to see active courts in your area. You can filter by basketball or pickleball.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white/90">How do I report an issue with a court?</h3>
                                <p className="mt-2 text-white/60">
                                    On the court detail page, tap the "Report" button to let us know if information is incorrect or if there's a problem at the location.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white/90">How do I block or report a user?</h3>
                                <p className="mt-2 text-white/60">
                                    You can block or report players directly from their profile page in the app. This will hide their presence from you and flag them for review by our moderation team.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white/90">Is my data secure?</h3>
                                <p className="mt-2 text-white/60">
                                    Yes, we take your privacy seriously. Check out our <a href="/privacy-policy.html" className="text-[#F78A3A] hover:underline">Privacy Policy</a> for more details on how we handle your data.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-8">
                        <h2 className="text-xl font-bold mb-4">About Who Got Next™</h2>
                        <p className="text-white/60 text-sm leading-relaxed">
                            Who Got Next™ is designed to help hoopers and pickleballers find games, run the court, and own the game.
                            We are constantly updating the app to provide the best experience for our community.
                            If you have suggestions or feedback, please reach out!
                        </p>
                    </section>
                </div>
            </div>
        </SiteShell>
    );
}
