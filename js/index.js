window.onload = function() {
    var d1 = document.getElementById("main");
    var u1 = document.getElementById("lunbo_son1");
    var u2 = document.getElementById("lunbo_son2");
    u2.innerHTML = u1.innerHTML;

    function go() {
        if (u2.offsetWidth - d1.scrollLeft <= 0) {    /*offsetWidth:u2可见区域的宽；scrollLeft：d1左边被卷去的长度*/
            d1.scrollLeft -= u2.offsetWidth;
        } else {
            d1.scrollLeft++;
        }
    }

    var run = setInterval(go, 20);
    d1.onmouseover = function () {    /*鼠标进过清除定时器*/
        window.clearInterval(run);
    }
    d1.onmouseout = function () {    /*鼠标移开继续轮播*/
        run = setInterval(go, 20);
    }
    window.onblur = function () {
        clearInterval(run)
    };
    window.onfocus = function () {
        setInterval(run, 20)
    }

    window.onscroll = function () {
        let boxsImg = document.querySelectorAll(".img div div a img");
        let bg3 = document.querySelectorAll(".bg3 img");
        let bg4 = document.querySelectorAll(".bg4 img");
         let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        if(scrollTop>600)
        {
             boxsImg[0].setAttribute("src",boxsImg[0].getAttribute("datu"));
        }
        if(scrollTop>900)
        {
            bg3[0].setAttribute("src",bg3[0].getAttribute("dat"));
        }
        if(scrollTop>1300)
        {
            bg4[0].setAttribute("src",bg4[0].getAttribute("da"));
        }
    }
}