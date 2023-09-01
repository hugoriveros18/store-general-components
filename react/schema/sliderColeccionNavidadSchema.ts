export const sliderColeccionNavidadSchema = {
  title: "Slider Colecciones Navidad",
  description: "Configuracion de colecciones de navidad",
  type: "object",
  properties: {
    banners: {
      title: "Banners",
      type: "array",
      items: {
        properties: {
          imagenDesktop: {
            title: "Imagen Desktop",
            type: "string",
            default: "",
            widget: {
              "ui:widget": "image-uploader"
            }
          },
          imagenHover: {
            title: "Imagen Hover Desktop",
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
          segundoBanner: {
            title: "Segundo Banner",
            type: "object",
            properties: {
              segundoBannerActivo: {
                title: "¿Segundo Banner Activo?",
                type: "string",
                enum: [
                  'Visualizar',
                  'Ocultar'
                ],
                default: "Ocultar"
              },
            },
            dependencies: {
              segundoBannerActivo: {
                oneOf: [
                  {
                    properties: {
                      segundoBannerActivo: {
                        enum: [
                          'Visualizar'
                        ]
                      },
                      imagenDesktop: {
                        title: "Imagen Desktop",
                        type: "string",
                        default: "",
                        widget: {
                          "ui:widget": "image-uploader"
                        }
                      },
                      imagenHover: {
                        title: "Imagen Hover Desktop",
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
                  },
                  {
                    properties: {
                      segundoBannerActivo: {
                        enum: [
                          'Ocultar'
                        ]
                      },
                    }
                  }
                ]
              }
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

