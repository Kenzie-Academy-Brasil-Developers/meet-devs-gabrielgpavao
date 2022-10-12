// let devs = [
//     {
//         name: {
//             first: "Gary",
//             last: "Kelly"
//         },
//         location: {
//             street: {
//                 number: 9096,
//                 name: "Hunters Creek Dr"
//             }
//         },
//         dob: {
//             age: 51
//         },
//         id: {
//             name: "SSN",
//             value: "220-95-7762"
//         },
//         picture: {
//             large: "https://randomuser.me/api/portraits/men/19.jpg",
//         }
//     }
// ]

fetch("https://randomuser.me/api/?results=6&nat=us&inc=name,location,dob,id,picture")
.then(response => response.json())
.then(responseJson => JSON.stringify(responseJson.results))
.then(res => localStorage.setItem('devsDatabase', res))

let devsList = JSON.parse(localStorage.getItem('devsDatabase'))

console.log(devsList)