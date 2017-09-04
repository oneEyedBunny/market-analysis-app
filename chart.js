function chartResults () {
	for (i = 0; i < imgObjects.length; i++) {
		imgObjects[i].y = imgObjects[i].imageTotalVotes;
	}
	var chart = new CanvasJS.Chart("results-container",
	{
		animationEnabled: true,
		theme: "theme3",
		//exportEnabled: true,
		backgroundColor: "#FFFFF0",
		title:{
			text: "Your Voting Results"
		},
		data: [
			{
				type: "column", //change type to bar, line, area, pie, etc
				dataPoints: imgObjects
			}
		]
	});

	chart.render();
}
