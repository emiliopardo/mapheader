import Mapheader from 'facade/mapheader';

const map = M.map({
  container: 'mapjs',
});

const mp = new Mapheader();

map.addPlugin(mp);
