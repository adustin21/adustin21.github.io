const el__time = document.getElementById("time");
const el__logo = document.getElementById("logo");
let getTime = () => {
	let nowTime = new Date();
	let hour = nowTime.getHours();
	let min = nowTime.getMinutes();
	let sec = nowTime.getSeconds();
	sec = sec > 9 ? sec : "0" + sec;
	min = min > 9 ? min : "0" + min;
	return `${hour}:${min}:${sec}`;
}
let updateTime = setInterval(() => {
	el__time.innerText = getTime();
}, 500);
