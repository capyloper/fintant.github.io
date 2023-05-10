let calculateBtn = document.getElementById("calculate-btn");

let result = document.getElementById("result");

let calculate = () =>{
    let p =Number(document.getElementById("tabungan").value);
    let r =Number(document.getElementById("persen").value);
    let t =Number(document.getElementById("target").value);

    console.log(p,r,t);

    let amount = t/(p*(r/100));
    let sisa = (p*(t/(p*(r/100))))-t;
    console.log(amount);

    result.innerHTML = `<div> Estimasi (Bulan) : <span>${amount.toFixed()}</span></div>
    <div>Sisa Tabungan : <span>Rp.${sisa.toFixed(2)}</span></div>`;
};

calculateBtn.addEventListener("click",calculate);
window.addEventListener("load", calculate);