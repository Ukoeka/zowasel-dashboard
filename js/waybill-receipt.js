var dispatchsection = document.getElementById("dispatchsection");
var receiptsection = document.getElementById("receiptsection");
function receiptSection(){
    // alert("Helloworld");
    dispatchsection.style.display="none";
    receiptsection.style.display="block";
}
function backToDispatch(){
    dispatchsection.style.display="block";
    receiptsection.style.display="none";
}