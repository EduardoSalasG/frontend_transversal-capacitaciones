export const getCursosQuery = `
  query GetCursosProducto {
    getCursosProducto {
      Curso {
        PRO_NOMBRE
        PRO_DESCRIPCION_CORTA
        PRO_DESTACADO
        PRO_PRECIO
      }
      SubcategoriaCurso {
        SCU_NOMBRE
      }
      CUR_IMAGEN_1
    }
  }
`;
