window.onload = function () {
    let zhezhao = document.querySelector(".zhezhao")
    let xiangqing = document.querySelectorAll(".xiugai")
    let queding = document.querySelector(".qud")
    let quxiao = document.querySelector(".qux")
    xiangqing.forEach(function (item, index) {
        item.onclick = function () {
            zhezhao.style.display = "block"
        }
    })
    queding.onclick = function () {
        zhezhao.style.display = "none"
    }
    quxiao.onclick = function () {
        zhezhao.style.display = "none"
    }
    function banner1(ceilsClassName,prevClassName,nextClassName,diansClassName,bannerClassName){
        let ceils = document.querySelectorAll(ceilsClassName)
        let width = ceils[0].offsetWidth
        let length = ceils.length
        let prev = document.querySelector(prevClassName)
        let next = document.querySelector(nextClassName)
        let dians = document.querySelectorAll(diansClassName)
        let now=0,after=0
        let banner = document.querySelector(bannerClassName)

        // 布局
        ceils.forEach(function(item,index){
            if(index!=0){
                item.style.left= width+"px"
            }
        })
        dians[0].style.backgroundColor="#de63d1"
        // dians[0].style.border="1px solid #FF6700"

        // 开关思想
        let flag = true
        // 轮播
        function run(type=0){
            flag = false
            if(type==0){
                // 下一张
                now+=1
                if(now>=length){
                    now = 0
                }
                ceils[now].style.left=width+"px"
                animate(ceils[now],{left:0},500)
                animate(ceils[after],{left:-width},500,function(){
                    flag = true
                })
            }else{
                // 上一张
                now-=1
                if(now<0){
                    now = length-1
                }
                ceils[now].style.left=-width+"px"
                animate(ceils[now],{left:0},500)
                animate(ceils[after],{left:width},500,function(){
                    flag=true
                })
            }
            dians.forEach(function(item,index){
                if(index==now){
                    item.style.backgroundColor = "#de63d1"
                    item.style.color = "#ffffff"
                    item.style.border="none"
                }else{
                    item.style.backgroundColor = "#ffffff"
                    item.style.border = "1px solid #b5b5b5"
                    item.style.color = "#b5b5b5"
                }
            })

            after = now
        }

        // 前后按钮
        next.onclick = function(){
            if(flag){
                run()
            }
        }
        prev.onclick = function(){
            if(flag){
                run(1)
            }
        }
        // 轮播点
        dians.forEach(function(item,index){
           item.onclick=function(){
                let dianIndex = now
                if(index>dianIndex){
                    now=index-1
                    run()
                }else if(index<dianIndex){
                    now =index+1
                    run(1)
                }
           }
        })
    }
    banner1(".lbt",".zjjs",".zjj",".zj2",".right-botton ul")
}