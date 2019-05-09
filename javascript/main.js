let flag = false;
function expand_menu(){
	let getNavBar = document.querySelector("#nav-aside");
	let getNavBarChildren = document.querySelectorAll("#nav-aside p");
	if (flag === false) {
		getNavBar.style.height = "145px";
		getNavBar.style.visibility = "visible";
		flag = true;

		let arrayLength = getNavBarChildren.length;
		for (let i = 0; i < arrayLength; i++){
			getNavBarChildren[i].style.opacity = "1";
		}
	}
	else {
		getNavBar.style.height = "0";
		getNavBar.style.visibility = "hidden";
		flag = false;

		let arrayLength = getNavBarChildren.length;
		for (let i = 0; i < arrayLength; i++){
			getNavBarChildren[i].style.opacity = "0";
		}
	}
}