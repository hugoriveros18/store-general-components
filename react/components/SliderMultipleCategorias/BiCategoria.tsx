import React, { useState } from 'react';
import { useCssHandles } from 'vtex.css-handles';
import { useDevice } from 'vtex.device-detector';
import { Link } from 'vtex.render-runtime'
import './styles.css';

const CSS_HANDLES = [
  'BiCategoria__listContainer',
  'BiCategoria__itemContainer',
  'BiCategoria__itemImage',
  'BiCategoria__itemTitle',
  'BiCategoria__itemTitleText',
  'BiCategoria__itemTitleIcon',
  'BiCategoria__subcategoriaList',
  'BiCategoria__subcategoriaItem',
  'BiCategoria__subcategoriaItemLink',
  'BiCategoria__subcategoriaTodoItem',
  'BiCategoria__subcategoriaTodoLink',
  'BiCategoria__subcategoriaTodoLinkText',
  'BiCategoria__subcategoriaTodoLinkIcon',
];

export default function BiCategoria({
  listSetup
}:BiCategoriaProps) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //JSX
  return (
    listSetup.map((fullList, index) => {
      return (
        <ul
          key={index}
          className={handles.BiCategoria__listContainer}
        >
          {
            fullList.map((categoria) => {
              return (
                <CategoriaItem
                  key={categoria.titulo}
                  categoria={categoria}
                />
              )
            })
          }
        </ul>
      )
    })
  )
}


function CategoriaItem({
  categoria
}:CategoriaItemProps) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //DEVICE DETECTOR
  const { device, isMobile } = useDevice();

  //STATES
  const [isSubcategoryOpen, setIsSubcategoryOpen] = useState<boolean>(false);

  //METHODS
  const handleMouseEnter = () => {
    if(!isMobile) {
      setIsSubcategoryOpen(true);
    }
  }

  const handleMouseLeave = () => {
    if(!isMobile) {
      setIsSubcategoryOpen(false);
    }
  }

  const handleClick = () => {
    if(isMobile) {
      setIsSubcategoryOpen(state => !state);
    }
  }

  //JSX
  return (
    <li
      className={handles.BiCategoria__itemContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <img
        alt={`Icono ${categoria.titulo}`}
        src={device === 'phone' ? categoria.imagenMobile : categoria.imagenDesktop}
        className={handles.BiCategoria__itemImage}
      />
      <div className={handles.BiCategoria__itemTitle}>
        <h4 className={handles.BiCategoria__itemTitleText}>
          {categoria.titulo}
        </h4>
        <img
          alt='arrow icon'
          src='https://panamericana.vteximg.com.br/arquivos/arrow-down-custom-tec.svg'
          className={handles.BiCategoria__itemTitleIcon}
        />
      </div>
      <ul
        className={handles.BiCategoria__subcategoriaList}
        style={{
          maxHeight: isSubcategoryOpen ? '1000px' : '0px',
          paddingTop: isSubcategoryOpen ? '12px': '0px',
          paddingBottom: isSubcategoryOpen ? '12px': '0px'
        }}
      >
        {
          categoria.subcategorias?.map((sub) => {
            return(
              <li
                key={sub.titulo}
                className={handles.BiCategoria__subcategoriaItem}
              >
                <Link
                  to={sub.slug}
                  className={handles.BiCategoria__subcategoriaItemLink}
                >
                  {sub.titulo}
                </Link>
              </li>
            )
          })
        }
        <li className={handles.BiCategoria__subcategoriaTodoItem}>
          <Link
            to={categoria.slug}
            className={handles.BiCategoria__subcategoriaTodoLink}
          >
            <p className={handles.BiCategoria__subcategoriaTodoLinkText}>Ver todo</p>
            <img
              alt='right arrow'
              src='https://panamericana.vteximg.com.br/arquivos/right-arrow-ver-tec.svg'
              className={handles.BiCategoria__subcategoriaTodoLinkIcon}
            />
          </Link>
        </li>
      </ul>
    </li>
  )
}

