// apply now form in career page
function apply(){

  var email = document.forms["applyNow"]["email"].value;
  var position = document.forms["applyNow"]["position"].value;
  var file = document.forms["applyNow"]["file"].value;

  var emailError = document.getElementById("emailError");
  var positionError = document.getElementById("positionError");
  var fileErrorrror = document.getElementById("fileError");

  var applyLastError = document.getElementById("applyLastError");

  var careerForm = document.getElementById("careerForm");

  var enterDiv = document.getElementById("hideDiv");


  if(email == "" || email.indexOf("@gmail.com") == -1)
  {
    emailError.style.display = "block";
    applyLastError.style.display = "block"

    unameError.style.display = "none";
    positionError.style.display = "none";
    fileErrorrror.style.display = "none";
    textareaError.style.display = "none";
  }

  else if(position == "" || position == null)
  {
    positionError.style.display = "block";
    applyLastError.style.display = "block"

    emailError.style.display = "none";
    unameError.style.display = "none";
    fileErrorrror.style.display = "none";
    textareaError.style.display = "none";
  }

  else if(file == "" || position == null)
  {
    fileErrorrror.style.display = "block";
    applyLastError.style.display = "block"

    positionError.style.display = "none";
    emailError.style.display = "none";
    unameError.style.display = "none";
    textareaError.style.display = "none"
  }

  else{
    emailError.style.display = "none";
    positionError.style.display = "none";
    fileErrorrror.style.display = "none";
    applyLastError.style.display = "none";

    careerForm.reset();

    enterDiv.style.visibility = "visible";

    setTimeout(function() {
      $('#hideDiv').fadeOut('fast2');
  }, 5000);

  }

}


// apply form in FAQ page
function FAQ(){

  var name = document.forms["FAQFeedback"]["FAQname"].value;
  var email = document.forms["FAQFeedback"]["FAQemail"].value;
  var textarea = document.forms["FAQFeedback"]["FAQtextarea"].value;

  var nameerror = document.getElementById("FAQerrorName");
  var emailerror = document.getElementById("FAQerrorEmail");
  var textareaError = document.getElementById("FAQerrorMessage");

  var FAQform = document.getElementById("FAQform");
  var FAQhideDiv = document.getElementById("FAQhideDiv");

  if(name == "" || name == null)
  {
    nameerror.style.display = "block"

    emailerror.style.display = "none";
    textareaError.style.display = "none";
  }

  else if(email == "" || email.indexOf("@gmail.com") == -1)
  {
    emailerror.style.display = "block";

    nameerror.style.display = "none";
    textareaError.style.display = "none";
  }

  else if(textarea == "" || textarea == null)
  {
    textareaError.style.display = "block";

    nameerror.style.display = "none";
    emailerror.style.display = "none";
  }

  else{

    nameerror.style.display = "none"
    emailerror.style.display = "none"
    textareaError.style.display = "none";

    FAQform.reset();

    FAQhideDiv.style.visibility = "visible";

    setTimeout(function() {
      $('#FAQhideDiv').fadeOut('fast1');
  }, 5000);

  }
}


// My vehicles dropdown in search input row

 var vehiclesDropdownDiv = document.getElementById("vehiclesDropdown");

function vehiclesDropdown(){

  if(vehiclesDropdownDiv.style.display === "none"){
    vehiclesDropdownDiv.style.display = "block";
    vehiclesDropdownDiv.style.position = "absolute";

    log.style.display = "none";
    lang.style.display = "none";
    mony.style.display = "none";
    myCart.style.display = "none";
  }

  else{
    vehiclesDropdownDiv.style.display = "none"
  }
}

// smoall and midium navbar function
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


// ----------------------------------------
  // FAQ dropdowns function

var btn1 = document.getElementById("FAQbtn1");
var div1 = document.getElementById("FAQdiv1");
  
var btn2 = document.getElementById("FAQbtn2");
var div2 = document.getElementById("FAQdiv2");

var btn3 = document.getElementById("FAQbtn3");
var div3 = document.getElementById("FAQdiv3");

var btn4 = document.getElementById("FAQbtn4");
var div4 = document.getElementById("FAQdiv4");

function dropdown1 (){
  
  if(div1.style.display === 'none') {
    div1.style.display = "block";
    btn1.style.backgroundColor = '#e05c0b';
    btn1.style.color = 'white';

    div2.style.display = 'none';
    btn2.style.backgroundColor = 'white';
    btn2.style.color = 'black'

    div3.style.display = 'none';
    btn3.style.backgroundColor = 'white';
    btn3.style.color = 'black';

    div4.style.display = "none";
    btn4.style.backgroundColor = 'white';
    btn4.style.color = 'black';
  }

  else{
      console.log('')
  }
}

function dropdown2 (){
  if(div2.style.display === 'none') {
    div2.style.display = 'block';
    btn2.style.backgroundColor = '#e05c0b';
    btn2.style.color = 'white'

    div1.style.display = "none";
    btn1.style.backgroundColor = 'white';
    btn1.style.color = 'black';

    div3.style.display = 'none';
    btn3.style.backgroundColor = 'white';
    btn3.style.color = 'black';

      
    div4.style.display = "none";
    btn4.style.backgroundColor = 'white';
    btn4.style.color = 'black';
  }

  else{
    console.log('')
    }
}

function dropdown3 (){
  if(div3.style.display === 'none') {

    div3.style.display = 'block';
    btn3.style.backgroundColor = '#e05c0b';
    btn3.style.color = 'white'

    div1.style.display = "none";
    btn1.style.backgroundColor = 'white';
    btn1.style.color = 'black';

    div2.style.display = "none";
    btn2.style.backgroundColor = 'white';
    btn2.style.color = 'black';

    div4.style.display = "none";
    btn4.style.backgroundColor = 'white';
    btn4.style.color = 'black';
  }

  else{
    console.log('')
    }
}

function dropdown4 (){
  if(div4.style.display === 'none') {

    div4.style.display = 'block';
    btn4.style.backgroundColor = '#e05c0b';
    btn4.style.color = 'white'

      
    div1.style.display = "none";
    btn1.style.backgroundColor = 'white';
    btn1.style.color = 'black';
      
    div2.style.display = "none";
    btn2.style.backgroundColor = 'white';
    btn2.style.color = 'black';

    div3.style.display = 'none';
    btn3.style.backgroundColor = 'white';
    btn3.style.color = 'black'
    }

  else{
    console.log('')
    }
}
  // FAQ dropdowns function ends
  // -----------------------------------------------



  // career dropdown function
  // -----------------------------------------------

var careerBtn1 = document.getElementById("careerDropBtn1");
var careerDiv1 = document.getElementById("careerDropDiv1");
  
var careerBtn2 = document.getElementById("careerDropBtn2");
var careerDiv2 = document.getElementById("careerDropDiv2");

var careerBtn3 = document.getElementById("careerDropBtn3");
var careerDiv3 = document.getElementById("careerDropDiv3");

var careerBtn4 = document.getElementById("careerDropBtn4");
var careerDiv4 = document.getElementById("careerDropDiv4");

function careerDropdown1 (){
  if(careerDiv1.style.display === 'none') {

    careerDiv1.style.display = "block";
    careerBtn1.style.backgroundColor = '#e05c0b';
    careerBtn1.style.color = 'white';

    careerDiv2.style.display = 'none';
    careerBtn2.style.backgroundColor = 'white';
    careerBtn2.style.color = 'black'

    careerDiv3.style.display = 'none';
    careerBtn3.style.backgroundColor = 'white';
    careerBtn3.style.color = 'black';

    careerDiv4.style.display = "none";
    careerBtn4.style.backgroundColor = 'white';
    careerBtn4.style.color = 'black';
  }

  else{
      console.log('')
  }
}

function careerDropdown2 (){
  if(careerDiv2.style.display === 'none') {

    careerDiv2.style.display = 'block';
    careerBtn2.style.backgroundColor = '#e05c0b';
    careerBtn2.style.color = 'white'

    careerDiv1.style.display = "none";
    careerBtn1.style.backgroundColor = 'white';
    careerBtn1.style.color = 'black';

    careerDiv3.style.display = 'none';
    careerBtn3.style.backgroundColor = 'white';
    careerBtn3.style.color = 'black';

    careerDiv4.style.display = "none";
    careerBtn4.style.backgroundColor = 'white';
    careerBtn4.style.color = 'black';
  }

  else{
      console.log('')
  }
}

function careerDropdown3 (){
  if(careerDiv3.style.display === 'none') {

    careerDiv3.style.display = 'block';
    careerBtn3.style.backgroundColor = '#e05c0b';
    careerBtn3.style.color = 'white';

    careerDiv1.style.display = "none";
    careerBtn1.style.backgroundColor = 'white';
    careerBtn1.style.color = 'black';

    careerDiv2.style.display = 'none';
    careerBtn2.style.backgroundColor = 'white';
    careerBtn2.style.color = 'black'

    careerDiv4.style.display = "none";
    careerBtn4.style.backgroundColor = 'white';
    careerBtn4.style.color = 'black';
  }

  else{
      console.log('')
  }
}

function careerDropdown4 (){
  if(careerDiv4.style.display === 'none') {

    careerDiv4.style.display = "block";
    careerBtn4.style.backgroundColor = '#e05c0b';
    careerBtn4.style.color = 'white';
    
    careerDiv1.style.display = "none";
    careerBtn1.style.backgroundColor = 'white';
    careerBtn1.style.color = 'black';
    
    careerDiv2.style.display = 'none';
    careerBtn2.style.backgroundColor = 'white';
    careerBtn2.style.color = 'black'

    careerDiv3.style.display = 'none';
    careerBtn3.style.backgroundColor = 'white';
    careerBtn3.style.color = 'black';
  }

  else{
      console.log('')
  }
}
  // career dropdown function ends
  // -----------------------------------------------

  // -------------------------------------
// show and hide my cart
var myCart = document.getElementById("MyCartDrop");
function myCartDrop() {

  if (myCart.style.display === "none") {
    myCart.style.display = "block";
    myCart.style.position = "absolute";

    vehiclesDropdownDiv.style.display = "none";
    log.style.display = "none";
    smalllog.style.display = "none";
    lang.style.display = "none";
    mony.style.display = "none";
  }

  else {
    myCart.style.display = "none";
  }
};

  // show and hiide LOG IN
  var log = document.getElementById("hidden");
  function LogINHidde() {

    if (log.style.display === "none") {
      log.style.display = "block";
      log.style.position = "absolute"
      lang.style.display = "none";
      mony.style.display = "none";

      vehiclesDropdownDiv.style.display = "none";
      myCart.style.display = "none";
    }

    else {
      log.style.display = "none";
    }
  };

  // show and hide login for small screen
  var smalllog = document.getElementById("logInSmall");
  function LogINHiddeSmall() {

    if (smalllog.style.display === "none") {
      smalllog.style.display = "block";
      smalllog.style.position = "absolute"
      lang.style.display = "none";
      mony.style.display = "none";

      vehiclesDropdownDiv.style.display = "none";
      myCart.style.display = "none";
    }

    else {
      smalllog.style.display = "none";
    }
  };


  // show and hide languajes
  var lang = document.getElementById("languajeHidden");
  function languajeHidde() {

    if (lang.style.display === "none") {
      lang.style.display = "block";
      lang.style.position = "absolute"
      log.style.display = "none";
      mony.style.display = "none";

      vehiclesDropdownDiv.style.display = "none";
      myCart.style.display = "none";
    }

    else {
      lang.style.display = "none";
    }
  };

// show and hide mony
var mony = document.getElementById("mony");
  function monyHidde() {

    if (mony.style.display === "none") {
      mony.style.display = "block";
      mony.style.position = "absolute"
      log.style.display = "none";
      lang.style.display = "none";

      vehiclesDropdownDiv.style.display = "none";
      myCart.style.display = "none";
    }

    else {
      mony.style.display = "none";
    }
  }

// show and hide befor navbar

  function beforNav(){

    var beforNav = document.getElementById("beforNavbar");

    if(screen.width < 992){
      
      beforNav.style.display = "none";
    }

    else{
      beforNav.style.display ="block"
    }
  }



// product pag
// ----------------------------------------------------


var discripshon = document.getElementById("discripshonOfProduct");
var rateProduct = document.getElementById("rateProduct");

var reviewBtn = document.getElementById("REVIEWbtn");
var descripshonBtn = document.getElementById("descripshonBtn");



function rateActive(){

  if(rateProduct.style.display == "none"){
    rateProduct.style.display = "block";
    discripshon.style.display = "none";

    reviewBtn.classList.remove("productsPageBtn");
    reviewBtn.classList.add("productsPageBtnAtive");

    descripshonBtn.classList.remove("productsPageBtnAtive");
    descripshonBtn.classList.add("productsPageBtn");
  }

  else{
  }
}

function descripshonActive(){
  if(discripshon.style.display == "none"){

    discripshon.style.display = "block";
    rateProduct.style.display = "none";

    descripshonBtn.classList.remove("productsPageBtn");
    descripshonBtn.classList.add("productsPageBtnAtive");

    reviewBtn.classList.remove("productsPageBtnAtive");
    reviewBtn.classList.add("productsPageBtn");
  }

  else{

  }
}


// img zoom in product page
$(window).ready(function (){
  
	var popup = function(){
		$('.btn-view-zoom').on('click', function(){
			$('#quick-view-zoom-pop-up').fadeToggle();
			$('.zoom').fadeToggle();
		});
		$('.zoom').on('click', function(){
			$('.zoom').fadeOut();
			$('#quick-view-zoom-pop-up').fadeOut();
		});
	};

	popup();
});

// quick-view function using jqueri number 1 in home page
$(window).ready(function (){
  
	var popup = function(){
		$('.btn-view').on('click', function(){
			$('#quick-view-pop-up').fadeToggle();
			$('.mask').fadeToggle();
		});
		$('.mask').on('click', function(){
			$('.mask').fadeOut();
			$('#quick-view-pop-up').fadeOut();
		});
	};

	popup();
});
  

// quick-view function using jqueri number 2  in home page 2 greed sistem
$(window).ready(function (){
  
	var popup2 = function(){
		$('.btn-view2').on('click', function(){
			$('#quick-view-pop-up2').fadeToggle();
			$('.mask2').fadeToggle();
		});
		$('.mask2').on('click', function(){
			$('.mask2').fadeOut();
			$('#quick-view-pop-up2').fadeOut();
		});
	};

	popup2();
});

// quick-view function using jqueri number 3 in wishlist page 
$(window).ready(function (){
  
	var popup2 = function(){
		$('.btn-view3').on('click', function(){
			$('#quick-view-pop-up2').fadeToggle();
			$('.mask2').fadeToggle();
		});
		$('.mask2').on('click', function(){
			$('.mask2').fadeOut();
			$('#quick-view-pop-up2').fadeOut();
		});
	};

	popup2();
});


$(window).ready(function (){
  
	var popup3 = function(){
		$('.btn-view4').on('click', function(){
			$('#quick-view-pop-up4').fadeToggle();
			$('.mask4').fadeToggle();
		});
		$('.mask4').on('click', function(){
			$('.mask4').fadeOut();
			$('#quick-view-pop-up4').fadeOut();
		});
	};

	popup3();
});

// ---------------------


// forget password function
// --------------------------------------------------

// enter email form funcion
function  enterEmail(){

  var enterEmailForm = document.getElementById("chekEmailForm");
  var enterEmailCodeForm = document.getElementById("enterCodeForm");

  var enterEmailInput = document.forms["enterEmaill"]["enterEmail"].value;

  if(enterEmailInput == "@gmail.com" || enterEmailInput.indexOf("@gmail.com") == -1)
  {
    document.getElementById("reqvestedEmail").style.display = "block"
  }

  else
  {
    enterEmailForm.style.display = "none";
    enterEmailCodeForm.style.display = "block";

  }
}

// enter code from email function
function entercode(){
  var enterEmailForm = document.getElementById("chekEmailForm");
  var enterEmailCodeForm = document.getElementById("enterCodeForm");
  var newPasswordeForm = document.getElementById("newPasswordForm");

  var enterCodeInput = document.forms["enterCodeForm"]["emailCode"].value;


  if(enterCodeInput == "")
  {
    document.getElementById("reqvestedEmailCode").style.display = "block";
  }

  else{
    enterEmailForm.style.display = "none";
    enterEmailCodeForm.style.display = "none";
    newPasswordeForm.style.display = "block";
  }
}

// enter new password
function newPassword(){
  var enterEmailForm = document.getElementById("chekEmailForm");
  var enterEmailCodeForm = document.getElementById("enterCodeForm");
  var newPasswordeForm = document.getElementById("newPasswordForm");
  var passwordChanged = document.getElementById("passwordChanged");

  var newPasswordInputlCode = document.forms["enterNewPassword"]["newPasswordInput"].value;
  var confirmPasswordInput = document.forms["enterNewPassword"]["confirmPasswordInput"].value;


  if (newPasswordInputlCode == confirmPasswordInput & newPasswordInputlCode !== "" & newPasswordInputlCode.length >= 8)
  {
    enterEmailForm.style.display = "none";
    enterEmailCodeForm.style.display = "none";
    newPasswordeForm.style.display = "none";

    passwordChanged.style.display = "block"
  }

  else{
    document.getElementById('reqvestedPassword').style.display = "block";
  }
}


// ---------------------------------------------------------
// add to mycard 

var removeCardItemBTN = document.getElementsByClassName("btn-danger");

for (var i = 0; i < removeCardItemBTN.length; i++){
  var button = removeCardItemBTN[i]
  button.addEventListener('click', removeCarttItem)
}

function removeCarttItem(event){
  var buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove()
  updeateCartTotal()
}

var addToCartBtn = document.getElementsByClassName('addToCart')
for (var i = 0; i < addToCartBtn.length; i++){
  var button = addToCartBtn[i]
  button.addEventListener('click', addToCartClicked)
}


function addToCartClicked(event){
  var button = event.target
  var shopItem = button.parentElement.parentElement.parentElement.parentElement
  var title = shopItem.getElementsByClassName('card-title')[0].innerText
  var price = shopItem.getElementsByClassName('card-text-price')[0].innerText
  var imageSrc = shopItem.getElementsByClassName('shop-item-img')[0].src

  addItemToCart(title, price, imageSrc)
}

function addItemToCart(title, price, imageSrc){
  var cartRow = document.createElement('div')
  var cratItems = document.getElementsByClassName('addTocard')[0]
  var cartRowContents = `
  <div  style=" padding: 10px 5px; background-color: white;">
  <div class="row">
  <div class="col-5 addProductImg"><img src="${imageSrc}" style="height: auto; width: 100%;  border: solid lightgray 2px;"></div>
  <div class="col-7">
      <button type="button" class="deletBtn">x</button>
      <span class="addProductTitle"> <a href="product.html" class="productsCaruselLink">${title} </a></span> <br>
      <span class="addProductQuality" style="color: #e05c0b">${price}</span>
  </div>
  </div>
</div>
  `
  
  cartRow.innerHTML = cartRowContents
  cratItems.append(cartRow)
  updeateCartTotal()

  cartRow.getElementsByClassName('deletBtn')[0].addEventListener('click',removeCarttItem)
}

function updeateCartTotal(){
  var cardItemContainer = document.getElementsByClassName("addTocard")[0]
  var cartRows = cardItemContainer.getElementsByClassName('row')
  var total = 0

  for (var i = 0; i < cartRows.length; i++){
    var cartRow = cartRows[i]
    var priceElement = cartRow.getElementsByClassName('addProductQuality')[0]

    var pricre = parseFloat(priceElement.innerText.replace('$', '')) 
    total = total + pricre
  }
  total = Math.round(total * 100) / 100
  document.getElementsByClassName("priceTotal-price")[0].innerText = '$' + total
  document.getElementById('cardTotalFirst').innerText = '$' + total
}


// ----------------------------------
// add to my card 2 greed sitem
var addToCartButtons2 = document.getElementsByClassName("shopItem")
for (var i = 0; i < addToCartButtons2.length; i++){
  var butto2 = addToCartButtons2[i]
  butto2.addEventListener('click', addToCartClickedTwo)
}

function addToCartClickedTwo(event){
  var button2 = event.target
  var shopItem2 = button2.parentElement.parentElement.parentElement.parentElement.parentElement

  var titel2 = shopItem2.getElementsByClassName('shop-item-title2')[0].innerText
  var price2 = shopItem2.getElementsByClassName('shop-item-price2')[0].innerText
  var imgTest = shopItem2.getElementsByClassName('shop-item-img2')[0]
  var imgSrc2 = imgTest.getElementsByClassName('shop-item-img22')[0].src

  addItemToCart2(titel2, price2, imgSrc2)
}

function addItemToCart2(titel2, price2, imgSrc2){
  var cartRow = document.createElement('div')
  var cratItems = document.getElementsByClassName('addTocard')[0]
  var cartRowContents = `
  <div  style=" padding: 10px 5px; background-color: white;">
  <div class="row">
  <div class="col-5 addProductImg"><img src="${imgSrc2}" style="height: auto; width: 100%;  border: solid lightgray 2px;"></div>
  <div class="col-7">
      <button type="button" class="deletBtn">x</button>
      <span class="addProductTitle"> <a href="product.html" class="productsCaruselLink">${titel2} </a></span> <br>
      <span class="addProductQuality" style="color: #e05c0b">${price2}</span>
  </div>
  </div>
</div>
  `
  
  cartRow.innerHTML = cartRowContents
  cratItems.append(cartRow)
  updeateCartTotal()

  cartRow.getElementsByClassName('deletBtn')[0].addEventListener('click',removeCarttItem)
}


// add to my cart in products page

var addToCardBtn3 = document.getElementsByClassName('shop-item-Btn3')
for (var i = 0; i < addToCardBtn3.length; i++){
  var button3 = addToCardBtn3[i]
  button3.addEventListener('click', addItemToCartClicked)
}

function addItemToCartClicked(event){
  var button3 = event.target
  var shopItem3 = button3.parentElement.parentElement.parentElement.parentElement

  var price3 = shopItem3.getElementsByClassName('shop-item-price3')[0].innerText
  var title3 = shopItem3.getElementsByClassName('shop-item-title3')[0].innerText
  var imgSrc3 = shopItem3.getElementsByClassName('shop-item-img3')[0].src
  
  addItemToCart3(price3,title3,imgSrc3)
}

function addItemToCart3(price3,title3,imgSrc3){
  var crateRow = document.createElement('div')
  var cardItems3 = document.getElementsByClassName('addTocard')[0]

  var cardContents = `
  <div  style=" padding: 10px 5px; background-color: white;">
  <div class="row">
  <div class="col-5 addProductImg"><img src="${imgSrc3}" style="height: auto; width: 100%;  border: solid lightgray 2px;"></div>
  <div class="col-7">
      <button type="button" class="deletBtn">x</button>
      <span class="addProductTitle"> <a href="product.html" class="productsCaruselLink">${title3} </a></span> <br>
      <span class="addProductQuality" style="color: #e05c0b">${price3}</span>
  </div>
  </div>
</div>
  `
  crateRow.innerHTML = cardContents
  cardItems3.append(crateRow)
  updeateCartTotal()
}




