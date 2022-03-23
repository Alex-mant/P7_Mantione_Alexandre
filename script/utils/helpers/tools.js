const applyLowerCase = x => x.toLowerCase();
const lowerCaseTab = tab => tab.map(applyLowerCase);
const keepUniques = x => Array.from(new Set(x));
const keepUniquesByLowerCase = x => Array.from(new Set(lowerCaseTab(x)));
const pluck = (property, array) => array.map(obj => obj[property]);

export {applyLowerCase,lowerCaseTab,keepUniques,keepUniquesByLowerCase,pluck}