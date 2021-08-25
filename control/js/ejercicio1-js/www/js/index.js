'use strict';

// const getUsers = async (number) => {
//     try {
//         const response = await fetch('https://randomuser.me/api/?results=$%7Bnumber%7D%27)
//     } catch (error) {
//         console.warn('PROBLEMAS');
//     }
// }

// console.log('hola mundo');

'use strict';
const getUsers = async (NumberOfUsers) => {
    try {
        const response = await fetch(
            `https://randomuser.me/api/?results=${NumberOfUsers}`
        );
        const data = await response.json();
        const info = data.results;
        const usuarios = info.map((user) => ({
            username: user.login.username,
            name: user.name.first,
            lastName: user.name.last,
            sex: user.gender,
            country: user.location.country,
            email: user.email,
            profilePic: user.picture.large,
        }));
        console.log(usuarios);
    } catch (error) {
        console.warn('Something went wrong');
    }
};
getUsers();
