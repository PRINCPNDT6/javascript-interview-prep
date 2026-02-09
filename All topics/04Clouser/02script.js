 const allButton = document.querySelectorAll('button')
        let allButtonArr = Array.from(allButton)

        function colorChanger(color){
            return function(){
                document.body.style.backgroundColor = color;
                console.log(color);
                
            }
        }


        allButtonArr.forEach(btn =>{
            btn.addEventListener('click', colorChanger(btn.id))

            // btn.addEventListener('click', (e)=>{
                // console.log(e.target);
                // console.log(btn);
                 
                // if(e.target.id === 'green'){
                //     // document.body.style.backgroundColor = e.target.id;
                //     colorChanger(e.target.id)();
                // }
                
                
            // })
        })