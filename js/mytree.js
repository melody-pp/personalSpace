$(function() {
        $.fn.zTree.init($("#treeDemo"), setting, zNodes);

        var treeObj = $.fn.zTree.getZTreeObj("treeDemo");
        var treeNodes = treeObj.transformToArray(treeObj.getNodes());
        console.log(treeNodes)
        for (var i = 0, len = treeNodes.length; i < len; i++) {
            var node = treeNodes[i];
            if (node.needPic) {

                $('#' + node.tId + '_a').append('<img data-node_id="' + node.id + '" src="../img/shuxing_duanxin.png" style="cursor:pointer;margin: 0 8px;"><img class="xiaoxiShortCut" src="../img/xiaoxi.png" style="cursor:pointer;">')
                $('#' + node.tId + '_switch').html(node.isMale ? '<i class="iconfont" style="font-size:17px;color:#309ef9;">&#xe6e7;</i>' : '<i class="iconfont" style="font-size:17px;color:#309ef9;">&#xe606;</i>')
            }

        }
    })
    // 树形结构
var setting = {
    view: {
        showIcon: true,
        showLine: false
    },
    data: {

        simpleData: {
            enable: true
        }
    }
};

var zNodes = [{
    id: 1,
    pId: 0,
    name: '新华通讯社',
    open: true
}, {
    id: 11,
    pId: 1,
    name: "总社",
    open: true
}, {
    id: 111,
    pId: 11,
    name: "内设机构"
}, {
    id: 1111,
    pId: 111,
    name: "内设子机构1"
}, {
    id: 1112,
    pId: 111,
    name: "内设子机构2"
}, {
    id: 112,
    pId: 11,
    name: "直属事业"
}, {
    id: 1121,
    pId: 112,
    name: "直属子事业1"
}, {
    id: 1122,
    pId: 112,
    name: "直属子事业2"
}, {
    id: 113,
    pId: 11,
    name: "直属企业"
}, {
    id: 1131,
    pId: 113,
    name: "直属企业1"
}, {
    id: 1132,
    pId: 113,
    name: "直属企业2"
}, {
    id: 114,
    pId: 11,
    name: "控股企业",
    open: true
}, {
    id: 1141,
    pId: 114,
    name: "孙玉哲",
    needPic: true,
    isMale: true
}, {
    id: 1142,
    pId: 114,
    name: "张某东",
    needPic: true,
    isMale: true
}, {
    id: 1143,
    pId: 114,
    name: "李五",
    needPic: true,
    isMale: false
}, {
    id: 12,
    pId: 1,
    name: "国内分社"
}, {
    id: 121,
    pId: 12,
    name: "华北地区"
}, {
    id: 1211,
    pId: 121,
    name: "华北地区1"
}, {
    id: 1212,
    pId: 121,
    name: "华北地区2"
}, {
    id: 2,
    pId: 0,
    name: '公共分组'
}, {
    id: 21,
    pId: 2,
    name: '分组1',
    needPic: true
}, {
    id: 22,
    pId: 2,
    name: '分组2',
    needPic: true
}, {
    id: 23,
    pId: 2,
    name: '分组3',
    needPic: true
}, {
    id: 3,
    pId: 0,
    name: '个人分组'
}, {
    id: 31,
    pId: 3,
    name: '个人分组1',
    needPic: true
}, {
    id: 32,
    pId: 3,
    name: '个人分组2',
    needPic: true
}];
