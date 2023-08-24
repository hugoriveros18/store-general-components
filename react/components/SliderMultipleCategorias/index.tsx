import React from 'react';
import { useListContext, ListContextProvider } from 'vtex.list-context';
import { categoriasSliderDefault } from '../../defaultValues';
import BiCategoria from './BiCategoria';
import { sliderMultipleCategoriasSchema } from '../../schema/sliderMultipleCategorias';

export default function SliderMultipleCategorias({
  categorias = categoriasSliderDefault,
  children
}:SliderMultipleCategoriasProps) {

  //LIST CONTEXT
  const { list } = useListContext() || [];

  //LIST SETUP
  const listSetup = [];
  const categoriasCopy = [...categorias];
  while(categoriasCopy.length > 0) {
    const duplaCategorias = categoriasCopy.splice(0,2);
    listSetup.push(duplaCategorias);
  }

  //VISUALIZACION DE CATEGORIAS
  const categoriasPorVisualizar = list.concat(BiCategoria({listSetup}))

  //JSX
  return (
    <ListContextProvider list={categoriasPorVisualizar}>
      {children}
    </ListContextProvider>
  )
}

SliderMultipleCategorias.schema = sliderMultipleCategoriasSchema;

