import React, { useState } from 'react';

const ViewUser = ({ books }) => {
    // getting the values of local storage
    const getDatafromLS = () => {
        const data = localStorage.getItem('books');
        console.log(data);
        if (data) {
            return JSON.parse(data);
            // return data;
        }
        else {
            return []
        }
    }
    // main array of objects state || books state || books array of objects
    const [abooks, setabooks] = useState(getDatafromLS());
    console.log(abooks);
    return (
        <div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg">


                <div class="px-6 pt-4 pb-2">
                    {/* <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span> */}
                    {
                        books?.map(book => <div className='bg-yellow-500'> HEllo shahin</div>)
                    }
                    <button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Add TO Card {books?.length}</button>
                </div>
            </div>
        </div>
    );
};

export default ViewUser;