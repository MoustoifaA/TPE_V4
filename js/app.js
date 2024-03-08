const app = {
    init: function () {
       app.bind();
    },

    bind: function(){
        app.resetHidden();
        document.querySelector(".home").hidden = false;
        for (const link of document.querySelectorAll(".navbar a")) {
            link.addEventListener("click", app.handleNav);
        }
    },

    handleNav: function(event){

        app.resetHidden();

        if(event.currentTarget.id)
        document.querySelector("."+event.currentTarget.id).hidden = false;

    },

    resetHidden: function(){
        for (const article of document.querySelectorAll("article")) {
            article.hidden = true;
        }
    }
};

document.addEventListener("DOMContentLoaded", app.init);