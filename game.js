
window.onload=(event)=>{
      let a=document.getElementById("title-todo")
      let b=document.getElementById("desc-todo")
      let deletebtn=document.getElementById("delete-btn")
      let clearbtn=document.getElementById("clear")
      let columnbox=document.getElementById("card1")
     
           submit.addEventListener("click",(e)=>{
                  e.preventDefault()
                  let t=title.value
                  let d=desc.value
                  localStorage.setItem(JSON.stringify(t),JSON.stringify(d))
                  if(t=="" & d=="")
                  {
                        a.innerHTML="-"
                        b.innerHTML="-"
                  }
                  else if(d=="")
                  {
                        a.innerHTML=t
                        b.innerHTML="-"

                  }
                  else if(t=="")
                  {
                        a.innerHTML="-"
                        b.innerHTML=d
                  }
                  else
                  {
                        a.innerHTML=t
                        b.innerHTML=d 
                  }
            columnbox.style.display="block";
                
            })
            
            deletebtn.addEventListener("click",(e)=>{
                  e.preventDefault()
                columnbox.style.display="none";

            })

            clearbtn.addEventListener("click",(e)=>{
                  e.preventDefault()
                  desc.value=""
                  title.value=""
            })


     }



