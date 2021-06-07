var sol = $('#sol');
var pageno = 0;
var prev = $('#prev');
var next = $('#next');


function displayImage(data){
    console.log(data.photos[0].img_src);
    for (var i =0 ; i<data.photos.length;i++){
        // console.log(data.photos[i].img_src);
        image_url = data.photos[i].img_src;
        $('<img>').attr({
            src:data.photos[i].img_src,
        }).appendTo('#image-container');
    };
};


$('#btn').click(function(){
    $('#image-container').remove('img');
    if (sol.val()===""){
        alert("Feilds are mandatory!");
    }
    else{
    $.ajax({
        url:'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos',
        method : 'GET',
        success : displayImage,
        data : {
            api_key : "Insert Key",
            sol:sol.val(),
            page:pageno,
        },
    });    
};
});

next.click(function(){
    pageno++;
    if (sol.val()===""){
        alert("Feilds are mandatory!");
    }
    else{
    $.ajax({
        url:'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos',
        method : 'GET',
        success : displayImage,
        data : {
            api_key : "Insert Key",
            sol:sol.val(),
            page:pageno,
        },
    });    
};
});
prev.click(function(){
    pageno--;
    if (sol.val()===""){
        alert("Feilds are mandatory!");
    }
    else{
    $.ajax({
        url:'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos',
        method : 'GET',
        success : displayImage,
        data : {
            api_key : "Insert Key",
            sol:sol.val(),
            page:pageno,
        },
    });    
};
});