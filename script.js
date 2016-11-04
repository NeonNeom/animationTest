$(document).ready(function(){
    
    var b1v = 0;
    var b2v = 0;
    var b3v = 0;
    
    $("#btn1").click(function(){
        if(b1v==0){
            $("#sld1").animate({left:0}, 800, 'easeInOutQuart');
            b1v=1;
        }
        
        else{
            $("#sld2").animate({left:'-100%'}, 800, 'easeInOutQuart');
            b2v=0;
            $("#sld3").animate({left:'-100%'}, 740, 'easeInOutQuart');
            b3v=0;
        }
        
        
    });
    
    $("#btn2").click(function(){
        
        if(b2v==0){
            $("#sld2").animate({left:0}, 1100, 'easeInOutExpo');
            b2v=1;
        }
        
        else{
            $("#sld3").animate({left:'-100%'}, 800, 'easeInOutQuart');
            b3v=0;
        }
        
        
    });
    
    $("#btn3").click(function(){
        if(b3v==0){
            $("#sld3").animate({left:0}, 1000, 'easeInOutQuart');
            b3v=1;
        }
        
        else{
        }
        
        
    });
    
    
    
    
});