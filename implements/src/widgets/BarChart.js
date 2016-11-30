(function () {
	var Widget = OneFlux.getFactory("@widget");

	var BarChart = function (options) {
		Widget.call(this, options);
		this._orientation = null;
	};

	BarChart.prototype = new Widget();

	_.extend(BarChart.prototype, {
		init: function (options) {
			options = _.extend({
				orientation: 'v'
			}, options);

			this.setOrientation(options.orientation);
		},
		setOrientation: function (orientation) {
			if (orientation !== 'h' && orientation !== 'v') {
				throw new Error('setOrientation(): The parameter must be "v" or "h"');
			}
			this.set("orientation", orientation);
			// TODO: redrawn graphic
			return this;
		},
		_getFormattedData: function () {
			var that = this;
			return this.get("data").map(function (item) {
				return {
	                type: "bar",
	                orientation: that.get("orientation"),
	                x: item.x,
	                y: item.y
	            }
			});
		}
	});

	OneFlux.registerFactory("@barchart", [], BarChart);
})();