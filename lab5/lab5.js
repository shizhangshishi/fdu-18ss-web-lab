product1 = 'Artist Holding a Thistle';
quantity1 = 2;
price1 = 500;
amount1=1000;

product2 = 'Self-portrait in a Straw Hat';
quantity2 = 1;
price2 = 700;
amount2=700;


//alert("hahahhhhh");


let tb=document.querySelector('.container table');
let th=document.querySelector('.container table .firstRow');


let tr1=document.createElement("tr");
let tr2=document.createElement("tr");


tb.prepend(tr1);
tb.prepend(tr2);
tb.prepend(th);


tr1.innerHTML ="<td><img class=\"img-thumbnail\" src=\"images/art/tiny/116010.jpg\" alt=\"...\"></td>" +
    "            <td>Artist Holding a Thistle</td>\n" +
    "            <td>2</td>" +
    "            <td>$500</td>" +
    "            <td>$1000</td>";





tr2.innerHTML =" <td><img class=\"img-thumbnail\" src=\"images/art/tiny/113010.jpg\" alt=\"...\"></td>\n" +
    "            <td>Self-portrait in a Straw Hat</td>\n" +
    "            <td>1</td>\n" +
    "            <td>$700</td>\n" +
    "            <td>$700</td>";



let sub=subtotal(amount1,amount2);
let ta=tax(sub);
let sh=shipping(sub);
let gr=grandtotal(sub,ta,sh);
document.querySelector(".subtotal").innerText="$"+sub;
document.querySelector(".tax").innerHTML="$"+ta;
document.querySelector(".shipping").innerHTML="$"+sh;
document.querySelector(".grandtotal").innerHTML="$"+gr;




function subtotal(amount1,amount2)
{
    return amount1+amount2;
}
function tax(subtoatl) {
    return subtoatl*0.1;
}
function shipping(subtotal) {
    if (subtotal>1000)
    {
            return 0;
    }
    else
    {
            return 40;
    }
}
function grandtotal(subtotal,tax,shipping) {
    return subtotal+tax+shipping;
}
