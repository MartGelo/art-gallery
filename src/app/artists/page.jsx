import React from 'react'
import Link from 'next/link'

export default function Artists() {
    return (
        <section
            className="w-full h-screen bg-muted py-12 md:py-24 lg:py-32"
            id="artists">
            <div className="container px-4 md:px-6">
                <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
                    <div className="space-y-4">
                        <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                            Featured Artists
                        </div>
                        <h2 className="lg:leading-tighter text-3xl text-[#a14e46] font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                            Meet Our Talented Artists
                        </h2>
                        <Link
                            href="#"
                            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            prefetch={false}>
                            Explore Artists
                        </Link>
                    </div>
                    <div className="flex flex-col items-start space-y-4">
                        <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                            Artist Profiles
                        </div>
                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                            Learn more about the artists behind our curated
                            collection. Discover their inspirations, techniques,
                            and unique perspectives.
                        </p>
                        <Link
                            href="#"
                            className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none"
                            prefetch={false}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
