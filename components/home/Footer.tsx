import Image from 'next/image';

export default function Footer() {
  return ( 
    <footer className='footer' id='social'>
      <div className='social'>
        <a className='social__item' href='https://www.upwork.com/freelancers/~015e10b721c5d3e0a5'>
          <Image src='/icons/upwork.svg' width={40} height={40} alt='upworkImgi'/>
        </a>

      </div>
      <label className='footer__info'>Like me on upwork</label>
    </footer>
  )
}
