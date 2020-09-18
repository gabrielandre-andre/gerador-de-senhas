const content = {}

    content.slide = document.getElementById('range')

    content.display =  document.querySelector('#number h1')
    
    content.passwordResultDisplay = document.querySelector('.result')
    content.passwordResult = document.querySelector('.result h2')


    content.animationConfirm = document.getElementById('confirmGeneration')



    


    content.passwordResultDisplay.style.display = 'none'

    function number(){

        setInterval(function(){

            content.numberPass = content.slide.value/5

            content.display.innerHTML = content.numberPass

            
        },10)
        
    }

    number()



    function genaratePassword(){


        content.animationConfirm.style.animationName = 'topConfirm'

        setTimeout(function(){
            content.animationConfirm.style.animationName = 'none'
        },3000)

        var password

        function passwordGenerate(quantidade){
            do{
                password = Math.random().toString(36).substr(2);
            }while(password.length < quantidade){

                pass = password.substr(0,quantidade)

                return pass
            }
        }



        content.passwordResultDisplay.style.display = 'block'

        content.passwordResultDisplay.style.animationName = 'boxAnimation' 
        content.passwordResultDisplay.style.animationDuration = '0.5s' 

        content.passwordResult.innerHTML = passwordGenerate(content.numberPass)

    }


    function verifyTheNumber(){
        setInterval(function(){
            if(content.numberPass == 0){
                content.passwordResultDisplay.style.display = 'none'
            }
        },5)
    }

    verifyTheNumber()
























    content.passwordPrincipalSection = document.querySelector('.senhaCadastro')


    function passwordVerify(){


        if(valor_cookie('newAcount') == 1){
            alert('ok')
        }else{
            content.passwordPrincipalSection.style.display = 'block'
        }
        
    }


    function closeAba(){
        content.passwordPrincipalSection.style.display = 'none'
    }




    function SaveMyPersonalPassword(){
        var MypersonalPassword = document.getElementById('passwordCok').value
        document.cookie = 'newAcount = 1'
        content.passwordPrincipalSection.style.display = 'none'

    }

    function valor_cookie(nome_cookie) {
    // Adiciona o sinal de = na frente do nome do cookie
    var cname = ' ' + nome_cookie + '=';
    
    // Obtém todos os cookies do documento
    var cookies = document.cookie;
    
    // Verifica se seu cookie existe
    if (cookies.indexOf(cname) == -1) {
        return false;
    }
    
    // Remove a parte que não interessa dos cookies
    cookies = cookies.substr(cookies.indexOf(cname), cookies.length);

    // Obtém o valor do cookie até o ;
    if (cookies.indexOf(';') != -1) {
        cookies = cookies.substr(0, cookies.indexOf(';'));
    }
    
    // Remove o nome do cookie e o sinal de =
    cookies = cookies.split('=')[1];
    
    // Retorna apenas o valor do cookie
    return decodeURI(cookies);
    }

    console.log(valor_cookie('newAcount'))