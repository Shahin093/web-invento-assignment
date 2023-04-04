import React, { useEffect, useState } from 'react';
import SingleUser from '../SingleUser/SingleUser';
import ViewUser from '../ViewUser';



const Users = () => {

    const [users, setUsers] = useState();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUsers(json))
    }, [])
    // getting the values of local storage
    const getDatafromLS = () => {
        const data = localStorage.getItem('books');
        if (data) {
            return JSON.parse(data);
            // return data;
        }
        else {
            return []
        }
    }
    // main array of objects state || books state || books array of objects
    const [books, setbooks] = useState(getDatafromLS());
    console.log(books);

    // delete book from LS
    const deleteBook = (isbn) => {
        const filteredBooks = books.filter((element, index) => {
            return element.id !== isbn
        })
        setbooks(filteredBooks);
    }


    // edit form
    const [editForm, setEditForm] = useState(false);
    // id state
    const [id, setId] = useState();
    // todo value state
    const [todoValue, setTodoValue] = useState('');
    // handle edit icon
    const handleEdit = (todo, index) => {
        setEditForm(true);
        setId(index);
        setTodoValue(todo?.name);
    }
    // handle edit submit
    const handleEditSubmit = (e) => {
        e.preventDefault();
        let items = [...books];

        // let item = items[id];
        // console.log(items, items[id], 'id', id);
        // item.names = todoValue;
        // item.completed = false;
        // items[id] = item;
        setbooks(items);
        setTodoValue('');
        setEditForm(false);
    }




    return (
        <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
            {/* <div className='mx-auto grid justify-end items-end'>
                <div>
                    <ViewUser books={books}></ViewUser>
                </div>
            </div> */}

            <div className='mt-16 p-10 grid sm:grid-cols-1 lg:grid-cols-2 gap-3'>
                {
                    users?.map(user => <SingleUser key={user?.id} user={user} setbooks={setbooks} books={books}></SingleUser>)
                }


            </div>
            <div className=''>
                <div class="max-w-sm rounded overflow-hidden shadow-lg">


                    <div class="px-6 pt-4 pb-2">
                        <button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Add TO Card {books?.length}</button>
                        <div >




                            <div className=''>
                                <div class="flex min-h-screen bg-white">
                                    <div class="col-span-12">
                                        <div class="overflow-auto lg:overflow-visible">
                                            {editForm === true && (
                                                <div className="form">
                                                    <form autoComplete="off" onSubmit={handleEditSubmit}>
                                                        <div className="input-and-button">
                                                            <input type='text' placeholder="Add an Item" required
                                                                onChange={(e) => setTodoValue(e.target.value)} value={todoValue} />
                                                            <div className='button edit'>
                                                                <button type="submit">
                                                                    Update
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            )}
                                            <table class="table text-gray-400 border-separate space-y-6 text-sm">
                                                <thead class="bg-blue-500 text-white">
                                                    <tr>
                                                        <th class="p-3">ID</th>
                                                        <th class="p-3 text-left">name</th>

                                                        <th class="p-3 text-left">Action</th>
                                                        <th class="p-3 text-left">Access</th>
                                                    </tr>
                                                </thead>
                                                {
                                                    editForm === false && (

                                                        <tbody>
                                                            {
                                                                books.map(book =>
                                                                    <tr class="bg-blue-200 lg:text-black">


                                                                        <td class="p-3 uppercase">{book?.id}</td>
                                                                        <td class="p-3 uppercase">{book?.username}</td>

                                                                        <td class="p-3">
                                                                            <span class="bg-green-400 text-gray-50 rounded-md px-2"
                                                                            >ACTIVE</span
                                                                            >
                                                                        </td>
                                                                        <td class="p-3">
                                                                            {/* <a href="#" class="text-gray-500 hover:text-gray-100 mr-2">
                                                                     <i class="material-icons-outlined text-base">visibility</i>
                                                                 </a> */}
                                                                            <a
                                                                                onClick={() => handleEdit(book, book?.id)}
                                                                                href="#" class="text-yellow-400 hover:text-gray-100 mx-2">
                                                                                <i class="material-icons-outlined text-base">edit</i>
                                                                            </a>
                                                                            <a onClick={() => deleteBook(book.id)}
                                                                                href="#"
                                                                                class="text-red-400 hover:text-gray-100 ml-2"
                                                                            >
                                                                                <i class="material-icons-round text-base">delete_outline</i>
                                                                            </a>
                                                                        </td>
                                                                    </tr>

                                                                )
                                                            }
                                                        </tbody>)
                                                }
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  <span>{book?.id} <span>{book?.username}</span> </span> <span onClick={() => deleteBook(book.id)} className=' bg-red-600 text-white '>Delete</span>
  */}
                        </div>

                    </div>
                </div>
            </div>



        </div>



    );
};

export default Users;