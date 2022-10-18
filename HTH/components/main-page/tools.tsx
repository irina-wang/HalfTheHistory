import styles from '../markdown-styles.module.css';
import Link from 'next/link';

export default function Tools() {
  return <section className={styles.markdown + " max-w-4xl pb-6 md:pb-0"}>
  <h2 className="text-center text-2xl font-extrabold text-gray-900">Tools</h2>
  <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
      <div className="inline-flex rounded-md shadow">
        <a href="/story" className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base text-xl text-white hover:bg-indigo-700"><div className="text-2xl font-semibold">Biography</div> <br/>  (story)</a>
      </div>

      <div className="inline-flex rounded-md shadow">
        <a href="/video" className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base text-xl text-indigo-600 hover:bg-indigo-50"><div className="text-2xl font-semibold">Documentary</div> <br/> (video)</a>
      </div>

      <div className="inline-flex rounded-md shadow">
        <a href="/podcast" className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base text-xl text-white hover:bg-indigo-700"><div className="text-2xl font-semibold">Audio </div><br/> (podcast)</a>
      </div>

      <div className="inline-flex rounded-md shadow">
        <a href="/tellherstory" className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base text-xl text-indigo-600 hover:bg-indigo-50"><div className="text-2xl font-semibold">Submit </div> <br/> (tell her story)</a>
      </div>

    </div>
    <span></span>
</section>
    
}