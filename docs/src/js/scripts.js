const init = () => {
	buildUI();
},
buildUI = () => {
	const heading = createEle("header"),
		  content = createEle("div"),
	      footer = createEle("footer");
	//
	heading.innerHTML = "Heading";

	//

	content.innerHTML = "content";
	content.className = "content";
	
	//
	footer.innerHTML = "EHAWK LLC 2021";

	////
	body.append(heading,content,footer);
};

window.onload = () => init();