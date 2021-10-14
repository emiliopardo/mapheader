import M$plugin$Mapheader from '/home/epardo/proyectos/mapheader/src/facade/js/mapheader';
import M$control$MapheaderControl from '/home/epardo/proyectos/mapheader/src/facade/js/mapheadercontrol';
import M$impl$control$MapheaderControl from '/home/epardo/proyectos/mapheader/src/impl/ol/js/mapheadercontrol';

if (!window.M.plugin) window.M.plugin = {};
if (!window.M.control) window.M.control = {};
if (!window.M.impl) window.M.impl = {};
if (!window.M.impl.control) window.M.impl.control = {};
window.M.plugin.Mapheader = M$plugin$Mapheader;
window.M.control.MapheaderControl = M$control$MapheaderControl;
window.M.impl.control.MapheaderControl = M$impl$control$MapheaderControl;
