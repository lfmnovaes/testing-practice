const capitalize = (string) => {
  if (typeof(string) === 'string') {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
  } else {
    return null;
  }
};

module.exports = capitalize;
