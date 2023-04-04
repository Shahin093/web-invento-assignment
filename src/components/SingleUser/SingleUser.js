import React, { useEffect, useState } from 'react';
import Users from '../Users/Users';

const SingleUser = ({ user, setbooks, books }) => {

    let demo = [];
    let [signleUseradd, setSingleUseradd] = useState({});
    // form submit event
    const handleUserSubmit = (id) => {
        // creating an object
        // creating an object
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(data => setSingleUseradd(data))
        // console.log(signleUseradd);
        demo = books.filter(bk => bk.id === signleUseradd.id)
        console.log(demo);

        if (!demo[0] && signleUseradd.id) {
            setbooks([...books, signleUseradd]);
        } else if (demo[1]) {
            alert('already added. please try on!!!')
        }

        // setbooks([...books, book]);

    }

    // saving data to local storage
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books])



    return (
        <div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg">

                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{user?.name}</div>
                    <h2>{user?.username}</h2>
                    <h2>{user?.email}</h2>
                    <p class="text-gray-700 text-base">
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    {/* <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span> */}
                    <button onClick={() => handleUserSubmit(user?.id)} class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Add TO Card</button>
                </div>
            </div>

        </div>

    );
};

export default SingleUser;