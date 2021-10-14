/* eslint-disable no-console */
/**
 * @module M/control/MapheaderControl
 */

import MapheaderImplControl from 'impl/mapheadercontrol';
import template from 'templates/mapheader';

export default class MapheaderControl extends M.Control {
  /**
   * @classdesc
   * Main constructor of the class. Creates a PluginControl
   * control
   *
   * @constructor
   * @extends {M.Control}
   * @api stable
   */
  constructor(config) {
    // 1. checks if the implementation can create PluginControl
    if (M.utils.isUndefined(MapheaderImplControl)) {
      M.exception('La implementación usada no puede crear controles MapheaderControl');
    }
    // 2. implementation of this control
    const impl = new MapheaderImplControl();
    super(impl, 'Mapheader');


    this.config = config;
    this.htmlCode = this.config.htmlCode
    this.cssList = this.config.cssList
    this.injectCSS(this.cssList)
    this.templateVars = { vars: { htmlCode: this.htmlCode } };


  }

  /**
   * This function creates the view
   *
   * @public
   * @function
   * @param {M.Map} map to add the control
   * @api stable
   */
  createView(map) {
    return new Promise((success, fail) => {
      const html = M.template.compileSync(template, this.templateVars);
      // Añadir código dependiente del DOM     

      this.addEvents();
      success(html);
    });
  }


  /**
   * This function is called on the control activation
   *
   * @public
   * @function
   * @api stable
   */
  activate() {
    // calls super to manage de/activation
    super.activate();
  }
  /**
   * This function is called on the control deactivation
   *
   * @public
   * @function
   * @api stable
   */
  deactivate() {
    // calls super to manage de/activation
    super.deactivate();
  }
  /**
   * This function gets activation button
   *
   * @public
   * @function
   * @param {HTML} html of control
   * @api stable
   */
  getActivationButton(html) {
    return html.querySelector('.m-mapheader button');
  }

  /**
   * This function compares controls
   *
   * @public
   * @function
   * @param {M.Control} control to compare
   * @api stable
   */
  equals(control) {
    return control instanceof MapheaderControl;
  }

  // Add your own functions
  injectCSS(cssList) {
    for (let index = 0; index < cssList.length; index++) {
      const cssFile = cssList[index];
      let link = document.createElement("link");
      link.href = cssFile;
      //link.type = "text/css";
      link.rel = "stylesheet";
      link.addEventListener('load', () => {
        // console.log('se cargo el enlace: ' + cssList[index])
        this.checkHeaderheight()
        // console.log(this.panelHeight)
      })
      link.media = "screen";
      document.getElementsByTagName("head")[0].appendChild(link);
    }
  }

  addEvents(html) {
    this.panelHeight = this.checkHeaderheight(html);
    // Selectores de Elementos
    let btnMapHeaderClosed = document.querySelectorAll('button.m-panel-btn.g-cartografia-flecha-abajo')[0];
    let btnMapHeaderOpened = document.querySelectorAll('button.m-panel-btn.g-cartografia-flecha-derecha')[0];
      
    

    btnMapHeaderOpened.title = 'Ocultar cabecera de página';
    btnMapHeaderClosed.title = 'Ocultar cabecera de página';
    // EventListener
    btnMapHeaderClosed.addEventListener('click', () => {
      let btnMapHeaderOpened = document.querySelectorAll('button.m-panel-btn.g-cartografia-flecha-derecha')[0]
      if (event.target.parentElement.classList.contains('opened')) {
        btnMapHeaderOpened.title = 'Ocultar cabecera de página';
        btnMapHeaderClosed.title = 'Ocultar cabecera de página';
        this.opened = true;
        this.checkHeaderheight(html);
        this.setTopMargin(this.opened);       
      } else {
        btnMapHeaderOpened.title = 'Mostrar cabecera de página';
        btnMapHeaderClosed.title = 'Mostrar cabecera de página';
        this.opened = false;       
        this.checkHeaderheight(html);
        this.setTopMargin(this.opened);        
       
      }
    });
    

  }

  checkHeaderheight() {
    let bottomElements = document.querySelectorAll('div.m-top');
    if (document.querySelectorAll('div.m-panel.m-mapheader').length > 0) {
      this.panelHeight = document.querySelectorAll('div.m-panel.m-mapheader')[0].clientHeight;
    }
    //this.panelHeight = this.html_.offsetHeight;      
    for (let index = 0; index < bottomElements.length; index++) {
      const element = bottomElements[index];
      if (element.classList.contains('m-left')) {
        element.style.marginTop = this.panelHeight + 30 + "px";
      }
    }
    bottomElements = document.querySelectorAll('div.m-top.m-right')[0].childNodes; 

    for (let index = 0; index < bottomElements.length; index++) {
      const element = bottomElements[index];
      if (!element.classList.contains('m-mapheader')) {

       element.style.setProperty('margin-top',this.panelHeight + 10 +'px','important');
       
      }
    }
  }

  setTopMargin(opened) {
    let bottomElements = document.querySelectorAll('div.m-top');
    
    for (let index = 0; index < bottomElements.length; index++) {
      const element = bottomElements[index];
      if (element.classList.contains('m-left')) {
        if (opened) {
          element.style.marginTop = this.panelHeight + 30 + "px";
        } else {
          element.style.marginTop = 30 + "px";
        }
      }
    }
    //bottomElements = document.querySelectorAll('div.m-top.m-right');
    bottomElements = document.querySelectorAll('div.m-top.m-right')[0].childNodes;
    for (let index = 0; index < bottomElements.length; index++) {
      const element = bottomElements[index];      

      if (!element.classList.contains('m-mapheader')) {
                
        if (opened) {
          
          element.style.setProperty('margin-top',this.panelHeight + 10 +'px','important'); 
          document.getElementById('div-contenedor').style.display='block';         
          
        } else {
          element.style.setProperty('margin-top', 10 +'px','important');
          document.getElementById('div-contenedor').style.display='none';

          
        }
      }
     
    }
  }
}
