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
    PRO_ID
  }
}
`;

export const getLeadsQuery = `
query GetLeadsProducto {
  getLeadsProducto {
    PRO_ID
    Lead {
      PRO_NOMBRE
      PRO_DESCRIPCION_CORTA
      PRO_DESTACADO
      PRO_PRECIO
    }
    SubcategoriaLead {
      SLE_NOMBRE
    }
  }
}
`

export const getCurso = `
query GetCursoProductoById($proId: ID) {
  getCursoProductoById(PRO_ID: $proId) {
    PRO_ID
  }
}
`

export const getLead = `

`