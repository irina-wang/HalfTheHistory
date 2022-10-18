import styles from '../markdown-styles.module.css';
import Link from 'next/link';

export default function AboutUs() {
  return <section className={styles.markdown + " max-w-full pb-2 md:pb-0"}>
    <h2 className="text-center text-2xl font-extrabold text-gray-900">About The Project</h2>
    <blockquote className="text-2xl font-semibold text-center text-slate-600">
    The Half the History Project is a multi-media project combining new short
       films, curated web content, and educational outreach. It explores the 
       under-told stories of American women. This project brings a unique 
       opportunity to connect the myriad fragments of women’s stories and the
        people engaged with this history into a new and widely accessible 
        framework with the potential to enrich public understanding of our 
        history and the possibilities for our future.
    </blockquote>
  </section>
}