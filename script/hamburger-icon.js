console.log("Hamburger icon loaded");
(function (){
    const MAIN_OBJECT ={
        init: function () {
            this.eventhandlers()

        },
        eventhandlers: function () {
            document.querySelector('.hamburger-icon').addEventListener('click', function () {
                document.querySelector('.menu-container').classList.toggle('menu-open');
            })
        }
    }
    MAIN_OBJECT.init()
})();