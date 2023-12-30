import { BgGradient } from '@/components/BgGradient'
import { LinkButton } from '@/components/LinkButton'
import { LinkText } from '@/components/LinkText'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center text-neutral-200'>
      <div className='my-auto flex flex-col gap-4 max-w-sm'>
        <BgGradient />

        <section className='flex flex-col gap-4 font-extralight text-sm leading-relaxed'>
          <h1 className='font-medium text-xl'>Hi, I&apos;m Quan 👋</h1>

          <div>
            I currently work as a software engineer at{' '}
            <LinkButton
              text='MSKCC'
              href='https://www.mskcc.org/'
              imgSrc='/logos/mskcc.png'
              imgDimTw='w-2 h-3.5'
            />{' '}
            in NYC, where I help streamline cancer research processes.
          </div>

          <div>
            Outside of work, I&apos;m attending a part-time Master&apos;s
            program (MCIT) at{' '}
            <LinkButton
              text='Penn Engineering'
              href='https://www.mskcc.org/'
              imgSrc='/logos/penn.png'
              imgDimTw='w-2.5 h-3.5'
            />
            , where I focus on software systems and machine learning.
          </div>

          <p>
            Before software, I primarily worked in strategic finance, during
            which I helped bring an e-commerce startup{' '}
            <LinkText
              text='public'
              href='https://www.architecturaldigest.com/story/1stdibs-files-for-an-ipo'
            />
            .
          </p>
        </section>

        <section className='flex flex-col gap-2'>
          <h2>Select work</h2>
        </section>

        <section className='flex flex-col gap-2'>
          <h2>Connect</h2>
        </section>
      </div>
    </main>
  )
}
