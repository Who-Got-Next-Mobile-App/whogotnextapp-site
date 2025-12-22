'use client';

import { useEffect, useState } from 'react';
import Client from 'shopify-buy';

// Types for Shopify products
interface ShopifyProduct {
    id: string;
    title: string;
    description: string;
    images: Array<{ src: string; altText?: string }>;
    variants: Array<{
        id: string;
        title: string;
        price: { amount: string; currencyCode: string };
        available: boolean;
    }>;
}

interface ShopifyProductsProps {
    storeDomain: string;
    storefrontAccessToken: string;
}

export default function ShopifyProducts({
    storeDomain,
    storefrontAccessToken,
}: ShopifyProductsProps) {
    const [products, setProducts] = useState<ShopifyProduct[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Initialize Shopify Buy SDK client
        const client = Client.buildClient({
            domain: storeDomain,
            storefrontAccessToken: storefrontAccessToken,
            apiVersion: '2024-10',
        });

        // Fetch products
        client.product
            .fetchAll()
            .then((fetchedProducts: any) => {
                setProducts(fetchedProducts as ShopifyProduct[]);
                setLoading(false);
            })
            .catch((err: unknown) => {
                console.error('Error fetching products:', err);
                setError('Failed to load products');
                setLoading(false);
            });
    }, [storeDomain, storefrontAccessToken]);

    const handleBuyNow = async (variantId: string) => {
        console.log('🛒 Buy button clicked!');
        console.log('Variant ID:', variantId);
        console.log('Store Domain:', storeDomain);
        console.log('Token exists:', !!storefrontAccessToken);

        try {
            // Initialize client
            const client = Client.buildClient({
                domain: storeDomain,
                storefrontAccessToken: storefrontAccessToken,
                apiVersion: '2024-10',
            });

            console.log('✅ Client initialized');

            // Create checkout
            console.log('📝 Creating checkout...');
            const checkout: any = await client.checkout.create();
            console.log('✅ Checkout created:', checkout);

            // Add item to checkout
            console.log('➕ Adding item to checkout...');
            const checkoutWithItem = await client.checkout.addLineItems(checkout.id, [
                { variantId, quantity: 1 },
            ]);
            console.log('✅ Item added to checkout:', checkoutWithItem);
            console.log('🔗 Checkout URL:', checkoutWithItem.webUrl);

            // Redirect to Shopify checkout
            if (checkoutWithItem.webUrl) {
                console.log('🚀 Redirecting to checkout...');
                window.location.href = checkoutWithItem.webUrl;
            } else {
                throw new Error('No checkout URL received');
            }
        } catch (err: unknown) {
            console.error('❌ Error creating checkout:', err);

            // More detailed error message
            let errorMessage = 'Failed to create checkout. ';
            if (err instanceof Error) {
                errorMessage += err.message;
            }

            alert(errorMessage + '\n\nPlease check the browser console for details.');
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center py-16">
                <div className="text-white/60">Loading products...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-6">
                <div className="text-red-400">{error}</div>
                <p className="mt-2 text-sm text-white/60">
                    Please check your Shopify configuration and try again.
                </p>
            </div>
        );
    }

    if (products.length === 0) {
        return (
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <div className="text-white/60">No products found</div>
                <p className="mt-2 text-sm text-white/55">
                    Add products in your Shopify admin to display them here.
                </p>
            </div>
        );
    }

    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => {
                const firstVariant = product.variants[0];
                const isAvailable = firstVariant?.available;

                return (
                    <div
                        key={product.id}
                        className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition-all hover:border-white/20 hover:bg-white/[0.06]"
                    >
                        {/* Product Image */}
                        {product.images[0] && (
                            <div className="relative aspect-square w-full overflow-hidden bg-white/5">
                                <img
                                    src={product.images[0].src}
                                    alt={product.images[0].altText || product.title}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                        )}

                        {/* Product Info */}
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-white">
                                {product.title}
                            </h3>

                            {product.description && (
                                <p className="mt-2 line-clamp-2 text-sm text-white/60">
                                    {product.description}
                                </p>
                            )}

                            <div className="mt-4 flex items-center justify-between">
                                <div>
                                    <div className="text-2xl font-bold text-white">
                                        ${firstVariant?.price.amount}
                                    </div>
                                    {product.variants.length > 1 && (
                                        <div className="mt-1 text-xs text-white/50">
                                            {product.variants.length} variants
                                        </div>
                                    )}
                                </div>

                                <button
                                    onClick={() => handleBuyNow(firstVariant.id)}
                                    disabled={!isAvailable}
                                    className={`rounded-lg px-6 py-2.5 font-semibold transition-all ${isAvailable
                                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 hover:shadow-lg hover:shadow-purple-500/50'
                                        : 'cursor-not-allowed bg-white/10 text-white/40'
                                        }`}
                                >
                                    {isAvailable ? 'Buy Now' : 'Sold Out'}
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
