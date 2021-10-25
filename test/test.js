import Mapheader from 'facade/mapheader';

const map = M.map({
  container: 'mapjs',
});

map.addControls(['scaleline', 'mouse', 'OverviewMap', 'layerswitcher', 'panzoombar']);

const config = {
  open: true,
  htmlCode: "<!--cabecera-->\n<div id='cabecera'>\n<!-- cabecera Izquierda -->\n<div id='cabecera_1'>\n<div id='logos'>\n<a href='https://www.juntadeandalucia.es'><img alt='Junta de Andaluc&iacute;a' title='Junta de Andaluc&iacute;a' src='https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/cabecera/LogoJuntaA.png'></a>\n<a href='https://www.juntadeandalucia.es/institutodeestadisticaycartografia/' accesskey='h'><img alt='Web del Instituto de Estad&iacute;stica y Cartograf&iacute;a de Andaluc&iacute;a' title='Web del Instituto de Estad&iacute;stica y Cartograf&iacute;a de Andaluc&iacute;a' src='https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/cabecera/LogoIECAA.png'></a>\n</div>\n</div>\n<!-- fin cabecera izqda -->\n<!-- cabecera derecha -->\n<div id='cabecera_2'>\n<!-- cabecera derecha-izq -->\n<div id='cabecera_2a'>\n<!-- cabecera redes sociales -->\n<div id='redessociales'>\n<a href='https://www.juntadeandalucia.es/institutodeestadisticaycartografia/blog/'><img alt='S&iacute;guenos en nuestro blog' title='S&iacute;guenos en nuestro blog' src='https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/icons/social/ico_blogger.png'></a>\n<a href='https://www.twitter.com/IECA_Andalucia'><img alt='S&iacute;guenos en Twitter' title='S&iacute;guenos en Twitter' src='https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/icons/social/ico_twitter.png'></a>\n<a href='https://www.facebook.com/institutodeestadisticadeandalucia'><img alt='S&iacute;guenos en Facebook' title='S&iacute;guenos en Facebook' src='https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/icons/social/ico_facebook.png'></a>\n</div>\n<!-- fin cabecera redes sociales -->\n</div>\n<!-- fin cabecera derecha-izq -->\n<!-- Cabecera derecha-derecha -->\n<div id='cabecera_2b'>\n<!-- cabecera menu -->\n<div id='cabecera_2b_menu' class='lateral10 bordecolor2'>\n<ul>\n<li><a href='https://www.juntadeandalucia.es/institutodeestadisticaycartografia/ieagen/contacto.html' accesskey='c'>Contacto</a></li>\n<li><a href='https://www.juntadeandalucia.es/institutodeestadisticaycartografia/ieagen/suscripcion/index.htm' accesskey='s'>Suscripci&oacute;n</a></li>\n<li><a href='https://www.juntadeandalucia.es/institutodeestadisticaycartografia/ieagen/calendario/index.htm' accesskey='d'>Calendario</a></li>\n<li>&nbsp;</li>\n</ul>\n</div>\n<!-- fin cabecera menu -->\n</div>\n<!-- fin Cabecera derecha-derecha -->\n</div>\n<!-- fin cabecera derecha -->\n</div>\n<!-- fin cabecera -->\n"+
    "<!-- Camino de migas y enlaces de navegaci&oacute;n -->\n<div id='navigation'>\n<div class='lineacolor fondocolor1'>&nbsp;</div>\n<div id='menu_horizontal'>\n<!-- camino de  migas -->\n<div id='menu_horizontal_1'>\n<div id='caminomigas'>\n<img src='https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/icons/acciones/ico_aqui.png' alt='Ruta'>Est&aacute; en: <a href='https://www.juntadeandalucia.es/institutodeestadisticaycartografia/'>Inicio</a> - "+
     "<a href='https://www.juntadeandalucia.es/institutodeestadisticaycartografia/temas/index-geo.htm'>Georreferenciaci&oacute;n</a>\n" + 
     " - <a href='../index.htm'>P&aacute;gina del producto</a>            </div>\n</div>\n<!-- fin camino de  migas -->\n<!-- enlaces navegacion -->\n<div id='menu_horizontal_2'>\n<div id='botoneramenu'>\n<!-- menu desplegable -->\n",
  cssList: [
    'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/css/estiloCabecera2015.css',
    'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/css/estiloGenerico.css',
    'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/css/estiloVisor.css',
  ]
}



const mp = new Mapheader(config);

map.addPlugin(mp);