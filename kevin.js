let bodyDOM=document.getElementById('body')
var angka=0;

   function ganti(){
       if(angka==0){
           bodyDOM.style.backgroundColor="blue"
           bodyDOM.style.backgroundImage="none"
           angka=1;
       }
       else if(angka==1){
          bodyDOM.style.backgroundColor="orange"
          bodyDOM.style.backgroundImage= 'url(./Tk.jpg)'
            angka=2;
       }

       else if(angka==2){
           bodyDOM.style.backgroundColor="purple"
           bodyDOM.style.backgroundImage= 'url(./1.jpg)'
           angka=3;
      }
      else if(angka==3){
        bodyDOM.style.backgroundColor="green"
        bodyDOM.style.backgroundImage= 'url(./bb.jpg)'
        angka=4;
        
    }
    else if(angka==4){
        bodyDOM.style.backgroundColor="black"
        bodyDOM.style.backgroundImage= 'url(./lol.jpg)'
        angka=0;
        
    }
    



   }