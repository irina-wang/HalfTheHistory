/**
 * Section to submit stories on Tell Her story page 
 * 
 * TODO: 
 *   1. confirm areas, database
 *   2. implement onSubmit function 
 */

import styles from '../markdown-styles.module.css';
import Link from 'next/link';
import Image from 'next/image';


interface formInfo {
  author: string,
  firstName: string,
  lastName: string,
  story: string,
  pic:string
}


export default function Form() {
 
  return <section className={styles.markdown + "max-w-full pb-2 md:pb-0"}> 
    <div className="mt-10 sm:mt-0">
  <div className="md:grid md:grid-cols-3 md:gap-6">

    {/* explanation for the form */}
    <div className="md:col-span-1">
      <div className="px-4 font-mono sm:px-0">
        <h3 className="mt-5 text-4xl font-large leading-6 text-gray-900">Record A Story</h3>
        <p className="mt-5 text-xl text-gray-600">Tell us about the story that you know, or someone that matters a lot to you. What's forgotten in the past, let's celebrate together in the future. </p>
      </div>
    </div>

    {/* form */}
    <div className="mt-5 md:mt-0 md:col-span-2">
      {/* TODO: function for submitting the form */}
      <form action="#" method="POST"> 
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 grid-rows-8 gap-6">
             
             {/* subject's name */}
              <div className="col-span-6 sm:col-span-3">
                <label for="name" className="block text-md font-medium text-gray-700">Name</label>
                <input type="text" name="name" id="name" autocomplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>
           
              {/* date */}
              <div className="col-span-6 sm:col-span-3">
                <label for="date" className="block text-md font-medium text-gray-700">Birth Date</label>
                <input type="text" name="date" id="date" autocomplete="date" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>

              {/* race/ethnicity */}
              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                <label for="race" className="block text-md font-medium text-gray-700">Race/Ethnicity</label>
                <input type="text" name="race" id="race" autocomplete="race" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label for="gender" className="block text-md font-medium text-gray-700">Gender</label>
                <input type="text" name="gender" id="gender" autocomplete="gender" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label for="sexuality" className="block text-md font-medium text-gray-700">Sexuality</label>
                <input type="text" name="sexuality" id="sexuality" autocomplete="sexuality" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>
              
              {/* Country */}
              <div className="col-span-6 sm:col-span-3">
                <label for="country" className="block text-md font-medium text-gray-700">Country</label>
                <select id="country" name="country" autocomplete="country-name" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-md">
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>

              
              

              <div className="row-start-4 row-end-7 col-span-6 ">
                <label for="her-story" className="block text-md font-medium text-gray-700">Tell us her story. What makes this subject interesting?</label>
                <input type="text" name="her-story" id="her-story" className="mt-1 h-56 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label for="url" className="block text-md font-medium text-gray-700">Reference URL</label>
                <input type="text" name="url" id="url" autocomplete="url" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>

              <div className="col-end-6 sm:col-span-3">
                <label for="name" className="block text-md font-medium text-gray-700">Author (your name)</label>
                <input type="text" name="name" id="name" autocomplete="name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>


              <div className="col-end-6 sm:col-span-3">
                <label for="email-address" className="block text-md font-medium text-gray-700">Author's Email</label>
                <input type="text" name="email-address" id="email-address" autocomplete="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>


              
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-md font-medium rounded-md text-white bg-slate-900 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
  </section>
}