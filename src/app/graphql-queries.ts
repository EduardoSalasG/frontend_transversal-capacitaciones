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
    CUR_IMAGEN_1
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
    Lead {
      PRO_NOMBRE
      PRO_DESCRIPCION
      PRO_DESCRIPCION_CORTA
      PRO_PRECIO
      PRO_PRECIO_DESCUENTO
    }
    LEA_URL_DIR
    SubcategoriaLead {
      SLE_NOMBRE
      CategoriaLead {
        CLE_NOMBRE
      }
    }
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

export const getCategoriasLeads = `
query GetCategoriasLead {
  getCategoriasLead {
        CLE_ID
    CLE_NOMBRE

    Subcategorias {
      SLE_ID
      SLE_NOMBRE
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
export const getVentasByUserId = `
query GetVentasByUserId($usuId: ID) {
  getVentasByUserId(USU_ID: $usuId) {
    Producto {
      PRO_NOMBRE
      PRO_ID
    }
    VEN_MONTO
    VEN_ID
    VEN_RUT_DT
    TipoDt {
      TDT_NOMBRE
    }
    updatedAt
  }
}`

export const queryLogin = `
mutation Login($usuCorreo: String!, $usuContrasena: String!) {
  login(USU_CORREO: $usuCorreo, USU_CONTRASENA: $usuContrasena) {
    ok
    status
    token
    msg
  }
}
`

export const queryNewCurso = `
mutation Mutation($proNombre: String!, $proDescripcion: String!, $proDescripcionCorta: String!, $proPrecio: Int!, $proPrecioDescuento: Int!, $curDirigidoA: String!, $curObjetivos: String!, $curEstructura: String!, $curImagen1: String!, $curImagen2: String!, $curVideoPromocional: String!, $curFechaInicio: String!, $curCantidadMinParticipantes: Int!, $curCantidadMaxParticipantes: Int!, $curCodigoSence: String!, $curDuracion: Int!, $curIncluyeCertificacion: Boolean!, $usuId: Int!, $tduId: Int!, $modId: Int!, $scuId: Int!) {
  newCurso(PRO_NOMBRE: $proNombre, PRO_DESCRIPCION: $proDescripcion, PRO_DESCRIPCION_CORTA: $proDescripcionCorta, PRO_PRECIO: $proPrecio, PRO_PRECIO_DESCUENTO: $proPrecioDescuento, CUR_DIRIGIDO_A: $curDirigidoA, CUR_OBJETIVOS: $curObjetivos, CUR_ESTRUCTURA: $curEstructura, CUR_IMAGEN_1: $curImagen1, CUR_IMAGEN_2: $curImagen2, CUR_VIDEO_PROMOCIONAL: $curVideoPromocional, CUR_FECHA_INICIO: $curFechaInicio, CUR_CANTIDAD_MIN_PARTICIPANTES: $curCantidadMinParticipantes, CUR_CANTIDAD_MAX_PARTICIPANTES: $curCantidadMaxParticipantes, CUR_CODIGO_SENCE: $curCodigoSence, CUR_DURACION: $curDuracion, CUR_INCLUYE_CERTIFICACION: $curIncluyeCertificacion, USU_ID: $usuId, TDU_ID: $tduId, MOD_ID: $modId, SCU_ID: $scuId)
}`

export const queryNewPago = `mutation NewPagoMercadoPago($venMonto: Int!, $venRutDt: String!, $tdtId: Int!, $usuId: Int!, $proId: Int!, $usuCorreo: String!, $proNombre: String!) {
  newPagoMercadoPago(VEN_MONTO: $venMonto, VEN_RUT_DT: $venRutDt, TDT_ID: $tdtId, USU_ID: $usuId, PRO_ID: $proId, USU_CORREO: $usuCorreo, PRO_NOMBRE: $proNombre) {
    init_point
  }
}`

