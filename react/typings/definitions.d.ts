//LISTA CATEGORIAS
interface Categoria {
  titulo: string
  imagenDesktop: string
  imagenMobile: string
  slug: string
}

interface ItemsPorLinea {
  desktop: number
  tablet: number
  phone: number
}

interface ListaCategoriasProps {
  categorias: Categoria[]
  itemsPorLinea: ItemsPorLinea
  lineasVisiblesMobile: number
  textoListaCerradaMobile: string
  textoListaAbiertaMobile: string
}

interface VersionDesktopProps {
  categorias: Categoria[]
  itemsDesktop: number
  itemsTablet: number
}

interface VersionMobileProps {
  categorias: Categoria[]
  itemsMobile: number
  lineasVisiblesMobile: number
  textoListaCerradaMobile: string
  textoListaAbiertaMobile: string
}


//SLIDER MULTIPLE CATEGORIAS

interface SubcategoriasSlider {
  titulo: string
  slug: string
}

interface CategoriaSlider {
  titulo: string
  imagenDesktop: string
  imagenMobile: string
  slug: string
  subcategorias: SubcategoriasSlider[]
}

interface SliderMultipleCategoriasProps {
  categorias: CategoriaSlider[]
  children: ReactNode
}

interface BiCategoriaProps {
  listSetup: CategoriaSlider[][]
}

interface CategoriaItemProps {
  categoria: CategoriaSlider
}


//SLIDER COLECCION NAVIDAD
type PosiblesConfiguraciones = 'Por Fechas' | 'Activacion Manual'

interface TipoConfiguracion {
  posiblesConfiguraciones: PosiblesConfiguraciones
  fechaInicio: string
  fechaFinal: string
  estaActivo: boolean
}

type SegundoBannerActivo = 'Visualizar' | 'Ocultar'

interface SegundoBanner {
  segundoBannerActivo: SegundoBannerActivo
  imagenDesktop: string
  imagenHover?: string
  imagenMobile: string
  slug: string
}

interface BannerNavidad {
  imagenDesktop: string
  imagenHover?: string
  imagenMobile: string
  slug: string
  segundoBanner: SegundoBanner
  tipoConfiguracion: TipoConfiguracion
}

interface SliderColeccionNavidadProps {
  banners: BannerNavidad[]
  children: ReactNode
}

interface SingleBannerNavidadProps {
  banner: BannerNavidad
}


//OFERTA LIMITADA NAVIDAD
type OrdenProductos = 'OrderByTopSaleDESC' | 'OrderByPriceDESC' | 'OrderByPriceASC' | 'OrderByNameDESC' | 'OrderByNameASC' | 'OrderByReleaseDateDESC' | 'OrderByBestDiscountDESC'
type FiltroSku = 'ALL_AVAILABLE' | 'FIRST_AVAILABLE';
type CuotasMostradas = 'MAX_WITHOUT_INTEREST' | 'MAX_WITH_INTEREST'

interface ListaProductos {
  categoriaId: string
  coleccionId: string
  ordenProductos: OrdenProductos
  maximoItems: number
  esconderItemsNoDisponibles: boolean
  filtroSku: FiltroSku
  cuotasMostradas: CuotasMostradas
}

interface OfertaLimitadaNavidadProps {
  imagenTitulo: string
  terminosCondiciones: string
  slug: string
  fechaInicio: string
  fechaFinal: string
  listaProductos: ListaProductos
  ProductListContext: any
}

interface AnalisisTemporizadorProps {
  fechaInicio: string
  fechaFinal: string
}

interface TemporizadorOfertaProps {
  dias: number
  horas: number
  minutos: number
  segundos: number
}
