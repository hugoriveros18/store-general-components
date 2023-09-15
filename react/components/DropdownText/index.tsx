import React, { useState } from 'react';
import { useCssHandles } from 'vtex.css-handles';
import MemoizedRichText from 'vtex.rich-text/index';
import { dropdownTextSchema } from '../../schema/dropdownTextSchema';
import './styles.css';

const CSS_HANDLES = [
  'dropdownText__container',
  'dropdownText__textoVisible',
  'dropdownText__textoOculto',
  'dropdownText__verMasContainer',
  'dropdownText__verMas'
];

export default function DropdownText({
  textoVisible = 'Texto Visible',
  textoOculto = 'Texto Oculto',
  textoVerMas = 'Ver Más',
  textoVerMenos = 'Ver Menos'
}:DropdownTextProps) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //STATES
  const [textoOcultoActivo, setTextoOcultoActivo] = useState<boolean>(false);

  //JSX
  return (
    <div className={handles.dropdownText__container}>
      {/* TEXTO VISIBLE */}
      <div className={handles.dropdownText__textoVisible}>
        <MemoizedRichText
          text={textoVisible}
        />
      </div>
      {/* VER MAS */}
      <div className={handles.dropdownText__verMasContainer}>
        <p
          className={handles.dropdownText__verMas}
          onClick={() => setTextoOcultoActivo(state => !state)}
        >
          {textoOcultoActivo ? textoVerMenos : textoVerMas}
        </p>
      </div>
      {/* TEXTO OCULTO */}
      <div
        className={handles.dropdownText__textoOculto}
        style={{
          maxHeight: textoOcultoActivo ? '3000px' : '0'
        }}
      >
        <MemoizedRichText
          text={textoOculto}
        />
      </div>
    </div>
  )
}

DropdownText.schema = dropdownTextSchema;
