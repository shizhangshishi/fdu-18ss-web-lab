/*1.所有事件处理函数必须等到页面加载完成之后才生效。
2.你需要给 thumbnail 中的图片绑定事件，
当小图片被点击时，上面的大图片将会变成相对应的图片。
3.给 <figure> 元素绑定事件。当鼠标移入上方大图的时候，
 <figcaption> 元素会逐渐淡入，最终透明度为80%，
 并且其中的文字需要变成对应小图的标题。当鼠标移出大图的时候，
  <figcaption> 元素会逐渐淡出，最终透明度为0。淡入淡出的动画时长皆为1秒。
 */

window.onload=function()
{
    let bigBox=document.querySelector("#featured");
    let bigPic=document.querySelector("#featured img");
    let figCap=document.querySelector("#featured figcaption");

    let smallBox=document.querySelector("#thumbnails");
    let smallPics=document.querySelectorAll("#thumbnails img");
    for (let i=0;i<smallPics.length;i++)
    {
        smallPics[i].addEventListener("click",function (e) {

            bigPic.src=smallPics[i].src.replace(/small/,"medium");
            bigPic.title=smallPics[i].title;
            figCap.innerText=bigPic.title;
        });
    }

    bigPic.addEventListener("mouseenter",function (e) {
        figCap.style="opacity:0.8;transition: opacity 1s ease;";
    });
    bigPic.addEventListener("mouseleave",function (e) {
        figCap.style="opacity:0;transition: opacity 1s ease;";
    });
    
};
