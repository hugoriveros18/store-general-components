export const ofertaLimitadaSchema = {
  title: "Oferta Limitada Navidad",
  description: "Configuracion de oferta limitada",
  type: "object",
  properties: {
    imagenTitulo: {
      title: "Imagen Titulo",
      type: "string",
      default: "",
      widget: {
        "ui:widget": "image-uploader"
      }
    },
    terminosCondiciones: {
      title: "Terminos y Condiciones",
      type: "string",
      default: "",
      widget: {
        "ui:widget": "textarea"
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
    fechaInicio: {
      title: "Fecha de Incio",
      type: "string",
      widget: {
        "ui:widget": "date-time"
      }
    },
    fechaFinal: {
      title: "Fecha Final",
      type: "string",
      widget: {
        "ui:widget": "date-time"
      }
    },
    listaProductos: {
      title: "Lista de Productos",
      type: "object",
      properties: {
        categoriaId: {
          title: "Id Categoria",
          type: "string",
          default: ""
        },
        coleccionId: {
          title: "Id Coleccion",
          type: "string",
          default: ""
        },
        ordenProductos: {
          title: "Orden de Productos",
          type: "string",
          enum: [
            'OrderByBestDiscountDESC',
            'OrderByTopSaleDESC',
            'OrderByPriceDESC',
            'OrderByPriceASC',
            'OrderByNameDESC',
            'OrderByNameASC',
            'OrderByReleaseDateDESC'
          ],
          default: "OrderByBestDiscountDESC"
        },
        maximoItems: {
          title: "Numero Maximo de Items",
          type: "number",
          default: 10
        },
        esconderItemsNoDisponibles: {
          title: "Esconder No Disponibles",
          type: "boolean",
          default: true
        },
        filtroSku: {
          title: "Filtro Sku",
          type: "string",
          enum: [
            'ALL_AVAILABLE',
            'FIRST_AVAILABLE'
          ],
          default: "ALL_AVAILABLE"
        },
        cuotasMostradas: {
          title: "Cuotas Visualizadas",
          type: "string",
          enum: [
            'MAX_WITHOUT_INTEREST',
            'MAX_WITH_INTEREST'
          ],
          default: "MAX_WITHOUT_INTEREST"
        },
      }
    }
  }
}

