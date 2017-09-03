window.onload = function () {
	var chart = new CanvasJS.Chart("chartContainer",
	{
		animationEnabled: true,
		theme: "theme2",
		//exportEnabled: true,
		title:{
			text: "Your Voting Results"
		},
		data: [
		{
			type: "column", //change type to bar, line, area, pie, etc
			dataPoints: [
				{ label: bag, y: 71 },
				{ label: 20, y: 55 },
				{ label: 30, y: 50 },
				{ label: 40, y: 65 },
				{ label: 50, y: 95 },
				{ label: 60, y: 68 },
				{ label: 70, y: 28 },
				{ label: 80, y: 34 },
				{ label: 90, y: 14 }
			]
		}
		]
	});

	chart.render();
}
