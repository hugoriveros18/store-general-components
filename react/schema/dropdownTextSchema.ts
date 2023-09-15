export const dropdownTextSchema = {
  title: "Dropdown Text",
  description: "Texto desplegable",
  type: "object",
  properties: {
    textoVisible: {
      title: "Texto Visble",
      type: "string",
      default: "",
      widget: {
        "ui:widget": "textarea"
      }
    },
    textoOculto: {
      title: "Texto Oculto",
      type: "string",
      default: "",
      widget: {
        "ui:widget": "textarea"
      }
    },
    textoVerMas: {
      title: "Texto Boton Ver Mas",
      type: "string",
      default: ""
    },
    textoVerMenos: {
      title: "Texto Boton Ver Menos",
      type: "string",
      default: ""
    }
  }
}



