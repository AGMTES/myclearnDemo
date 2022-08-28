/**
 *  将img标签重新定位到public静态文件夹中
 *      注意：图片命名不能包多个点含点
 *              tou.xiang.png（不可以）
 *              touxiang.png（可以）
 *  参数：
 *    var config ={
 *          staticFile:"" // 指定静态文件路径
 *    }
 *      
 */
 var config ={
    staticFile:"/img/assets/"
} 

function init() {
    var omh = document.getElementsByTagName("img")
    console.log(omh);
    for (let index = 0; index < omh.length; index++) {
        let imgEle = omh[index];
        let newSrc = getImgName(imgEle)
        imgEle.src = newSrc
    }
}

/**
 *  http://localhost:7777/assets/img/touxiang.jpg
 *  获取图片名字
 *  touxiang
 * @param {*} src 
 */
function getImgName(imgEle) {
    // 获取图片完整链接，如 http://localhost:7777/assets/img/touxiang.jpg
    let src = imgEle.src
    // 获取资源路径uri：assets/img/touxiang.jpg   
    let imgeUri = imgEle.attributes[0].nodeValue
    try {
        let totalIndex = imgeUri.length
        // 获取图片后缀 .jpg
        let image_suffix = imgeUri.slice(imgeUri.lastIndexOf("."),totalIndex)
        // 获取图片名 touxiang
        let startIdx = imgeUri.lastIndexOf("/")
        let endIdx = imgeUri.indexOf(".")
        let imgName = imgeUri.slice(startIdx+1,endIdx); // 获取图片名
        res = config.staticFile+imgName+image_suffix
    } catch (error) {
        res = src
    }
    return res
}

window.onload = init;

