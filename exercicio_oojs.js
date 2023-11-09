function Viagens1(aeronave, capacidade, classe, origem, destino, custoA380) {
    this.aeronave = aeronave;
    this.capacidade = capacidade;
    this.classe = classe;
    this.origem = origem;
    this.destino = destino;
    this.custoA380 = custoA380;
    this.compraA380 = function() {
        console.log(this.custoA380 + " Você comprou sua passagem classe Suprime");
    }
}

function Viagens2(aeronave, capacidade, classe, origem, destino, custoB777) {
    this.aeronave = aeronave;
    this.capacidade = capacidade;
    this.classe = classe;
    this.origem = origem;
    this.destino = destino;
    this.custoB777 = custoB777;
    this.compraB777 = function() {
        console.log(this.custoB777 + " Você comprou sua passagem classe Prime");
    }
}

function Viagens3(aeronave, capacidade, classe, origem, destino, custoA380Promo) {
    Viagens1.call(this, aeronave, capacidade, classe, origem, destino, ''); // Herde as propriedades de Viagens1
    this.custoA380Promo = custoA380Promo;
    
    this.PromoLuxo = function() {
        console.log(this.custoA380Promo + " Você foi sorteado com 50% desconto no seu voô Luxo");
    }
}

function Viagens4(aeronave, capacidade, classe, origem, destino, custoB777Promo) {
    Viagens2.call(this, aeronave, capacidade, classe, origem, destino, ''); // Herde as propriedades de Viagens2
    this.custoB777Promo = custoB777Promo;
    
    this.PromoEcon = function() {
        console.log(this.custoB777Promo + " Você foi sorteado com 50% desconto no seu voô Economico");
    }
}

const vooLuxo = {
    aeronave: 'Airbus A380',
    capacidade: 853,
    classe: 'Suprime',
    origem: 'Brasil',
    destino: 'Portugal',
    custoA380: 'R$ 4.500,00',
}

const vooLuxoPromo = {
    custoA380Promo: 'R$ 2.250,00'
}

const vooEconPromo = {
    custoB777Promo: 'R$ 1.500,00'
}

const vooEconomico = {
    aeronave: 'Boeing 777',
    capacidade: 550,
    classe: 'Prime',
    origem: 'Brasil',
    destino: 'Portugal',
    custoB777: 'R$ 3.000,00',
}

const viagemLuxo = new Viagens1("Airbus A380", 853, "Suprime", "Brasil", "Portugal", "R$ 4.500,00");
const viagemEcon = new Viagens2("Boeing 777", 550, "Prime", "Brasil", "Portugal", "R$ 3.000,00");
const viagemLuxoPromo = new Viagens3(vooLuxo.aeronave, vooLuxo.capacidade, vooLuxo.classe, vooLuxo.origem, vooLuxo.destino, vooLuxoPromo.custoA380Promo);
const viagemEconPromo = new Viagens4(vooEconomico.aeronave, vooEconomico.capacidade, vooEconomico.classe, vooEconomico.origem, vooEconomico.destino, vooEconPromo.custoB777Promo);


console.log(viagemLuxo);
console.log(viagemEcon);
console.log(viagemLuxoPromo);
console.log(viagemEconPromo);

viagemLuxo.compraA380();
viagemEcon.compraB777();
viagemLuxoPromo.PromoLuxo();
viagemEconPromo.PromoEcon();