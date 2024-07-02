import {IPortfolioItem} from '../../types';

import PortfolioItem from './PortfolioItem';

export default function PortfolioList({itemList}: IPortfolioItem[]) {
  return(
    <section className='portfolio' id='portfolio'>
      <h2 className='portfolio__title title'>
        Portfolio
      </h2>
      <div className='portfolioList'>
        {
          itemList?.map(item =>
            <PortfolioItem key={item.name} item={item}/>
          )
        }
      </div>
    </section>
  )
}
