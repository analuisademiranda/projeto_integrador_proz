function toggleForm(tipo) {
    const formPf = document.getElementById('form_pf');
    const formPj = document.getElementById('form_pj');

    if (tipo === 'pf') {
        formPf.style.display = 'block';
        formPj.style.display = 'none';
    } else if (tipo === 'pj') {
        formPf.style.display = 'none';
        formPj.style.display = 'block';
    }
}


// ---------- pegando elementos username pj ---------- //
let usernameInput = document.getElementById("nome");
let usernameLabel = document.querySelector('label[for="nome"]');
let usernameHelper = document.getElementById("nome-helper");

// ---------- pegando elementos cnpj ---------- //
let cnpjInput = document.getElementById("cnpj");
let cnpjLabel = document.querySelector('label[for="cnpj"]');
let cnpjHelper = document.getElementById("cnpj-helper");

// ---------- pegando elementos endereço ---------- //
let enderecoInput = document.getElementById("endereco");
let enderecoLabel = document.querySelector('label[for="endereco"]');
let enderecoHelper = document.getElementById("endereco-helper");

// ---------- pegando elementos registro ---------- //
let registroInput = document.getElementById("registro");
let registroLabel = document.querySelector('label[for="registro"]');
let registroHelper = document.getElementById("registro-helper");


//---------- pegando elementos email ----------//
let emailLabel = document.querySelector('label[for="email"]');
console.log(emailLabel);

let emailInput = document.getElementById("email");
console.log(emailInput);

let emailHelper = document.getElementById("email-helper");
console.log(emailHelper);

//---------- pegando elementos telefone ----------//
let telefoneLabel = document.querySelector('label[for="telefone"]');
console.log(telefoneLabel);

let telefoneInput = document.getElementById("telefone");
console.log(telefoneInput);

let telefoneHelper = document.getElementById("telefone-helper");
console.log(telefoneHelper);


//---------- Mostrar popup de campo obrigatório---------- //
// Campo obrigatório para o User name função anonima
usernameInput.addEventListener("focus", function (){
    usernameLabel.classList.add("required-popup")
});

//----------Ocultar popup de campo obrigatório----------//
usernameInput.addEventListener("blur", function(){
    usernameLabel.classList.remove("required-popup")
})

// Campo obrigatório para o Email com arrow function
emailInput.addEventListener("focus", () => {
    emailLabel.classList.add("required-popup")
});

//----------Ocultar popup de campo obrigatório----------//
emailInput.addEventListener("blur", () => {
    emailLabel.classList.remove("required-popup")
});

// Campo obrigatório para o telefone com arrow function
telefoneInput.addEventListener("focus", () => {
    telefoneLabel.classList.add("required-popup")
});

//----------Ocultar popup de campo obrigatório----------//
telefoneInput.addEventListener("blur", () => {
    telefoneLabel.classList.remove("required-popup")
});

// Campo obrigatório para o cnpj com arrow function
cnpjInput.addEventListener("focus", () => {
    cnpjLabel.classList.add("required-popup")
});

//----------Ocultar popup de campo obrigatório----------//
cnpjInput.addEventListener("blur", () => {
    cnpjLabel.classList.remove("required-popup")
});

//----------Validar valor do input----------//
//---------- username ----------//
usernameInput.addEventListener("input",function(e) {
    let valor = e.target.value;
    console.log(valor);

    //adicionar a condição
    if(valor.length < 3){
        usernameInput.classList.add("error")
        usernameHelper.classList.add("visible")
        usernameHelper.innerText = "O nome de usuário deve ter no mínimo 3 caracteres"
        usernameInput.classList.remove("correct")
    }else{
        usernameInput.classList.remove("error")
        usernameInput.classList.add("correct")
        usernameHelper.classList.remove("visible")
    }
});

//---------- telefone ----------//
telefoneInput.addEventListener("input",function(e) {
    let valor = e.target.value;
    console.log(valor);

    //adicionar a condição
    if(valor.length < 10){
        telefoneInput.classList.add("error")
        telefoneHelper.classList.add("visible")
        telefoneHelper.innerText = "O telefone deve conter o DDD"
        telefoneInput.classList.remove("correct")
    }else{
        telefoneInput.classList.remove("error")
        telefoneInput.classList.add("correct")
        telefoneHelper.classList.remove("visible")
    }
});

//---------- email ----------//
emailInput.addEventListener("input", (e)=>{
    let valor = e.target.value;

    //adicionar acondição
    if(valor.includes("@") && valor.includes(".com")){
        emailInput.classList.add("correct")
        emailHelper.classList.remove("visible")
    }else{
        emailInput.classList.remove("error")
        emailHelper.classList.add("visible")
        emailHelper.innerText = "Insira um email válido"
    }
})

//---------- cnpj ----------//
cnpjInput.addEventListener("input",function(e) {
    let valor = e.target.value;
    console.log(valor);

    //adicionar a condição
    if(valor.length < 14){
        cnpjInput.classList.add("error")
        cnpjHelper.classList.add("visible")
        cnpjHelper.innerText = "o CNPJ deve conter 14 números"
        cnpjInput.classList.remove("correct")
    }else{
        cnpjInput.classList.remove("error")
        cnpjInput.classList.add("correct")
        cnpjHelper.classList.remove("visible")
    }
});

//---------- registro ----------//
registroInput.addEventListener("input",function(e) {
    let valor = e.target.value;
    console.log(valor);

    //adicionar a condição
    if(isNaN(valor) == true){
        registroInput.classList.add("error")
        registroHelper.classList.add("visible")
        registroHelper.innerText = "Apenas números"
        registroInput.classList.remove("correct")
    }else{
        registroInput.classList.remove("error")
        registroInput.classList.add("correct")
        registroHelper.classList.remove("visible")
    }
});

//---------- endereco ----------//
enderecoInput.addEventListener("input",function(e) {
    let valor = e.target.value;
    console.log(valor);

    //adicionar a condição
    if(valor.length < 4 && isNaN(valor) == false){
        enderecoInput.classList.add("error")
        enderecoHelper.classList.add("visible")
        enderecoHelper.innerText = "Insira um endereço válido"
        enderecoInput.classList.remove("correct")
    }else{
        enderecoInput.classList.remove("error")
        enderecoInput.classList.add("correct")
        enderecoHelper.classList.remove("visible")
    }
});

// ---------- pegando elementos username pf ---------- //
let usernameInputpf = document.getElementById("nomepf");
let usernameLabelpf = document.querySelector('label[for="nomepf"]');
let usernameHelperpf = document.getElementById("nome-helperpf");

 
//---------- pegando elementos email ----------//
let emailLabelpf = document.querySelector('label[for="emailpf"]');
console.log(emailLabelpf);

let emailInputpf = document.getElementById("emailpf");
console.log(emailInputpf);

let emailHelperpf = document.getElementById("email-helperpf");
console.log(emailHelperpf);

//---------- pegando elementos telefone ----------//
let telefoneLabelpf = document.querySelector('label[for="telefonepf"]');
console.log(telefoneLabelpf);

let telefoneInputpf = document.getElementById("telefonepf");
console.log(telefoneInputpf);

let telefoneHelperpf = document.getElementById("telefone-helperpf");
console.log(telefoneHelperpf);


//---------- Mostrar popup de campo obrigatório---------- //
// Campo obrigatório para o User name função anonima
usernameInputpf.addEventListener("focus", function (){
    usernameLabelpf.classList.add("required-popup")
});

//----------Ocultar popup de campo obrigatório----------//
usernameInputpf.addEventListener("blur", function(){
    usernameLabelpf.classList.remove("required-popup")
})

// Campo obrigatório para o Email com arrow function
emailInputpf.addEventListener("focus", () => {
    emailLabelpf.classList.add("required-popup")
});

//----------Ocultar popup de campo obrigatório----------//
emailInputpf.addEventListener("blur", () => {
    emailLabelpf.classList.remove("required-popup")
});

// Campo obrigatório para o telefone com arrow function
telefoneInputpf.addEventListener("focus", () => {
    telefoneLabelpf.classList.add("required-popup")
});

//----------Ocultar popup de campo obrigatório----------//
telefoneInputpf.addEventListener("blur", () => {
    telefoneLabelpf.classList.remove("required-popup")
});

//----------Validar valor do input----------//
//---------- username ----------//
usernameInputpf.addEventListener("input",function(e) {
    let valor = e.target.value;
    console.log(valor);

    //adicionar a condição
    if(valor.length < 3){
        usernameInputpf.classList.add("error")
        usernameHelperpf.classList.add("visible")
        usernameHelperpf.innerText = "O nome de usuário deve ter no mínimo 3 caracteres"
        usernameInputpf.classList.remove("correct")
    }else{
        usernameInputpf.classList.remove("error")
        usernameInputpf.classList.add("correct")
        usernameHelperpf.classList.remove("visible")
    }
});

//---------- telefone ----------//
telefoneInputpf.addEventListener("input",function(e) {
    let valor = e.target.value;
    console.log(valor);

    //adicionar a condição
    if(valor.length < 10){
        telefoneInputpf.classList.add("error")
        telefoneHelperpf.classList.add("visible")
        telefoneHelperpf.innerText = "O telefone deve conter o DDD"
        telefoneInputpf.classList.remove("correct")
    }else{
        telefoneInputpf.classList.remove("error")
        telefoneInputpf.classList.add("correct")
        telefoneHelperpf.classList.remove("visible")
    }
});

//---------- email ----------//
emailInputpf.addEventListener("input", (e)=>{
    let valor = e.target.value;

    //adicionar acondição
    if(valor.includes("@") && valor.includes(".com")){
        emailInputpf.classList.add("correct")
        emailHelperpf.classList.remove("visible")
    }else{
        emailInputpf.classList.remove("error")
        emailHelperpf.classList.add("visible")
        emailHelperpf.innerText = "Insira um email válido"
    }
})

// ----------Validar valor do input email----------//
emailInputpf.addEventListener("change", (e) =>{
    let valor = e.target.value;
    // condição
    if(valor.includes("@") && valor.includes(".com")){
        emailInputpf.classList.add("correct")
        emailHelperpf.classList.remove("visible")
        emailInputpf.classList.remove("correct")
    }else{
        emailInputpf.classList.add("error")
        emailHelperpf.classList.add("visible")
        emailHelperpf.innerText = "Insira um email válido"
    }
})

