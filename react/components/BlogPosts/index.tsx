import React from "react";
import { useListContext, ListContextProvider } from 'vtex.list-context';
import { useCssHandles } from 'vtex.css-handles';
import { Link } from 'vtex.render-runtime';
import { blogPostsSchema } from "../../schema/blogPostsSchema";

const CSS_HANDLES = [
  'post__container',
  'post__imageContainer',
  'post__image',
  'post__infoContainer',
  'post__articleContainer',
  'post__articleCategoryContainer',
  'post__articleCategory',
  'post__articleTitle',
  'post__articleTitleDivision',
  'post__articleContent',
  'post__articleVerMasContainer',
  'post__articleVerMas',
  'post__articleVerMasText',
  'post__articleVerMasSombra',
  'post__articleVerMasArrow'
];

export default function BlogPosts({
  posts,
  children
}:BlogPostsProps) {

  //LIST CONTEXT
  const { list } = useListContext() || [];

  //VALIDACIONES
  const postsValidados = ValidacionPosts(posts);
  const postsActivos = list.concat(postsValidados.filter((post:any) => post !== null));

  //JSX
  return (
    <ListContextProvider list={postsActivos}>
        {children}
    </ListContextProvider>
  )
}

BlogPosts.schema = blogPostsSchema;


function ValidacionPosts(posts:Post[]) {

  //JSX
  return (
    posts.map((post, index) => {
      if (post.tipoConfiguracion.posiblesConfiguraciones === 'Activacion Manual') {
        if(post.tipoConfiguracion.estaActivo) {
          return(
            <PostLayout
              key={index}
              post={post}
            />
          )
        }
      } else {
        const ahora = new Date();
        const inputFechaInicio = new Date(post.tipoConfiguracion.fechaInicio);
        const inputFechaFinal = new Date(post.tipoConfiguracion.fechaFinal);
        if (ahora.getTime() > inputFechaInicio.getTime() && ahora.getTime() < inputFechaFinal.getTime()) {
          return(
            <PostLayout
              key={index}
              post={post}
            />
          )
        }
      }

      return null
    })
  )
}


function PostLayout({
  post
}:PostLayoutProps) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //JSX
  return (
    <div className={handles.post__container}>
      {/* IMAGE */}
      <picture className={handles.post__imageContainer}>
        <img
          alt={post.titulo}
          src={post.imagen}
          className={handles.post__image}
        />
      </picture>

      {/* INFO */}
      <div className={handles.post__infoContainer}>
        <article className={handles.post__articleContainer}>
          {/* category */}
          <div className={handles.post__articleCategoryContainer}>
            <h4
              className={handles.post__articleCategory}
              style={{
                backgroundColor: post.colorFondo,
                color: post.colorTexto
              }}
            >
              {post.categoria}
            </h4>
          </div>
          {/* title */}
          <h3 className={handles.post__articleTitle}>
            {post.titulo}
          </h3>
          {/* title division */}
          <div
            className={handles.post__articleTitleDivision}
            style={{
              backgroundColor: post.colorFondo
            }}
          >
          </div>
          {/* content */}
          <p className={handles.post__articleContent}>
            {post.contenido}
          </p>
          {/* ver mas */}
          <Link
            className={handles.post__articleVerMasContainer}
            to={post.slug}
          >
            <div
              className={handles.post__articleVerMas}
              style={{
                backgroundColor: post.colorFondo
              }}
            >
              <p
                className={handles.post__articleVerMasText}
                style={{
                  color: post.colorTexto
                }}
              >
                {post.textoBoton}
              </p>
              <div className={handles.post__articleVerMasArrow}>
                <SvgArrow
                  colorArrow={post.colorTexto}
                />
              </div>
            </div>
            <div
              className={handles.post__articleVerMasSombra}
              style={{
                backgroundColor: post.colorSombraBoton
              }}
            >
            </div>
          </Link>
        </article>
      </div>
    </div>
  )
}


function SvgArrow({
  colorArrow
}:SvgArrowProps) {

  //JSX
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width={'100%'}
    >
      <path
        fill={colorArrow}
        fillRule="evenodd"
        d="M12.293 4.293a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414-1.414L17.586 13H4a1 1 0 1 1 0-2h13.586l-5.293-5.293a1 1 0 0 1 0-1.414Z"
        clipRule="evenodd"
      />
    </svg>
  )
}


