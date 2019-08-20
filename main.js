fetch("http://localhost:3000/newslet")
.then(r=>r.json())

.then(j=>{
    console.log(j);
    let i = 0
    for( i=0; i<j.length;i++){
        let myDiv = document.getElementById("main");
        myDiv.innerHTML += `
            <div class="card">
                <img src=${j[i].photo}>
                <h2>${j[i].title}</h2> 
                <div class="line"></div>
                <h4>${j[i].text || ""}</h4>   
            </div>
   `
    }
})
