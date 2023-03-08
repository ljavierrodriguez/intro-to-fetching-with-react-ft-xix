import React, { useEffect, useState } from 'react'

const App = () => {


    const [users, setUsers] = useState(null);
    const [posts, setPosts] = useState(null);

    useEffect(() => {

        //getUsers();
        //getPosts();
        
        getAsyncUsers();
        getAsyncPosts();

    }, [])

    // GET POST PUT DELETE
    const getUsers = () => {
        let url = 'https://jsonplaceholder.typicode.com/users';
        let options = {
            method: 'GET', // GET, POST, PUT, DELETE
            //body: '', // POST y PUT,
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch(url, options)
            .then((response) => {
                //console.log(response);
                if (response.status === 404) throw Error("Pagina no encontrada");
                return response.json()
            })
            .then((json) => {
                console.log(json);
                setUsers(json);
            })
            .catch((error) => {
                console.error(error);
            });

        console.log('Hola');
        console.log("Hola 2");

    }

    const getPosts = () => {
        let url = 'https://jsonplaceholder.typicode.com/posts';
        let options = {
            method: 'GET', // GET, POST, PUT, DELETE
            //body: '', // POST y PUT,
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch(url, options)
            .then((response) => {
                //console.log(response);
                if (response.status === 404) throw Error("Pagina no encontrada");
                return response.json()
            })
            .then((json) => {
                //console.log(json);
                setPosts(json);
            })
            .catch((error) => {
                console.error(error);
            })
    }

    // Async Function
    async function getAsyncUsers() {
        try {
            let url = 'https://jsonplaceholder.typicode.com/users';
            let options = {
                method: 'GET', // GET, POST, PUT, DELETE
                //body: '', // POST y PUT,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            const response = await fetch(url, options)

            if(response.status === 404) throw Error('Pagina no encontrada...');

            const json = await response.json();

            //console.log(json);

            setUsers(json);

        } catch (error) {
            console.error(error);
        }
    }

    const getAsyncPosts = async () => {
        try {
            let url = 'https://jsonplaceholder.typicode.com/posts';
            let options = {
                method: 'GET', // GET, POST, PUT, DELETE
                //body: '', // POST y PUT,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            const response = await fetch(url, options)

            if(response.status === 404) throw Error('Pagina no encontrada...');

            const json = await response.json();

            //console.log(json);

            setPosts(json);

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <button onClick={getUsers}>Obtener Usuarios</button>

            <ul className="list-group">
                {
                    !!users &&
                    users.map((user) => {
                        return (
                            <li className='list-group-item list-group-item-action' key={user.id}>
                                {user.name}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default App