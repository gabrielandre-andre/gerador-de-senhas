const content = {}

    content.slide = document.getElementById('range')

    content.display =  document.querySelector('#number h1')
    
    content.passwordResultDisplay = document.querySelector('.result')
    content.passwordResult = document.querySelector('.result h2')

    


    content.passwordResultDisplay.style.display = 'none'

    function number(){

        setInterval(function(){

            content.numberPass = content.slide.value/5

            content.display.innerHTML = content.numberPass

            
        },10)
        
    }

    number()



    function genaratePassword(){

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