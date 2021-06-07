var currdate = $('#date');


function displayImage(data){
    // console.log(data)
    for (var i =0;i<data.length;i++){
        console.log(data[i]);
        $('<img>',{
        src:data[i].url,
    }).appendTo('#image-container');
    };
};
$('#btn').click(function(){
    if(currdate.val() === ""){
        alert("Enter a date!")
    }
    else {
    $.ajax({
        url:"Insert KEy",
        method:'GET',
        success : displayImage,
        data : {
            api_key: 'UnsTs4Kq8fdJUO3goioG22Ua0EcOIimZSmx7YBqg',
            count:'12',
            thumbs:true,
        }
    })};
    // currdate.hide();
    // $('#btn').hide();
});