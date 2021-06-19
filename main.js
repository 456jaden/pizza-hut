menu_list_array = [
"Deluxe Veggie pizza",
"Peppy Paneer pizza",
"Margherita pizza",
"cheese & tomato pizza",

]
function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+'<li>' +menu_list_array[i] + '</li>'
    }
    htmldata=htmldata+"</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
}


function add_item(){
    var htmldata;
    var item=document.getElementById("ädd_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata="<section class='<card'>"
    for(var i=0<menu_list_array.length;i++){

            htmldata=htmldata+'<div class="card">' +''<img src="pizzaImg.png"/>' + menu_list_array[1] +'</div>';

    }
htmldata=htmldata+"<section>"
document.getElementById("display_addedmenu").innerHTML=htmldata;
}