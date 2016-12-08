(function () {
	var Widget = OneFlux.getFactory("@widget");

	var PieChart = function (options) {
		Widget.call(this, options);
	};

	PieChart.prototype = new Widget();

	_.extend(PieChart.prototype, {
		_getFormattedData: function () {
			return [{
				values: this.get("data").map(function (item) {
					return item.value;
				}),
				labels: this.get("data").map(function (item) {
					return item.label || "";
				}),
				type: 'pie'
			}];
		}
	});

	OneFlux.registerFactory("@piechart", [], PieChart);
})();