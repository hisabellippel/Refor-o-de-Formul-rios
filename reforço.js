function alertn() {
    let nome = document.getElementById ('nome').ariaValueMax.trim();
    if (!nome || isNaN(nome)){
        alert ('Por favor, preencher o nome');
        return;
     }else{
        console.log (nome);
     }

     const sobrenome = document.getElementById ('sobrenome').ariaValueMax.trim();
    if (!sobrenome){
        alert ('Por favor, preencher o sobrenome!');
        return;
     }else{
        console.log (sobrenome);
     }
   
     const idade = parseInt (document.getElementById('idade').value,10);
    if(isNaN(idade) || idade < 18){
      alert('A idade para completar a compra deve ser maior que 18 anos!');
      return;
    }else{
      console.log(idade);
    }

    const email = document.getElementById('email').ariaValueMax.trim();
    if (!email){
      alert('Por favor, preencher o E-mail!');
      return;
    }else{
      console.log(email);
    }
    
     const telefone = parseInt (document.getElementById('telefone').ariaValueMax.trim());
     if (!telefone || !telefone.lenght == 11 || isNaN){
       alert ('Por favor, insira seu telefone!');
       return;
    }else{
       console.log (telefone);
    }

    const endereco = parseInt (document.getElementById('endereco').ariaValueMax.trim());
     if (!endereco){
       alert ('Por favor, insira seu endereço!');
       return;
    }else{
       console.log (endereco);
    }
    
    const senha = parseInt(document.getElementById('senha').value.trim);
    if (!senha || !senha.lenght == 10 || isNaN(senha)){
       alert('Por favor, insira uma senha válida.');
       return;
    }else{
       console.log(senha);
    }
    
    const OTP = parseInt(document.getElementById('OTP').value, 10);
    if (!OTP || !OTP.lenght == 5 || isNaN(OTP)) {
       alert('Por favor, insira um código válido.');
       return;
    }else{
       console.log(OTP);
    }
    
    const cpf = document.getElementById('cpf').value.trim();
    if (!cpf || !cpf.lenght == 11 || isNaN(cpf)){
      alert('Por favor, insira um CPF válido');
      return;
    }else{
      console.log(cpf);
    }

    const RG = document.getElementById('RG').value,10;
    if (!RG || !RG.lenght == 8 || isNaN(RG)){
      alert('Por favor, insira um RG válido!');
      return;
    }else{
      console.log(RG);
    }

    const DN = document.getElementById('DN');
    if(DN.value == ''){
      alert("Data não preenchida!");
      return;
   }else{
      console.log(DN);
   }

   const Profissao = document.getElementById('Profissao');
   if(!Profissao){
      alert("Insira sua profissão!");
      return;
   }else{
      console.log(Profissao);
   }

   const CEP = document.getElementById('CEP');
   if (!CEP || !CEP.lenght == 8 || isNaN(CEP)){
      alert('Por favor, insira um CEP válido!');
      return;
    }else{
      console.log(CEP);
    }

    
    }