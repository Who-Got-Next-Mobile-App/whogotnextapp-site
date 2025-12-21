export default function UpdatesPage() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-16">
            <h1 className="text-3xl font-bold">Product Updates</h1>
            <p className="mt-3 text-gray-600">
                What we ship and what’s coming next.
            </p>

            <div className="mt-8 rounded-xl border p-6">
                <h2 className="font-semibold">Dec 21, 2025</h2>
                <ul className="mt-3 list-disc pl-5 text-gray-700">
                    <li>Website launched</li>
                    <li>HubSpot subscribe flow added</li>
                    <li>Merch section scaffolded</li>
                </ul>
            </div>
        </main>
    );
}
