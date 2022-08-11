/**
 * Section for intro to about us
 * 
 * TODO: 
 *  1. put in actual text
 * 
 */


import styles from '../markdown-styles.module.css';
import Link from 'next/link';

export default function AboutUs() {
  return <section className={styles.markdown + " max-w-full pb-2 md:pb-0"}>
    
    <h2 className="text-center text-2xl font-extrabold text-gray-900">About The Project</h2>
    <p>Lorem ipsum dolor sit amet, ut sed atqui percipit, cum solet soleat nominavi ei, 
      eos ne convenire theophrastus. Sea minimum quaerendum at, sit vide fabellas 
      electram an. Per ei solet noster mediocritatem, ei has dicunt docendi indoctum, 
      dissentias accommodare vis id. Oportere facilisis ea eam, qui at nulla veniam laudem. 
      Fabulas expetenda ea duo. Putent habemus perpetua vix at, modus dolore cu has, ut feugiat 
      mnesarchum eam. Maiorum dolores intellegat ea pri. Ei cibo definitionem mea. Ne nec 
      conceptam efficiantur, te vix oportere prodesset. Sed tation splendide rationibus 
      eu, vim mollis suavitate cu, in qui euismod ocurreret. Modo praesent evertitur 
      ne ius, quod iuvaret argumentum sed ei. ocendi his, viris aperiri nusquam mel ex.</p>
  </section>
}