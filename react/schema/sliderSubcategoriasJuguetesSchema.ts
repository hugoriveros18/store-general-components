export const sliderSubcategoriasJuguetesSchema = {
  title: "Subcategorias Juguetes",
  description: "Slider de subcategorias de jugueteria",
  type: "object",
  properties: {
    subcategorias: {
          title: "Subcategorias",
          type: "array",
          items: {
            properties: {
              imagen: {
                title: "Icono",
                type: "string",
                default: "",
                widget: {
                  "ui:widget": "image-uploader"
                }
              },
              titulo: {
                title: "Titulo",
                type: "string",
                default: ""
              },
              colorTitulo: {
                title: "Color de titulo",
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

