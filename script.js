console.log("O JS está linkado!");

function verificar() {
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;
    let celular = document.getElementById("celular").value;
    let img = document.getElementById("img").value;
    let data = document.getElementById("data").value;
    let email = document.getElementById("email").value;
    let cep = document.getElementById("cep").value;
    let cidade = document.getElementById("cidade").value;
    let instagram = document.getElementById("instagram").value;
    let github = document.getElementById("github").value;


    console.log({ nome });
    console.log({ telefone });
    console.log({ celular });
    console.log({ img });
    console.log({ data });
    console.log({ email });
    console.log({ cep });
    console.log({ cidade });
    console.log({ instagram });
    console.log({ github });

    if (nome == '' || telefone == '' || celular == '' || img == '' || data == '' || email == '' || cep == '' || cidade == '' || instagram == '' || github == '') {
        console.log("Os dados estão vazios, preencha todos os inputs!");
        return true;
    } else {
        console.log("Os dados estão preenchidos!");
        return false;
    }
}


function limpar() {
    console.log("Passou pela função limparInputs!");

    nome = document.getElementById("nome").value = '';
    telefone = document.getElementById("telefone").value = '';
    celular = document.getElementById("celular").value = '';
    img = document.getElementById("img").value = '';
    data = document.getElementById("data").value = '';
    email = document.getElementById("email").value = '';
    cep = document.getElementById("cep").value = '';
    cidade = document.getElementById("cidade").value = '';
    instagram = document.getElementById("instagram").value = '';
    github = document.getElementById("github").value = '';
}



class Dados {
    constructor(nome, telefone, celular, img, data, email, cep, cidade, instagram, github) {
        this.nome = nome;
        this.telefone = telefone;
        this.celular = celular;
        this.img = img;
        this.data = data;
        this.email = email;
        this.cep = cep;
        this.cidade = cidade;
        this.instagram = instagram;
        this.github = github;
        this.age = this.calculateAge(data);
        this.zodiacSign = this.getZodiacSign();
        this.id = this.getId();
       
    }
    calculateAge(data) {
        console.log("Passou pelo calculateAge() da class Dados");
        const newDateJS = new Date(data);
        const yearDate = newDateJS.getFullYear();
    
        const todayDate = new Date();
        const nowDate = todayDate.getFullYear();
    
        const age = nowDate - yearDate;
        return age
      }

    
    getZodiacSign() {
        let birthdate = new Date(this.birthdate);
        let day = birthdate.getDate();
        let month = birthdate.getMonth() + 1;
        console.log("Passou pelo getZodiacSign() da class Dados");

        if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
            return "Capricórnio ♑";
        } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
            return "Aquário ♒";
        } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
            return "Peixes ♓";
        } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
            return "Áries ♈";
        } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
            return "Touro ♉";
        } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
            return "Gêmeos ♊";
        } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
            return "Câncer ♋";
        } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
            return "Leão ♌";
        } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
            return "Virgem ♍";
        } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
            return "Libra ♎";
        } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
            return "Escorpião ♏";
        } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
            return "Sagitário ♐";
        }
    }

    getId(){
        const num = (Math.random()* 9999);
        return num;
    }

}

const Teste = new Dados("Teste", "Teste", "Teste", "Teste", "Teste", "Teste", "Teste", "Teste", "Teste", "Teste");
console.log(Teste);

function adicionar() {
    nome = document.getElementById("nome").value;
    telefone = document.getElementById("telefone").value;
    celular = document.getElementById("celular").value;
    img = document.getElementById("img").value;
    data = document.getElementById("data").value;
    email = document.getElementById("email").value;
    cep = document.getElementById("cep").value;
    cidade = document.getElementById("cidade").value;
    instagram = document.getElementById("instagram").value;
    github = document.getElementById("github").value;


    const pessoa = new Dados(nome, telefone, celular, img, data, email, cep, cidade, instagram, github);
    console.log(pessoa);
    contatos.add(pessoa);
    renderizarConteudo();
}

function envieMsg(msg, tipo) {
    let msgDiv = document.getElementById("msg");
    msgDiv.innerHTML = '';

    let msgParaTela = `
    <p class='${tipo}'>${msg}</p>
    `
    msgDiv.innerHTML += msgParaTela;

    setTimeout(function () {
        msgDiv.innerHTML = '';
    }, 3000);
}

class ListaPessoas {
    constructor() {
        this.listapessoas = [];
    }
    add(schedule) {
        if (verificar()) {
            envieMsg("Preencha todos os campos!", "erro")
        } else {
            this.listapessoas.push(schedule);
            limpar();
            envieMsg("Adicionado com sucesso!", "sucesso");
            console.log(this.listapessoas);
        }
    }
    getNumeruzinho(num){
        return this.listapessoas.find((pessoa) => pessoa.num == num);
    }
    
}
const contatos = new ListaPessoas();
console.log(contatos);

function renderizarConteudo() {

    const listaHTML = document.getElementById('containerLista');
    listaHTML.innerHTML = '';
    
    let dadosDiv = '';
    let array = contatos.listapessoas;



    console.log(array);
    array.forEach(pessoa => {

        const dadosDiv = `
            <div class='detalhes' onclick="mostrar(${pessoa.id})">
                <img src="${pessoa.img} alt="${pessoa.nome}">
                <h1>${pessoa.nome}</h1>
                <p>Telefone Fixo:${pessoa.telefone}</p>
                <p>Telefone Celular:${pessoa.celular}</p>
                <p>Data:de nascimento:${dataCerta(pessoa.data)}</p>
            </div>  
       `;
        listaHTML.innerHTML += dadosDiv;
    });
}
function isAnyInputEmpty() {
    console.log("Passou pela funcao isAnyInputEmpty()");

    nome = document.getElementById("nome").value;
    telefone = document.getElementById("telefone").value;
    celular = document.getElementById("celular").value;
    img = document.getElementById("img").value;
    data = document.getElementById("data").value;
    email = document.getElementById("email").value;
    cep = document.getElementById("cep").value;
    cidade = document.getElementById("cidade").value;
    instagram = document.getElementById("instagram").value;
    github = document.getElementById("github").value;

    if (nome == '' || telefone == '' || celular == '' || img == '' || data == '' || email == '' || cep == '' || cidade == '' || instagram == '' || github == '') {
        return true;
    } else {
        return false;
    }
}

function dataCerta(data){
    let datacorreta = data.split('-');
    let datainvert = datacorreta.reverse().join('/');
    return datainvert
}

function mostrar(num){
    document.getElementById("lateral").classList.remove("hidden");
    const pessoa = contatos.getNumeruzinho(num);
    let html =`
    <p>Detalhe</p>
    <img src="${pessoa.img} alt="${pessoa.nome}" id="imgzinha">
    <h1>${pessoa.nome}</h1>
    <p>Identificador:${pessoa.id}</p>
    <p>Telefone Fixo:${pessoa.telefone}</p>
    <p>Telefone Celular:${pessoa.celular}</p>
    <p>Data:de nascimento:${dataCerta(pessoa.data)}</p>
    <p>Idade:${pessoa.age} anos</p>
    <p>Signo:${pessoa.zodiacSign}</p>
    <p>Email:${pessoa.email}</p>
    <p>CEP:${pessoa.cep}</p>
    <p>Cidade:${pessoa.cidade}</p>
    <p>Instagram:${pessoa.instagram}</p>
    <p>Github:${pessoa.github}</p>`;

    document.getElementById("lateral").innerHTML = html;
    console.log(num);
}


