// Дэлгэцтэй ажиллах контроллер
var uiController = (function () {

    var DOMstrings = {
        inputType: ".add__type",
        inputDescription: ".add__description",
        inputValue: ".add__value",
        addBtn: ".add__btn"
    };

    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },

        getDOMstrings: function () {
            return DOMstrings;
        }
    };
})();


// Санхүүтэй ажиллах контроллер
var financeController = (function () {

})();


// Програмын холбогч контроллер
var appController = (function (uiController, fnController) {

    var crtlAddItem = function () {
        // 1. Оруулах өгөгдлийг дэлгэцээс олж авна. 
        console.log(uiController.getInput());

        // 2. Олж авсан өгөгдлүүдээ санхүүгийн контроллерд дамжуулж тэнд хадгална. 

        // 3. Олж авсан өгөгдлүүдийг вэб дээр тохирох хэсгүүдэд гаргана. 

        // 4. Төсвийг тооцоолно.

        //5. Үлдэгдэл тооцоог дэлгэцэнд гаргана.

    };

    var setupEventListeners = function () {

        var DOM = uiController.getDOMstrings();

        document.querySelector(DOM.addBtn).addEventListener('click', function () {
            crtlAddItem();
        });


        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                crtlAddItem();
            }
        });
    };

    return {
        init: function () {
            console.log('Application started ...');
            setupEventListeners();
        }
    };

})(uiController, financeController);

appController.init();