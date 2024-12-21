const ogrenciler = [
    {
        id: 1,
        firstName: "Abdulkadir",
        lastName: "Kahraman",
        age: 15
    },
    {
        id: 2,
        firstName: "Burak",
        lastName: "Kırca",
        age: 26
    },
    {
        id: 3,
        firstName: "Eren",
        lastName: "Kahraman",
        age: 17
    },
    {
        id: 4,
        firstName: "Onur",
        lastName: "Pehlivan",
        age: 19 
    },
    {
        id: 5,
        firstName: "Caner",
        lastName: "Özgür",
        age: 16 
    }
]

function filtreleme(){
    const arananOgrenciler = ogrenciler.filter(ogrenci => ogrenci.age > 18);
    console.log(arananOgrenciler);
    
}
filtreleme();