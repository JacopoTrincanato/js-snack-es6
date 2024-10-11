console.log('ciao');

/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.*/

//creo l'array di oggetti
const biciclette = [
    {
        name: 'bicicletta1',
        weight: 6
    },

    {
        name: 'bicicletta2',
        weight: 7
    },

    {
        name: 'bicicletta3',
        weight: 8
    },

    {
        name: 'bicicletta4',
        weight: 9
    },

    {
        name: 'bicicletta5',
        weight: 10
    },

    {
        name: 'bicicletta6',
        weight: 11
    },

    {
        name: 'bicicletta7',
        weight: 12
    },

    {
        name: 'bicicletta8',
        weight: 5
    }
]

//Stampare a schermo la bici con peso minore.
//ciclo all'interno dell'array

let minValue =biciclette[0];
for (let i = 0; i < biciclette.length; i++) {
    const bici = biciclette[i];
    
    if(bici.weight < minValue.weight){
        minValue = bici
    }
    
}

//richiamo il div con getElement
let bicicletta = document.getElementById('bicicletta');

//inserisco il contenuto nell'html 
bicicletta.innerHTML = `Il peso minore corrisponde a: ${minValue.weight} kg`;
console.log(minValue.weight);


/*Snack 2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

//creo l'array di oggetti
const squadre = [
    {
        name: 'squadra1',
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        name: 'squadra2',
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        name: 'squadra3',
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        name: 'squadra4',
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        name: 'squadra5',
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        name: 'squadra6',
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        name: 'squadra7',
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        name: 'squadra8',
        puntiFatti: 0,
        falliSubiti: 0
    }
]


//creo un nuovo array i cui elementi contengono solo nomi e falli subiti
const newArr = [];

//Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
for (let i = 0; i < squadre.length; i++) {
    const squadra = squadre[i];
    
    //aggiorno i valori di puntiFatti e falliSubiti
    squadra.puntiFatti = Math.floor(Math.random() * 100) + 1;
    squadra.falliSubiti = Math.floor(Math.random() * 30) + 1;
    
    //pusho i valori nel nuovo array
    newArr.push({name: squadra.name, falliSubiti: squadra.falliSubiti});
    
    
}

//loggo per vedere se i dati sono aggiornati
console.log(squadre, newArr);





