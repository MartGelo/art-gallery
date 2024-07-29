import React from 'react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function Featured() {
    return (
        <section
            className="w-full h-screen py-12 md:py-24 lg:py-32"
            id="featured">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                            Featured Artworks
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#a14e46]">
                            Explore Our Curated Collection
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Discover the latest and greatest works from our
                            talented artists.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <Card className="group">
                        <CardContent>
                            <img
                                src="/art1.jpg"
                                width={400}
                                height={400}
                                alt="Artwork 1"
                                className="aspect-square w-full overflow-hidden rounded-md object-cover transition-all group-hover:scale-105"
                            />
                            <div className="mt-4 space-y-1">
                                <h3 className="text-lg font-semibold">
                                    Radiant Bloom
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    by Jane Doe
                                </p>
                                <p className="text-sm text-primary">$1,200</p>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button
                                variant="outline"
                                size="sm"
                                className="bg-[#c55a50]">
                                View
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card className="group">
                        <CardContent>
                            <img
                                src="/art2.jpg"
                                width={400}
                                height={400}
                                alt="Artwork 2"
                                className="aspect-square w-full overflow-hidden rounded-md object-cover transition-all group-hover:scale-105"
                            />
                            <div className="mt-4 space-y-1">
                                <h3 className="text-lg font-semibold">
                                    Ethereal Embrace
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    by John Smith
                                </p>
                                <p className="text-sm text-primary">$850</p>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button
                                variant="outline"
                                size="sm"
                                className="bg-[#c55a50]">
                                View
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card className="group">
                        <CardContent>
                            <img
                                src="/art3.jpg"
                                width={400}
                                height={400}
                                alt="Artwork 3"
                                className="aspect-square w-full overflow-hidden rounded-md object-cover transition-all group-hover:scale-105"
                            />
                            <div className="mt-4 space-y-1">
                                <h3 className="text-lg font-semibold">
                                    Chromatic Fusion
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    by Sarah Lee
                                </p>
                                <p className="text-sm text-primary">$1,500</p>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button
                                variant="outline"
                                size="sm"
                                className="bg-[#c55a50]">
                                View
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card className="group">
                        <CardContent>
                            <img
                                src="/art4.jpg"
                                width={400}
                                height={400}
                                alt="Artwork 4"
                                className="aspect-square w-full overflow-hidden rounded-md object-cover transition-all group-hover:scale-105"
                            />
                            <div className="mt-4 space-y-1">
                                <h3 className="text-lg font-semibold">
                                    Celestial Whispers
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    by Michael Chen
                                </p>
                                <p className="text-sm text-primary">$2,200</p>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button
                                variant="outline"
                                size="sm"
                                className="bg-[#c55a50]">
                                View
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    )
}
