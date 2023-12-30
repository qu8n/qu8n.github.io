export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="my-auto flex flex-col gap-4">

      <div className="flex flex-col place-items-start before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-purple-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-purple-700 before:dark:opacity-10 after:dark:from-purple-600 after:dark:via-yellow-700 after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1>Quan Nguyen</h1>
        <p className="font-extralight text-xs">Software engineer at MSKCC</p>
        <p className="font-extralight text-xs">Master&apos;s student at Penn Engineering (MCIT)</p>
      </div>

      <div>
        <h2 className="text-sm">Select work</h2>
      </div>

      <div>
        <h2 className="text-sm">Socials</h2>
      </div>

      </div>
    </main>
  )
}