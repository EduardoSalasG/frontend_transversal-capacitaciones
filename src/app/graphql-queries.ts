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
    Curso {
      PRO_NOMBRE
      PRO_DESCRIPCION
      PRO_PRECIO
      PRO_PRECIO_DESCUENTO
    }
    CUR_DIRIGIDO_A
    CUR_OBJETIVOS
    CUR_ESTRUCTURA
    CUR_FECHA_INICIO
    CUR_CANTIDAD_MIN_PARTICIPANTES
    CUR_CANTIDAD_MAX_PARTICIPANTES
    CUR_CODIGO_SENCE
    CUR_DURACION
    CUR_INCLUYE_CERTIFICACION
    Modalidad {
      MOD_NOMBRE
    }
    SubcategoriaCurso {
      SCU_NOMBRE
      CategoriaCurso {
        CCU_NOMBRE
      }
    }
    TipoDeDuracion {
      TDU_NOMBRE
    }
  }
}
`

export const getLead = `
query GetLeadProductoById($proId: ID) {
  getLeadProductoById(PRO_ID: $proId) {
    PRO_ID
  }
}
`

export const getCategoriasCurso = `
query GetCategoriasCurso {
  getCategoriasCurso {
    CCU_ID
    CCU_NOMBRE
        Subcategorias {
      SCU_ID
      SCU_NOMBRE
    }

  }
}`
export const getValoracionesQuery = `
query GetValoraciones {
  getValoraciones {
    VAL_FECHA
    VAL_PUNTAJE
    VAL_COMENTARIO
    PRO_ID
    Producto {
      PRO_NOMBRE
    }
  }
}

` 
