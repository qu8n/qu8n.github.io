import Image from 'next/image'

/**
 * @param text Text to display
 * @param href External link
 */
export function LinkText({ text, href }: { text: string; href: string }) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='underline decoration-neutral-500 text-white'
    >
      {text}
    </a>
  )
}
