// Asynchronous Callback using vanilla js
// function getDataMahasiswa(url, success, error){
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function(){
//         if(xhr.readyState === 4){
//             if(xhr.status === 200){
//                 success(xhr.response);
//             }else if(xhr.status === 404){
//                 error();
//             }
//         }
//     }

//     xhr.open('GET',url);
//     xhr.send();
// }

// console.log("mulai");
// getDataMahasiswa('data/mahasiswa.json', 
//     (results) => {
//         const data = JSON.parse(results);
//         data.forEach(m => console.log(m.first_name));
//     }, 
//     () => {
    
//     });
// console.log("selesai");

//Asynchronous Callback using jQuery
console.log("mulai");
$.ajax({
    url: 'data/mahasiswa.json',
    success: (results) => {
        results.forEach(r => console.log(r.name));
    },
    error: (e) => {
        console.log(e.responseText);
    }
});
console.log("selesai");