// Membuat Object
// Object Literal
const mhs = {
    nama : 'Hanif Razin Rahmatullah',
    semester : 8,
    ipk : 3.90,
    jurusan : 'Teknik Informatika'
}

/**
 * Object Literal dengan Function Expression
 * 1. Buat Object kosong
 * 2. Buat function 
 */
 const person = {};
 person.identity = function (id,nama){
     const identitas = {};
     identitas.id = id;
     identitas.nama = nama;
     return identitas;
 };
 
 // cara panggil di console browser
 person.identity(1,'Nadya');
 

// Function Declaration
function buatObjectMhs(name,semester,ipk,jurusan){
    const mhsw = {};
    mhsw.name = name;
    mhsw.semester = semester;
    mhsw.ipk = ipk;
    mhsw.jurusan = jurusan;
    return mhsw;
}

const mhs2 = buatObjectMhs('Abdul Hamid',4,3.53,'Matematika');


/**
 * Constuctor : function yang khusus utk buat object nama function diawali huruf Kapital, 
 *              dipanggil dengan keyword new untuk panggil function
 *              dan assign value dengan keyword this
 * Dengan constructor maka tidak perlu buat variable this dan return this karena sudah
 * automatis dibuatkan oleh js nya
 */
function Mahasiswa(nama,semester,ipk,jurusan)
{
    this.nama = nama;
    this.semester = semester;
    this.ipk = ipk;
    this.jurusan = jurusan;
}

const mhs3 = new Mahasiswa('Eric',5,2.89,'Ekonomi')
