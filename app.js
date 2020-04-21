document.addEventListener("init", function (event) {
	const page = event.target;

	if (page.id === "main") {
		console.log("i if-satsen");

		page.querySelector("#push-breathing").onclick = function () {
			document
				.querySelector("#myNavigator")
				.pushPage("breathing.html", { data: { title: "Page 2" } });
		};

		page.querySelector("#push-yoga").onclick = function () {
			document
				.querySelector("#myNavigator")
				.pushPage("yoga.html", { data: { title: "Page 2" } });
		};

		page.querySelector("#push-relaxation").onclick = function () {
			document
				.querySelector("#myNavigator")
				.pushPage("relaxation.html", { data: { title: "Page 2" } });
		};

		page.querySelector("#push-about").onclick = function () {
			document
				.querySelector("#myNavigator")
				.pushPage("about.html", { data: { title: "Page 2" } });
		};
	}
});

const showTemplateDialog = () => {
	const dialog = document.getElementById("my-dialog");

	if (dialog) {
		dialog.show();
	} else {
		ons.createElement("dialog.html", { append: true }).then(function (dialog) {
			dialog.show();
		});
	}
};

const hideDialog = (id) => {
	document.getElementById(id).hide();
};
