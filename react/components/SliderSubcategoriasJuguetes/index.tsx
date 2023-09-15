import React from 'react';
import { useListContext, ListContextProvider } from 'vtex.list-context';
import { Link } from 'vtex.render-runtime';
import { useCssHandles } from 'vtex.css-handles';
import { sliderSubcategoriasJuguetesSchema } from '../../schema/sliderSubcategoriasJuguetesSchema';

const CSS_HANDLES = [
  'subcategoria__container',
  'subcategoria__link',
  'subcategoria__image',
  'subcategoria__title'
];

export default function SliderSubcategoriasJuguetes({
  subcategorias,
  children
}:SliderSubcategoriasJuguetesProps) {

  //LIST CONTEXT
  const { list } = useListContext() || [];

  //VALIDACIONES
  const grupoSubcategorias = ValidacionSubcategoriasJuguetes(subcategorias);
  let subcategoriasParaVisualizar = [];
  subcategoriasParaVisualizar = list.concat(grupoSubcategorias.filter(sub => sub !== null));

  //JSX
  if(subcategoriasParaVisualizar.length > 0) {
    return (
      <ListContextProvider list={subcategoriasParaVisualizar}>
        {children}
      </ListContextProvider>
    )
  }

  return null
}

SliderSubcategoriasJuguetes.schema = sliderSubcategoriasJuguetesSchema;

function ValidacionSubcategoriasJuguetes(subcategorias:Subcategoria[]) {

  //JSX
  return (
    subcategorias.map((sub, index) => {
      if (sub.tipoConfiguracion.posiblesConfiguraciones === 'Activacion Manual') {
        if(sub.tipoConfiguracion.estaActivo) {
          return(
            <SingleSubcategoria
              key={index}
              subcategoria={sub}
            />
          )
        }
      } else {
        const ahora = new Date();
        const inputFechaInicio = new Date(sub.tipoConfiguracion.fechaInicio);
        const inputFechaFinal = new Date(sub.tipoConfiguracion.fechaFinal);
        if (ahora.getTime() > inputFechaInicio.getTime() && ahora.getTime() < inputFechaFinal.getTime()) {
          return(
            <SingleSubcategoria
              key={index}
              subcategoria={sub}
            />
          )
        }
      }

      return null
    })
  )
}


function SingleSubcategoria({
  subcategoria
}:SingleSubcategoriaProps) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //JSX
  return (
    <div className={handles.subcategoria__container}>
      <Link
        className={handles.subcategoria__link}
        to={subcategoria.slug}
      >
        <img
          alt={`${subcategoria.titulo} Icono`}
          src={subcategoria.imagen}
          className={handles.subcategoria__image}
        />
        <h4
          className={handles.subcategoria__title}
          style={{
            color: subcategoria.colorTitulo
          }}
        >
          {subcategoria.titulo}
        </h4>
      </Link>
    </div>
  )
}

