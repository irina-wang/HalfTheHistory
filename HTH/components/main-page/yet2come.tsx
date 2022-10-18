/**
 * Section for banner on the landing page 
 * 
 * TODO: create a actual banner
 *      image size: 2000*800
 */

import styles from '../markdown-styles.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function YetToCome() {
  return <section className={styles.markdown + "max-w-full pb-2 md:pb-0"}>    
   <blockquote className="text-2xl font-semibold italic text-center text-slate-900">
    Yet To Come, please check back later. 
   </blockquote>
  </section>
}