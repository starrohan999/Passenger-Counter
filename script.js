let saveEl=document.getElementById("save-el");
let html=document.getElementById("count-el");
let count=0;
function incrementFunc(){
   count=count+1;
   html.innerText=count;
}
function decrementFunc()
{
    document.getElementById('count-el').innerHTML="0"
    count=0;
    saveEl.innerText="Previous entries : ";

}
function saveFunc()
{
    let show=count+" - ";
    saveEl.innerText+=show;
}
console.log("hello world!");
