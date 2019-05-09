let flag = false;
function expand_menu(){
	let getNavBar = document.querySelector("#nav-aside");
	let getNavBarChildren = document.querySelectorAll("#nav-aside p");
	if (flag === false) {
		getNavBar.style.height = "140px";
		getNavBar.style.visibility = "visible";
		flag = true;

		let arrayLength = getNavBarChildren.length;
		for (let i = 0; i < arrayLength; i++){
			getNavBarChildren[i].style.opacity = "1";
		}
	}
	else {
		getNavBar.style.height = "36px";
		getNavBar.style.visibility = "hidden";
		flag = false;

		let arrayLength = getNavBarChildren.length;
		for (let i = 0; i < arrayLength; i++){
			getNavBarChildren[i].style.opacity = "0";
		}
	}
}