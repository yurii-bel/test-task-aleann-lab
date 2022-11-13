export default function textFormatMadness(element: string) {
  const boldCases = [
    "Responsopilities:",
    "Compensation",
    "&",
    "Benefits:",
    "Compensation &Benefits:",
  ];

  const formatText = (str: string) => {
    let strArr = str.split(" ");
    str = "";
    strArr.map((word) => {
      if (
        word.includes(boldCases[0]) ||
        word.includes(boldCases[1]) ||
        word.includes(boldCases[2]) ||
        word.includes(boldCases[3])
      )
        str += "<b>" + word + "</b> ";
      else str += word + " ";
    });
    return str;
  };

  //create html element
  const descrp = document.createElement("div");
  const descrp2 = document.createElement("span");
  //set its inner html
  descrp.innerHTML = formatText(element);

  //create REAL array of node, from array-like children nodes
  const childNodes = Array.from(descrp.childNodes);

  //simple way to find <b> and text
  const jsx = childNodes.map((e, index) => {
    if (e.nodeName === "B") {
      return <b key={index}>{e.textContent}</b>;
    }
    if (e.nodeName === "#text") {
      return e.textContent;
    }
    return null;
  });

  const lastParUl = String(jsx[jsx.length - 1])
    ?.trim()
    .split(".")
    .map((e, index) => {
      return `<li>${e}</li>`;
    });
  jsx.pop();
  descrp2.innerHTML = String(lastParUl);
  const childNodes2 = Array.from(descrp2.childNodes);
  const jsx2 = childNodes2.map((e, index) => {
    if (e.nodeName === "LI") {
      return (
        <>
          <li className="flex justify-start items-center space-x-2" key={index}>
            <div className="flex justify-center items-start space-x-2">
              <span className="listMarker mt-[9px] min-w-[9px] min-h-[9px]"></span>
              <span>{e.textContent}</span>
            </div>
          </li>
        </>
      );
    }
    if (e.nodeName === "text") {
      return e.textContent;
    }
    return null;
  });
  jsx2.pop();

  return (
    <div>
      <p>{jsx}</p>
      <ul>{jsx2}</ul>
    </div>
  );
}
