const el__time = document.getElementById("time");
const el__logo = document.getElementById("logo_in");
const el__section_s = document.getElementsByClassName("section");
let setLogoCoordinates = (sec) => {
	if (sec <= 15){
		el__logo.style.left = 5 + (sec * 0.33) + "%";
		el__logo.style.top = (sec * 0.33) + "%";
	}else if (sec <= 30){
		el__logo.style.left = ((10 + (5 - (sec * 0.33)))) + "%";
		el__logo.style.top = (sec * 0.33) + "%";
	}else if (sec <= 45){
		el__logo.style.left = ((10 + (5 - (sec * 0.33)))) + "%";
		el__logo.style.top = (10 - (-1 *(10 - sec * 0.33))) + "%";
	}else if (sec <= 60){
		el__logo.style.left = (-1 * (15 - (sec * 0.33))) + "%";
		el__logo.style.top = (10 - (-1 *(10 - sec * 0.33))) + "%";
	}
}
let getTime = () => {
	let nowTime = new Date();
	let hour = nowTime.getHours();
	let min = nowTime.getMinutes();
	let sec = nowTime.getSeconds();
	sec = sec > 9 ? sec : "0" + sec;
	min = min > 9 ? min : "0" + min;
	setLogoCoordinates(min);
	return `${hour}:${min}:${sec}`;
}
let updateTime = setInterval(() => {
	el__time.innerText = getTime();
}, 500);
let updateSectionHeaders = () => {
	for (let i = 0; i < el__section_s.length; i++) {
		const element = el__section_s[i];
		let el__sectionHeader = document.createElement("div");
		el__sectionHeader.style.fontSize = "110%";
		el__sectionHeader.style.marginBottom = "2rem";
		el__sectionHeader.style.fontWeight= "bolder";
		el__sectionHeader.style.userSelect= "none";
		el__sectionHeader.innerText = element.getAttribute("header");
		element.prepend(el__sectionHeader);
	}
}
updateSectionHeaders();
