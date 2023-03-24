window.onload = (event) => {
      let clearbtn = document.getElementById("clear")
      let SearchEvent = document.getElementById("Search")
      let rowcard = document.getElementById("roww")

      SearchEvent.addEventListener("click", (e) => {
            e.preventDefault()
      })
      let obj = {}
      submit.addEventListener("click", (e) => {
            e.preventDefault()
            if (title.value != "" && desc.value != "") {
                  var t = title.value
                  var d = desc.value
                  fun()
            }
            else {
                  alert("Please Enter the Title and Description Both !!!")
            }

            function fun(){
                  localStorage.setItem(JSON.stringify(t), JSON.stringify(d))
                  obj[t] = d;
                  ihtml = ""
                  let i = 0;
                  for (let a in obj) {
                        if (t == "" || d == "") {
                              alert("Please Enter the Title and Description Both !!!")
                        }
                        else {
                              ihtml += `
                  <div class="column" id="card${i++}" >
                               <input type="checkbox">
                               <h5 id="title-todo" class="card-title">${a}</h5>
                               <p id="desc-todo" class="card-text">${obj[a]}</p>
                        
                   </div>
                  `
                        }
                  }
                  rowcard.innerHTML = ihtml;
            }

      })



      clearbtn.addEventListener("click", (e) => {
            e.preventDefault()
            desc.value = ""
            title.value = ""
      })


}






