/**
 * Section for banner on the landing page 
 * 
 * TODO: create a actual banner
 *      image size: 2000*800
 */

import styles from '../markdown-styles.module.css';
import Link from 'next/link';
import Image from 'next/image';

import bannerImg from '../../public/assets/img/poster-frankenthaler.jpg';

export default function Banner() {
  return <section className={styles.markdown + "max-w-full pb-2 md:pb-0"}>    
    <Image src={bannerImg}
      layout="responsive"
      width={2000}
      height={800}/>
    <p>
      For·got·ten in the past, cel·e·bra·ted in the future. 
    {/* The trailer to our latest film from Half the History -- our series on under-told stories of diverse women in US history -- is here! Named one of the top breakout stars of the year by the New York Times just before the pandemic, choreographer Ayodele Casel creates work inspired by the history of Black tap dancers who came before her. Click the link in our bio to see the trailer! #HalfTheHistory #TellHerStory #FiveSistersProductions */}
    </p>
  </section>
}