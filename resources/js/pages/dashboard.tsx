import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { logout, dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';
import { Head, router } from '@inertiajs/react';
import { LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import React from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex flex-col gap-8 p-6">
                {/* Welcome Header */}
                <div className="relative overflow-hidden rounded-2xl bg-primary px-8 py-12 text-white shadow-xl shadow-primary/20">
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h1 className="text-3xl font-bold mb-2">Welcome to Sekouti Health Portal</h1>
                            <p className="text-primary-foreground/90 text-lg">Your health services and consultation history in one place.</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Button
                                variant="secondary"
                                className="bg-white text-primary hover:bg-secondary font-bold"
                                onClick={(e: React.MouseEvent) => {
                                    e.preventDefault();
                                    router.post(logout());
                                }}
                            >
                                <LogOut className="mr-2 h-4 w-4" />
                                Logout
                            </Button>
                        </div>
                    </div>
                    {/* Decorative pattern */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <PlaceholderPattern className="size-full stroke-white" />
                    </div>
                </div>

                <div className="grid auto-rows-min gap-6 md:grid-cols-3">
                    <div className="flex flex-col gap-2 rounded-xl border border-border p-6 bg-white shadow-sm">
                        <h3 className="font-bold text-lg text-foreground">Active Consultations</h3>
                        <p className="text-muted-foreground text-sm">You have no active consultations at the moment.</p>
                    </div>
                    <div className="flex flex-col gap-2 rounded-xl border border-border p-6 bg-white shadow-sm">
                        <h3 className="font-bold text-lg text-foreground">Health Records</h3>
                        <p className="text-muted-foreground text-sm">Securely uploaded lab reports will appear here.</p>
                    </div>
                    <div className="flex flex-col gap-2 rounded-xl border border-border p-6 bg-white shadow-sm">
                        <h3 className="font-bold text-lg text-foreground">Quick Support</h3>
                        <p className="text-muted-foreground text-sm">Need help? Contact us via WhatsApp anytime.</p>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
