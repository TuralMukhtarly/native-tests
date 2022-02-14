const urlParams = new URLSearchParams(
  "size=M&color=1&color=2&manufacturer=aaa&manufacturer=eee"
);

for (const [key, value] of urlParams) {
  const event = document.querySelector("form").elements[key];
  if (!event) continue;
  switch (event.constructor) {
    case RadioNodeList:
      for (const node of event) {
        if (node.value === value) node.checked = true;
      }
      break;
    case HTMLSelectElement:
      for (const option of event) {
        if (option.value === value) option.selected = true;
      }
      break;
    case HTMLInputElement:
      event.value = value;

      if (event.type === "checkbox") event.checked = true;
      break;
  }
}

addEventListener("input", ({ target }) => {
  if (!target.matches("form [name]")) return;
  const url = `${new URLSearchParams(new FormData(target.form))}`;
  console.log(url);
});
