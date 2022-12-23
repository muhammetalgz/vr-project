const increase = document.querySelector(".basket")
const buyButton = document.querySelectorAll(".buy");
const abortButton = document.querySelectorAll(".abort");
const basket = document.querySelector(".basket-icon");
const modalText = document.querySelector(".modalText");
const modalButton = document.querySelector("#myBtn");


var urunler = [];
var toplam = 0;


modalButton.addEventListener("click", text);
function text() {
    if (urunler.length === 0) {
        modalText.innerHTML = "Sepetinizde Ürün Bulunmamaktadır.";
    }
    else {

        const containerLength = document.querySelectorAll("div.container").length;
        console.log(containerLength);
        if (containerLength == urunler.length) {

               return true;

        }
        urunler.forEach(function (i) {

            const container = document.createElement("div");
            const basketBox = document.createElement("div");
            const title = document.createElement("div");
            const image = document.createElement("img");
            const price = document.createElement("div");
            const total = document.createElement("div");
            const price2 = document.createElement("p");
            const fiyat2 = Number(i.fiyat.slice(0,3)); 
    
            
            title.className = "title";
            image.className = "image";
            price.className = "price";
            total.className = "total";


            title.textContent = i.isim;
            image.src = i.image;
            price.textContent = i.fiyat;
            total.textContent = "Toplam Fiyat:";

            basketBox.appendChild(image);
            basketBox.appendChild(title);
            basketBox.appendChild(price);
            container.appendChild(basketBox);
            modalText.appendChild(container);
            modalText.appendChild(total);

            let fiyat3 = toplam += fiyat2;
            price2.textContent =  fiyat3 + " " + "TL" ;
            total.appendChild(price2);

            console.log(fiyat2);

        });
    }
}

buyButton.forEach(function (i) {
    i.addEventListener("click", myFunction);
});
function myFunction(e) {


    const fiyat = e.path[2].querySelector(".text span").textContent;

    const image = e.path[2].querySelector("img").src;

    const isim = e.path[2].querySelector(".text p").innerHTML;

    urunler.push({ fiyat: fiyat, image: image, isim: isim });

    increase.textContent = urunler.length;

}
abortButton.forEach(function (i) {
    i.addEventListener("click", myFunction2);
});


function myFunction2() {
    if (urunler.length === 0) {
        alert("Sepetinizde Ürün Bulunmamaktadır.")
        return;
    }
    else {
        urunler.length--;
        increase.innerHTML = urunler.length

    }
}

function active() {
    var element = document.getElementById("close");
    element.classList.toggle("navbar");

    var element = document.getElementById("rotate");
    element.classList.toggle("rotate");

}

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}