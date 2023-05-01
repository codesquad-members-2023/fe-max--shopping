export class HtmlParser {
  constructor() {
    this.domParser = new DOMParser();
  }

  getParsedData(element) {
    const htmlElement = this.domParser.parseFromString(element, "text/html");
    const parsedElement = Array.from(htmlElement.body.children);

    return parsedElement.map((element) => {
      return this.traverse(element);
    });
  }

  traverse(parsedElement) {
    const obj = {
      type: "node",
      tagName: parsedElement.tagName,
      attribute: {},
      textContent: "",
      name: "",
      children: [],
    };

    if (parsedElement.hasAttributes()) {
      const attrs = parsedElement.attributes;
      for (const attr of attrs) {
        if (attr.name === "data-elementname") {
          obj.name = attr.value;
        }
        obj.attribute[attr.name] = attr.value;
      }
    }

    if (parsedElement.hasChildNodes()) {
      const children = parsedElement.childNodes;
      for (const child of children) {
        if (child.nodeType === Node.ELEMENT_NODE) {
          obj.children.push(this.traverse(child));
        } else if (child.nodeType === Node.TEXT_NODE) {
          const text = child.textContent.replace(/\n|\s/g, "");
          const textObj = {
            type: "text",
            text: text,
          };
          obj.children.push(textObj);
          // obj.textContent = text || "";
        }
      }
    }

    return obj;
  }
}

