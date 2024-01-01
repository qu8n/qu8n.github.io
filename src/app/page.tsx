import { BgGradient } from '@/components/BgGradient'
import { LinkButton } from '@/components/LinkButton'
import { LinkText } from '@/components/LinkText'
import { StarlightButton } from '@/components/StarlightButton'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center'>
      <div className='my-auto flex flex-col gap-4 max-w-sm'>
        <BgGradient />

        <section className='flex flex-col gap-4 font-light leading-relaxed text-neutral-300'>
          <div className='font-medium text-xl inline-flex gap-2'>
            <div className='animate-rotational-wave'>👋</div>
            <h1>Hi, I&apos;m Quan</h1>
          </div>

          <div>
            I work as a software engineer at{' '}
            <LinkButton
              text='MSKCC'
              href='https://www.mskcc.org/'
              imgSrc='/logos/mskcc.png'
              imgDimTw='w-2 h-4'
            />
            , streamlining cancer research processes at the world&apos;s largest
            cancer center.
          </div>

          <div>
            I&apos;m also a Master&apos;s student at{' '}
            <LinkButton
              text='Penn Engineering'
              href='https://www.cis.upenn.edu/graduate/program-offerings/master-of-computer-and-information-technology/'
              imgSrc='/logos/penn.png'
              imgDimTw='w-3 h-3.5'
            />{' '}
            part-time, with a focus on software systems and machine learning.
          </div>

          <p>
            Before tech, I primarily worked in finance, where I helped bring an
            e-commerce startup{' '}
            <LinkText
              text='public'
              href='https://www.architecturaldigest.com/story/1stdibs-files-for-an-ipo'
            />
            .
          </p>
        </section>

        <section className='mt-2 flex flex-row gap-4'>
          <StarlightButton
            text='View GitHub projects'
            href='https://github.com/qu8n'
            withStarlight
          />

          <StarlightButton
            text='Connect on LinkedIn'
            href='https://www.linkedin.com/in/nguyenhq/'
          />
        </section>
      </div>
    </main>
  )
}
