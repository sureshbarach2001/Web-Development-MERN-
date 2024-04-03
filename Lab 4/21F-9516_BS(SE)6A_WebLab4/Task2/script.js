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