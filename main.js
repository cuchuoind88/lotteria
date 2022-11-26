var header=document.getElementById('header');
var logo=document.querySelector('.logo');
window.addEventListener('scroll',function()
    {
          if(window.pageYOffset>=199)
          {
            header.classList.add('sticky');
            logo.classList.add('sticky');
           
            
          }
          else
          {
            header.classList.remove('sticky');
            logo.classList.remove('sticky');
           
          }
    })
var line=document.querySelector('.line');
var tabs=document.querySelectorAll('.nav-item');
var temp=line;
for (let i=0 ;i<tabs.length;i++)
{
  tabs[i].onmouseover=function()
  {
  for (let j=0;j<tabs.length;j++)
  {
    if(tabs[i].contains(line))
    {
      line.remove();
    }
  }
  tabs[i].appendChild(temp);
}
}
/* Tiếng việt,Tiếng Anh*/
var image_updated=document.querySelector('.icon_vietnam_dowload');
document.querySelector('#language').addEventListener('change',function(){
     if(this.value=="VietNam")
     {
        image_updated.setAttribute('src','./image/VN-Vietnam-Flag-icon.png');
     }
     else 
     {
      image_updated.setAttribute('src','./image/555526.png');
     }
})
/*Cate-menu-list*/
var cate_list=document.querySelectorAll('.cate-menu-item');
for(let i =0 ;i < cate_list.length;i++)
{
     cate_list[i].onmouseover=function()
     {  
      for (let j=0;j<cate_list.length;j++)
      {
        if(cate_list[j].classList.contains('active_border'))
        {
              cate_list[j].classList.remove('active_border');
              break;
        }
      }
        cate_list[i].classList.add('active_border');
     }
}
/*Modal-JS*/
var buttons=document.querySelectorAll('.menu_item');
var modal=document.querySelector('.modal_lotteria');
var btn_close_1=document.querySelector('.btn_close_1');
var btn_close_2=document.querySelector('.btn_close_2');
for(let i =0; i < buttons.length; i++) 
{
  buttons[i].addEventListener('click',function()
  {
   modal.classList.add('open');
  })
}
btn_close_1.onclick=function()
{
  modal.classList.remove('open');
}
btn_close_2.onclick=function()
{
  modal.classList.remove('open');
}
var modal_login=document.querySelector('.modal_login');
var modal_login_back=document.querySelector('.modal_login_back');
var btn_back=document.querySelector('.btn_back');
var btn_next=document.querySelector('.btn_next');
btn_next.addEventListener('click',function(){


 modal_login_back.classList.remove('flex');
 modal_login.classList.add('flex');
})
btn_back.addEventListener('click',function(){
  modal_login.classList.remove('flex');
  modal_login_back.classList.add('flex');
  })
/*Product*/
let API1='http://localhost:3000/posts';
let API2='http://localhost:3000/comments';
//var btn=document.querySelector('#btn_submit');
//var btn1=document.querySelector('#btn_submit1');
var btnChicken=document.querySelector('.cate-menu-item #garan');
var btnDiscount=document.querySelector('.cate-menu-item #khuyenmai');
var loader=document.querySelector('#loading');
var product=document.querySelectorAll('.product_chicken');
function displayLoading()
{
 loader.classList.add('display');
}
function hideLoading() {
  
    loader.classList.remove("display");
  
}

btnDiscount.onclick=GetItems1;
function GetItems1()
{   
    for(var i=0;i<product.length;i++)
    {
      product[i].remove();
    }
    displayLoading();
    fetch(API1)
    .then(function(response){
        return response.json();
    })
    .then(RenderItem);
}
function RenderItem(Items)
{ hideLoading();
  var discount_item=document.querySelector('.discount_item ');
  var html=Items.map(function(Item)
  {
    return `

    <div class="col-lg-3 col-md-3 product_chicken">
    <div class="inner">
        <div class="field_img" >
           <a href="#">
               <img src="${Item.imagesrc}" alt="">
           </a>
        </div>
        <div class="name">
            <h5>
                ${Item.name}
            </h5>
            
            <a href="#">
                <img src="${Item.icon}" alt="" class="icon_item">
            </a>
        </div>
         <div class="description">
            <p class="desc1">${Item.desc1}</p>
            <p class="desc2">${Item.desc2}</p>
         </div>
         <p class="price">
            ${Item.price}
         </p>
         <button class="btn_add-to-cart">
           ${Item.buy}
         </button>

    </div>
</div>
    `
  })
  discount_item.innerHTML=html.join('');

}
btnChicken.onclick=GetItems2;
function GetItems2()
{   console.log(product);
    displayLoading();
    fetch(API2)
    .then(function(response){
        return response.json();
    })
    .then(RenderItem);
}




