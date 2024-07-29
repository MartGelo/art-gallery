import React from 'react'
import Link from 'next/link'

export default function Experience() {
    return (
        <section
            className="w-full py-12 md:py-24 lg:py-32 bg-muted"
            id="experience">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                                360 Degree Experience
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Immerse Yourself in the Art
                            </h2>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Explore our interactive 360-degree art gallery
                                and experience the artwork like never before.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Link
                                href="#"
                                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                prefetch={false}>
                                Start 360 Tour
                            </Link>
                            <Link
                                href="#"
                                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                prefetch={false}>
                                Learn More
                            </Link>
                        </div>
                    </div>
                    <div className="relative h-[500px] overflow-hidden rounded-xl">
                        <img
                            src="/frontview.jpg"
                            alt="Lantern Galleries 360 Degree Experience"
                            fill
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
