import Link from 'next/link'

import css from './logotype.module.scss'

export interface LogotypeProps {
  text: string
  showOnlyFirstLetter?: boolean
}

const Logotype = ({ text, showOnlyFirstLetter = false }: LogotypeProps) => {
  const letters = text.toUpperCase().split('')
  const maxOffset = Math.floor(letters.length / 2)
  const slope = 10

  const evenLength = letters.length % 2 === 0 ? true : false

  const letterComponents = letters.map((letter, index) => {
    const offset = evenLength
      ? index <= maxOffset - 1
        ? index - maxOffset
        : index - maxOffset + 1
      : index + 1 - Math.ceil(letters.length / 2)
    const angle = (-offset / maxOffset) * slope
    const scale = 1 + Math.pow(Math.abs(offset), 2) * 0.01

    return (
      <div key={index} className={css.letter}>
        <span
          style={{
            transform: `rotateY(${angle}deg) scaleY(${scale})`,
          }}
        >
          {letter}
        </span>
      </div>
    )
  })

  const notFirstLetterStyles = showOnlyFirstLetter
    ? [css.allButFirstLetter, css.hidden].join(' ')
    : css.allButFirstLetter

  return (
    <Link href="/">
      <a onClick={() => window.analytics.track('Logotype clicked')}>
        <div className={css.logotype}>
          {letterComponents[0]}
          <div className={notFirstLetterStyles}>
            {letterComponents.slice(1)}
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Logotype
