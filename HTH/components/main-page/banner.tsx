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
   
  <blockquote className="text-4xl font-semibold italic text-center text-slate-900">
    <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
      <span className="relative text-white">Forgotten</span>
    </span>
      in the past,
    <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
    <span className="relative text-white">celebrated</span>
    </span>
      in the future.
  </blockquote>
  </section>
}