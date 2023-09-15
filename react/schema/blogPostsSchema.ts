export const blogPostsSchema = {
  title: "Blog Posts",
  description: "Configuracion de posts de blog",
  type: "object",
  properties: {
    posts: {
      title: "Posts",
      type: "array",
      items: {
        properties: {
          imagen: {
            title: "Imagen",
            type: "string",
            default: "",
            widget: {
              "ui:widget": "image-uploader"
            }
          },
          categoria: {
            title: "Categoria",
            type: "string",
            default: ""
          },
          titulo: {
            title: "Titulo",
            type: "string",
            default: ""
          },
          contenido: {
            title: "Contenido Post",
            type: "string",
            default: "",
            widget: {
              "ui:widget": "textarea"
            }
          },
          textoBoton: {
            title: "Texto Boton",
            type: "string",
            default: ""
          },
          colorFondo: {
            title: "Color Fondo",
            type: "string",
            default: "",
            widget: {
              "ui:widget": "color"
            }
          },
          colorTexto: {
            title: "Color Texto",
            type: "string",
            default: "",
            widget: {
              "ui:widget": "color"
            }
          },
          colorSombraBoton: {
            title: "Color Sombra Boton",
            type: "string",
            default: "",
            widget: {
              "ui:widget": "color"
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
          tipoConfiguracion: {
            title: "Tipo Configuracion",
            type: "object",
            properties: {
              posiblesConfiguraciones: {
                title: "Configuracion a Utilizar",
                type: "string",
                enum: [
                  'Por Fechas',
                  'Activacion Manual'
                ],
                default: "Activacion Manual"
              }
            },
            dependencies: {
              posiblesConfiguraciones: {
                oneOf: [
                  {
                    properties: {
                      posiblesConfiguraciones: {
                        enum: [
                          'Activacion Manual'
                        ]
                      },
                      estaActivo: {
                        title: "¿Esta Activo?",
                        type: "boolean",
                        default: true
                      }
                    }
                  },
                  {
                    properties: {
                      posiblesConfiguraciones: {
                        enum: [
                          'Por Fechas'
                        ]
                      },
                      fechaInicio: {
                        title: "Fecha Inicio Visualizacion Banner",
                        type: "string",
                        default: '',
                        widget: {
                          "ui:widget": "date-time"
                        }
                      },
                      fechaFinal: {
                        title: "Fecha Final Visualizacion Banner",
                        type: "string",
                        default: '',
                        widget: {
                          "ui:widget": "date-time"
                        }
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      }
    }
  }
}

