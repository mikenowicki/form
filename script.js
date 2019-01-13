var hamburger = document.querySelector(".hamburger");
var content = document.querySelector(".iconcont");
content.style.setProperty("transform","translateX(-110%)");

hamburger.addEventListener("click", function(){
if (content.style.getPropertyValue("transform")==="translateX(-110%)") {
content.style.setProperty("transform","translateX(0)"); 
content.style.setProperty("transition","0.4s");
content.style.setProperty("transform","ease-in-out");}
else {
content.style.setProperty("transform","translateX(-110%)");}
});

hamburger.addEventListener("click", function(){
hamburger.classList.toggle("open");
});

var next = document.querySelector("#nextarrow");
next.addEventListener("click",function(){
var slides = document.querySelectorAll(".slide");
for (var i=1; i<=slides.length-2; i++) {
slides[0].classList.remove("pojawia");
slides[0].classList.add("znika");
slides[3].style.zIndex="0";
setTimeout(function() {slides[3].classList.add("pojawia")},500);
slides[i].classList.remove("animprzejscie2");
slides[i].classList.add("animprzejscie1");}
next.classList.add("afterclick");
previous.classList.remove("afterclick");
});

var previous = document.querySelector("#previousarrow");
previous.addEventListener("click",function(){
var slides = document.querySelectorAll(".slide");
slides[3].classList.remove("pojawia");
slides[3].classList.add("znika");
setTimeout(function() {slides[3].style.zIndex="-1";},500);
for (var i=1; i<=slides.length-2; i++) {
slides[i].classList.add("animprzejscie2")}
setTimeout(function() {slides[0].classList.add("pojawia")},500);
previous.classList.add("afterclick");
next.classList.remove("afterclick");
});

function ShowHtml() { 
    document.querySelector("#deschtml").style.display="block"; 
    document.querySelector("#desccss").style.display="none"; 
    document.querySelector("#descjs").style.display="none";
	document.querySelector("#descsvg").style.display="none";	
    } 
    
function ShowCss() { 
    document.querySelector("#deschtml").style.display="none"; 
    document.querySelector("#desccss").style.display="block"; 
    document.querySelector("#descjs").style.display="none"; 
	document.querySelector("#descsvg").style.display="none";
    } 
	
function ShowJs() { 
    document.querySelector("#deschtml").style.display="none"; 
    document.querySelector("#desccss").style.display="none"; 
    document.querySelector("#descjs").style.display="block"; 
	document.querySelector("#descsvg").style.display="none";
    }  
	
function ShowSvg() { 
    document.querySelector("#deschtml").style.display="none"; 
    document.querySelector("#desccss").style.display="none"; 
    document.querySelector("#descjs").style.display="none"; 
	document.querySelector("#descsvg").style.display="block";
    } 

var guzik = document.querySelectorAll(".techlogo");
for (var i =0; i<guzik.length; i++) {
    var dowolnyguzik = guzik[i];
var guzik1 = document.querySelector("#htmlbutton");
dowolnyguzik.addEventListener("click",function changeScreen(z) {
    if (z.matches) {
var skills = document.querySelector(".add");
skills.classList.remove("add");
skills.classList.add("rwdadd");
document.querySelector(".rwdadd").style.display="block";
var cross = document.querySelector(".crossCont");
cross.addEventListener("click", function close(){
skills.classList.remove("rwdadd");
skills.classList.add("add");
});}
var z = window.matchMedia("(max-width: 670px)");
changeScreen(z);
})}

var cross = document.querySelector(".crossCont");
cross.addEventListener("click", function close(){
document.querySelector(".rwdadd").style.display="none";
});

function cloneSquare() {
    for (var i=0; i<8; i++) {
  var prototyp = document.querySelector(".perspektywa");  
  var klon = prototyp.cloneNode(true);
  document.querySelector("#desccss").appendChild(klon);}
}
cloneSquare();

//JavaScript skills

inputName.classList.add('form');

function Room(name,price) {
this.name = name;
this.price = price;
}

var room0 = new Room('Choose the room');
var room1 = new Room('Room 1',100);
var room2 = new Room('Room 2',200);
var room3 = new Room('Room 3',500);
var rooms = [room0, room1, room2, room3];

var elChooseRoom = document.getElementById('chooseRoom');
var elRoom1 = document.getElementById('room1');
var elRoom2 = document.getElementById('room2');
var elRoom3 = document.getElementById('room3');
var elRooms = [elChooseRoom, elRoom1, elRoom2, elRoom3];

for (var i=0; i<elRooms.length; i++) {
elRooms[i].textContent = rooms[i].name; //names of room options
elRooms[i].value = rooms[i].price;
}

var elRoomCost = document.getElementById('roomCost');
var elRoomOptions = document.getElementById('roomOptions');
var elTotalCost = document.getElementById('totalCost');

elRoomOptions.addEventListener('change', function() {
this.options[0].disabled = true; //deactivation first option after click select
button.disabled = false;
button.style.cursor='pointer';
var selected =	elRoomOptions.options[elRoomOptions.selectedIndex]; //selected option
var n = Number(selected.value);
elRoomCost.innerHTML ='cost of this room: ' + selected.value + ' \u20AC';
for (i=0; i<elCheckboxs.length; i++) {
if (elCheckboxs[i].checked) {
var selected =	elRoomOptions.options[elRoomOptions.selectedIndex]; // sprawdz czy zmienna moze byc globalna
var n = Number(selected.value); // czy to można upchać przy definiowaniu selected?
var totalCost = n - n*discounts[i].amount; //jak wyżej
elTotalCost.textContent = 'total cost: ' + totalCost + ' \u20AC';
break;}
else {elTotalCost.textContent ='total cost: ' + selected.value + ' \u20AC';}}
});

function Discount(name,amount) {
this.name = name;
this.amount = amount;
}

var discount1 = new Discount('Student',0.2);
var discount2 = new Discount('Regular',0.3);
var discount3 = new Discount('Pensioner',0.15);
var discounts = [discount1, discount2, discount3];

var elDiscount1 = document.getElementById('discount1');
var elDiscount2 = document.getElementById('discount2');
var elDiscount3 = document.getElementById('discount3');
var elDiscounts = [elDiscount1, elDiscount2, elDiscount3];

for (var i=0; i<discounts.length; i++) {
elDiscounts[i].textContent = discounts[i].name + ' (-' + discounts[i].amount*100 + '%)';} //names of discount options

var elCheckbox1 = document.getElementById('checkbox1');
var elCheckbox2 = document.getElementById('checkbox2');
var elCheckbox3 = document.getElementById('checkbox3');
var elCheckboxs = [elCheckbox1, elCheckbox2, elCheckbox3]; //sprawdz pisownie

for (var i=0; i<elCheckboxs.length; i++) {
elCheckboxs[i].addEventListener('change', function() {
for (var i=0; i<elCheckboxs.length; i++) {
if (elCheckboxs[i].checked == true) {
var selected =	elRoomOptions.options[elRoomOptions.selectedIndex]; // sprawdz czy zmienna moze byc globalna
var n = Number(selected.value); // czy to można upchać przy definiowaniu selected?
var totalCost = n-discounts[i].amount*n //jak wyżej
if (selected == elChooseRoom) {
elTotalCost.textContent = 'Please select a room';}
else {
elTotalCost.textContent = 'total cost: '+ totalCost + ' \u20AC';
break;}}
else {
if (selected == elChooseRoom) {
elTotalCost.textContent = 'Please select a room';}
else {
var selected =	elRoomOptions.options[elRoomOptions.selectedIndex];
elTotalCost.textContent = 'total cost: ' + selected.value + ' \u20AC';}}
}})};

function disable(el) { //disable other checkboxes
for (var i=0, c; c=elCheckboxs[i]; i++) {
c.disabled = !(!el.checked || c === el);}
};

var summary = document.getElementById('summary');
summary.style.display='none';

var button = document.getElementById('button');
button.disabled = true;
button.addEventListener('click', function() {
var summary = document.getElementById('summary');
summary.style.display='block';
var selected =	elRoomOptions.options[elRoomOptions.selectedIndex];
summary.textContent = 'hi ' + inputName.value + ', you select ' + selected.text + ', your ' + elTotalCost.textContent;
var close = document.createElement('div');
close.id = 'close';
close.textContent = 'x';
summary.appendChild(close);
close.addEventListener('click', function() {
summary.style.display='none';});
});
