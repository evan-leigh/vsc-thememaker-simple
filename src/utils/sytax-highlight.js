function syntaxHighlight(json) {
  json = json
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,

    function (match) {
      let cls = "number";

      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = "key";
        } else if (/:$/.test(match)) {
          cls = "string";
        } else {
          cls = "string";
        }
      } else if (/\/{2}$/.test(match)) {
        cls = "comment";
      }
      return '<span class="' + cls + '">' + match + "</span>";
    }
  );
}

export default syntaxHighlight;
