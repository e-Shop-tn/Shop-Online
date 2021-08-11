

const carrosel = $('#carouselExampleControls')

let GalaxyA = [{img:'e-commerce.jpg', price : '500$', color : 'Red', type : 'Galaxy A31'},
{img:'e-commerce.jpg', price : '500$', color : 'Blue', type : 'Galaxy A31'},
{img:'e-commerce.jpg', price : '500$', color : 'White', type : 'Galaxy A31'},
{img:'online-1617947180.jpg', price : '700$', color : 'Blue', type : 'Galaxy A51'},
{img:'online-1617947180.jpg', price : '700$', color : 'Red', type : 'Galaxy A51'},
{img:'online-1617947180.jpg', price : '700$', color : 'White', type : 'Galaxy A51'},
{img:'e-commerce.jpg', price : '400$', color : 'White', type : 'Galaxy A21'},
{img:'e-commerce.jpg', price : '400$', color : 'Red', type : 'Galaxy A21'},
{img:'e-commerce.jpg', price : '2400$', color : 'Blue', type : 'Galaxy A21'}
]
let GalaxyS = [{img:'e-commerce.jpg', price : '1500$', color : 'Red', type : 'Galaxy S10'},
{img:'e-commerce.jpg', price : '1500$', color : 'White', type : 'Galaxy S10'},
{img:'e-commerce.jpg', price : '1500$', color : 'Blue', type : 'Galaxy S10'},
{img:'online-1617947180.jpg', price : '1600$', color : 'Blue', type : 'Galaxy S20'},
{img:'online-1617947180.jpg', price : '1600$', color : 'White', type : 'Galaxy S20'},
{img:'online-1617947180.jpg', price : '1600$', color : 'Red', type : 'Galaxy S20'},
{img:'e-commerce.jpg', price : '1800$', color : 'White', type : 'Galaxy S21'},
{img:'e-commerce.jpg', price : '1800$', color : 'Blue', type : 'Galaxy S21'},
{img:'e-commerce.jpg', price : '1800$', color : 'Red', type : 'Galaxy S21'}
]
let GalaxyFold = [{img:'e-commerce.jpg', price : '1800$', color : 'Red', type : 'Galaxy Fold'},
{img:'e-commerce.jpg', price : '1800$', color : 'White', type : 'Galaxy Fold'},
{img:'e-commerce.jpg', price : '1800$', color : 'Blue', type : 'Galaxy Fold'},
{img:'online-1617947180.jpg', price : '1950$', color : 'Blue', type : 'Galaxy Fold 2'},
{img:'online-1617947180.jpg', price : '1950$', color : 'Red', type : 'Galaxy Fold 2'},
{img:'online-1617947180.jpg', price : '1950$', color : 'White', type : 'Galaxy Fold 2'},
{img:'e-commerce.jpg', price : '2000$', color : 'White', type : 'Galaxy Z Flip'},
{img:'e-commerce.jpg', price : '2000$', color : 'Red', type : 'Galaxy Z Flip'},
{img:'e-commerce.jpg', price : '2000$', color : 'Blue', type : 'Galaxy Z Flip'}
]
let GalaxyTabA = [{img:'e-commerce.jpg', price : '1200$', color : 'Red', type : 'Galaxy Tab A7 LTE'},
{img:'e-commerce.jpg', price : '1200$', color : 'Blue', type : 'Galaxy Tab A7 LTE'},
{img:'e-commerce.jpg', price : '1200$', color : 'White', type : 'Galaxy Tab A7 LTE'},
{img:'e-commerce.jpg', price : '1250$', color : 'Red', type : 'Galaxy Tab A7 Lite'},
{img:'e-commerce.jpg', price : '1250$', color : 'Blue', type : 'Galaxy Tab A7 Lite'},
{img:'e-commerce.jpg', price : '1250$', color : 'White', type : 'Galaxy Tab A7 Lite'},
{img:'e-commerce.jpg', price : '1300$', color : 'Red', type : 'Galaxy Tab A2019 LTE'},
{img:'e-commerce.jpg', price : '1300$', color : 'Blue', type : 'Galaxy Tab A2019 LTE'},
{img:'e-commerce.jpg', price : '1300$', color : 'White', type : 'Galaxy Tab A2019 LTE'},
{img:'e-commerce.jpg', price : '1350$', color : 'Red', type : 'Galaxy Tab Active3 LTE'}]
let GalaxyTabS = [{img:'e-commerce.jpg', price : '1900$', color : 'Blue', type : 'Galaxy Tab S7 FE LTE'},
{img:'e-commerce.jpg', price : '1950$', color : 'White', type : 'Galaxy Tab S7+'},
{img:'e-commerce.jpg', price : '1950$', color : 'Red', type : 'Galaxy Tab S7+'},
{img:'e-commerce.jpg', price : '2000$', color : 'Blue', type : 'Galaxy Tab S7 LTE'},
{img:'e-commerce.jpg', price : '1400$', color : 'White', type : 'Galaxy Tab S6  Lite'}]

let products =  [...GalaxyA,...GalaxyS,...GalaxyFold, ...GalaxyTabA, ...GalaxyTabS]
let busquet = []


let countA = 0
let countB = 0
let countC = 0
let countD = 0
let countE = 0


let addCard = function(obj){
  
    let type = $('<h5 class="card-title">' + obj.type + '</h5>')
    let color = $('<p class="card-text">color:'+  obj.color  + '</p>')
    let price = $('<p class="card-text">price:' + obj.price + '</p>')
    let cardBody = $('<div class="card-body"></div>')
    buttondiv = $('<div class="d-grid gap-2"></div>')
    button = $('<button class="btn btn-primary busquet" type="button"  id="'+ products.indexOf(obj) + '">AddToBusquet</button>')
    buttondiv[0].appendChild(button[0])
  
    cardBody[0].appendChild(type[0])
    cardBody[0].appendChild(color[0])
    cardBody[0].appendChild(price[0])
    cardBody[0].appendChild(buttondiv[0])
    let img = $('<img src="img/' + obj.img  + '" class="card-img-top" alt="...">')
    let container = $('<div class="card card0" style="width: 18rem;"></div>')
    container[0].appendChild(img[0])
    container[0].appendChild(cardBody[0])
    // $('.cont')[0].appendChild(container[0])
    return container
}

let listener = function(){
  let addBusquet = $('.busquet')
  let arrAddBusquet = Array.from(addBusquet)
  arrAddBusquet.forEach(e=> e.addEventListener('click', function(e){
    var i = e.target.id 
    busquet.push(products[i])
}, { once: true }))

}

$('#A').click(function(){
    let arr = GalaxyA
    console.log('hee')
    if(countA !== arr.length){
      for(var i=0; i< arr.length; i++ ){
        var div = addCard(arr[i])
        $('#GalaxyAA')[0].appendChild(div[0])
        countA++
      }
    }
    listener()
    console.log($('#GalaxyAA'))
    $('#GalaxyBB').hide()
    $('#GalaxyCC').hide()
    $('#GalaxyTabSS').hide()
    $('#GalaxyTabAA').hide()
    $('#filteredd').hide()
    $('#GalaxyAA').show()
    carrosel.hide()
})


$('#B').click(function(){
    let arr = GalaxyS
    if(countB !== arr.length){
        for(var i=0; i< arr.length; i++ ){
          var div = addCard(arr[i])
          $('#GalaxyBB')[0].appendChild(div[0])
          countB++
        }
    }     
    listener()  
    $('#GalaxyAA').hide()
    $('#GalaxyCC').hide()
    $('#GalaxyTabSS').hide()
    $('#GalaxyTabAA').hide()
    $('#filteredd').hide()
    $('#GalaxyBB').show()
    carrosel.hide()
})


$('#C').click(function(){
    let arr = GalaxyFold
    if(countC !== arr.length){
        for(var i=0; i< arr.length; i++ ){
          var div = addCard(arr[i])
          $('#GalaxyCC')[0].appendChild(div[0])
          countC++
        }
    }      
    listener()
    $('#GalaxyAA').hide()
    $('#GalaxyBB').hide()
    $('#GalaxyTabSS').hide()
    $('#GalaxyTabAA').hide()
    $('#filteredd').hide()
    $('#GalaxyCC').show()
    carrosel.hide()
})


$('#D').click(function(){
  let arr = GalaxyTabA
 
  if(countD !== arr.length){
    for(var i=0; i< arr.length; i++ ){
      var div = addCard(arr[i])
      $('#GalaxyTabAA')[0].appendChild(div[0])
      countD++
    }
  }
  listener()
  $('#GalaxyBB').hide()
  $('#GalaxyCC').hide()
  $('#GalaxyTabSS').hide()
  $('#GalaxyAA').hide()
  $('#filteredd').hide()
  $('#GalaxyTabAA').show()
  carrosel.hide()
})



$('#E').click(function(){
  let arr = GalaxyA
  
  if(countE !== arr.length){
    for(var i=0; i< arr.length; i++ ){
      var div = addCard(arr[i])
      $('#GalaxyTabSS')[0].appendChild(div[0])
      countE++
    }
  }
  listener()
  $('#GalaxyBB').hide()
  $('#GalaxyCC').hide()
  $('#GalaxyTabSS').show()
  $('#GalaxyTabAA').hide()
  $('#filteredd').hide()
  $('#GalaxyAA').hide()
  carrosel.hide()
})



let arrayFiltered = function(){
  var allPhones = [...GalaxyA,...GalaxyS,...GalaxyFold]
  var allTab= [...GalaxyTabA,...GalaxyTabS]
  var all = [...allPhones, ...allTab]
  var selectedValue
  var filterArray
  var category
  var arrayColor
  var max = $('#max').val() || 10000
  var min = $('#min').val()

  
  if(document.getElementById('SmartPhones').checked){
     category = allPhones
     console.log('heee')
      if(document.getElementById('GalaxyA').checked){
        console.log('heee')
        category = GalaxyA
     }
   
     else if(document.getElementById('GalaxyB').checked){
        category = GalaxyS
     }
     else if(document.getElementById('GalaxyFold').checked){
        category = GalaxyFold
     }

  }
  else if(document.getElementById('Tablets').checked){
       category = allTab
      
      if(document.getElementById('GalaxyTabA').checked){
        category = GalaxyTabA
       }
     else if(document.getElementById('GalaxyTabS').checked){
        category = GalaxyATabS
       }
  }
  else{
     category = all
  }

  

  if(document.getElementById('red').checked) {
    selectedValue = 'Red' 
  }
  else if(document.getElementById('blue').checked) {
    selectedValue = 'Blue'
  }
  else if(document.getElementById('white').checked) { 
    selectedValue = 'White' 
  }




  if(selectedValue){      
     arrayColor = category.filter(phone => phone.color === selectedValue)
     
  }
  else{
     arrayColor = category 
  }


  



  return arrayColor.filter(function(phone,i){
    let price = phone.price.replace(/[^0-9]/g,'')
    return price >= min && price <= max
  })

}



$('#FILTER').click(function(){
  let arr = arrayFiltered()
  console.log(arr)
  $('#filteredd').html('')
    for(var i=0; i< arr.length; i++ ){
      var div = addCard(arr[i])
      $('#filteredd')[0].appendChild(div[0])
    }
  listener()
  
  $('#GalaxyBB').hide()
  $('#GalaxyCC').hide()
  $('#GalaxyTabS').hide()
  $('#GalaxyTabA').hide()
  $('#filteredd').show()
  $('#GalaxyAA').hide()
  carrosel.hide()
})


  


$('#SmartPhones').click(function(){
  $('#phone').removeClass('hide')
  $('#tab').addClass('hide')
})

$('#Tablets').click(function(){
  
  $('#tab').removeClass('hide')
  $('#phone').addClass('hide')
})



$('#basket').click(function(){
  var div = $('<div></div>')
  var total = 0
  for(var i = 0; i<busquet.length;i++ ){
    var p = $('<p>Type: ' + busquet[i].type + '     ' + 'price: ' + busquet[i].price )
    total += busquet[i].price 
    div[0].appendChild(p[0])
  }
  div[0].appendChild('<p>Total:' + total + '</p>')
  div[0].appendChild('<button>confirm</button>')
  $('#Menu').hide()

})





