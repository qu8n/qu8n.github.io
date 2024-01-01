import Image from 'next/legacy/image'
import { ExternalLink } from './ExternalLink'

/**
 * @param text Text to display
 * @param href External link
 * @param imgSrc Path to image inside /public
 * @param imgDimTw Tailwind CSS width and height
 */
export function LinkButton({
  text,
  href,
  imgSrc,
  imgDimTw,
}: {
  text: string
  href: string
  imgSrc: string
  imgDimTw: string
}) {
  return (
    <ExternalLink
      href={href}
      className='inline items-center gap-1 rounded-md bg-neutral-800 border border-neutral-600 hover:bg-neutral-700 duration-500 p-1 text-white text-sm font-normal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600'
    >
      <div className='inline-flex align-middle items-center gap-1 mb-0.5'>
        <div className={`relative ${imgDimTw}`}>
          <Image layout='fill' src={imgSrc} alt={`${text} logo`} className='' />
        </div>

        <span>{text}</span>
      </div>
    </ExternalLink>
  )
}
