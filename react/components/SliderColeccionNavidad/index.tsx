import React from 'react';
import { useListContext, ListContextProvider } from 'vtex.list-context';
import { Link } from 'vtex.render-runtime';
import { useDevice } from 'vtex.device-detector';
import { useCssHandles } from 'vtex.css-handles';
import { sliderColeccionNavidadSchema } from '../../schema/sliderColeccionNavidadSchema';
import './styles.css';

const CSS_HANDLES = [
  'bannerNavidad__container',
  'bannerNavidad__link',
  'bannerNavidad__image',
  'bannerNavidad__hoverImage',
];

export default function SliderColeccionNavidad({
  banners,
  children
}:SliderColeccionNavidadProps) {

  //LIST CONTEXT
  const { list } = useListContext() || [];

  //VALIDACIONES
  const grupoBanners = ValidacionBannersNavidad(banners);
  let bannerParaVisualizar = [];
  bannerParaVisualizar = list.concat(grupoBanners.filter(banner => banner !== null));

  //JSX
  if(bannerParaVisualizar.length > 0) {
    return (
      <ListContextProvider list={bannerParaVisualizar}>
        {children}
      </ListContextProvider>
    )
  }

  return null
}

SliderColeccionNavidad.schema = sliderColeccionNavidadSchema;


function ValidacionBannersNavidad(banners:BannerNavidad[]) {

  //JSX
  return (
    banners.map((banner, index) => {
      if (banner.tipoConfiguracion.posiblesConfiguraciones === 'Activacion Manual') {
        if(banner.tipoConfiguracion.estaActivo) {
          return(
            <SingleBannerNavidad
              key={index}
              banner={banner}
            />
          )
        }
      } else {
        const ahora = new Date();
        const inputFechaInicio = new Date(banner.tipoConfiguracion.fechaInicio);
        const inputFechaFinal = new Date(banner.tipoConfiguracion.fechaFinal);
        if (ahora.getTime() > inputFechaInicio.getTime() && ahora.getTime() < inputFechaFinal.getTime()) {
          return(
            <SingleBannerNavidad
              key={index}
              banner={banner}
            />
          )
        }
      }

      return null
    })
  )
}


function SingleBannerNavidad({
  banner
}:SingleBannerNavidadProps) {

  //DEVICE DETECTOR
  const { device } = useDevice();

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //JSX
  return (
    <div
      className={handles.bannerNavidad__container}
    >
      <Link
        to={banner.slug}
        className={handles.bannerNavidad__link}
      >
        <img
          src={device === 'desktop' ? banner.imagenDesktop : banner.imagenMobile}
          className={handles.bannerNavidad__image}
        />
        {
          banner.imagenHover && device === 'desktop'
          ?
            <img
              src={banner.imagenHover}
              className={handles.bannerNavidad__hoverImage}
            />
          :
            null
        }
      </Link>
      {
        banner.segundoBanner.segundoBannerActivo === 'Visualizar'
        ?
          <Link
            to={banner.segundoBanner.slug}
            className={handles.bannerNavidad__link}
          >
            <img
              src={device === 'desktop' ? banner.segundoBanner.imagenDesktop : banner.segundoBanner.imagenMobile}
              className={handles.bannerNavidad__image}
            />
            {
              banner.segundoBanner.imagenHover && device === 'desktop'
              ?
                <img
                  src={banner.segundoBanner.imagenHover}
                  className={handles.bannerNavidad__hoverImage}
                />
              :
                null
            }
          </Link>
        :
          null
      }
    </div>
  )
}


