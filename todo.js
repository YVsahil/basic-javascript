const title=document.getElementById("title");
console.log(title);
const desc=document.getElementById("desc");
console.log(desc);
const form=document.querySelector("form");
console.log(form);
const cont=document.querySelector(".cont");
console.log(cont);
let task=localStorage.getItem("task")?JSON.parse(localStorage.getItem("task")):[];
showalltask();
// task[0]={name:"ram"};
// console.log(task)
function showalltask(){
    task.forEach((value,index)=>{
        const div=document.createElement("div");
        div.setAttribute("class","task");

        const innerdiv=document.createElement("div");
        div.append(innerdiv);
        const p=document.createElement("p");
        p.innerText=value.title;

        innerdiv.append(p);
        const span=document.createElement("span");
        innerdiv.append(span);
        span.innerText=value.desc;
        const btn=document.createElement("button");
        btn.setAttribute("class","deletebtn");
        btn.innerText="-";
        btn.addEventListener("click",()=>{
            removetask();
            task.splice(index,1);
            localStorage.setItem("task",JSON.stringify(task));
            showalltask();
        })
        div.append(btn);
        cont.append(div);
    })
}
function removetask(){
    task.forEach(()=>{
        const maindiv=document.querySelector(".task");
        maindiv.remove();
    })
}
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    removetask();
    task.push({
        title:title.value,
        desc:desc.value,
    })
    localStorage.setItem("task",JSON.stringify(task));
    showalltask();
    console.log(task);
})