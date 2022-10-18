import styles from '../markdown-styles.module.css';
import Link from 'next/link';

export default function Events() {
  return <section className={styles.markdown + " max-w-4xl pb-6 md:pb-0"}>
    <h2 className="text-center text-2xl font-extrabold text-gray-900">Events</h2>
    <div className="bg-white">
      <div className="pt-6">
       <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
      <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
        <img src="./../../public/assets/img/poster-ayodele.jpg" alt="" className="h-full w-full object-cover object-center"/>
      </div>
      <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
        <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
          <img src="./../../public/assets/img/poster-ayodele.jpg" alt="" className="h-full w-full object-cover object-center"/>
        </div>
        <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
          <img src="./../../public/assets/img/poster-ayodele.jpg" alt="" className="h-full w-full object-cover object-center"/>
        </div>
      </div>
      <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
        <img src="./../../public/assets/img/poster-ayodele.jpg" alt="" className="h-full w-full object-cover object-center"/>
      </div>
    </div>
    </div>
    </div>
    <h2></h2>
  </section>
}