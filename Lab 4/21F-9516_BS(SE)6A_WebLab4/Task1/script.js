function disVariable(){    
    let num1 = document.getElementById("var1");
    let num2 = document.getElementById("var2");
    let num3 = document.getElementById("var3");
    let dis = document.getElementById("displaySection");
    dis.innerHTML +=`<div>Variable 1: ${num1.value}</div>
    <div>Variable 2: ${num2.value}</div>
    <div>Variable 3: ${num3.value}</div>`;

}