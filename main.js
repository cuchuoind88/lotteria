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
/*var buttons=document.querySelectorAll('.menu_item');
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
  })*/
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
/*Account infomation*/
let Btn_info_account=document.querySelector('.drop_menu');
x1=document.querySelector('.block_infomation');
x1.onclick=function(event)
{
  event.stopPropagation();
}
Btn_info_account.addEventListener('click',function(){
  if(document.querySelector('.cart_content').classList.contains('none')==false)
  {
    document.querySelector('.cart_content').classList.add('none');
  }
  document.querySelector('.block_infomation').classList.toggle('none');
})
/*Cart*/
let btn_cart=document.querySelector('.drop_dow_cart');
x2=document.querySelector('.cart_content');
x2.onclick=function(event)
{
  event.stopPropagation();
}
btn_cart.onclick=function()
{
  if(document.querySelector('.block_infomation').classList.contains('none')==false)
  {
    document.querySelector('.block_infomation').classList.add('none');
  }
   document.querySelector('.cart_content').classList.toggle('none');
}
/*Xóa sản phẩm*/

let current_price;
let current_quantity;
let total_money_text;
let total_update;
let total_money=document.querySelector('.total_money');
function Delete_Cart()
{
if(parseFloat(total_money.innerText) > 0)
{
let array_btn_delete_cart=document.querySelectorAll('.btn_delete_cart_item');
for( var i=0 ;i < array_btn_delete_cart.length ; i++)
{
    array_btn_delete_cart[i].onclick=function(event)
    {  
         total_money_text=total_money.innerText;
         console.log(total_money_text);
         current_price=event.target.parentElement.querySelector('.current_price').innerText;
         console.log(current_price);
         current_quantity=event.target.parentElement.querySelector('.quantity').innerText;
         console.log(current_quantity);
         event.target.parentElement.remove();/*Delete Item*/
         /*Update total*/

         total_update=parseFloat(total_money_text)-parseFloat(current_price)*parseFloat(current_quantity);
         total_money_text=total_update;
         total_money.innerText=total_money_text + ".000đ";
         console.log(total_money_text);
    
    }
}
}
}

/*---------Thêm sản phẩm---------- */
let btn_add_to_cart=document.querySelectorAll('.btn_add-to-cart');/*Lấy ra danh sách các nút bấm */
let image_cart_item;
let name_cart_item;
let price_cart_item;
let cart_item_import;
let cart_item_quantity;
/*Lặp qua từng nút */
for ( let i =0 ; i < btn_add_to_cart.length ; i ++)
{
   btn_add_to_cart[i].onclick=function(event)
   {     let flag=false;
         image_cart_item=event.target.parentElement.querySelector('img').src;
         name_cart_item=event.target.parentElement.querySelector('h5').innerText;
         price_cart_item=event.target.parentElement.querySelector('.price').innerText;
         let field_namee=document.querySelectorAll('.field_name');
         
         /*Kiem tra san pham đã có trong cart hay chưa */
          for( var i =0 ; i < field_namee.length ; i++)
          {  /*nếu có rồi thì cập nhật lại số lượng */
            if(name_cart_item === field_namee[i].innerText)
            {    cart_item_quantity=field_namee[i].parentElement.querySelector('.quantity').innerText;
                 quantity_temp=parseFloat(cart_item_quantity);
                 quantity_temp+=1;
                 flag=true;
                 field_namee[i].parentElement.querySelector('.quantity').innerText=`${quantity_temp}`;
                 
                 break;
            }
          }
          /*nếu chưa có thì thêm item mới vào cart */
         if (flag == false)
          {
         cart_item_import=`
         
                             <button class="btn_delete_cart_item">
                              
                             </button>
                             <div class="field_img_cart">
                              <a href="">
                                <img src="${image_cart_item}" alt="">
                              </a>
                             </div>
                             <div class="field_info">
                                   <p class="field_name ">${name_cart_item}</p>
                                   <div class="field_price">
                                    <span class="current_price">${price_cart_item}</span>
                                    <span> x</span>
                                    <span class="quantity">1</span>
                                   </div>
                             </div>
                             
                       
         `
         var node_cart_item=document.createElement('li');
         node_cart_item.innerHTML=cart_item_import;
         node_cart_item.classList.add('cart_item');
         document.querySelector('.cart_list ul').appendChild(node_cart_item);
          }
          
        /*Cập nhật lại tiền */
          total_money_text=total_money.innerText;
          
          total_update=parseFloat(total_money_text)+parseFloat(price_cart_item)
          total_money_text=total_update;
          total_money.innerText=total_money_text + ".000đ";
          Delete_Cart();
   }
}








