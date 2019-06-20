// 1. Add an event to the 'See Details' content that will create an alert box that says 'Not Available in Hawaii.' after clicking on See Details.

let details = document.querySelector("#details");

details.addEventListener("click", function() {
    alert("Not Available in Hawaii");
});

//2. Add an event to the div element with the id of 'name1' that will show/hide the description ('descrip1') after hovering over Air Jordan II.

let name1 = document.querySelector("#name1");
let descrip1 = document.querySelector("#descrip1")

name1.addEventListener("mouseover", function() {
    // console.log(descrip1);
    if(descrip1.style.display == 'block'){
        descrip1.style.display = 'none'
    }else{
        descrip1.style.display = 'block'
    }
})

//3. Add an event to the div element with the id of 'name2' that will show/hide the following description after clicking on the element.
//'The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season.'
//You'll need to:
// create a div element with an id of 'descrip2'
//append this element to the div element with the id of 'name2' 

let name2 = document.querySelector("#name2");
let descrip2 = document.createElement("div");

descrip2.id = "descrip2";
descrip2.textContent = "The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season.";

name2.addEventListener("click", function() {
    // console.log(descrip2);
    name2.appendChild(descrip2);
    if(descrip2.style.display == 'block'){
        descrip2.style.display = 'none'
    }else{
        descrip2.style.display = 'block'
    }
});


//4. Add events to the all the thumbs up icon that will add a count for each time the icon is clicked on for any shoe.

let thumbsEl = document.querySelectorAll("#thumbs");


for(let i = 0; i < thumbsEl.length; i++) {
    thumbsEl[i].addEventListener("click", function() {
        let counter = this.querySelectorAll(".count")[0];
        counter.innerHTML++;
    })
    let counterEl = document.createElement("div");
    counterEl.className = "count";
    thumbsEl[i].appendChild(counterEl);
}


//5. Add an event to the plus icon that will increment the price of the Air Jordan V shoe each time the icon is clicked on.

let incPrice = document.querySelector("#increase");
let price4 = document.querySelector("#price4");
let price4Str = document.querySelector("#price4").textContent;
let price4Num = Number(price4Str);

incPrice.addEventListener("click", function() {
    price4Num += 100;
    price4.textContent = price4Num;
    price4.appendChild(incPrice);
});

//6. Add an event to the minus icon that will decrement the price of the Air Jordan VI shoe each time the icon is clicked on.

let decPrice = document.querySelector("#decrease");
let price5 = document.querySelector("#price5");
let price5Str = document.querySelector("#price5").textContent;
let price5Num = Number(price5Str);

decPrice.addEventListener("click", function() {
    price5Num -= 100;
    price5.textContent = price5Num;
    price5.appendChild(decPrice);
});

//7. Add an event to the Air Jordan XI shoe that will show another colorway for that shoe after hovering over the image. 

//8. Add an event to the Air Jordan XII shoe that will increase the image by 50% after clicking on the image.

//9. Add events to both the plus and minus icon that will add or decrease the price each time the respective icon is clicked on.

//10. Add an event to the Air Jordan XXVIII shoe that will show the famous 'crying Michael Jordan' meme after clicking on the image.

