var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var url = "./Abbigliamento.json";
var Stock = /** @class */ (function () {
    function Stock(capo, codprod, collezione, colore, disponibile, id, modello, prezzoivainclusa, prezzoivaesclusa, quantita, saldo) {
        this.capo = capo;
        this.codprod = codprod;
        this.collezione = collezione;
        this.colore = colore;
        this.disponibile = disponibile;
        this.id = id;
        this.modello = modello;
        this.prezzoivainclusa = prezzoivainclusa;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.quantita = quantita;
        this.saldo = saldo;
    }
    Stock.prototype.getSaldoCapo = function () { return this.saldo; };
    Stock.prototype.getAcquistoCapo = function () {
        return this.prezzoivainclusa - (this.prezzoivainclusa * (this.getSaldoCapo() / 100));
    };
    return Stock;
}());
function createClass() {
    return __awaiter(this, void 0, void 0, function () {
        var res, arrayOfCapi;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url).then(function (response) { return response.json(); })];
                case 1:
                    res = _a.sent();
                    arrayOfCapi = [];
                    res.forEach(function (item) {
                        var capo = new Stock(item.capo, item.codprod, item.collezione, item.colore, item.disponibile, item.id, item.modello, item.prezzoivainclusa, item.prezzoivaesclusa, item.quantita, item.saldo);
                        arrayOfCapi.push(capo);
                    });
                    arrayOfCapi.forEach(function (item) { console.log("Il prodotto: ".concat(item.capo, " della collezione ").concat(item.collezione, " costa ").concat(item.prezzoivainclusa, " euro, ma con uno sconto applicato del ").concat(item.getSaldoCapo(), "%, il capo costa SOLO ").concat(item.getAcquistoCapo(), " euro")); });
                    return [2 /*return*/];
            }
        });
    });
}
createClass();
