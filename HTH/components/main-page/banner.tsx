import styles from '../markdown-styles.module.css';
import Link from 'next/link';
import Image from 'next/image';

import bannerImg from '../../public/assets/img/poster-frankenthaler.jpg';

export default function Banner() {
  return <>
{/* Here is the home page content */}
    
    <h1>Here's the section for the banner</h1>

    <Image src={bannerImg}
      layout="fixed"
      width={700}
      height={475}/>

    {/* <Image src={require('./poster-ayodele.jpg')}/> */}

    <p>
    The trailer to our latest film from Half the History -- our series on under-told stories of diverse women in US history -- is here! Named one of the top breakout stars of the year by the New York Times just before the pandemic, choreographer Ayodele Casel creates work inspired by the history of Black tap dancers who came before her. Click the link in our bio to see the trailer! #HalfTheHistory #TellHerStory #FiveSistersProductions
    </p>
  </>
  // <section className={styles.markdown + " max-w-2xl pb-2 md:pb-0"}>

  // </section>
}