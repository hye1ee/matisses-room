export const navigateTo = (path) => {
  const currPath = window.location.href.split("/");
  if (currPath[currPath.length - 1].includes("html")) {
    currPath[currPath.length - 1] = path;
  } else {
    currPath.push(path);
  }
  const newPath = currPath.join("/");
  window.location.replace(newPath);
};
