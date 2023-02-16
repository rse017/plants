//********** Burger Start ***************

(function () {
    const burgerOpen = document.querySelector('.burger-open');
    const burger = document.querySelector('.burger');
    const blackout = document.querySelector('.blackout');
    const body = document.body;
    const burgerClosed = document.querySelector('.close-line');
    burgerOpen.addEventListener('click', () => {
        burger.classList.add('burger-nav-open');
        blackout.classList.add('blackout_active');
        body.classList.add('scroll_disable');
    });
    burgerClosed.addEventListener('click', () => {
        burger.classList.remove('burger-nav-open');
        blackout.classList.remove('blackout_active');
        body.classList.remove('scroll_disable');
    });
}());

(function () {
    const burger = document.querySelector('.burger');
    const blackout = document.querySelector('.blackout');
    const body = document.body;
    const burgerClosed = document.querySelectorAll('.burger-item');
        for (let i = 0; i < burgerClosed.length; i++){
        burgerClosed[i].addEventListener('click', () => {
            burger.classList.remove('burger-nav-open');
            blackout.classList.remove('blackout_active');
            body.classList.remove('scroll_disable');    
        });
        }
}());

(function () {
    const burger = document.querySelector('.burger');
    const blackout = document.querySelector('.blackout');
    const body = document.body;
    blackout.addEventListener('click', () => {
        burger.classList.remove('burger-nav-open');
        blackout.classList.remove('blackout_active');
        body.classList.remove('scroll_disable');
    });
}());
//********** Burger End ***************

//********** Section Service Blur effect Start ***************

(function () {
    let i = 2;
    let k = 2;
    let n = 2;
    const g = document.querySelector('.btn-g');
    const l = document.querySelector('.btn-l');
    const p = document.querySelector('.btn-p');
    const blur1 = document.querySelector('.blur1')
    const blur2 = document.querySelector('.blur2')
    const blur3 = document.querySelector('.blur3')
    const blur4 = document.querySelector('.blur4')
    const blur5 = document.querySelector('.blur5')
    const blur6 = document.querySelector('.blur6')

    g.addEventListener('click', () => {
        i++;
    if ((i % 2 != 0) && ((i % 2 + k % 2 + n % 2) < 3)) {
        g.classList.add('btn-dop');
    } else {g.classList.remove('btn-dop');
    if (i % 2 != 0) {i--}
    }

    if (i % 2 != 0) {
        blur1.classList.remove('blur-2');
        blur5.classList.remove('blur-2');
    } else {
        blur1.classList.add('blur-2');
        blur5.classList.add('blur-2');
    }       
    if (k % 2 != 0) {
        blur3.classList.remove('blur-2');
    } else {
        blur3.classList.add('blur-2');
    }     
    if ((n % 2 != 0)) {
        blur2.classList.remove('blur-2');
        blur4.classList.remove('blur-2');
        blur6.classList.remove('blur-2');
    } else {
        blur2.classList.add('blur-2');
        blur4.classList.add('blur-2');
        blur6.classList.add('blur-2');
    }
    if ((i % 2 == 0) && (k % 2 == 0) && (n % 2 == 0)) {
        blur1.classList.remove('blur-2');
        blur2.classList.remove('blur-2');
        blur3.classList.remove('blur-2');
        blur4.classList.remove('blur-2');
        blur5.classList.remove('blur-2');
        blur6.classList.remove('blur-2');    
    }
    });

    l.addEventListener('click', () => {
        k++;
    if ((k % 2 != 0) && ((i % 2 + k % 2 + n % 2) < 3)) 
        {l.classList.add('btn-dop');
    } else {l.classList.remove('btn-dop');
    if (k % 2 != 0) {k--}
    }

    if (i % 2 != 0) {
        blur1.classList.remove('blur-2');
        blur5.classList.remove('blur-2');
    } else {
        blur1.classList.add('blur-2');
        blur5.classList.add('blur-2');
    }       
    if (k % 2 != 0) {
        blur3.classList.remove('blur-2');
    } else {
        blur3.classList.add('blur-2');
    }     
    if ((n % 2 != 0)) {
        blur2.classList.remove('blur-2');
        blur4.classList.remove('blur-2');
        blur6.classList.remove('blur-2');
    } else {
        blur2.classList.add('blur-2');
        blur4.classList.add('blur-2');
        blur6.classList.add('blur-2');
    }
    if ((i % 2 == 0) && (k % 2 == 0) && (n % 2 == 0)) {
        blur1.classList.remove('blur-2');
        blur2.classList.remove('blur-2');
        blur3.classList.remove('blur-2');
        blur4.classList.remove('blur-2');
        blur5.classList.remove('blur-2');
        blur6.classList.remove('blur-2');    
    }
    });

    p.addEventListener('click', () => {
        n++;
    if ((n % 2 != 0) && ((i % 2 + k % 2 + n % 2) < 3))
        {p.classList.add('btn-dop');
    } else {p.classList.remove('btn-dop');
    if (n % 2 != 0) {n--}
    }
    if (i % 2 != 0) {
        blur1.classList.remove('blur-2');
        blur5.classList.remove('blur-2');
    } else {
        blur1.classList.add('blur-2');
        blur5.classList.add('blur-2');
    }       
    if (k % 2 != 0) {
        blur3.classList.remove('blur-2');
    } else {
        blur3.classList.add('blur-2');
    }     
    if ((n % 2 != 0)) {
        blur2.classList.remove('blur-2');
        blur4.classList.remove('blur-2');
        blur6.classList.remove('blur-2');
    } else {
        blur2.classList.add('blur-2');
        blur4.classList.add('blur-2');
        blur6.classList.add('blur-2');
    }
    if ((i % 2 == 0) && (k % 2 == 0) && (n % 2 == 0)) {
        blur1.classList.remove('blur-2');
        blur2.classList.remove('blur-2');
        blur3.classList.remove('blur-2');
        blur4.classList.remove('blur-2');
        blur5.classList.remove('blur-2');
        blur6.classList.remove('blur-2');    
    }
    }); 
}());

//********** Section Service Blur effect finished ***************

//********** Accordion in section prices  start  ***************

(function () {
    const price1 = document.querySelector('.prices-item-acc1');
    const price2 = document.querySelector('.prices-item-acc2');
    const price3 = document.querySelector('.prices-item-acc3');
    const prices1 = document.querySelector('.prices-item-old1');
    const prices2 = document.querySelector('.prices-item-old2');
    const prices3 = document.querySelector('.prices-item-old3');
    const prices =document.querySelector('.prices-items')
    const dropUp1 = document.querySelector('.drop-up1');
    const dropUp2 = document.querySelector('.drop-up2');
    const dropUp3 = document.querySelector('.drop-up3');
    const dropDown1 = document.querySelector('.drop-down1');
    const dropDown2 = document.querySelector('.drop-down2');
    const dropDown3 = document.querySelector('.drop-down3');    
    dropUp1.addEventListener('click', () => {
        price1.classList.add('prices-item-acc');
        prices1.classList.add('prices-item-old');
        price2.classList.remove('prices-item-acc'); 
        price3.classList.remove('prices-item-acc');
        prices2.classList.remove('prices-item-old');
        prices3.classList.remove('prices-item-old');

        prices.classList.add('prices-items-acc');

    });
    dropDown1.addEventListener('click', () => {
        price1.classList.remove('prices-item-acc');
        prices1.classList.remove('prices-item-old');
        prices.classList.remove('prices-items-acc');
    });
    dropUp2.addEventListener('click', () => {
        price2.classList.add('prices-item-acc');
        prices2.classList.add('prices-item-old');        
        price1.classList.remove('prices-item-acc'); 
        price3.classList.remove('prices-item-acc');
        prices1.classList.remove('prices-item-old');
        prices3.classList.remove('prices-item-old');

        prices.classList.add('prices-items-acc');
 
    });
    dropDown2.addEventListener('click', () => {
        price2.classList.remove('prices-item-acc'); 
        prices2.classList.remove('prices-item-old');
        prices.classList.remove('prices-items-acc');

    });
    dropUp3.addEventListener('click', () => {
        price3.classList.add('prices-item-acc');
        prices3.classList.add('prices-item-old');
        price2.classList.remove('prices-item-acc'); 
        price1.classList.remove('prices-item-acc');
        prices2.classList.remove('prices-item-old');
        prices1
        .classList.remove('prices-item-old');

        prices.classList.add('prices-items-acc');
 
    });
    dropDown3.addEventListener('click', () => {
        price3.classList.remove('prices-item-acc');
        prices3.classList.remove('prices-item-old');
        prices.classList.remove('prices-items-acc');

    });   
}());

function changeCity() {
	var numberValue = document.getElementById("select").value;
    const cardCity = document.querySelector('.city-card-rem');
    const callLink = document.getElementById('call-link');
    const citySize = document.querySelector('.contacts-wrapper');
    const cityField = document.querySelector('.city-field');
    const cityWoman = document.querySelector('.contacts-woman');
   
    cityField.classList.add('city-field-dop');
    citySize.classList.add('contacts-wrapper-dop');
    cardCity.classList.add('city-card-rem-dop');
    cityWoman.classList.add('contacts-woman-dop');
    if (numberValue === "2") {
        document.getElementById("city-name").innerHTML = "Canandaigua, NY";
        document.getElementById("city-number").innerHTML = "+1 585 393 0001";
        document.getElementById("city-address").innerHTML = "151 Charlotte Street";
        callLink.href = "tel:+15853930001" 
    }
    if (numberValue === "3") {
        document.getElementById("city-name").innerHTML = "New York City";
        document.getElementById("city-number").innerHTML = "+1 212 456 0002";
        document.getElementById("city-address").innerHTML = "9 East 91st Street";
        callLink.href = "tel:+12124560002" 
    }
    if (numberValue === "4") {
        document.getElementById("city-name").innerHTML = "Yonkers, NY";
        document.getElementById("city-number").innerHTML = "+1 914 678 0003";
        document.getElementById("city-address").innerHTML = "511 Warburton Ave";
        callLink.href = "tel:+19146780003" 
    }
    if (numberValue === "5") {
        document.getElementById("city-name").innerHTML = "Sherrill, NY";
        document.getElementById("city-number").innerHTML = "+1 315 908 0004";
        document.getElementById("city-address").innerHTML = "14 WEST Noyes BLVD";
        callLink.href = "tel:+13159080004" 
    }
    if (numberValue === "1") {
        cardCity.classList.remove('city-card-rem-dop');
        cityField.classList.remove('city-field-dop');
        citySize.classList.remove('contacts-wrapper-dop');
        cityWoman.classList.remove('contacts-woman-dop');
  
    }

}