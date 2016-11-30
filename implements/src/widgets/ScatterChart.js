(function () {
	var Widget = OneFlux.getFactory("@widget");

	var ScatterChart = function (options) {
		Widget.call(this, options);
	};

	ScatterChart.prototype = new Widget();

	ScatterChart.MODE = {
		LINE: 'lines',
		MARKER: 'markers',
		LINEMARKER: 'lines+makers'
	};

	_.extend(ScatterChart.prototype, {
		_getFormattedData: function () {
			return this.get("data").map(function (item) {
				return {
					type: "scatter",
					mode: item.mode,
					x: item.x,
					y: item.y,
					name: item.name
				}
			});
		}
	});

	OneFlux.registerFactory("@scatterchart", [], ScatterChart);
})();