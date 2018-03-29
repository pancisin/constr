import Dexie from 'dexie';

const dx = new Dexie('testing_db');
dx.version(1).stores({
  items: '++id, name, prop'
});

export default dx;
