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

