import Featured from './featured/page'
import Experience from './experience/page'
import Artists from './artists/page'

export default function Homepage() {
    return (
        <div className="flex flex-col min-h-dvh">
            <main className="flex-1">
                <section className="w-full">
                    <img
                        src="/art gallery.jpg"
                        width={1920}
                        height={1080}
                        alt="Gallery"
                        className="aspect-video w-full object-cover"
                    />
                </section>
                <Featured />
                <Experience />
                <Artists />
            </main>
        </div>
    )
}
