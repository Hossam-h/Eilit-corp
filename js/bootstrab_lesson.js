//start glopal variable
let myNavelist=document.querySelectorAll('.navbar-nav li a'),
myListfeatures=document.querySelectorAll('.feature-work ul li'),
features=document.querySelectorAll('.feature');


//End glopal variable



removeAll3 ()







myNavelist.forEach(myList1=>{
    myList1.onclick=function(){
        removeAll2()
        this.classList.add('active')        
    }
})


myListfeatures.forEach(myList1=>{
    console.log(myList1)
    myList1.onclick=function(){
        removeAll();
        removeAll3 ()
        this.classList.add('active');
        let lists=document.getElementById(myList1.getAttribute('data-feature'));
        lists.classList.remove('diplay-none')
        lists.classList.add('diplay')
    }
})


//function to remove all in nave
function removeAll(){
    myListfeatures.forEach(myList=>{
        myList.classList.remove('active')
    })
}

//function to remove all 
function removeAll2(){
   
    myNavelist.forEach(myList=>{
        myList.classList.remove('active')
    })
}
function removeAll3 (){
    features.forEach(myfeature=>{
        myfeature.classList.add('diplay-none')
    })
}


features[0].classList.remove('diplay-none')