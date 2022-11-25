let ricarica: number; //definisco il valore e il tipo della ricarica

///////////COSTRUISCO L'INTERFACE////////

interface Smartphone {
    saldoDisponibile: number; //saldo disponibile per effettuare le chiamate
    numeroChiamate: number; //numero di chiamate effettuate 

    ricarica(saldoDisponibile: number, ricarica: number): void; //effettua la ricarica

    //costo della chiamata - decremento del saldo - incremento numero delle chiamate
    chiamata(saldoDisponibile: number, minutiDurata: number): void;

    numero404(): number; // aggiorna il saldo disponibile
    getNumeroChiamate(): number; //ritorna il numero delle chiamate effettuate
    reset(): void; // reset
}

///////////CREO UNA CLASSE COMUNE E IMPLEMENTO L'INTERFACE////////

class User implements Smartphone {
    saldoDisponibile: number;
    numeroChiamate: number;
    constructor(_saldoDisponibile: number, _numeroChiamate: number) {
        this.saldoDisponibile = _saldoDisponibile;
        this.numeroChiamate = _numeroChiamate;
    }

    ricarica(ricarica: number): void {
        this.saldoDisponibile += ricarica;
    }

    chiamata(minutiDurata: number = Math.floor(Math.random() * 10)): void {
        const tariffa = 0.2 //costo della chiamata al minuto
        this.saldoDisponibile = this.saldoDisponibile - tariffa - (tariffa * minutiDurata);
        this.numeroChiamate++;
    }

    numero404(): number {
        return Number(this.saldoDisponibile.toFixed(1));
    }

    getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    reset(): void {
        this.numeroChiamate = 0;
    }
}

let marioRossi = new User(0, 0);
let luigiVerdi = new User(0, 0);
let saraBianchi = new User(0, 0);

document.addEventListener('DOMContentLoaded', () => {

    ////MARIO ROSSI////

    //creazione degli elementi html per la scrittura degli avvisi
    var contatore1 = <HTMLElement>document.createElement('p');
    var saldo1 = <HTMLElement>document.createElement('p');
    //inserimento dei testi
    contatore1.innerText = 'Hai effettuato: ' + marioRossi.getNumeroChiamate() + ' chiamate';
    saldo1.innerText = 'Il tuo saldo disponibile è: ' + marioRossi.numero404() + '€';
    //selezione dell'elemento di riferimento
    document.querySelector('.marioRossi')?.appendChild(contatore1);
    document.querySelector('.marioRossi')?.appendChild(saldo1);

    ////LUIGI VERDI////

    var contatore2 = <HTMLElement>document.createElement('p');
    var saldo2 = <HTMLElement>document.createElement('p');
    contatore2.innerText = 'Hai effettuato: ' + luigiVerdi.getNumeroChiamate() + ' chiamate';
    saldo2.innerText = 'Il tuo saldo disponibile è: ' + luigiVerdi.numero404() + '€';
    document.querySelector('.luigiVerdi')?.appendChild(contatore2);
    document.querySelector('.luigiVerdi')?.appendChild(saldo2);

    ////SARA BIANCHI////

    var contatore3 = <HTMLElement>document.createElement('p');
    var saldo3 = <HTMLElement>document.createElement('p');
    contatore3.innerText = 'Hai effettuato: ' + saraBianchi.getNumeroChiamate() + ' chiamate';
    saldo3.innerText = 'Il tuo saldo disponibile è: ' + saraBianchi.numero404() + '€';
    document.querySelector('.saraBianchi')?.appendChild(contatore3);
    document.querySelector('.saraBianchi')?.appendChild(saldo3);

    ////FUNZIONALITà DEI BOTTONI - MARIO ROSSI ////

    document.querySelector('#btnChiama1')?.addEventListener('click', function () {
        if (marioRossi.numero404() > 0) {
            console.log(marioRossi.numero404())
            marioRossi.chiamata();
        }
        contatore1.innerText = 'Hai effettuato: ' + marioRossi.getNumeroChiamate() + ' chiamate';
        saldo1.innerText = 'Il tuo saldo disponibile è: ' + marioRossi.numero404() + '€';
    });

    document.querySelector('#ricarica1')?.addEventListener('click', function () {
        marioRossi.ricarica(10);
        contatore1.innerText = 'Hai effettuato: ' + marioRossi.getNumeroChiamate() + ' chiamate';
        saldo1.innerText = 'Il tuo saldo disponibile è: ' + marioRossi.numero404() + '€';
    });
    document.querySelector('#reset1')?.addEventListener('click', function () {
        marioRossi.reset();
        contatore1.innerText = 'Hai effettuato: ' + marioRossi.getNumeroChiamate() + ' chiamate';
    });

    ////FUNZIONALITà DEI BOTTONI - LUIGI VERDI ////

    document.querySelector('#btnChiama2')?.addEventListener('click', function () {
        if (luigiVerdi.numero404() > 0) {
            console.log(luigiVerdi.numero404())
            luigiVerdi.chiamata();
        }
        contatore2.innerText = 'Hai effettuato: ' + luigiVerdi.getNumeroChiamate() + ' chiamate';
        saldo2.innerText = 'Il tuo saldo disponibile è: ' + luigiVerdi.numero404() + '€';
    });

    document.querySelector('#ricarica2')?.addEventListener('click', function () {
        luigiVerdi.ricarica(50);
        contatore2.innerText = 'Hai effettuato: ' + luigiVerdi.getNumeroChiamate() + ' chiamate';
        saldo2.innerText = 'Il tuo saldo disponibile è: ' + luigiVerdi.numero404() + '€';
    });
    document.querySelector('#reset2')?.addEventListener('click', function () {
        luigiVerdi.reset();
        contatore2.innerText = 'Hai effettuato: ' + luigiVerdi.getNumeroChiamate() + ' chiamate';
    });

    ////FUNZIONALITà DEI BOTTONI - SARA BIANCHI ////

    document.querySelector('#btnChiama3')?.addEventListener('click', function () {
        if (saraBianchi.numero404() > 0) {
            console.log(saraBianchi.numero404())
            saraBianchi.chiamata();
        }
        contatore3.innerText = 'Hai effettuato: ' + saraBianchi.getNumeroChiamate() + ' chiamate';
        saldo3.innerText = 'Il tuo saldo disponibile è: ' + saraBianchi.numero404() + '€';
    });

    document.querySelector('#ricarica3')?.addEventListener('click', function () {
        saraBianchi.ricarica(100);
        contatore3.innerText = 'Hai effettuato: ' + saraBianchi.getNumeroChiamate() + ' chiamate';
        saldo3.innerText = 'Il tuo saldo disponibile è: ' + saraBianchi.numero404() + '€';
    });
    document.querySelector('#reset3')?.addEventListener('click', function () {
        saraBianchi.reset();
        contatore3.innerText = 'Hai effettuato: ' + saraBianchi.getNumeroChiamate() + ' chiamate';
    });
})