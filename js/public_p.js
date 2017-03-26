$(function() {
    function suitWarpperWidth() {
        var windowWith = $(window).innerWidth();
        var $wrapper = $('#wrapper');
        if (windowWith < 1131) {
            $wrapper.css('margin', 0);
        } else if (windowWith < 1366) {
            $wrapper.css('margin', 0 + ' ' + (windowWith - 1130) / 2 + 'px');
        } else {
            $wrapper.css('margin', '0 110px');
        }
    }

    suitWarpperWidth();
    $(window).on('resize', suitWarpperWidth);

    function suitKuaisuInputWidth() {
        var $kshfInput = $('#kshfInput');
        var $kshfBtn = $('.kshfBtn');
        var $middle = $('.middle');
        var $KuaisuInputWidth = $middle.outerWidth(true) - 100 - $kshfBtn.outerWidth(true);
        $kshfInput.css('width', $KuaisuInputWidth + 'px');

    }
    suitKuaisuInputWidth();
    $(window).on('resize', suitKuaisuInputWidth);



    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        grabCursor: true,
        paginationClickable: true,
        calculateHeight: true,
        calculateWidth: true
    })
    $('.arrow-left').on('click', function(e) {
        var $this = $(this);
        e.preventDefault();
        if (mySwiper.activeIndex != 1) {
            mySwiper.swipePrev();
            $this.css('color', '#2c2c2c');

        } else {
            $this.css('color', '#ddd');
        }
    })

    $('.arrow-right').on('click', function(e) {
        e.preventDefault();
        mySwiper.swipeNext();
        if (mySwiper.activeIndex != 1) {
            $('.arrow-left').css('color', '#2c2c2c');
        }
    })

    var $zengjia_pop = $('#zengjia_pop');
    var $plus = $('#plus');
    var $suozhan = $('#suozhan');
    var $listItem = $('#listItem');
    var $suozhanjstx = $('#suozhanjstx');
    var $appMenu = $('#appMenu');
    var $appsubMenu = $('#appsubMenu');
    var $suozhansanjiao = $('#suozhansanjiao');
    var $suozhanbox = $('#suozhanbox');
    var $gexian = $('#gexian');
    var $appMenujstx = $('#appMenujstx');
    var $qunzu = $('#qunzu');
    var $subqunzu = $('#subqunzu');
    var $allMsgPop = $('#allMsgPop');
    var $allMsg = $('#allMsg');
    var $allItemsPop = $('#allItemsPop');
    var $allItems = $('#allItems');
    var $xiaoxishaixuanPop = $('#xiaoxishaixuanPop');
    var $xiaoxishaixuan = $('#xiaoxishaixuan');
    var $chacha = $('.chacha');
    var $closeIcon = $('.closeIcon');
    var $jishitongxun = $('.jishitongxun');

    $allMsg.click(function() {
        $allMsgPop.toggle();
    })

    $allItems.click(function() {
        $allItemsPop.toggle();
    })

    $xiaoxishaixuan.click(function() {
        $xiaoxishaixuanPop.toggle();
    })

    $plus.click(function() {
        $zengjia_pop.toggle();
    })

    $suozhanjstx.click(function() {
        $appMenujstx.toggle();
    })

    $qunzu.click(function() {
        $subqunzu.toggle();
    })

    $suozhan.click(function() {
        $listItem.toggle();
    })

    $suozhansanjiao.click(function() {
        if ($appsubMenu.is(':visible')) {
            $gexian.hide();
            $appsubMenu.hide();
            $appMenu.css("padding-bottom", "32px");
            $suozhanbox.addClass('up');
        } else {
            $gexian.show();
            $appsubMenu.show();
            $appMenu.css("padding-bottom", "0");
            $suozhanbox.removeClass('up');
        }
    })


    var dialogHTML = '<div id="closeDialog"><p>确定删除？</p><div class="buttonsGrop"><span class="confirmBtn">确定</span><span class="cancelBtn">取消</span></div></div>';
    $(document).on('click', '.closeIcon', function() {
        $('#closeDialog').remove();
        var $item = $(this).parents('.newMail');
        $item.append(dialogHTML);
        $('#closeDialog p').css('margin-top', ($item.height() - 50) / 2 + 'px')
        $('#closeDialog').css({
            width: $item.outerWidth(),
            height: $item.outerHeight()
        })
    })
    $(document).on('click', '.confirmBtn', function() {
        $(this).parents('.newMail').remove();
    })
    $(document).on('click', '.cancelBtn', function() {
        $(this).parents('#closeDialog').remove();
    })

    $(document).on('click', '.chacha', function() {
        $(this).parents('.tongxunlu').remove();
    })


    var $xiaoxiPop = $('#xiaoxiPop');
    var $xiaoxiShortCut = $('.xiaoxiShortCut');
    var $fasongBtn = $('.fasongBtn');
    $(document).on('click', '.xiaoxiShortCut', function(e) {
        var $this = $(this);
        $xiaoxiPop.css({
            display: "block",
            left: e.clientX - 172 + "px",
            top: e.clientY + 12 + "px"
        });

        $this.css('width', '22px');

    })
    $fasongBtn.click(function() {
        $xiaoxiPop.hide();
        $('.xiaoxiShortCut').css('width', '17px')
    })

})
var $seaechTxt = $('#seaechTxt');
var $searchTxt_lxr = $('#searchTxt_lxr');

function sousuoxiaoxionfocus(obj) {
    if (this.value == '') {
        $seaechTxt.css('display', 'none');
    }
}

function sousuoxiaoxionblur(obj) {
    $seaechTxt.css('display', this.value ? 'none' : 'block');
}

function chazhaolianxirenonfocus(obj) {
    if (this.value == '') {
        $searchTxt_lxr.css('display', 'none');
    }
}

function chazhaolianxirenonblur(obj) {
    $searchTxt_lxr.css('display', this.value ? 'none' : 'block');
}
