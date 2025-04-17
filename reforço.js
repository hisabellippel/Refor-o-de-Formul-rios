function Enviar() {
    let nome = document.getElementById ('nome').ariaValueMax.trim();
    let sobrenome = document.getElementById ('sobrenome').ariaValueMax.trim();
    let idade = parseInt (document.getElementById('idade').value,10);
    let email = document.getElementById('email').ariaValueMax.trim();
    let telefone = parseInt (document.getElementById('telefone').ariaValueMax.trim());
    let endereco = parseInt (document.getElementById('endereco').ariaValueMax.trim());
    let senha = document.getElementById('senha').value.trim;
    let OTP = parseInt(document.getElementById('OTP').value, 10);
    let cpf = document.getElementById('cpf').value.trim();
    let RG = document.getElementById('RG').value.trim();
    let DN = document.getElementById('DN');
    let Profissao = document.getElementById('Profissao');
    let CEP = document.getElementById('CEP');
    let Cidade = document.getElementById('Cidade');
    let Estado = document.getElementById('Estado');
    let Bairro = document.getElementById('Bairro');
    let Rua = document.getElementById('Rua');
    let numero = parseInt(document.getElementById('numero'));
    let cor = document.querySelector('cor').value;
    let quantidade = parseInt(document.getElementById('quantidade'));
    let semana = document.querySelector('semana');
    let codigo = parseInt(document.getElementById('codigo'));


   if (!nome || isNaN(nome)){
        alert ('Por favor, preencher o nome');
        return;
     }else{
        console.log (nome);
     }

   
    if (!sobrenome){
        alert ('Por favor, preencher o sobrenome!');
        return;
     }else{
        console.log (sobrenome);
     }
   
     
    if(isNaN(idade) || idade < 18){
      alert('A idade para completar a compra deve ser maior que 18 anos!');
      return;
    }else{
      console.log(idade);
    }

    
    if (!email){
      alert('Por favor, preencher o E-mail!');
      return;
    }else{
      console.log(email);
    }
    
     
     if (!telefone || !telefone.lenght == 11 || isNaN){
       alert ('Por favor, insira seu telefone!');
       return;
    }else{
       console.log (telefone);
    }

    
     if (!endereco){
       alert ('Por favor, insira seu endereço!');
       return;
    }else{
       console.log (endereco);
    }
    
    
    if (!senha || !senha.lenght == 10 || isNaN(senha)){
       alert('Por favor, insira uma senha válida.');
       return;
    }else{
       console.log(senha);
    }
    
    
    if (!OTP || !OTP.lenght == 5 || isNaN(OTP)) {
       alert('Por favor, insira um código válido.');
       return;
    }else{
       console.log(OTP);
    }
    
    
    if (!cpf || !cpf.lenght == 11 || isNaN(cpf)){
      alert('Por favor, insira um CPF válido');
      return;
    }else{
      console.log(cpf);
    }

   
    if (!RG || !RG.lenght == 8 || isNaN(RG)){
      alert('Por favor, insira um RG válido!');
      return;
    }else{
      console.log(RG);
    }

    
    if(DN.value == ''){
      alert("Data não preenchida!");
      return;
   }else{
      console.log(DN);
   }

   
   if(!Profissao){
      alert("Insira sua profissão!");
      return;
   }else{
      console.log(Profissao);
   }

  
   if (!CEP || !CEP.lenght == 8 || isNaN(CEP)){
      alert('Por favor, insira um CEP válido!');
      return;
    }else{
      console.log(CEP);
    }

   
   if(!Cidade || isNaN(Cidade)){
      alert('Por favor, insira sua cidade!');
      return;
   }else{
   console.log(Cidade);
   }

   
   if(!Estado || isNaN(Estado)){
      alert('Por favor, insira seu Estado!');
      return;
   }else{
   console.log(Estado);
   }

   
   if(!Bairro || isNaN(Bairro)){
      alert('Por favor, insira seu Bairro!');
      return;
   }else{
   console.log(Bairro);
   }

   
   if(!Rua || isNaN(Rua)){
      alert('Por favor, insira sua Rua!');
      return;
   }else{
   console.log(Rua);
   }

   
   if(!numero || isNaN(numero)){
      alert('Por favor, insira o número da sua casa!');
      return;
   }else{
   console.log(numero);
   }

  
   if(!cor || isNaN(cor)){
      alert('Por favor, insira a cor desejada do produto')
      return;
   }else{
      console.log(cor)
   }

   
   if(!quantidade || isNaN(quantidade)){
      alert('Por favor, insira a quantidade requerida!')
      return;
   }else{
      console.log(quantidade)
   }

   
   if(!semana || isNaN(semana)){
      alert('Por favor, insira a semana que você deseja receber o produto!')
      return;
   }else{
      console.log(semana);
   }

   if(!codigo || isNaN(codigo)){
      alert('Por favor, insira um código de segurança válido!')
      return;
   }else{
      console.log(codigo)
   }
   }