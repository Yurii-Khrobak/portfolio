import Link from 'next/link';
import Image from 'next/image';

import {IPortfolioItem} from '../../types';

export default function PortfolioItem({item}: IPortfolioItem) {
  return(
    <div className='portfolioItem'>
      <Image src={item.img_base64} width={300} height={200} alt='portfolioItemImg' className='portfolioItem__img'/>
      <Link href={item.link} className='portfolioItem__link'>{item.name}</Link>
    </div>
  )
}
