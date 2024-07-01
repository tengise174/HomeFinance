// Дэлгэцтэй ажиллах контроллер
var uiController = (function () {

})();


// Санхүүтэй ажиллах контроллер
var financeController = (function () {

})();

// Програмын холбогч контроллер
var appController = (function (uiController, fnController) {


    var crtlAddItem = function () {
        // 1. Оруулах өгөгдлийг дэлгэцээс олж авна. 


        // 2. Олж авсан өгөгдлүүдээ санхүүгийн контроллерд дамжуулж тэнд хадгална. 

        // 3. Олж авсан өгөгдлүүдийг вэб дээр тохирох хэсгүүдэд гаргана. 

        // 4. Төсвийг тооцоолно.

        //5. Үлдэгдэл тооцоог дэлгэцэнд гаргана.

    };

    document.querySelector('.add__btn').addEventListener('click', function () {
        crtlAddItem();
    });


    document.addEventListener('keypress', function (event) {
        if (event.keyCode === 13 || event.which === 13) {
            crtlAddItem();
        }
    });

})(uiController, financeController);