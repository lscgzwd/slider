!function () {
    window.altbox = {};
    window.altbox.start = function () {
        // var abH = 100,abW = 300;
        var alertBox = document.querySelector("#alert-box");
        // alertBox.style["marginTop"] = (window.innerHeight-abH)/2+"px";
        // alertBox.style["marginLeft"] = (window.innerWidth-abW)/2+"px";
        $(alertBox).css({
            zIndex : 9999,
            marginTop : "0px",
            marginLeft : "0px"
        })
        var titles = (document.querySelectorAll("[data-title]")),elem;
        var messageBox = document.querySelector("#message-box");
        var messageContent =messageBox.querySelector(".message-content");
        for (i = 0; elem = titles[i]; i++) {
            elem.addEventListener("mouseover", function(event){
                console.log('mouseover');
                var tar = event.currentTarget;
                messageContent.innerHTML = tar.getAttribute("data-title");
                messageBox.style.display = "block";
                window.setTimeout(function(){
                    console.log(document.width, document.height);
                    var offsetX = ( document.width - messageBox.offsetWidth - 15 - event.clientX )  > 0 ? 0 : - messageBox.offsetWidth - 30,
                        offsetY = ( document.height - messageBox.offsetHeight - 15 - event.clientY )  > 0 ? 0 : - messageBox.offsetHeight - 30;
                    messageBox.style.left = (event.clientX + offsetX + 15 ) +"px";
                    messageBox.style.top = (event.clientY + offsetY + 15)+"px";
                }, 0);
            }, false);
            elem.addEventListener("mouseout", function(event){
                document.querySelector("#message-box").style.display = "none";
            }, false);
        }
    }
}()