var ricarica; //definisco il valore e il tipo della ricarica
///////////CREO UNA CLASSE COMUNE E IMPLEMENTO L'INTERFACE////////
var User = /** @class */ (function () {
    function User(_saldoDisponibile, _numeroChiamate) {
        this.saldoDisponibile = _saldoDisponibile;
        this.numeroChiamate = _numeroChiamate;
    }
    User.prototype.ricarica = function (ricarica) {
        this.saldoDisponibile += ricarica;
    };
    User.prototype.chiamata = function (minutiDurata) {
        if (minutiDurata === void 0) { minutiDurata = Math.floor(Math.random() * 10); }
        var tariffa = 0.2; //costo della chiamata al minuto
        this.saldoDisponibile = this.saldoDisponibile - tariffa - (tariffa * minutiDurata);
        this.numeroChiamate++;
    };
    User.prototype.numero404 = function () {
        return Number(this.saldoDisponibile.toFixed(1));
    };
    User.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    User.prototype.reset = function () {
        this.numeroChiamate = 0;
    };
    return User;
}());
var marioRossi = new User(0, 0);
var luigiVerdi = new User(0, 0);
var saraBianchi = new User(0, 0);
document.addEventListener('DOMContentLoaded', function () {
    ////MARIO ROSSI////
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    //creazione degli elementi html per la scrittura degli avvisi
    var contatore1 = document.createElement('p');
    var saldo1 = document.createElement('p');
    //inserimento dei testi
    contatore1.innerText = 'Hai effettuato: ' + marioRossi.getNumeroChiamate() + ' chiamate';
    saldo1.innerText = 'Il tuo saldo disponibile è: ' + marioRossi.numero404() + '€';
    //selezione dell'elemento di riferimento
    (_a = document.querySelector('.marioRossi')) === null || _a === void 0 ? void 0 : _a.appendChild(contatore1);
    (_b = document.querySelector('.marioRossi')) === null || _b === void 0 ? void 0 : _b.appendChild(saldo1);
    ////LUIGI VERDI////
    var contatore2 = document.createElement('p');
    var saldo2 = document.createElement('p');
    contatore2.innerText = 'Hai effettuato: ' + luigiVerdi.getNumeroChiamate() + ' chiamate';
    saldo2.innerText = 'Il tuo saldo disponibile è: ' + luigiVerdi.numero404() + '€';
    (_c = document.querySelector('.luigiVerdi')) === null || _c === void 0 ? void 0 : _c.appendChild(contatore2);
    (_d = document.querySelector('.luigiVerdi')) === null || _d === void 0 ? void 0 : _d.appendChild(saldo2);
    ////SARA BIANCHI////
    var contatore3 = document.createElement('p');
    var saldo3 = document.createElement('p');
    contatore3.innerText = 'Hai effettuato: ' + saraBianchi.getNumeroChiamate() + ' chiamate';
    saldo3.innerText = 'Il tuo saldo disponibile è: ' + saraBianchi.numero404() + '€';
    (_e = document.querySelector('.saraBianchi')) === null || _e === void 0 ? void 0 : _e.appendChild(contatore3);
    (_f = document.querySelector('.saraBianchi')) === null || _f === void 0 ? void 0 : _f.appendChild(saldo3);
    ////FUNZIONALITà DEI BOTTONI - MARIO ROSSI ////
    (_g = document.querySelector('#btnChiama1')) === null || _g === void 0 ? void 0 : _g.addEventListener('click', function () {
        if (marioRossi.numero404() > 0) {
            console.log(marioRossi.numero404());
            marioRossi.chiamata();
        }
        contatore1.innerText = 'Hai effettuato: ' + marioRossi.getNumeroChiamate() + ' chiamate';
        saldo1.innerText = 'Il tuo saldo disponibile è: ' + marioRossi.numero404() + '€';
    });
    (_h = document.querySelector('#ricarica1')) === null || _h === void 0 ? void 0 : _h.addEventListener('click', function () {
        marioRossi.ricarica(10);
        contatore1.innerText = 'Hai effettuato: ' + marioRossi.getNumeroChiamate() + ' chiamate';
        saldo1.innerText = 'Il tuo saldo disponibile è: ' + marioRossi.numero404() + '€';
    });
    (_j = document.querySelector('#reset1')) === null || _j === void 0 ? void 0 : _j.addEventListener('click', function () {
        marioRossi.reset();
        contatore1.innerText = 'Hai effettuato: ' + marioRossi.getNumeroChiamate() + ' chiamate';
    });
    ////FUNZIONALITà DEI BOTTONI - LUIGI VERDI ////
    (_k = document.querySelector('#btnChiama2')) === null || _k === void 0 ? void 0 : _k.addEventListener('click', function () {
        if (luigiVerdi.numero404() > 0) {
            console.log(luigiVerdi.numero404());
            luigiVerdi.chiamata();
        }
        contatore2.innerText = 'Hai effettuato: ' + luigiVerdi.getNumeroChiamate() + ' chiamate';
        saldo2.innerText = 'Il tuo saldo disponibile è: ' + luigiVerdi.numero404() + '€';
    });
    (_l = document.querySelector('#ricarica2')) === null || _l === void 0 ? void 0 : _l.addEventListener('click', function () {
        luigiVerdi.ricarica(50);
        contatore2.innerText = 'Hai effettuato: ' + luigiVerdi.getNumeroChiamate() + ' chiamate';
        saldo2.innerText = 'Il tuo saldo disponibile è: ' + luigiVerdi.numero404() + '€';
    });
    (_m = document.querySelector('#reset2')) === null || _m === void 0 ? void 0 : _m.addEventListener('click', function () {
        luigiVerdi.reset();
        contatore2.innerText = 'Hai effettuato: ' + luigiVerdi.getNumeroChiamate() + ' chiamate';
    });
    ////FUNZIONALITà DEI BOTTONI - SARA BIANCHI ////
    (_o = document.querySelector('#btnChiama3')) === null || _o === void 0 ? void 0 : _o.addEventListener('click', function () {
        if (saraBianchi.numero404() > 0) {
            console.log(saraBianchi.numero404());
            saraBianchi.chiamata();
        }
        contatore3.innerText = 'Hai effettuato: ' + saraBianchi.getNumeroChiamate() + ' chiamate';
        saldo3.innerText = 'Il tuo saldo disponibile è: ' + saraBianchi.numero404() + '€';
    });
    (_p = document.querySelector('#ricarica3')) === null || _p === void 0 ? void 0 : _p.addEventListener('click', function () {
        saraBianchi.ricarica(100);
        contatore3.innerText = 'Hai effettuato: ' + saraBianchi.getNumeroChiamate() + ' chiamate';
        saldo3.innerText = 'Il tuo saldo disponibile è: ' + saraBianchi.numero404() + '€';
    });
    (_q = document.querySelector('#reset3')) === null || _q === void 0 ? void 0 : _q.addEventListener('click', function () {
        saraBianchi.reset();
        contatore3.innerText = 'Hai effettuato: ' + saraBianchi.getNumeroChiamate() + ' chiamate';
    });
});
