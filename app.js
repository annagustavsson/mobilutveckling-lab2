document.addEventListener("init", function (event) {
  var page = event.target;

  console.log("i app.js");

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

  //   else if (page.id === "page2") {
  //     page.querySelector("ons-toolbar .center").innerHTML = page.data.title;
  //   }
});
