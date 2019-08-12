document.addEventListener("DOMContentLoaded", event => {
  Handlebars.registerPartial(
    "authorPartial",
    document.getElementById("author-partial-template").innerHTML
  );
});

function getRepositories() {
  const req = new XMLHttpRequest();
  req.open("GET", "https://api.github.com/users/octocat/repos");
  req.send();
  req.addEventListener("load", showRepository);
}

function showRepositories(event, data) {
  const repos = JSON.parse(this.responseText);
  const src = document.getElementById("repository-template").innerHTML;
  const template = Handlebars.compile(src);
  const repoList = template(repos);
  document.getElementById("repositories").innerHTML = repoList;
}
