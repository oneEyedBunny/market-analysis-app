function chartResults () {
	var input = document.createElement("input"); //creates the button to allow voting agasin
	input.setAttribute("type", "button");
	input.setAttribute("value", "Vote Again");    // set the text in the button
	input.setAttribute("onclick", "voteAgain()");
	button.appendChild(input);
	// var input2 = document.createElement("select"); //creates the button to change the chart type
	// var input3 = document.createElement("option");
	// input3.setAttribute("value","A");
	// input3.innerText = "Column";
	// var input4 = document.createElement("option");
	// input4.setAttribute("value","B");
	// input4.innerText = "Pie Chart";
	// input2.setAttribute("name", "chartType");    // set the text in the button
	// //event listner    input2.setAttribute("change", "chart.render()");
	// input2.appendChild(input3);
	// input2.appendChild(input4);
	// charttype.appendChild(input2);//need to set this to only load text once chart loads

	for (i = 0; i < imgObjects.length; i++) {
		imgObjects[i].y = imgObjects[i].imageTotalVotes;
	}
	// var sortedImages= imgObjects.sort(sortVotes);
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
		chart.options.data[0].dataPoints.sort(decendingTotals)
	chart.render();
}

function decendingTotals(left, right){
	return right.y -left.y;
}

// function sortVotes(left, right) {
// 	if (left.imageTotalVotes > right.imageTotalVotes) { return -1}
// 	else if (left.imageTotalVotes < right.imageTotalVotes) { return 1}
// 	else {return 0}
// }
