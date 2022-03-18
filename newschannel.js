console.log("welcome to wion news news channel");
// e148dc5046174b4dbad6515a91689fb4
let  newsAccordion=document.getElementById('newsAccordion');
const xhr=new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/top-headlines?country=in&apiKey=e148dc5046174b4dbad6515a91689fb4`,true)
xhr.getResponseHeader('content-type','application.json');
xhr.onload=function(){
  if(this.status===200){
    let json= JSON.parse(this.responseText)
    let articles=json.articles;
    console.log(articles);
    let newsHtml="";
    articles.forEach(function(element){
      
      let news=`<div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                              <button
                                class="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                              ${element["title"]}
                              </button>
                            </h2>
                            <div
                              id="collapseOne"
                              class=" collapse "
                              aria-labelledby="headingOne"
                              data-bs-parent="#accordionExample"
                            >
                              <div class="accordion-body">
                                ${element["content"]}.<a href="${element['url']}"target=_blank
                                ">read more here </a>"
                              </div>
                            </div>
                          </div>`;
                          newsHtml+=news;
    });
    newsAccordion.innerHTML=newsHtml;
  }
  else{
    console.log("some error has happened");
  }
}
xhr.send();
