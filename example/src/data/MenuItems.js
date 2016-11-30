var Menu = {
    id: "myMenu",
    name: "MyNameMenu",
    items: [
        {
            id: "myMenuElement1",
            title: "Processmaker",
            icon: "dashboard",
            onClick: function () {
                project.action("activateDashboard", "myDashboardOne");
            }
        },
        {
            id: "myMenuElement2",
            title: "Sales Dashboard",
            icon: "products",
            onClick: function () {
                project.action("activateDashboard", "myDashboardTwo");
            }
        }
    ]
};