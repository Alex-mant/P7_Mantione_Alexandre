const applyLowerCase = (x) => x.toLowerCase();
const lowerCaseTab = (tab) => tab.map(applyLowerCase);
const keepUniques = (x) => Array.from(new Set(x));
const keepUniquesByLowerCase = (x) => Array.from(new Set(lowerCaseTab(x)));
const pluck = (property, array) => array.map((obj) => obj[property]);

const pathForMozilla = () => {
  if (!("path" in Event.prototype))
    Object.defineProperty(Event.prototype, "path", {
      get: function () {
        var path = [];
        var currentElem = this.target;
        while (currentElem) {
          path.push(currentElem);
          currentElem = currentElem.parentElement;
        }
        if (path.indexOf(window) === -1 && path.indexOf(document) === -1) path.push(document);
        if (path.indexOf(window) === -1) path.push(window);
        return path;
      },
    });
};

export { applyLowerCase, lowerCaseTab, keepUniques, keepUniquesByLowerCase, pluck, pathForMozilla };
