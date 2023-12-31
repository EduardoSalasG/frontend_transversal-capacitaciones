import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductoService } from '../../../service/producto.service';
import { MercadoPagoService } from '../../../service/mercado-pago.service';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../../service/auth.service';
import { response } from 'express';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterLink, RouterLinkActive, FormsModule, ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export default class CheckoutComponent {
  public comunas: any
  public dt = ''

  public infoProducto: any;
  venMonto: any;
  venRutDt: any
  tdtId: any
  usuId: any
  proId: any
  usuCorreo: any
  proNombre: any
  token: any;

  urlMercadoPago: any
  constructor(private router: Router, private productoService: ProductoService, private mercadoPagoService: MercadoPagoService, private cookieService: CookieService, private authService: AuthService) {
    this.infoProducto = this.productoService.getCursoInfo();
  }

  regiones = [
    {
      "region": "Arica y Parinacota",
      "comunas": ["Arica", "Camarones", "Putre", "General Lagos"]
    },
    {
      "region": "Tarapacá",
      "comunas": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"]
    },
    {
      "region": "Antofagasta",
      "comunas": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"]
    },
    {
      "region": "Atacama",
      "comunas": ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"]
    },
    {
      "region": "Coquimbo",
      "comunas": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"]
    },
    {
      "region": "Valparaíso",
      "comunas": ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"]
    },
    {
      "region": "Región del Libertador Gral. Bernardo O’Higgins",
      "comunas": ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"]
    },
    {
      "region": "Región del Maule",
      "comunas": ["Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "Retiro", "San Javier", "Villa Alegre", "Yerbas Buenas"]
    },
    {
      "region": "Región de Ñuble",
      "comunas": ["Cobquecura", "Coelemu", "Ninhue", "Portezuelo", "Quirihue", "Ránquil", "Treguaco", "Bulnes", "Chillán Viejo", "Chillán", "El Carmen", "Pemuco", "Pinto", "Quillón", "San Ignacio", "Yungay", "Coihueco", "Ñiquén", "San Carlos", "San Fabián", "San Nicolás"]
    },
    {
      "region": "Región del Biobío",
      "comunas": ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío"]
    },
    {
      "region": "Región de la Araucanía",
      "comunas": ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria"]
    },
    {
      "region": "Región de Los Ríos",
      "comunas": ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"]
    },
    {
      "region": "Región de Los Lagos",
      "comunas": ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "Frutillar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena"]
    },
    {
      "region": "Región Aisén del Gral. Carlos Ibáñez del Campo",
      "comunas": ["Coihaique", "Lago Verde", "Aisén", "Cisnes", "Guaitecas", "Cochrane", "O’Higgins", "Tortel", "Chile Chico", "Río Ibáñez"]
    },
    {
      "region": "Región de Magallanes y de la Antártica Chilena",
      "comunas": ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos (Ex Navarino)", "Antártica", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"]
    },
    {
      "region": "Región Metropolitana de Santiago",
      "comunas": ["Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "Santiago", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "Tiltil", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"]
    }
  ]



  onSelected(value: any): void {
    (value) ? this.comunas = this.regiones[value - 1].comunas : this.comunas = []
  }

  cambiarDT() {
    (this.dt == 'boleta') ? this.dt = 'factura' : this.dt = 'boleta'
  }

  checkoutForm = new FormGroup({
    dt: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    razonSocial: new FormControl(''),
    rut: new FormControl(''),
    direccion: new FormControl(''),
    referencia: new FormControl(''),
    region: new FormControl(''),
    comuna: new FormControl(''),
    metodoDePago: new FormControl('')
  })




  async onSubmit() {
    this.token = this.cookieService.get('token')

    await this.authService.validarToken(this.token)
      .then((response) => {

        this.usuCorreo = response.user.email
        console.log('correo usuario', this.usuCorreo)
      })


    this.venMonto = this.infoProducto.precio
    this.venRutDt = this.checkoutForm.value.rut
    this.tdtId = this.checkoutForm.value.dt
    this.usuId = 1
    this.proId = this.infoProducto.id
    this.usuCorreo = "prueba@prueba.cl"
    this.proNombre = this.infoProducto.nombre


    try {
      console.log(this.venMonto, this.venRutDt, this.tdtId, this.usuId, this.proId, this.proNombre)
      const response = await this.mercadoPagoService.newPago(
        this.venMonto, this.venRutDt, this.tdtId, this.usuId, this.proId, this.usuCorreo, this.proNombre
      );
      const init_point = response.data.newPagoMercadoPago.init_point;

      this.urlMercadoPago = init_point;

      if (this.urlMercadoPago) {
        console.log(this.urlMercadoPago);
        window.location.href = this.urlMercadoPago;
      } else {
        console.log('no hay url');
      }
    } catch (error) {
      console.error('Error en compra:', error);
    }
  }

}
