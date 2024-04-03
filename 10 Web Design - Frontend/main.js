import Events from "./pages/events";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import "./style.css";

Login();

const loginNav = document.getElementById("explorelink");
loginNav.addEventListener("click", () => {
	localStorage.removeItem("user");
	location.reload();
});

const homeNav = document.getElementById("homelink");
homeNav.addEventListener("click", () => {
	Home();
});

const eventsNav = document.getElementById("eventslink");
eventsNav.addEventListener("click", () => {
	Events();
});

window.onload = function () {
	var hamburger = document.querySelector(".hamburger");
	var close = document.querySelector(".close");
	var nav = document.querySelector("nav");

	hamburger.addEventListener("click", function () {
		nav.classList.toggle("open");
	});

	close.addEventListener("click", function () {
		nav.classList.remove("open");
	});
};