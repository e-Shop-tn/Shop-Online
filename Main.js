

const carrosel = $('#carouselExampleControls')

let GalaxyA = [{img:'e-commerce.jpg', price : '3000$', color : 'red', type : 'galaxyA31'},
{img:'online-1617947180.jpg', price : '1500$', color : 'blue', type : 'galaxyA51'},
{img:'e-commerce.jpg', price : '2400$', color : 'whit', type : 'galaxyA21'}
]

let GalaxyS = [{img:'e-commerce.jpg', price : '1000$', color : 'red', type : 'galaxyb31'},
{img:'online-1617947180.jpg', price : '1800$', color : 'blue', type : 'galaxyb51'},
{img:'e-commerce.jpg', price : '240$', color : 'white', type : 'galaxyb21'}
]

let GalaxyFold = [{img:'e-commerce.jpg', price : '1200$', color : 'green', type : 'galaxyc31'},
{img:'online-1617947180.jpg', price : '1350$', color : 'blue', type : 'galaxyc51'},
{img:'e-commerce.jpg', price : '650$', color : 'whit', type : 'galaxyc21'}
]


let GalaxyTabA = [{img:'e-commerce.jpg', price : '1200$', color : 'green', type : 'galaxyc31'}]

let GalaxyTabS = [{img:'e-commerce.jpg', price : '1200$', color : 'green', type : 'galaxyc31'}]


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
    cardBody[0].appendChild(type[0])
    cardBody[0].appendChild(color[0])
    cardBody[0].appendChild(price[0])
    let img = $('<img src="img/' + obj.img  + '" class="card-img-top" alt="...">')
    let container = $('<div class="card card0" style="width: 18rem;"></div>')
    container[0].appendChild(img[0])
    container[0].appendChild(cardBody[0])
    // $('.cont')[0].appendChild(container[0])
    return container
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
    console.log($('#GalaxyAA'))
    $('#GalaxyBB').hide()
    $('#GalaxyCC').hide()
    $('#GalaxyTabSS').hide()
    $('#GalaxyTabAA').hide()
    $('#fileredd').hide()
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
    $('#GalaxyAA').hide()
    $('#GalaxyCC').hide()
    $('#GalaxyTabSS').hide()
    $('#GalaxyTabAA').hide()
    $('#fileredd').hide()
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
    $('#GalaxyAA').hide()
    $('#GalaxyBB').hide()
    $('#GalaxyTabSS').hide()
    $('#GalaxyTabAA').hide()
    $('#fileredd').hide()
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
  $('#GalaxyBB').hide()
  $('#GalaxyCC').hide()
  $('#GalaxyTabSS').hide()
  $('#GalaxyAA').hide()
  $('#fileredd').hide()
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
  $('#GalaxyBB').hide()
  $('#GalaxyCC').hide()
  $('#GalaxyTabSS').show()
  $('#GalaxyTabAA').hide()
  $('#fileredd').hide()
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
      $('#phone').removeClass('hide')
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
      $('#Tab').removeClass('hide')
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
    selectedValue = 'red' 
  }
  else if(document.getElementById('blue').checked) {
    selectedValue = 'blue'
  }
  else if(document.getElementById('white').checked) { 
    selectedValue = 'white' 
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
  $('#filtered').html('')
    for(var i=0; i< arr.length; i++ ){
      var div = addCard(arr[i])
      $('#filteredd')[0].appendChild(div[0])
    }
  
  $('#GalaxyB').hide()
  $('#GalaxyC').hide()
  $('#GalaxyTabS').hide()
  $('#GalaxyTabA').hide()
  $('#filered').show()
  $('#GalaxyA').hide()
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









