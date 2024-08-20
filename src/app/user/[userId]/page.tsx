"use client";


import React from 'react';
import Image from 'next/image';
import res1 from '../../../../public/res1.jpg';
import res2 from '../../../../public/res2.jpeg';
import res3 from '../../../../public/res3.jpeg';

interface UserDashboardProps {
    userId: string;
}

const matches = [ 
    { id: '1', name: 'John', age: 28, location: 'New York', interests: ['hiking', 'cooking', 'movies'], image: 'https://preview.redd.it/most-attractive-man-in-a-country-v0-9pwswqjkat8b1.jpg?width=640&crop=smart&auto=webp&s=9dd300d62a5dd5d3442bfcb3f43aaee20f8ed9a1'},
     { id: '2', name: 'Emily', age: 25, location: 'Los Angeles', interests: ['traveling', 'photography', 'yoga'], image: 'https://qph.cf2.quoracdn.net/main-qimg-531ee42b713b857bfa0d0cff066acbc8-lq'},
      { id: '3', name: 'Alex', age: 30, location: 'San Francisco', interests: ['reading', 'painting', 'music'], image: 'https://i.pinimg.com/236x/75/c3/a8/75c3a8bfcf6d9685599520fa52aa481d.jpg'}];

      interface RomanticDate {
         id: string;
         restaurant: string;
         location: string;
         date: string;
         time: string;
         description: string;
         image: string;
      }

      const romanticDates: RomanticDate[] = [
         {
            id: '1',
            restaurant: 'Candlelight Bistro',
            location: 'New York',
            date: '2022-10-15',
            time: '19:00',
            description: 'Enjoy a romantic candlelit dinner at this cozy bistro.',
            image: res1
         },
         {
            id: '2',
            restaurant: 'Sunset Grill',
            location: 'Los Angeles',
            date: '2022-10-20',
            time: '18:30',
            description: 'Watch the sunset while dining at this beachfront restaurant.',
            image: res2
         },
         {
            id: '3',
            restaurant: 'Moonlight Terrace',
            location: 'San Francisco',
            date: '2022-10-25',
            time: '20:00',
            description: 'Experience a magical evening under the moonlight at this rooftop terrace.',
            image: res3
         }
      ];

const UserDashboard: React.FC<UserDashboardProps> = ({ params }:
    { params: { userId: string } }
) => {
    // Add your dashboard logic here

    const [activeTab, setActiveTab] = React.useState('matches');

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    };

   return (
      <div>
         <button
            data-drawer-target="default-sidebar"
            data-drawer-toggle="default-sidebar"
            aria-controls="default-sidebar"
            type="button"
            className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-orange-700 rounded-lg sm:hidden hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-orange-900 dark:focus:ring-gray-600"
         >
            <span className="sr-only">Open sidebar</span>
            <svg
               className="w-6 h-6"
               aria-hidden="true"
               fill="currentColor"
               viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
               ></path>
            </svg>
         </button>

         <aside
            id="default-sidebar"
            className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
            aria-label="Sidebar"
         >
            <div className="h-full px-3 py-4 overflow-y-auto bg-orange-900 dark:bg-orange-700">
               <ul className="text-orange-400">
                  <li className="hover:bg-orange-900 hover:text-orange-400 p-2 text-2xl h-100 rounded-lg active:bg-orange-900">
                     <button onClick={() => handleTabChange('matches')}>Matches</button>
                  </li>
                  <li className="hover:bg-orange-900 hover:text-orange-400 p-2 text-2xl h-100 rounded-lg active:bg-orange-900">
                     <button onClick={() => handleTabChange('dates')}>Planned Dates</button>
                  </li>
                  <li className="hover:bg-orange-900 hover:text-orange-400 p-2 text-2xl w-100 h-100 rounded-lg active:bg-orange-900">
                     <button onClick={() => handleTabChange('profile')}>Edit Profile</button>
                  </li>
                  <li className="hover:bg-orange-900 hover:text-orange-400 p-2 text-2xl w-100 h-100 rounded-lg ">
                     <button onClick={() => handleTabChange('settings')}>User Settings</button>
                  </li>
               </ul>
            </div>
         </aside>
         {activeTab === 'matches' && (
            <div>
               <div className="flexgrid grid-cols-2 gap-4 pt-8">
                  {matches.map(match => (
                     <div key={match.id} className="bg-orange-200 rounded-lg shadow-md p-4 m-4">
                        <img
                           src={match.image}
                           alt="Profile Picture"
                           className="w-32 h-32 rounded-full mx-auto mb-4 block object-cover"
                        />
                        <div className='justify-start block'>
                           <div className="flex justify-center">
                              <h3 className='text-2xl'>{match.name}</h3>
                           </div>
                           <div className="flex justify-center">
                              <p className='font-light'></p><p className=''>{match.age}</p>
                           </div>
                           <div className="flex justify-center">
                              <p className='font-light'></p><p className='font-light'>{match.location}</p>
                           </div>
                           <div className="flex justify-center">
                              <p className='font-light pr-1'>Likes </p><p className='font-light'>{match.interests.join(', ')}</p>
                           </div>
                           <div className="flex justify-center">
                              <p className='font-light pr-1'>Cost Split: </p><p className='font-light'>50/50</p>
                           </div>
                           <div className="flex justify-center">
                              <button className="bg-orange-800 hover:bg-orange-900 text-orange-400 rounded-lg font-bold p-2 mt-4">Message</button>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         )}
         {activeTab === 'dates' && (
            <div>
               <div className="flexgrid grid-cols-2 gap-4 pt-8">
                  {romanticDates.map(date => (
                     <div key={date.id} className="bg-orange-200 rounded-lg shadow-md p-4 m-4">
                        <Image
                           src={date.image}
                           alt="Restaurant Picture"
                           className="w-128 h-32 rounded-lg mx-auto mb-4"
                           width={200}
                           height={200}
                        />
                        <div className="justify-center grid align-middle text-center">
                           <h3 className='text-2xl'>{date.restaurant}</h3>
                           <p className='font-light'>{date.location}</p>
                           <p className='font-light'>{date.description}</p>
                           <div className="flex justify-center">
                              <button className="bg-orange-800 hover:bg-orange-900 text-orange-400 rounded-lg font-bold p-2 mt-4">Details</button>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         )}
         {activeTab === 'profile' && (
            <div>
               {/* Add your profile editing component here */}
            </div>
         )}
         {activeTab === 'settings' && (
            <div>
               {/* Add your user settings component here */}
            </div>
         )}
      </div>
   );
};

export default UserDashboard;