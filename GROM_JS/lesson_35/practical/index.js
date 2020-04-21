


// window.addEventListener('error', function onUnhandledError(e) {
//     console.log(e);

// })
// try {
//     const jsonString = '{"name" : "Tom"';
//     throw new ReferenceError();
//     const userData = JSON.parse(jsonString);
//     console.log(jsonString);
// } catch (error) {
//     if (error instanceof SyntaxError) {
//         console.log('Hendleds');
//     } else {
//         throw error;
//     }

// }
// finally {
//     console.log('Some action');
// }



/////T__A__S__K__2

// const successRequest = Promise.resolve({ name: 'Tom' });

// successRequest
//     .then(data => {
//         console.log(data);
//         throw new Error('Unexpected error')
//     })
//     .catch(err => {
//         console.warn(err.message);

//     });


// const failedRequest = Promise.reject(new Error('Fail'));
// failedRequest
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.warn(err);
//         throw err;
//     })
//     .then(data => {
//         console.log(data);

//     });

// window.addEventListener('unhandledrejection', function (e) {
//     console.log(e.reason.message);

// })



///T__A__S__K__3

fetch('https://api.github.com/user/github')
    .then(response => {
        debugger;
        if (response.status === 200) {
            return response.json();
        }
        throw new Error('No data')

    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        debugger;
        console.log(err);

    })