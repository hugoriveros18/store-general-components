import React, { useState } from "react";
import { useDevice } from 'vtex.device-detector';
import { Link } from 'vtex.render-runtime';
import { useCssHandles } from 'vtex.css-handles';
import { categoriasDefault, itemsPorLineaDefault } from "../../defaultValues";
import { listaCategoriasSchema } from "../../schema/listaCategoriasSchema";
import './styles.css';

const CSS_HANDLES = [
  'listaCategorias__container',
  'listaCategorias__list',
  'listaCategorias__listClosed',
  'listaCategorias__item',
  'listaCategorias__itemLink',
  'listaCategorias__itemImage',
  'listaCategorias__itemTitle',
  'listaCategorias__btnVerMas',
  'listaCategorias__btnVerMasText',
  'listaCategorias__btnVerMasIcon'
];


export default function ListaCategorias({
  categorias = categoriasDefault,
  itemsPorLinea = itemsPorLineaDefault,
  lineasVisiblesMobile = 2,
  textoListaCerradaMobile = 'Descubre más categorias',
  textoListaAbiertaMobile = 'Ocultar categorías'
}:ListaCategoriasProps) {

  //DEVICE DETECTOR
  const { device } = useDevice();

  //JSX
  if(device === 'phone') {
    return (
      <VersionMobile
        categorias={categorias}
        itemsMobile={itemsPorLinea.phone}
        lineasVisiblesMobile={lineasVisiblesMobile}
        textoListaCerradaMobile={textoListaCerradaMobile}
        textoListaAbiertaMobile={textoListaAbiertaMobile}
      />
    )
  }

  return (
    <VersionDesktop
      categorias={categorias}
      itemsDesktop={itemsPorLinea.desktop}
      itemsTablet={itemsPorLinea.tablet}
    />
  )
}


function VersionDesktop({
  categorias,
  itemsDesktop,
  itemsTablet
}:VersionDesktopProps) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //DEVICE DETECTOR
  const { device } = useDevice();

  //JSX
  return (
    <div className={handles.listaCategorias__container}>
      <ul
        className={handles.listaCategorias__list}
        style={{
          gridTemplateColumns: `repeat(${device === 'desktop' ? itemsDesktop : itemsTablet}, 1fr)`
        }}
      >
        {
          categorias.map((ctg, index) => {
            return (
              <li
                key={index}
                className={handles.listaCategorias__item}
              >
                <Link
                  to={ctg.slug}
                  className={handles.listaCategorias__itemLink}
                >
                  <img
                    alt={`${ctg.titulo} icon`}
                    src={ctg.imagenDesktop}
                    className={handles.listaCategorias__itemImage}
                  />
                  <h4 className={handles.listaCategorias__itemTitle}>
                    {ctg.titulo}
                  </h4>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

ListaCategorias.schema = listaCategoriasSchema;


function VersionMobile({
  categorias,
  itemsMobile,
  lineasVisiblesMobile,
  textoListaCerradaMobile,
  textoListaAbiertaMobile
}:VersionMobileProps) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //STATES
  const [isListOpen, setIsListOpen] = useState<boolean>(false);

  //JSX
  return (
    <div className={handles.listaCategorias__container}>
      <ul
        className={handles.listaCategorias__list}
        style={{
          gridTemplateColumns: `repeat(${itemsMobile}, 1fr)`
        }}
      >
        {
          categorias.slice(0,lineasVisiblesMobile * itemsMobile).map((ctg, index) => {
            return (
              <li
                key={index}
                className={handles.listaCategorias__item}
              >
                <Link
                  to={ctg.slug}
                  className={handles.listaCategorias__itemLink}
                >
                  <img
                    alt={`${ctg.titulo} icon`}
                    src={ctg.imagenDesktop}
                    className={handles.listaCategorias__itemImage}
                  />
                  <h4 className={handles.listaCategorias__itemTitle}>
                    {ctg.titulo}
                  </h4>
                </Link>
              </li>
            )
          })
        }
      </ul>
      <ul
        className={`${handles.listaCategorias__list} ${handles.listaCategorias__listClosed}`}
        style={{
          gridTemplateColumns: `repeat(${itemsMobile}, 1fr)`,
          maxHeight: isListOpen ? '1000px' : '0px'
        }}
      >
        {
          categorias.slice(lineasVisiblesMobile * itemsMobile).map((ctg, index) => {
            return (
              <li
                key={index}
                className={handles.listaCategorias__item}
              >
                <Link
                  to={ctg.slug}
                  className={handles.listaCategorias__itemLink}
                >
                  <img
                    alt={`${ctg.titulo} icon`}
                    src={ctg.imagenDesktop}
                    className={handles.listaCategorias__itemImage}
                  />
                  <h4 className={handles.listaCategorias__itemTitle}>
                    {ctg.titulo}
                  </h4>
                </Link>
              </li>
            )
          })
        }
      </ul>
      <button
        className={`${handles.listaCategorias__btnVerMas}`}
        onClick={() => setIsListOpen(state => !state)}
      >
        <p className={handles.listaCategorias__btnVerMasText}>
          {isListOpen ? textoListaAbiertaMobile : textoListaCerradaMobile}
        </p>
        <img
          src="https://panamericana.vteximg.com.br/arquivos/down-arrow-lista-categorias.svg"
          className={handles.listaCategorias__btnVerMasIcon}
          style={{
            transform: isListOpen ? 'rotate(180deg)' : 'rotate(0deg)'
          }}
        />
      </button>
    </div>
  )
}

