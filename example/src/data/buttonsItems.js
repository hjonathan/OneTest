var ButtonsItems = {
    id: "myButtons",
    name: "MyNameButton",
    items: [
        {
            id: "myButtonElement1",
            title: "+",
            icon: "sum",
            onClick: function () {
                OneFlux.component("$boxSettings").$html.slideDown("slow", function () {
                    // Animation complete.
                });
            }
        }
    ]
};