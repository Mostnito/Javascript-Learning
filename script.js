console.log("Hello Most");
var Firstname = "Tapanawat";
var Lastname = "Sunanta";
var Fullname = Firstname + " " + Lastname;
var Age = 20;
//alert(Firstname + " " + Lastname + " is " + Age + " years old.");
//alert(typeof(Age) + " " + typeof(Firstname) + " " + typeof(Lastname));
//alert(Fullname);
{
    var x = 10;
    let y = 5;
    console.log(y);
}
console.log(x);

// let username = prompt("What is your name?");
// alert("Hello " + username);

let num = prompt("กรอกเลขหวยที่ต้องการซื้อ");
let lotto = Math.floor(Math.random() * 10);
document.getElementById("yourlotto").innerHTML = "เลขที่คุณซื้อ " + num;
document.getElementById("real").innerHTML = "เลขที่ออก " + lotto;

if (num == lotto) {
    document.getElementById("result").innerHTML = "คุณถูกรางวัล";
    document.getElementById("content").innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/7sIxGadiNm8?si=ktsCA8nrMvHi7Fj4\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>";
} else{
    document.getElementById("result").innerHTML = "เสียใจด้วย คุณไม่ถูกรางวัล";
}

console.log(9 == "9");
console.log(9 === "9");