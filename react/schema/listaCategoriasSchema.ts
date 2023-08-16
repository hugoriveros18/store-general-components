export const listaCategoriasSchema = {
  title: "Lista de Categorias",
  description: "Lista de categorias pricipales",
  type: "object",
  properties: {
    categorias: {
      title: "Categorias",
      type: "array",
      items: {
        properties: {
          titulo: {
            title: "Titulo",
            type: "string",
            default: ""
          },
          imagenDesktop: {
            title: "Imagen Desktop",
            type: "string",
            default: "",
            widget: {
              "ui:widget": "image-uploader"
            }
          },
          imagenMobile: {
            title: "Imagen Mobile",
            type: "string",
            default: "",
            widget: {
              "ui:widget": "image-uploader"
            }
          },
          slug: {
            title: "Slug",
            type: "string",
            default: "",
            widget: {
              "ui:widget": "textarea"
            }
          },
        }
      }
    },
    itemsPorLinea: {
      title: "Items por Linea",
      description: "Indique cuantos elementos deberian visualizarse por linea",
      type: "object",
      properties: {
        desktop: {
          title: "Items por Linea - Desktop",
          type: "number",
          default: 6
        },
        tablet: {
          title: "Items por Linea - Tablet",
          type: "number",
          default: 4
        },
        phone: {
          title: "Items por Linea - Phone",
          type: "number",
          default: 3
        }
      }
    },
    lineasVisiblesMobile: {
      title: "Lineas Visibles en Mobile",
      description: "Indique cuantas lineas de elementos deberian ser visibles al cargar la pagina",
      type: "number",
      default: 2
    },
    textoListaCerradaMobile: {
      title: "Texto Boton Lista Cerrada",
      type: "string",
      default: ""
    },
    textoListaAbiertaMobile: {
      title: "Texto Boton Lista Abierta",
      type: "string",
      default: ""
    }
  }
}


