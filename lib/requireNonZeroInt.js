module.exports = (partValue, partName) => {
  if (typeof partValue !== 'number') {
    throw new TypeError();
  }
  if (partValue === 0) {
    throw new Error(`${partName}に0は指定できません`);
  }
  if (!Number.isInteger(partValue)) {
    throw new Error();
  }
};
