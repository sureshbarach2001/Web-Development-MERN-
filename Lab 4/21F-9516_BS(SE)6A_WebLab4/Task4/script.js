function disVariable(){    
    let num1 = document.getElementById("var1").value;
    let num2 = document.getElementById("var2").value;
    let add = Number(num1)+Number(num2);
    let sub = Number(num1)-Number(num2);
    let mult = Number(num1)*Number(num2);
    let divide = Number(num1)/Number(num2);
    let dis = document.getElementById("displaySection");
    dis.innerHTML +=`<div>Addition : ${add}</div>
    <div>Subtration : ${sub}</div>
    <div>Multiplication : ${mult}</div>
    <div>Divide : ${divide}</div>`;

}

let result=document.getElementById("result");
let o1=0, o2=0, o3=0, total=0;
let var1 = document.getElementById("v1")
let var2 = document.getElementById("v2")
let var3 = document.getElementById("v3")
function votemachine(){
    TotalVote()
    let Age = document.getElementById("num")
    let Option = document.getElementById("vote").value;
    if(parseInt(Age.value) >= 18 && parseInt(Age.value) <= 90){
        document.getElementById("l1").hidden=false;
        document.getElementById("vote").hidden=false;
        if(Option == "vote1")
        {
            o1++;
            total+=o1;
            var1.innerText = o1;
        }
        else if(Option == "vote2")
        {
            o2++;
            total+=o2;
            var2.innerText = o2;
        }
        else if(Option == "vote3")
        {
            o3++;
            total+=o3;
            var3.innerText = o3;
        }
    }
    else{
        alert("Eligible Age for Voting");
    }
}

function TotalVote(){
    total=o1+o2+o3;
    if(total>=10)
    {
        document.getElementById("button").hidden=true;
        if(o1>o2&&o1>o3)
        {
            var1.style.color = "red";
            var2.style.color = "black";
            var3.style.color = "black";
        }
        else if(o2>o1&&o2>o3)
        {
            var2.style.color = "red";
            var1.style.color = "black";
            var3.style.color = "black";
        }
        else
        {
            var3.style.color = "red";
            var2.style.color = "black";
            var1.style.color = "black";
        }
    }
    
}