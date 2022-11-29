function isUpperCase(str) {
  if (typeof str === "string") {
    if (str === str.toLocaleUpperCase()) {
      return true;
    } else {
      return false;
    }
  }
}
