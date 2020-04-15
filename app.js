const loadPage = (page) => {
  document.querySelector("#index").close();
  document
    .querySelector("#breathing")
    .bringPageTop(page, { animation: "fade" });
};
