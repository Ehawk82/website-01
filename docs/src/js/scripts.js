const init = () => {
	buildUI();
},
buildUI = () => {
	const heading = createEle("header"),
		  frame_r = createEle("div"),
		  frame_l = createEle("div"),
		  content_frame = createEle("div"),
		  content = createEle("div"),
	      footer = createEle("footer");
	//
	heading.innerHTML = "Heading";

	//
	frame_r.className = "frame_r";
	frame_r.innerHTML = "frame_r";

	frame_l.className = "frame_l";
	frame_l.innerHTML = "frame_l";

	content_frame.className = "content_frame";
	content_frame.append(frame_l,frame_r);

	content.append(content_frame);
	
	//
	footer.innerHTML = "EHAWK LLC 2021";

	////
	body.append(heading,content,footer);
};

window.onload = () => init();