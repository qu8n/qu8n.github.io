import { BgGradient } from "@/components/BgGradient";
import { LinkButton } from "@/components/LinkButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center text-neutral-200">
      <div className="my-auto flex flex-col gap-4 max-w-sm">
        <BgGradient />

        <section className="flex flex-col gap-2">
          <h1>Hi, I&apos;m Quan 👋</h1>

          <div className="font-extralight text-sm">
            I&apos;m a software engineer at{' '}
            <LinkButton
              text="MSKCC"
              href="https://www.mskcc.org/"
              imgSrc="/logos/mskcc.png"
              imgDimTw="w-2 h-3.5"
            />
            , where I help streamline cancer research processes.
          </div>
        </section>

        <section>
          <h2>Select work</h2>
        </section>

        <section>
          <h2>Connect</h2>
        </section>

      </div>
    </main>
  )
}