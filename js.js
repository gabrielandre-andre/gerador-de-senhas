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
        content.passwordPrincipalSection.style.display = 'block'
    }


    function closeAba(){
        content.passwordPrincipalSection.style.display = 'none'
    }