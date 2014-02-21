$.fn.slideblock = function () {
    var me = this;
    $chDiv = $(me).find('div.ch');
    var o = {};
    o.cWidth = $('.ch').width();
    o.pWidth = this.width();
    o.cCount = $chDiv.length;
    o.dWidth = (o.pWidth - o.cWidth) / (o.cCount - 1);
    $.each($chDiv, function (index, obj) {
        $(obj).css('left',o.dWidth * index);
        
        $(obj).hover(function () {
            $(this).css('left', o.dWidth * index).addClass('goTop')
                .siblings('.goTop').removeClass('goTop');
  
            $(this).prevAll('.ch').each(function () {
                $(this).css('left',o.dWidth * index);
                console.log(o.dWidth * index);
            });
             
            $(this).nextAll('.ch').each(function () {
                $(this).css('left', o.cWidth + o.dWidth * index);
                console.log(  index)
            });
        });
    });
};
$(document).ready(function(){
    $('#slide').slideblock();
});