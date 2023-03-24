$('.search').on('input',function(e){
    // e.target.value 가 글자에 있는지 확인
    // 있으면 전부 지우고 그것만 띄우기 
    let value = e.target.value;
    $('.card').css('display', 'none');

    if ('식기 세척기'.includes(value)){
        $('.card').eq(0).css('display', 'block');
    }
    else if ('원목 침대 프레임'.includes(value)){
        $('.card').eq(1).css('display', 'block');
    }else if ('천연 디퓨저 세트'.includes(value)){
        $('.card').eq(2).css('display', 'block');

    }else if ('시원한 서큘레이터'.includes(value)){
        $('.card').eq(3).css('display', 'block');        
    }
       
});