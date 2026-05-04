import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import LearningStats from "@/components/learning-stats"

export default function Home() {
  return (
    <div>
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Hello, I&apos;m</h1>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary">Moaz</span> Elmorshedy
            </h2>
            <h3 className="text-xl md:text-2xl font-medium text-foreground/80 mb-2">Data Analyst</h3>
            <p className="text-muted-foreground mb-8">Turning Data into Insights That Matter</p>

            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-zinc-700 hover:bg-zinc-800 text-white dark:bg-zinc-800 dark:hover:bg-zinc-700"
              >
                <Link href="/projects" className="flex items-center gap-2">
                  View My Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild className="flex items-center gap-2">
                <Link href="Moaz Elmorshedy CV 2026 V3.pdf" download="Moaz Elmorshedy CV 2026 V3 .pdf">
                  Download CV
                  <Download className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-background shadow-lg">
              <Image src="https://res.cloudinary.com/dzj5xj6sq/image/upload/v1777823017/profile_f0yx5k.jpg" alt="Moaz Elmorshedy" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </div>

      <LearningStats />
    </div>
  )
}
