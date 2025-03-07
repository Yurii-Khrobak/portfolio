import Image from 'next/image';

export default function Header() {
  return (
    <header className='header' id='home'>
      <div className='header__row'>
        <h1 className='header__name'>
          Yurii khrobak
        </h1>
        <label className='header__info'>
          Fullstack developer, 20 years old, Boryslav
        </label>
      </div>
      <Image 
        src='/headerImg.jpg' 
        priority={true} 
        alt='headerImg' 
        className='header__img'
        width={950}
        height={400}
      />
    </header>
  )
}
