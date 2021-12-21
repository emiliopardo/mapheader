import Mapheader from 'facade/mapheader';

const map = M.map({
  container: 'mapjs',
});

map.addControls(['scaleline', 'mouse', 'OverviewMap', 'layerswitcher', 'panzoombar']);

const configHeaderIECA = {
  open: false,
  htmlCode: '<div id="cabecera"> <div id="cabecera_1"> <div id="logos"><a href="https://www.juntadeandalucia.es"><img alt="Junta de Andaluc&iacute;a" title="Junta de Andaluc&iacute;a" src="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/cabecera/LogoJuntaA.png"></a><a href="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/" accesskey="h"><img alt="Web del Instituto de Estad&iacute;stica y Cartograf&iacute;a de Andaluc&iacute;a" title="Web del Instituto de Estad&iacute;stica y Cartograf&iacute;a de Andaluc&iacute;a" src="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/cabecera/LogoIECAA.png"></a> </div></div></div><div id="navigation"> <div class="lineacolor fondocolor1"> &nbsp;</div><div id="menu_horizontal"> <div id="menu_horizontal_1"> <div id="caminomigas"><img src="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/icons/acciones/ico_aqui.png" alt="Ruta">Est&aacute; en: <a href="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/">Inicio</a> - <a href="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/temas/index-geo.htm">Georreferenciaci&oacute;n</a> - <a href="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/index.htm">P&aacute;gina del producto</a> </div></div><div id="menu_horizontal_2"> <div id="botoneramenu"></div></div></div></div>',
  cssList: [
    'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/css/estiloCabecera2015.css',
    'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/css/estiloGenerico.css',
    'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/css/estiloVisor.css',
  ]
}

const configHeaderCDAU = {
  open: false,
  htmlCode: '<div id="cabecera-visualizador" style="height:103px"><div id="cabecera_izquierda"><div id="logoCDAU"><a id="linklogo" target="_blank" href="https://www.callejerodeandalucia.es/portal/"><img alt="Callejero Digital de Andalucía Unificado" title="Callejero Digital de Andalucía Unificado" src="https://www.callejerodeandalucia.es/img/logoCDAU.png" style="padding-top:5px;width:200px;height:78px"></a></div><div id="logoEuropa"></div><div id="callejeroDigital">Callejero Digital de Andalucía Unificado</div><div id="logoAndEur"></div></div></div><div id="links" class="header-links"><a id="acceso" target="_blank" href="https://www.callejerodeandalucia.es/portal/" title="Acceso al portal del CDAU"><img alt="MÁS INFORMACIÓN" title="Acceso al portal del CDAU" src="https://www.callejerodeandalucia.es/img/masinformacion.gif" style="width:175px"></a> </div>',
  cssList: ['https://www.callejerodeandalucia.es/css/visorCDAU.css']
}


//const mp = new Mapheader(configHeaderCDAU);
const mp = new Mapheader(configHeaderIECA);

map.addPlugin(mp);