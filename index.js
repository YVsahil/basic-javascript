/*alert("Namaste")
var x=3;
console.log(x);
var x=12;
console.log(x)
var x=12*12;
console.log(x);
alert(x)*/

// let y=23;
// console.log(y);
// y=234;
// console.log(y);
// let y=34;
// console.log(y);

// const PI=3.14;
// console.log(PI);
// PI=5678;
// console.log(PI);
// const PI=568;
// console.log(PI);

// const x=90;
// console.log(x);
// console.log(typeof x);

// const Name="YV";
// console.log(Name);
// console.log(typeof Name);

// let bool=true;
// console.log(bool);
// console.log(typeof bool);

// let x=90;
// let y=56;
// let z=false;
// let res=x+y+z;
// console.log(res);

// let x="abl";
// let y=40;
// let find=x+y;
// console.log(find);

// const name="YV";
// const sur="SAHIL";
// console.log("My name is : "+name+" "+sur+".");
// tia=(`MY name is : ${name} ${sur}.`);
// console.log(`Hakumana tata : ${tia}`);

// const y="type conversion";
// console.log(y);
// console.log(typeof y);
// console.log(typeof Number(y));


//type conversion and string methods
// let num=9876;
// console.log(typeof num);
// console.log(typeof String(num));
// console.log(typeof Number.toString(num));

//string method
//  let str="Hello, world, RAM";
// let y="Hakuna matata";

// //charat
// // console.log(str.charAt(6));
// // console.log(str.length);
// console.log(str.concat(y));

// console.log(str.replace("Hello","halooo"));
// console.log(str.indexOf("o"));
// console.log(str.lastIndexOf("l"));
// console.log(str.includes("Hello"));
// console.log(str.split(","));
// console.log(str.toLowerCase());
// console.log(y.toUpperCase());



// let z="    hakuna    ma   tata";
// console.log(z)
// console.log(z.trim());
// console.log(str.slice(0,2));

// const heading=document.getElementById("a");
// console.log(heading);
// heading.innerText="monaotghefdbxgfh";

// int a=1;
// while(a<28)
// {
//     console.log(a);
//     a++;
// }

// const num=[1,5,2,7,3,6];
// console.log(num.length);
// console.log(num[5]);

//for loop
// for(x=0;x<=20;x++)
// {
//     console.log(x);
// }

//while loop
// x=0;
// while(x<=20)
// {
//     console.log(x);
//     x++;
// }

//do while
// do {
//     x=1;
//     console.log(x);
// } while (x>20);

//const myarr=[4,6,2,4,5,3,4,22,3,];
// console.log(myarr.length);

// const myarr2=["ram","shreya","abnish","rahul"];
// console.log(myarr2);

// //push
// const newadd=myarr2.push("Amit");
// console.log(myarr2);

// //unshift
// console.log(myarr2.unshift("bablu"));
// console.log(myarr2);


//pop
// const a=[2,3,4,2,24,2,3,4,];
// // console.log(a);
// const b=a.pop();
// console.log(b);

//shift
// const a=[2,3,4,9,24,12,33,64,];
// console.log(a);
// const b=a.shift();
// console.log(b);
// console.log(a);

//concate
// let a=[2,3,4,5,6];
// let b=["ram","shyam","hari","uuuu","poute"];
// console.log(a.concat(b));
// console.log(a.reverse());

//filter
// a=[4,5,6,7,8,2,34,345,3498];
// console.log(a);
// const findfilter=a.filter(n=>n>30);
// console.log(findfilter);
// console.log(a);

//splice 
// a=[4,5,6,7,8,2,34,345,3498];
// console.log(a);
// const b=a.splice(3,4);
// console.log(b);
// console.log(a);

// console.log(a.reverse());

//sort
// a=["amit","bibek","rahul"]
// //a=[5243,5,6,17,48,2,34,345,498];
// console.log(a);
// const b=a.sort();
// console.log(b);
// console.log(a);


// let a=[];
// for(let i=0;i<11;i++){
//     a[i]=i;
//     //a.push(i);
//     console.log(a)
// }

//object

// const myprofile={
//     fname:"amit",
//     lname:"yadav",
//     age:29,
//     ismarried:true,
//     wage:function(){
//         console.log("i'm rich kiddo");
//         return true;
//     }
// }

// console.log(myprofile);
// console.log(myprofile.lname);
// console.log(myprofile["fname"]);
// console.log(myprofile.wage());


// const car={
//     make:"lambo",
//     model:"hibru",
//     color:"mat black",
//     ev:false,
//     power:2000,
//     startengine:function(){
//         console.log("start engine!");
//         return true;
//     },
//     stopengine:function(){
//         console.log("Stop engine");
//         return false;
//     }
// }
// console.log(car);
// // console.log(car.startengine());
// // console.log(car.stopengine());

// if(car.startengine())
// {
//     console.log("car is ready");
// }
// else if(car.endengine())
// {
//     console.log("get lost");
// }
// else{
//     console.log("INvalid")
// }


//functions
// function plu() {
//     let a=56;
//     let b=80;
//     let c=45;
//     let res=(a+b+b)/3;
//     console.log(res);
// }
// res()

// function treon(a,b,c){
//     return a+b+c;
// }
// const ans=treon(2,3,4);
// const an2s=treon(2,8,4);
// console.log(ans);
// console.log(an2s);

// const a=function(){
//     let a=2;
//     let b=123;
//     let res=(a+b)*9;
//     console.log(res);
// }
// console.log(a);

// function a(arr=[])
// {
//     let total=0;
//     for(let i=0;i<arr.length;i++)
//     {
//         // console.log(arr[i]);
//         total=total+arr[i];
//        // console.log(total)
//     }
//     return total;
// }

// const ans=a([2,3,5,63,2,4]);
// console.log(ans);


//scoping
// var a=56;       //global scope
// function y(){
//     var a=53+9;   //local scope
//     console.log(a);
// }
// console.log(a);
// y();


//var in block case
// function myblock(){
//     if(true)
//     {
//         var x=9*9;
//     }
//     console.log(x);
// }
// myblock()


//let in block and function

// function b()
// {
//     if(true)
//     {
//         var y=32*56+(75/56);
//         console.log(y);
//     }
//     console.log(y+2);
// }
// b();

// DOM
// const b=document.head;
// console.log(b);
// const a=document.body.firstElementChild;
// const a=document.body.lastElementChild;
// console.log(a);

// const a=document.getElementById("as");
// console.log(a);
// a.innerHTML="sdfghjk<b>dfghj</b>";       // can use HTML tag
// //a.innerText="gfd"                      //can't use HTML tag

// const p=document.getElementsByClassName("r");
// console.log(p[0]);
// p[0].innerHTML="<b>hgfd</b>";                          //can't use innerHTML in class
// const tag=document.getElementsByTagName("span");
// console.log(tag[0]);
// tag[0].innerHTML="<marquee><b>khub ramailo xa</b></marquee>"
// const naam=document.getElementsByName("naam");
// console.log(naam[0]);
// naam[0].style.width="25%";
// // naam[0].style.background="red";

// const button=document.getElementById("bu");
// console.log(button);
// button.innerHTML="Save gardim?";
// // button.style.background="aqua";
// const yu=document.querySelector("button");
// console.log(yu);
// yu.innerHTML="Save garna na vul";
// yu.style.backgroundColor="#bbbfff";
// yu.style.cursor="pointer";
// yu.style.border="0";
// yu.style.padding="10px";
// const po=document.createElement("h2");
// console.log(po);
// document.body.append(po);
// function my()
// {
//     const a=document.createElement(pow);
//     pow.innerHTML="kjhgfd"
//     document.body.prepend(po);
    
// }
// my()
// button.onlick=my();


// const a=document.querySelector("#nepal");
// console.log(a);
// a.innerHTML="<b>Nepal is my country</b>";
// a.style.color="red";
// a.style.background="blue";

// const button=document.querySelectorAll("button");
// // console.log(button);
// for(let i=0;i<button.length;i++)
// {
//     button[1].innerText="SAVE";
//     button[1].style.color="red";
//     button[1].style.backgroundColor="red";
//     button[1].style.border="0px";
//     button[1].style.padding="5px";
// }


// mybutton.onclick=myfunc;
// function delete gardeu()
// {
//     const deletehandeu=document.querySelector("h2");
//     deletehandeu.remove();
// }
// const a=document.querySelectorAll("span");
// console.log(a)
// for(let i=0;i<StereoPannerNode.length;i++)
// {
//     a[0].innerHTML="<marquee>jam</marquee>";  
//     a[0].style.backgroundColor="#FAEBD7"
// }


//advanced array method

//for each
//if we use foreach it cannot return array. it only iterate main array
// let a=[2,3,4,5,6,7,8,9];
// const myres=()=>
// {

// }
// const res=a.forEach((value,index,array) =>{
//     // console.log(index+"="+value);
//     return(array[index]=value+2);
// })

// console.log(res);

//map
//if we use map method it returns new array after iterate main array
// const mymap=a.map((value, index, array)=>{
//     // console.log(value,index,array);
//     return array[index]=value+2;
// })
// console.log(mymap);

//filter
// const myfilter=a.filter((value,index)=>{
// //    return value>2;
// //    return value % 2===0; //for even
//    return value % 2 !==0;   //for odd
// })
// console.log(myfilter);


//find method
// const myfind=a.find((value,index)=>{
//     return value>4;
// })
// console.log(myfind);


//reduce method
// const redu=a.reduce((total, curvalue,index,array)=>{
//     //return single value output(mathematical calculation use garda use garne)
//    console.log(total,curvalue,index);
//     total=(total+curvalue)/2;

//     return total;
// })
// console.log(redu);


//event listeners
// const newclick=document.getElementById("newclick");
// newclick.addEventListener("click",()=>{
//     console.log("clicked")
// })


//add event listeners
// const h1=document.getElementById("h1");
// const mydiv=document.getElementById("mydiv");
// const mybutton=document.getElementById("mybutton");
// const input=document.getElementById("input")
// mybutton.style.backgroundColor="blue";
// mybutton.style.padding="5px";
// mybutton.style.border="0px";
// mybutton.addEventListener("click",()=>{
//     // console.log("clicked");
//     // mydiv.style.background="purple";
//     // mydiv.style.color="grey";
//     // mydiv.style.padding="8px";
//     // mydiv.style.margin="5px";
//     mydiv.classList.add("newCssDiv");

// });
// mydiv.addEventListener("mouseover",()=>{
//         mybutton.style.transform="scale(1.1)";
//         h1.style.background="yellow";
// })
// mydiv.addEventListener("mouseout",()=>{
//     mybutton.style.transform="";
//     h1.style.background="";
// })
// input.addEventListener("change",(e)=>{
//     console.log(e);
//     console.log(e.target.value);
// });
// mydiv.addEventListener("dblclick",()=>{
//     document.body.style.backgroundColor="black";
// })
// mydiv.addEventListener("click",()=>{
//     document.body.style.backgroundColor="blue";
// })
// // mybutton.addEventListener("click",()=>{
// //     document.body.style.backgroundColor="blue";
// // })
// mybutton.addEventListener("contextmenu",(e)=>{
//     e.preventDefault();
//     mybutton.style.backgroundColor="red";

// })
// addEventListener("contextmenu",(e)=>{
//     e.preventDefault();
// })

//local storage and session storage
// const button=document.getElementById("mybutton");
// const input=document.getElementById("input");
// const myclear=document.getElementById("myclear");
// const deletetoken=()=>{
//     localStorage.clear();
// }
// const callmeback=()=>
// {
//     alert(input.value);
//     // sessionStorage.setItem("key",input.value);
//     localStorage.setItem(
//         "name",
    
//     JSON.stringify({fname:"sahil",lname:"yadav",age:21})
//     );
//     if(localStorage.getItem("name"))
//     {
//         alert(localStorage.getItem("name"));
//         console.log(JSON.parse(localStorage.getItem("name")));
//     }
//     else{
//         alert("uta ja")
//     }
// }
// button.addEventListener("click",callmeback);
// myclear.addEventListener("click",deletetoken);


//math object

// const value=Math.random();
// console.log(value);

//abs
// const abs=Math.abs(-9);
// console.log(abs);
// function  substract(a,b){
//     return Math.abs(a-b);
// }
// console.log(substract(2,9));

//trunct
// const val=Math.trunc(5.987654);
// console.log(val);

//round
// const val= Math.round(6.6876543);
// console.log(val);

//floor
// const val=Math.floor(6.98765432);
// console.log(val);

//ceiling
// const val=Math.ceil(3.987654);
// console.log(val);

//maximum
// const max=Math.max(3,5,3,2,4,1,66,64);
// console.log(max);

//minimum
// const min=Math.min(3,5,3,2,4,1,66,64);
// console.log(min);

//power
// const pow=Math.pow(6,7);
// console.log(pow);

// //square
// const sq=Math.sqrt(255);
// console.log(sq);


//date

// const mydate=new Date();
// console.log(mydate.toISOString());

//set timeout
// setTimeout(() => {
//     console.log("NEPAL")
// }, 5000);

//set timeinterval
// const time=setInterval(()=>{
//     console.log("HELLO");
// });
// setTimeout(()=>{
//     clearInterval(time);
//     console.log("POWER");
// },2000);




//oop concept
//constructor function


//dom
// const Form=document.getElementById("form");
// const Name=document.getElementById("customerName");
// const Amount=document.getElementById("Amount");

// const Form1=document.getElementById("form1");
// const AccountNumber=document.getElementById("accountno");
// const DepoAmount=document.getElementById("depositeamo");

// const Form2=document.getElementById("form2");
// const Name1=document.getElementById("accountno1");
// const WithdrawAmount=document.getElementById("withdrawn");


// let accounts=[];
// Form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     const account=new BankAccount(customerName.value,+Amount.value);
//     accounts.push(account);
//     console.log(accounts);
// })


// Form1.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     const DepoValue=accounts.find(
//         (value,index)=>value.accountNumber===+AccountNumber.value);
//         DepoValue.deposite(+DepoAmount.value);
//         console.log(accounts);
// })

// Form2.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     const WithdrawValue=accounts.find(
//         (value,index)=>value.accountNumber===+AccountNumber.value);
//         WithdrawValue.withdrawn(+WithdrawAmount.value);
//         console.log(accounts);
// })

// function BankAccount(customerName,balance=0){
//     this.customerName=customerName;
//     this.accountNumber=Date.now();
//     this.balance=balance;
    // this.deposite=function(amount){
    //     this.balance=this.balance+amount;
    //     // this.amount+=amount;
    // }
    // this.withdrawn=function(amount){
    //     this.balance=this.balance-amount;
        // this.balance-=amount;
//    }
// }




// BankAccount.prototype.deposite=function(amount){
//     this.balance=this.balance+amount;
//     console.log(`Deposited ${amount},Current Balance is: ${this.balance}`);
// }
// BankAccount.prototype.withdrawn=function(amount){
//     this.balance=this.balance-amount;
//     if(this.balance>=amount){
//         this.balance-=amount;
//         console.log(`Withdrawn ${amount},Current balance is:${this.balance}`);
//     }
//     else{
//         console.log(`Insufficient Balance current balance is : ${this.balance}`);
//     }
// }

// const nabil=new BankAccount("Sahil Yadav",100000);
// const na=new BankAccount("Sahil YV");
// const nic=new BankAccount("Sahil Yadav",1000);
// console.log(nabil,na,nic);
// // // console.log(na);
// na.deposite(5000);
// nabil.withdrawn(50000);
// nabil.withdrawn(2000);





//class based oops(concept in js)
//constructor:   it is a special method that is used to initailize the object when it is created;
//use constructor in class based oop


// class BankAccount{
//     constructor(CustomerName, balance=0){
//         this.CustomerName=CustomerName;
//         this.AccountNumber=Date.now();
//         this.balance=balance;
//     }
//     deposite(amount){
//         this.balance+=amount;
//         console.log(`Deposited ${amount}, Current Balance is: ${this.balance}`)
//     }
//     withdrawn(amount){
//         if(this.balance>=amount){
//         this.balance-=amount;
//         console.log(`Withdrawn ${amount}, Current balance is: ${this.balance}`);
//         }
//         else{
//             console.log(`Garib xas babu ta, her ${this.balance} eti ho, ka bata ${amount} pauxas`);
//         }
//     }
// }
// console.log(thZZZ)

// const nic=new BankAccount("Sahil");
// const nabil=new BankAccount("Nitesh",50000);
// // console.log(nabil);
// nic.withdrawn(6000);
// nabil.withdrawn(45000);


// class Person{
//     constructor(Fname,Lname,Age){
//         this.Fname=Fname;
//         this.Lname=Lname;
//         this.Age=Age;
//     }
//     Hello(){
//         console.log(`Hello ${this.Fname} ${this.Lname} your age is ${this.Age}`);
//     }
// }
// const me=new Person("sahil","yadav",21);
// me.Hello();

// function BankAccount(CustomerName,balance=0){
//     this.CustomerName=CustomerName;
//     this.balance=balance;
//     this.AccountNumber=Date.now();
// }
// BankAccount.prototype.deposit=function(amount){
//     this.deposit = function(amount){
//         this.balance=this.balance+amount;
//     }
// }
// BankAccount.prototype.withdraw=function(amount){
//     this.deposit = function(amount){
//         this.balance-=amount;
//     }
// }

// BankAccount.prototype.deposit=function(amount){
//     this.deposit = function(amount){
//         this.balance+=amount;
//     }
// }

//INHERITACE
// function currentaccount(CustomerName, balance=0){
//     BankAccount.call(this,CustomerName,balance);   //constructor calling
//     this,transactionLimit=50000;
// }
// currentaccount.prototype=Object.create(BankAccount.prototype)
// const ramacc=new currentaccount("ram",30000);
// ramacc.deposit(2000);
// // console.log(ramacc);
// currentaccount.prototype.takebusinessloan=function(amount){
//     console.log(`Taking business loan is: ${amount}`);
// }
// ramacc.takebusinessloan(60000);
// console.log(ramacc);


// const hariAcc=new BankAccount("hari",2000);
// const shyamAcc = new BankAccount("shyam",9000);``
// console.log(hariAcc,shyamAcc)



//Class based oop and inheritance

// class BankAccount{
//    CustomerName;
//    AccountNum;
//    #balance;

//    constructor(CustomerName,balance=0){
//     this.CustomerName=CustomerName;
//     this.AccountNum=Date.now();
//     this.#balance;
//    }
//    deposit(amount){
//     this.#balance+=amount;
//     console.log(`Deposited ${amount},current balance is: ${this.#balance}`);
//    } 
//    withdraw(amount){
//     if(this.#balance>amount){
//         this.#balance-=amount;
//         console.log(`Withdrawn ${amount},current balance is: ${this.#balance}`);
//     }
//     else{
//         console.log(`Bhai paisa ${this.#balance} xa ani ka bata ${amount} linxas`)
//     }
//    }
//    //setter
//    set balance(amount){
//     this.#balance=amount;
//    }
//    //getter
//    get balance(){
//     return this.#balance
//    }
// }


// class CurrentAccount extends BankAccount{

//     constructor(CustomerName,balance=0){
//         super(CustomerName,balance);
//         this.transactionlimit=50000;
//     }
//     #calculateinterest(amount){
//         // console.log(`calculating interest!`);
//         const interest=amount*0.1;
//         console.log(`Interest amount is: ${interest}`);
//     }
//     takebusninessloan(amount){
//         this.#calculateinterest(amount);
//         console.log(`Taking business loan is: ${amount}`);
//     }
//  }

// const Ram=new BankAccount("Ram",30000);
// console.log(Ram);
// Ram.deposit(2000);
// Ram.withdraw(20000);
// Ram.withdraw(30000);

// const ram=new CurrentAccount("Ram",20000);
// // ram.balance=8000;
// ram.takebusninessloan(90000);
// console.log(ram);



// ram.balance=30;
// console.log(ram);
// ram.deposit(3000);
// ram.withdraw(60000);
// ram.takebusninessloan(8000);


//static property and method

// class Calculator{
//     static add(a,b){
//         return a+b;
//     }
//     static subtract(a,b){
//         return Math.abs(a-b);
//     }

// }
// let addition=Calculator.subtract(5,7);
// console.log(addition);

// const ramd=Math.random();
// console.log(ramd);

// class User{
//     static id=1;
//     constructor(Name,Age,Income){
//         this.Name=Name;
//         this.Age=Age;
//         this.Income=Income;
//         this.id=User.id++;
//     }
//     static sortbyage(a,b){
//         return a.Age-b.Age;
//     }
//     static sortbyincome(a,b){
//         return a.Income-b.Income;
//     }
// }
// const user1=new User("Ram",21,56000);
// const user2=new User("Abnish",69,2000);
// const user3=new User("Laxman",68,10000);
// const users=[user1,user2,user3];
// // users.sort(User.sortbyage);
// // users.sort(User.sortbyincome)
// console.log(users);
// function myname(name="sahil"){
//   setTimeout(()=>{
//     for(i=0;i<1000;i++){
//         console.log(`What's up ${name}`);
//         }
//   },8000);
// }



// const a=myname();
// alert("K xa kta");
// console.log(a);
// console.log("Uja aba");

// setTimeout(()=>{
//     console.log("Hello world");
// },5000);
// alert("jhgfdfghjk")


//call back function (concept)

// function calc(a,b,callback){
//     let result=a+b;
//     callback(result)

// }
// calc(99,3,((sum)=>{
//     console.log(`the sum is ${sum}`)
// }));


//calc
// let arr=[2,6,3,2,8,3,6,54,2,5];
// function calc(arr=[],callback){
//     let Newarr=[];
//     for(i=0;i<arr.length;i++){
//         const vari=callback(arr[i]+1);
//         Newarr.push(vari)
//     }
//     console.log(Newarr);
// };
// function add(a){
//     return a+5;
// }
// function sub(a){
//     return a-5;
// }

// calc(arr,(a)=>a+5);
// calc(arr,sub);




//promises concept

// const pro=new Promise((resolve,reject)=>{
//     // resolve("Promise fulfilled");
//     reject("Technical error aayo");
    
// });
// pro.then((msg)=>console.log(msg)).catch((error)=>console.log(error)).finally(()=>console.log("Hello ji"))
// let arr=[]
// function fetchdata(arr=[]){
//     return new Promise((resolve,reject)=>{
//         arr.push({name:"Sahil",age:32});
//         if(arr.length>0){
//             resolve("Promise fulfilled");
//         }
//         else{
//             reject("Some Tedchnical error");
//         }
//     });
// };
// fetchdata(arr).then((msg)=>console.log(msg))
// .catch((error)=>console.log(error))
// .finally(()=>console.log("all done"));



//fetch api
// const h1=document.querySelector("h1");

// const url="https://official-joke-api.appspot.com/random_joke";
// function fetchdata(){
//     fetch(url)
//         .then((res)=>{
//             return res.json();
//         })
//         .then((data)=>(h1.innerText=data.fact));
//         .catch((error)=>console.log(error));
// }
// fetchdata();
