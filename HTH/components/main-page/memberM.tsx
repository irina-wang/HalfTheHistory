/**
 * Section for banner on the landing page 
 * 
 * TODO: make member props & components 
 * 
 */

import styles from '../markdown-styles.module.css';

import Image from 'next/image';
import profileImg from '../../public/assets/img/profile/profile.jpg';

const people = [
  {
    name: 'AA',
    email: 'AA.com',
    image: profileImg,
  },
  {
    name: 'AA',
    email: 'AA.com',
    image: profileImg,
  },
  {
    name: 'AA',
    email: 'AA.com',
    image: profileImg,
  }
]

export default function Member() {
    return <section className={styles.markdown + " max-w-full pb-2 md:pb-0"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
        <h2 className="text-center text-2xl font-extrabold text-gray-900">Members</h2>
          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
            {people.map((person) => (
            <div className="group relative">
                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <Image src={person.image} layout="responsive"/>
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    {person.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900"> {person.email}</p>
              </div>
            ))}
          </div>
      </div>
    </div>
    </section>
}

