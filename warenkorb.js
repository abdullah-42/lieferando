let orderCard =
{
    'number': [],
    'meal': [],
    'price': [],
};

let billCard =
{
    'summe': [],
    'restSumme': [],
    'gesamt': [],
};


let counter = [];

function mealBtn() {

    const dishesBtn = document.querySelectorAll('.dishes');


    for (let i = 0; i < dishesBtn.length; i++) {
        counter.push(0);

        dishesBtn[i].addEventListener('click', () => {
            if (orderCard.meal.length == 0 || orderCard["number"][0] == 0) { clearWarenkorb(); } // warenkorb empty

            plusBtnfunction(i, dishesBtn);
            addOrderCard(i, dishesBtn); // add Order + html
            mainBillButton();
            showBillButton();
        });

    }
}

function addOrderCard(i, dishesBtn) {
    mealHTML = dishesBtn[i].querySelectorAll('.dishes-title > :nth-child(1)');
    priceHTML = dishesBtn[i].querySelectorAll('.dishes > :nth-child(4)');
    containerW = document.getElementById('warenkorb-2').querySelectorAll("div");
    let firstDiv = containerW[0]; //order section
    let secondDiv = containerW[1]; // bill section
    orderRow = document.getElementById(`orderRow${i}`);

    mealText = mealHTML[0].textContent;
    priceHTML = priceHTML[0].textContent;
    priceFloat = parseFloat(priceHTML.replace("€", ""));

    let arrayIndex = 0; // iterator for orderCard-Array
    if (orderCard.meal.length == 0) { //*first order

        orderCard["meal"].push(mealText);
        orderCard["number"].push(+1);
        orderCard["price"].push(priceFloat);
        firstDiv.innerHTML += orderRowHTMLTemplate(i, arrayIndex);
        secondDiv.innerHTML += billTemplate();

    } else {

        let count = 0;
        for (let index = 0; index < orderCard.number.length; index++) {
            if (orderCard["meal"][index] == mealText) { //* same order

                orderCard["number"][index] += 1;
                orderCard["price"][index] += priceFloat;

                arrayIndex = index;
                orderRow.innerHTML = orderHTMLTemplate(i, arrayIndex);

                count++;
                break;
            }
        }
        if (count == 0) { //* new order
            orderCard["meal"].push(mealText);
            orderCard["number"].push(+1);
            orderCard["price"].push(priceFloat);

            arrayIndex = orderCard.meal.length - 1;
            firstDiv.innerHTML += orderRowHTMLTemplate(i, arrayIndex);
        }
    }
    renderbillCard();
}
function deleteOrderCard(i, dishesBtn) {
    mealHTML = dishesBtn[i].querySelectorAll('.dishes-title > :nth-child(1)');
    priceHTML = dishesBtn[i].querySelectorAll('.dishes > :nth-child(4)');
    containerW = document.getElementById('warenkorb');
    orderRow = document.getElementById(`orderRow${i}`);

    mealText = mealHTML[0].textContent;
    priceHTML = priceHTML[0].textContent;
    priceFloat = parseFloat(priceHTML.replace("€", ""));


    let arrayIndex = 0; // iterator for orderCard-Array
    if (orderCard["number"][0] == 1 && orderCard.number.length == 1) { //* remove the last order

        popOrderCardArray(arrayIndex);

        warenkorb = document.getElementById('warenkorb');
        warenkorb.className = "warenkorb";
        warenkorb.innerHTML =
            `
            <h2>Warenkorb</h2>
            <i class="bi bi-bag" style="font-size: 40px; margin-bottom: -50px;"></i>
            <div class="warenkorb-text">
                <h2>Fülle deinen Warenkorb</h2>
                <span>Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.</span>
            </div>
            `;
        hideBillButton();
    }
    else {

        for (let index = 0; index < orderCard.number.length; index++) {
            if (orderCard["meal"][index] == mealText) { //* same order

                orderCard["number"][index] -= 1;
                orderCard["price"][index] -= priceFloat;

                arrayIndex = index;
                orderRow.innerHTML = orderHTMLTemplate(i, arrayIndex);

                // if you delete the last order
                if (orderCard["number"][arrayIndex] == 0 && orderCard.number.length >= 2) {
                    popOrderCardArray(arrayIndex);
                    deleteTemplateRow(orderRow);
                }

                break;
            }
        }
    }
    if (orderCard.number.length > 0)
        renderbillCard();
}

function orderRowHTMLTemplate(i, arrayIndex) {
    return /*html*/`
        <div class="orderRow" id="orderRow${[i]}">
            <div class="orderRow1" >
                <div class="orderNumber">
                    ${orderCard["number"][arrayIndex]}
                    ${orderCard["meal"][arrayIndex]}
                </div>
                <div class="orderPrice">
                    ${orderCard["price"][arrayIndex].toFixed(2)} €
                </div>
            </div>
            <div class=orderRow2>
                <div id="noteOrder">
                    <a onclick ="noteOrder(${[i]})">Anmerkung hinzufügen</a>
                    <div class="note-container" id="note-container">
                        <textarea></textarea>
                        <button onclick="noteOrderclose(${[i]})" id="close-button">Schließen</button>
                    </div> 
                </div> 
                <span class="minusW" onclick="deleteOne(${[i]})"><img src="img/png/minus.png"></span>
                <span class="plusW" onclick="addOne(${[i]})"><img src="img/png/plus.png"></span>
            </div>
            
        </div>
        `

}

function orderHTMLTemplate(i, arrayIndex) {
    return /*html*/`
             <div class="orderRow1" >
                <div class="orderNumber">
                    ${orderCard["number"][arrayIndex]}
                    ${orderCard["meal"][arrayIndex]}
                </div>
                <div class="orderPrice">
                    ${orderCard["price"][arrayIndex].toFixed(2)} €
                </div>
            </div>
            <div class=orderRow2>
                <div id="noteOrder">
                    <a onclick ="noteOrder(${[i]})">Anmerkung hinzufügen</a>
                    <div class="note-container" id="note-container">
                        <textarea></textarea>
                        <button onclick="noteOrderclose(${[i]})" id="close-button">Schließen</button>
                    </div> 
                </div> 
                <span class="minusW" onclick="deleteOne(${[i]})"><img src="img/png/minus.png"></span>
                <span class="plusW" onclick="addOne(${[i]})"><img src="img/png/plus.png"></span>
            </div>
            `
}

function deleteTemplateRow(orderRow) {
    orderRow.remove();
}

function billTemplate() {
    return /*html*/`
    <div class="bill-container">
    <div class="minOrder">
        <div>
            <p>Benötigter Betrag, um den Mindestbestellwert zu erreichen</p>
        </div>
        <div class="minOrder-price">
        </div>
    </div>
    <div class="bill">
       <div class ="bill-text-price">
        <div class="bill-text">
            <ul>Zwischensumme:</ul>
            <ul>Lieferkosten:</ul>
            <ul>Gesamt:</ul>
        </div>
            <div class="bill-price">
            </div>
        </div> 
            <div class="bill-button">
            </div>
    </div>
</div>
`
}
// plus-button auf dishes
function plusBtnfunction(i, dishesBtn) {
    const plusBtn = document.querySelectorAll('.plus');
    counter[i]++;
    plusBtn[i].innerHTML = counter[i];

    dishesBtn[i].addEventListener('mouseenter', function () {
        dishesBtn[i].style.backgroundColor = '#f3f1f0'
        plusBtn[i].innerHTML = '<img src="img/png/plus.png">';
    });
    dishesBtn[i].addEventListener('mouseleave', function () {
        dishesBtn[i].style.backgroundColor = 'white';
        plusBtn[i].innerHTML = counter[i];
        if (counter[i] <= 0) {
            plusBtn[i].innerHTML = '<img src="img/png/plus.png">';
            counter[i] = 0;
        }
    });
}
// minus-button in Warenkorb
function minusBtnfunction(i, dishesBtn) {
    const plusBtn = document.querySelectorAll('.plus');
    counter[i]--;
    plusBtn[i].innerHTML = counter[i];

    if (counter[i] <= 0) {
        plusBtn[i].innerHTML = '<img src="img/png/plus.png">';
    }
}
// delete Array[][x]
function popOrderCardArray(arrayIndex) {
    orderCard["meal"].splice(arrayIndex, 1);
    orderCard["number"].splice(arrayIndex, 1);
    orderCard["price"].splice(arrayIndex, 1);
}

function clearWarenkorb() {
    warenkorb = document.getElementById('warenkorb');
    warenkorb.className = "warenkorb2";
    warenkorb.innerHTML = `
                            <h2> Warenkorb</h2>
                            <div id='warenkorb-2'>
                                <div></div>
                                <div></div>
                            </div>
                            ` ;
}

function addOne(i) {
    const dishesBtn = document.querySelectorAll('.dishes');
    plusBtnfunction(i, dishesBtn);
    addOrderCard(i, dishesBtn); // add Order + html
    mainBillButton();
    showBillButton();
}

function deleteOne(i) {
    const dishesBtn = document.querySelectorAll('.dishes');
    minusBtnfunction(i, dishesBtn);
    deleteOrderCard(i, dishesBtn); // add Order + html
    mainBillButton();
}

function noteOrder(i) {
    const orderRow = document.getElementById(`orderRow${i}`);
    const note = orderRow.querySelector('.note-container');
    note.style.display = "flex";
}
function noteOrderclose(i) {
    const orderRow = document.getElementById(`orderRow${i}`);
    const note = orderRow.querySelector('.note-container');
    note.style.display = "none";
}

function renderbillCard() {
    minOrder = document.querySelector(".minOrder");
    priceDiv = document.querySelector(".minOrder-price")
    billPriceDiv = document.querySelector(".bill-price")
    billButton = document.querySelector(".bill-button")
    clonebillbutton = document.querySelector('.clone-bill-button');

    let summe = 0;
    for (let i = 0; i < orderCard.number.length; i++) {
        summe += orderCard["price"][i];
    }
    if (summe >= 30) {
        minOrder.style.display = 'none';
    }
    if (summe < 30) {
        minOrder.style.display = 'flex';
    }

    billCard["restSumme"][0] = 30 - summe;
    priceDiv.innerHTML = `${billCard["restSumme"][0].toFixed(2)} €`;

    billCard["summe"][0] = summe;
    billCard["gesamt"][0] = summe + 1.50;
    billPriceDiv.innerHTML = /*html*/`
            <ul>${billCard["summe"][0].toFixed(2)} €</ul>
            <ul>1.50 €</ul>
            <ul>${billCard["gesamt"][0].toFixed(2)} €</ul>
    `
    if (summe + 1.50 < 30) {
        billButton.style.backgroundColor = '#c2bdbdab';
        clonebillbutton.style.backgroundColor = '#c2bdbdab';

    }
    else {
        billButton.style.backgroundColor = '#f15d00';
        clonebillbutton.style.backgroundColor = '#f15d00';
    }

    billButton.innerHTML = /*html*/`
        Bezahlen (${billCard["gesamt"][0].toFixed(2)} €)
    `
}

function showWarenkorb() {
    warenkorbContainer = document.querySelector(".warenkorb-container");
    mainContainer = document.querySelector(".main");

    if (window.innerWidth < 725) {
        if (warenkorbContainer.style.display == 'block') {
            warenkorbContainer.style.display = 'none';
            mainContainer.style.display = 'flex';
        } else {
            warenkorbContainer.style.display = 'block';
            mainContainer.style.display = 'none';
        }
    }
}

function mainBillButton() {
    let billButton = document.querySelector('.bill-button');
    let mainButton = document.querySelector('.clone-bill-button')
    let cloneButton;

    if (orderCard.number.length > 0) {
        cloneButton = billButton.cloneNode(true);
        mainButton.innerHTML = cloneButton.innerHTML;
    }
}

function hideBillButton() {
    const footerDiv = document.getElementsByTagName("footer")[0];
    footerDiv.style.display = 'none';
}
function showBillButton() {
    const footerDiv = document.getElementsByTagName("footer")[0];
    footerDiv.style.display = 'flex';
}