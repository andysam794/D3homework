// d3.csv('GET_DATA/harry_potter.csv').then(
//     res =>{
//         console.log('Local CSV:',res)
//     }
// );

const potter = d3.csv('GET_DATA/harry_potter.csv');
const rings = d3.csv('GET_DATA/lord_of_the_rings.csv');

Promise.all([potter,rings]).then(
    res =>{
        console.log('Multiple Request:',res);
        console.log('Concat:',[...res[0],...res[1]]);
    }
);