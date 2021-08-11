

const carrosel = $('#carouselExampleControls')

let GalaxyA = [{img:'A31r.jpg', price : '500$', color : 'Red', type : 'Galaxy A31'},
{img:'A31b.jpg', price : '500$', color : 'Blue', type : 'Galaxy A31'},
{img:'A31w.jpg', price : '500$', color : 'White', type : 'Galaxy A31'},
{img:'A51b.jpg', price : '700$', color : 'Blue', type : 'Galaxy A51'},
{img:'A51r.jpg', price : '700$', color : 'Red', type : 'Galaxy A51'},
{img:'A51w.jpg', price : '700$', color : 'White', type : 'Galaxy A51'},
{img:'A21w.jpg', price : '400$', color : 'White', type : 'Galaxy A21'},
{img:'A21r.jpg', price : '400$', color : 'Red', type : 'Galaxy A21'},
{img:'A21b.jpg', price : '2400$', color : 'Blue', type : 'Galaxy A21'}
]
let GalaxyS = [{img:'S10r.jpg', price : '1500$', color : 'Red', type : 'Galaxy S10'},
{img:'S10w.jpg', price : '1500$', color : 'White', type : 'Galaxy S10'},
{img:'S10b.jpg', price : '1500$', color : 'Blue', type : 'Galaxy S10'},
{img:'S20b.jpg', price : '1600$', color : 'Blue', type : 'Galaxy S20'},
{img:'S20w.jpg', price : '1600$', color : 'White', type : 'Galaxy S20'},
{img:'S20r.jpg', price : '1600$', color : 'Red', type : 'Galaxy S20'},
{img:'S21w.jpg', price : '1800$', color : 'White', type : 'Galaxy S21'},
{img:'S21b.jpg', price : '1800$', color : 'Blue', type : 'Galaxy S21'},
{img:'S21r.webp', price : '1800$', color : 'Red', type : 'Galaxy S21'}
]
let GalaxyFold = [{img:'Fr.jpg', price : '1800$', color : 'Red', type : 'Galaxy Fold'},
{img:'Fw.jpg', price : '1800$', color : 'White', type : 'Galaxy Fold'},
{img:'Fb.jpg', price : '1800$', color : 'Blue', type : 'Galaxy Fold'},
{img:'F2b.jpg', price : '1950$', color : 'Blue', type : 'Galaxy Fold 2'},
{img:'F2r.jpg', price : '1950$', color : 'Red', type : 'Galaxy Fold 2'},
{img:'F2w.jpg', price : '1950$', color : 'White', type : 'Galaxy Fold 2'},
{img:'Zw.png', price : '2000$', color : 'White', type : 'Galaxy Z Flip'},
{img:'Zr.jpg', price : '2000$', color : 'Red', type : 'Galaxy Z Flip'},
{img:'Zb.jpg', price : '2000$', color : 'Blue', type : 'Galaxy Z Flip'}
]
let GalaxyTabA = [{img:'A7.jpg', price : '1200$', color : 'Red', type : 'Galaxy Tab A7 LTE'},
{img:'A7.jpg', price : '1200$', color : 'Blue', type : 'Galaxy Tab A7 LTE'},
{img:'A7.jpg', price : '1200$', color : 'White', type : 'Galaxy Tab A7 LTE'},
{img:'A7lite.jpg', price : '1250$', color : 'Red', type : 'Galaxy Tab A7 Lite'},
{img:'A7lite.jpg', price : '1250$', color : 'Blue', type : 'Galaxy Tab A7 Lite'},
{img:'A7lite.jpg', price : '1250$', color : 'White', type : 'Galaxy Tab A7 Lite'},
{img:'2019.jpg', price : '1300$', color : 'Red', type : 'Galaxy Tab A2019 LTE'},
{img:'2019.jpg', price : '1300$', color : 'Blue', type : 'Galaxy Tab A2019 LTE'},
{img:'2019.jpg', price : '1300$', color : 'White', type : 'Galaxy Tab A2019 LTE'},
{img:'A3.jpg', price : '1350$', color : 'Red', type : 'Galaxy Tab Active3 LTE'}]
let GalaxyTabS = [{img:'S7fe.jpg', price : '1900$', color : 'Blue', type : 'Galaxy Tab S7 FE LTE'},
{img:'S7+.jpg', price : '1950$', color : 'White', type : 'Galaxy Tab S7+'},
{img:'S7+.jpg', price : '1950$', color : 'Red', type : 'Galaxy Tab S7+'},
{img:'S7+.jpg', price : '2000$', color : 'Blue', type : 'Galaxy Tab S7+'},
{img:'S6.jpg', price : '1400$', color : 'White', type : 'Galaxy Tab S6  Lite'}]

let products =  [...GalaxyA,...GalaxyS,...GalaxyFold, ...GalaxyTabA, ...GalaxyTabS]
let busquet = []
let min = $('#min').val()
let max = $('#max').val() || 10000


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
    let img = $('<img src="img/' + obj.img  + '" class="card-img-top" alt="..." >')
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
    
    if(countA !== arr.length){
      for(var i=0; i< arr.length; i++ ){
        var div = addCard(arr[i])
        $('#GalaxyAA')[0].appendChild(div[0])
        countA++
      }
    }
    listener()
   
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
  let arr = GalaxyTabS
  
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
     
      if(document.getElementById('GalaxyA').checked){
        
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
    console.log(price)
    return price >= min && price <= max
  })

}



$('#FILTER').click(function(){
  let arr = arrayFiltered()
  
  $('#filteredd').html('')
    for(var i=0; i< arr.length; i++ ){
      var div = addCard(arr[i])
      $('#filteredd')[0].appendChild(div[0])
    }
  listener()
  
  $('#GalaxyBB').hide()
  $('#GalaxyCC').hide()
  $('#GalaxyTabSS').hide()
  $('#GalaxyTabAA').hide()
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
  if(busquet.length !== 0){
    var div1 = $('<div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1"></div>')
    var div2 = $('<div class="modal-dialog modal-dialog-centered"></div>')
    var div3 = $('<div class="modal-content">')
    var div41 = $('<div class="modal-header"></div>')
    var div42 = $('<div class="modal-body"></div>')
    var h5 = $('<h5 class="modal-title" id="exampleModalToggleLabel">Your basket</h5>')
    var button123 = $('<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>')
  var total = 0
  for(var i=0; i<busquet.length;i++){
    var p = $('<p>Type: ' + busquet[i].type + '     price:' + busquet[i].price + '</p>')
    div42[0].appendChild(p[0])
    total += 1
  }
  div41[0].appendChild(h5[0])
  div41[0].appendChild(button123[0])
  div3[0].appendChild(div41[0])
  div3[0].appendChild(div42[0])
  div2[0].appendChild(div3[0])
  div1[0].appendChild(div2[0])
  $('#bought')[0].appendChild(div1[0])
  $('#bought').removeClass('hide')
  $('#phoneList').hide()

  // var di1 = $('<div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1"></div>')
  // var di2 = $('<div class="modal-dialog modal-dialog-centered"></div>')
  // var di3 = $('<div class="modal-content container"></div>')
  // var di41 = $('<div class="modal-header row"></div>')
  // var di42 = $('<div class="modal-body"></div>')
  // var di43 = $('<div class="modal-footer"></div>')
  // var di51 = $('<div class="form-floating  row"></div>')
  // var di52 = $('<div class="form-floating row"></div>')
  // var di53 = $('<div class="form-floating row"></div>')
  // var di54 = $('<div class="form-floating row"></div>')
  // var di55 = $('<div class="form-floating row">')
  // var dih5 = $('<h5 class="modal-title" id="exampleModalToggleLabel2">Purshase</h5>')
  // var input51 = $('<input type="email" class="form-control" id="floatingInput" placeholder="Name LastName" >')
  // var input52 = $('<input type="email" class="form-control" id="floatingInput2" placeholder="name@example.com">')
  // var input53 = $('<input type="password" class="form-control" id="floatingPassword" placeholder="Adress">')
  // var input54 = $('<input type="password" class="form-control" id="float" placeholder="99 999 999">')
  // var input55 = $('<input type="email" class="form-control" id="floatingInput3" placeholder="123456789">')
  // var label51 = $('<label for="floatingInput">Full Name</label>')
  // var label52 = $('<label for="floatingInput2">Email</label>')
  // var label53 = $('<label for="floatingPassword">Adress</label>')
  // var label54 = $('<label for="floatingPassword">Phone Number</label>')
  // var label55 = $('<label for="floatingInput3">Card Number</label>')
  // var but5 = $('<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>')
  // var but43 = $('<button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">Pay</button>')
  // di51[0].appendChild(input51[0])
  // di52[0].appendChild(input52[0])
  // di53[0].appendChild(input53[0])
  // di54[0].appendChild(input54[0])
  // di55[0].appendChild(input55[0])
  // di51[0].appendChild(label51[0])
  // di52[0].appendChild(label52[0])
  // di53[0].appendChild(label53[0])
  // di54[0].appendChild(label54[0])
  // di55[0].appendChild(label55[0])
  
  // di41[0].appendChild(di51[0])
  // di41[0].appendChild(di52[0])
  // di41[0].appendChild(di53[0])
  // di41[0].appendChild(di54[0])
  // di41[0].appendChild(di55[0])
  // di41[0].appendChild(dih5[0])
  // di41[0].appendChild(but5[0])
  // di43[0].appendChild(but43[0])


  // di3[0].appendChild(di41[0])
  // di3[0].appendChild(di42[0])
  // di3[0].appendChild(di43[0])

  // di2[0].appendChild(div3[0])
  // di1[0].appendChild(div2[0])

  // // div1[0].appendChild(di1[0])
  // var a = $('<a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Open first modal</a>')
 











}
})









