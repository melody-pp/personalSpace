$(document).ready(function () {
    $.fn.zTree.init($("#treeDemo"), setting, zNodes);
    lunbo();
    $(".list-more").click(listMore);
    $(".left-quanbu-btn").click(quanbu);
    $(".top-quanbu-btn").click(quanbu);
    $("#wodepindao .list-header-more").click(shadeDiv);
    $("#con-header .con-header-more").click(shadeDiv);
});

function getByClass(oParent, sClass) {
    var aEle = oParent.getElementsByTagName('*');
    var aResult = [];
    var re = new RegExp('\\b' + sClass + '\\b', 'i');

    for (var i = 0; i < aEle.length; i++) {
        if (aEle[i].className.search(re) != -1) {
            aResult.push(aEle[i]);
        }
    }
    return aResult;
}

function stopPropagation(e) {
    e = window.event || e;
    if (document.all) {  //只有ie识别
        e.cancelBubble = true;
    } else {
        e.stopPropagation();
    }
}

//订阅轮播
function lunbo() {
    var divf = document.getElementById("lunboContainer");
    var lis = getByClass(divf, "lunboImg");

    var pageObj = {
        next: 1,
        pre: lis.length - 1,
        now: 0,
        mouseInner: false
    };

    divf.onmouseover = function () {
        pageObj.mouseInner = true;
    };
    divf.onmouseout = function () {
        pageObj.mouseInner = false;
    };

    var navc1 = getByClass(divf, "lunbo-left")[0];
    var navc2 = getByClass(divf, "lunbo-right")[0];
    navc1.onclick = prePage;
    navc2.onclick = nextPage;

//        setInterval(function () {
//            if (!pageObj.mouseInner) {
//                bofang(pageObj.next)
//            }
//        }, 3000);

    function bofang(lunboIndex) {
        var lunboIndex = lunboIndex;
        var imgs = getByClass(divf, "lunboImg");

        for (var i = 0; i <= imgs.length - 1; i++) {
            imgs[i].className = "lunboImg";
            if (i == lunboIndex) {
                imgs[lunboIndex].className = "lunboImg img-active";
                updatePage(lunboIndex);
            }
        }
    }

    function prePage(e) {
        var lunboIndex = pageObj.pre;
        bofang(lunboIndex);
    }

    function nextPage(e) {
        var lunboIndex = pageObj.next;
        bofang(lunboIndex);
    }

    function lunbo(e) {
        var lunboIndex = this.index;
        bofang(lunboIndex);
    }

    function updatePage(pageIndex) {
        var lunboIndex = pageIndex;
        pageObj.now = lunboIndex;
        if (lunboIndex == lis.length - 1) {
            pageObj.next = 0;
        } else {
            pageObj.next = Number(lunboIndex) + 1;
        }
        if (lunboIndex == 0) {
            pageObj.pre = lis.length - 1;
        } else {
            pageObj.pre = lunboIndex - 1;
        }
    }
}

// 树形结构
var setting = {
    view: {
        showIcon: false,
        showLine: false
    },
    data: {
        key: {
            title:"t"
        },
        simpleData: {
            enable: true
        }
    }
};

var zNodes = [
    {id: 1, pId: 0, name: "新华通讯社", t:"",open: true},
    {id: 11, pId: 1, name: "总社", t:"",open: true},
    {id: 111, pId: 11, name: "内设机构", t:""},
    {id: 1111, pId: 111, name: "内设子机构1", t:""},
    {id: 1112, pId: 111, name: "内设子机构2", t:""},
    {id: 112, pId: 11, name: "直属事业", t:""},
    {id: 1121, pId: 112, name: "直属子事业1", t:""},
    {id: 1122, pId: 112, name: "直属子事业2", t:""},
    {id: 113, pId: 11, name: "直属企业", t:""},
    {id: 1131, pId: 113, name: "直属企业1", t:""},
    {id: 1132, pId: 113, name: "直属企业2", t:""},
    {id: 114, pId: 11, name: "控股企业", t:"",open: true},
    {id: 1141, pId: 114, name: "何某某", t:"技术部 138 0002 0002"},
    {id: 1142, pId: 114, name: "张某某", t:"技术部 138 0002 0002"},
    {id: 1143, pId: 114, name: "李某某", t:"技术部 138 0002 0002"},
    {id: 1144, pId: 114, name: "刘某某", t:"技术部 138 0002 0002"},
    {id: 1145, pId: 114, name: "韩某某", t:"技术部 138 0002 0002"},
    {id: 12, pId: 1, name: "国内分社", t:"",open: true},
    {id: 121, pId: 12, name: "华北地区", t:""},
    {id: 1211, pId: 121, name: "华北地区1", t:""},
    {id: 1212, pId: 121, name: "华北地区2", t:""},
];

//function showIconForTree(treeId, treeNode) {
//    return !treeNode.isParent;
//}

//关闭-弹出窗
function shadeShow(_this) {
    $(".content-part").find('.close-shade').remove();
    $(_this).after('<div class="close-shade"><div class="close-inner clearfloat"><span>确定删除？</span><div class="queding" onclick="javascript:var _this=$(this);quedingshanchu(_this);">确定</div> <div class="quxiao" onclick="javascript:var _this=$(this);quxiaoshanchu(_this);">取消</div></div><i></i> </div>');

    _this.parents(".content-part").find('.close-shade').css('display', 'block');
}
function quedingshanchu(_this) {
    _this.parents('.content-part').hide();
}
function quxiaoshanchu(_this) {
    _this.parents(".content-part").find('.close-shade').css('display', 'none');
}

//左侧列表(下拉)隐藏/显示
function listMore() {
    $(".left-list-ul2").slideToggle(300);
    setTimeout(function () {
        if ($(".left-list-ul2").css("display") == "block") {
            $(".list-more").removeClass().addClass("list-more list-more-upicon");
        } else {
            $(".list-more").removeClass().addClass("list-more list-more-downicon");
        }
    }, 310);
}

//左侧列表div隐藏/显示
function shadeDiv(event) {
    $(this).find(".hidediv").fadeIn(100);

    $(document).click(function () {
        $(this).find(".hidediv").hide();
    });
    stopPropagation();//阻止事件向上冒泡
}

//leftHidediv.click(function (event) {
//    event.stopPropagation();
//});

//全选按钮
function quanbu() {
    if ($(this).prop("checked")) {
        $(this).parents(".hidediv").find("input").attr("checked", true);
    }
    else {
        $(this).parents(".hidediv").find("input").attr("checked", false);
    }
}












