const app = {
    init: function () {
       app.bind();
    },

    bind: function(){
        document.querySelector("#home").hidden = false;
        for (const link of document.querySelectorAll(".navbar a")) {
            link.addEventListener("click", handleNav);
        }
    },

    handleNav: function(){
        
    }
};

document.addEventListener("DOMContentLoaded", app.init);