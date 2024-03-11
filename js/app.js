import { storage } from "./storage.js";


const app = {
    init: function () {
       app.bind();
    },

    bind: function(){
        app.resetHidden();
        if (this.isCurrentPage()) {
            document.querySelector("."+storage.getLocal("currentPage")).hidden = false;
        }else{
        document.querySelector(".home").hidden = false;
        }




        for (const link of document.querySelectorAll(".navbar a")) {
            link.addEventListener("click", app.handleNav);
        }
    },

    handleNav: function(event){

        app.resetHidden();

        if(event.currentTarget.id){
        document.querySelector("."+event.currentTarget.id).hidden = false;
           storage.setLocal("currentPage", event.currentTarget.id); 
        }

    },

    resetHidden: function(){
        for (const article of document.querySelectorAll("article")) {
            article.hidden = true;
        }
    },

    isCurrentPage: function () {
        
        return !(!storage.getLocal('currentPage'));
    }
};

document.addEventListener("DOMContentLoaded", app.init);