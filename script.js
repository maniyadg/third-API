let container = document.createElement("div");
container.setAttribute("class","container");
container.style.marginTop="50px";
container.style.textAlign="center";

let input = document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","input");
input.classList.add("form","mr-sm-2")

let search = document.createElement("button");
search.setAttribute("type","button");
search.classList.add("btn","btn-outline-success","my-2","my-sm-0");
search.innerHTML="Search";
search.addEventListener("click",foo);

let main=document.createElement("div")
main.setAttribute("id","main")
main.style.marginLeft="105px"

let active=document.createElement("div")
active.setAttribute("id","active")

let Recovered=document.createElement("div")
Recovered.setAttribute("id","Recovered")

let Deaths=document.createElement("div")
Deaths.setAttribute("id","Deaths")

document.body.append(container,main)
container.append(input,search,active,Recovered,Deaths)

async function foo(){
    let word = document.getElementById("input").value;
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    let res = await fetch(url)
    let res1 = await res.json()
    console.log(res1)
    main.innerHTML=`<div class="card border-dark mb-3" style="max-width: 18rem; margin:20px 445px;">
    <div class="card-header"></div>
    <div class="card-body text-dark">
      <h5 class="card-title">Wpord :${res1[0].word}</h5>
      <h5 class="card-title">License Name :${res1[0].license.name}</h5>
      <h5 class="card-title">Part of Speech :${res1[0].meanings[0].partOfSpeech}</h5>
    </div>
  </div>`
}