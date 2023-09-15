import React from "react";
import { Link } from 'vtex.render-runtime';
import { useDevice } from 'vtex.device-detector';
import { useCssHandles } from 'vtex.css-handles';
import useAnalisisTemporizador from "../../hooks/useAnalisisTemporizador";
import { ofertaLimitadaSchema } from "../../schema/ofertaLimitadaSchema";
import './styles.css';

const CSS_HANDLES = [
  'ofertaLimitada__mobileContainer',
  'ofertaLimitada__outerContainer',
  'ofertaLimitada__innerContainer',
  'ofertaLimitada__leftColumn',
  'ofertaLimitada__leftColumnTitle',
  'ofertaLimitada__leftColumnTerms',
  'ofertaLimitada__rightColumn',
  'ofertaLimitada__verMas',
  'ofertaLimitada__verMasLink',
  'ofertaTemporizador__container',
  'ofertaTemporizador__tiempoCasilla',
  'ofertaTiempoCasilla__numero',
  'ofertaTiempoCasilla__descripcion'
];

export default function OfertaLimitadaNavidad({
  imagenTitulo,
  terminosCondiciones,
  slug,
  fechaInicio,
  fechaFinal,
  listaProductos,
  ProductListContext
}:OfertaLimitadaNavidadProps) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //DEVICE DETECTOR
  const { isMobile } = useDevice();

  //INFORMACION TEMPORIZADOR
  const {
    isOfertaActive,
    dias,
    horas,
    minutos,
    segundos
  } = useAnalisisTemporizador({fechaInicio, fechaFinal})

  //JSX
  if(isOfertaActive) {

    if(isMobile) {
      return (
        <div className={handles.ofertaLimitada__outerContainer}>
          <div className={handles.ofertaLimitada__innerContainer}>
            {/* TITULO */}
            <img
              alt="Oferta limitada"
              src={imagenTitulo}
              className={handles.ofertaLimitada__leftColumnTitle}
            />
            {/* TEMPORIZADOR */}
            <TemporizadorOferta
              dias={dias}
              horas={horas}
              minutos={minutos}
              segundos={segundos}
            />
            {/* PRODUCT LIST */}
            <ProductListContext
              category={listaProductos.categoriaId}
              collection={listaProductos.coleccionId}
              orderBy={listaProductos.ordenProductos}
              hideUnavailableItems={listaProductos.esconderItemsNoDisponibles}
              maxItems={listaProductos.maximoItems}
              skusFilter={listaProductos.filtroSku}
              installmentCriteria={listaProductos.cuotasMostradas}
            />
            {/* TERMINOS Y CONDICIONES */}
            <p className={handles.ofertaLimitada__leftColumnTerms}>
              {terminosCondiciones}
            </p>
            {/* VER TODO BTN */}
            <div className={handles.ofertaLimitada__verMas}>
              <Link
                to={slug}
                className={handles.ofertaLimitada__verMasLink}
              >
                VER TODO
              </Link>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className={handles.ofertaLimitada__outerContainer}>
        <div className={handles.ofertaLimitada__innerContainer}>

          {/* COLUMNA IZQUIERDA */}
          <div className={handles.ofertaLimitada__leftColumn}>
            <img
              alt="Oferta limitada"
              src={imagenTitulo}
              className={handles.ofertaLimitada__leftColumnTitle}
            />
            <TemporizadorOferta
              dias={dias}
              horas={horas}
              minutos={minutos}
              segundos={segundos}
            />
            <p className={handles.ofertaLimitada__leftColumnTerms}>
              {terminosCondiciones}
            </p>
          </div>

          {/* COLUMNA DERECHA */}
          <div className={handles.ofertaLimitada__rightColumn}>
            <ProductListContext
              category={listaProductos.categoriaId}
              collection={listaProductos.coleccionId}
              orderBy={listaProductos.ordenProductos}
              hideUnavailableItems={listaProductos.esconderItemsNoDisponibles}
              maxItems={listaProductos.maximoItems}
              skusFilter={listaProductos.filtroSku}
              installmentCriteria={listaProductos.cuotasMostradas}
            />
            <div className={handles.ofertaLimitada__verMas}>
              <Link
                to={slug}
                className={handles.ofertaLimitada__verMasLink}
              >
                VER TODO
              </Link>
            </div>
          </div>

        </div>
      </div>
    )
  }

  return null;
}

OfertaLimitadaNavidad.schema = ofertaLimitadaSchema;


function TemporizadorOferta({
  dias,
  horas,
  minutos,
  segundos
}:TemporizadorOfertaProps) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //JSX
  return (
    <div className={handles.ofertaTemporizador__container}>

      {/* DIAS */}
      {
        dias > 0 &&
        <div className={handles.ofertaTemporizador__tiempoCasilla}>
          <p
            className={handles.ofertaTiempoCasilla__numero}
          >
              {dias < 10 ? `0${dias}` : dias}
          </p>
          <p
            className={handles.ofertaTiempoCasilla__descripcion}
          >
            DÍAS
          </p>
        </div>
      }
      {/* HORAS */}
      <div className={handles.ofertaTemporizador__tiempoCasilla}>
        <p
          className={handles.ofertaTiempoCasilla__numero}
        >
            {horas < 10 ? `0${horas}` : horas}
        </p>
        <p
          className={handles.ofertaTiempoCasilla__descripcion}
        >
          HORAS
        </p>
      </div>
      {/* MINUTOS */}
      <div className={handles.ofertaTemporizador__tiempoCasilla}>
        <p
          className={handles.ofertaTiempoCasilla__numero}
        >
            {minutos < 10 ? `0${minutos}` : minutos}
        </p>
        <p
          className={handles.ofertaTiempoCasilla__descripcion}
        >
          MINUTOS
        </p>
      </div>
      {/* SEGUNDOS */}
      <div className={handles.ofertaTemporizador__tiempoCasilla}>
        <p
          className={handles.ofertaTiempoCasilla__numero}
        >
            {segundos < 10 ? `0${segundos}` : segundos}
        </p>
        <p
          className={handles.ofertaTiempoCasilla__descripcion}
        >
          SEGUNDOS
        </p>
      </div>
    </div>
  )
}
