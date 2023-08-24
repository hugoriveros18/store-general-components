export const sliderMultipleCategoriasSchema = {
  title: "Slider Multiple Categorias",
  description: "Configuracion de slider de categorias multiple",
  type: "object",
  properties: {
    categorias: {
      title: "Lista Categorias",
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
          subcategorias: {
            title: "Lista Subcategorias",
            type: "array",
            items: {
              properties: {
                __editorItemTitle: {
                  title: "Nombre Identificador",
                  type: "string",
                  default: ''
                },
                titulo: {
                  title: "Titulo",
                  type: "string",
                  default: ''
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
        }
      }
    }
  }
}

