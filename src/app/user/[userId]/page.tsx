"use client";


import React from 'react';

interface UserDashboardProps {
    userId: string;
}

const matches = [ 
    { id: '1', name: 'John', age: 28, location: 'New York', interests: ['hiking', 'cooking', 'movies'], },
     { id: '2', name: 'Emily', age: 25, location: 'Los Angeles', interests: ['traveling', 'photography', 'yoga'], },
      { id: '3', name: 'Alex', age: 30, location: 'San Francisco', interests: ['reading', 'painting', 'music'], }, ];

      interface RomanticDate {
         id: string;
         restaurant: string;
         location: string;
         date: string;
         time: string;
         description: string;
      }

      const romanticDates: RomanticDate[] = [
         {
            id: '1',
            restaurant: 'Candlelight Bistro',
            location: 'New York',
            date: '2022-10-15',
            time: '19:00',
            description: 'Enjoy a romantic candlelit dinner at this cozy bistro.'
         },
         {
            id: '2',
            restaurant: 'Sunset Grill',
            location: 'Los Angeles',
            date: '2022-10-20',
            time: '18:30',
            description: 'Watch the sunset while dining at this beachfront restaurant.'
         },
         {
            id: '3',
            restaurant: 'Moonlight Terrace',
            location: 'San Francisco',
            date: '2022-10-25',
            time: '20:00',
            description: 'Experience a magical evening under the moonlight at this rooftop terrace.'
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

            <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-orange-700 rounded-lg sm:hidden hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-orange-900 dark:focus:ring-gray-600">
               <span className="sr-only">Open sidebar</span>
               <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
               </svg>
            </button>

            <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
               <div className="h-full px-3 py-4 overflow-y-auto bg-orange-900 dark:bg-orange-700">
                  <ul className='text-orange-400'>
                     <li className='hover:bg-orange-900 hover:text-orange-400 p-2 text-2xl w-100 h-100 rounded-lg'>
                        <button onClick={() => handleTabChange('matches')}>Matches</button>
                     </li>
                     <li className='hover:bg-orange-900 hover:text-orange-400 p-2 text-2xl w-100 h-100 rounded-lg'>
                        <button onClick={() => handleTabChange('dates')}>Planned Dates</button>
                     </li>
                     <li className='hover:bg-orange-900 hover:text-orange-400 p-2 text-2xl w-100 h-100 rounded-lg'>
                        <button onClick={() => handleTabChange('profile')}>Edit Profile</button>
                     </li>
                     <li className='hover:bg-orange-900 hover:text-orange-400 p-2 text-2xl w-100 h-100 rounded-lg'>
                        <button onClick={() => handleTabChange('settings')}>User Settings</button>
                     </li>
                  </ul>
               </div>
            </aside>
            {activeTab === 'matches' && (
                <div>
                    <h2>Matches:</h2>
                    <ul>
                        {matches.map(match => (
                            <li key={match.id}>
                                <h3>{match.name}</h3>
                                <p>Age: {match.age}</p>
                                <p>Location: {match.location}</p>
                                <p>Interests: {match.interests.join(', ')}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {activeTab === 'dates' && (
                <div>
                     <h2>Planned Dates:</h2>
                     <ul>
                           {romanticDates.map(date => (
                              <li key={date.id}>
                                 <h3>{date.restaurant}</h3>
                                 <p>Location: {date.location}</p>
                                 <p>Date: {date.date}</p>
                                 <p>Time: {date.time}</p>
                                 <p>Description: {date.description}</p>
                              </li>
                           ))}
                     </ul>
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