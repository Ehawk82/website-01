const init = () => {
	buildUI();
},
buildUI = () => {
	const heading = createEle("h1"),
		  content = createEle("div"),
	      footer = createEle("footer");
	//
	heading.innerHTML = "Heading";

	content.innerHTML = "content";

	footer.innerHTML = "footer";

	body.append(heading,content,footer);
};

window.onload = () => init();