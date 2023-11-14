import heroMobile from '../assets/hero-mobile.jpg'
import heroDesktop from '../assets/hero-desktop.jpg'

const Image = () => {
  return (
    <section className="image">
      <h2 className='visually-hidden'>Hero image</h2>
      <picture>
        <source srcSet={heroDesktop} media="(min-width: 48.625em)" />
        <img src={heroMobile} alt="..." />
      </picture>
    </section>
  )
}

export default Image