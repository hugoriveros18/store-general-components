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
