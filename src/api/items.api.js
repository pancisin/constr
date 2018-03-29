import db from '../services/db';
export default {
  getItems (success) {
    db.items.toArray(items => {
      success(items);
    });
  },
  addItem (item, success) {
    db.items.add(item).then(result => {
      success({
        ...item,
        id: result
      });
    });
  },
  deleteItem (id, success) {
    db.items.delete(id).then(result => {
      success(result);
    });
  },
  putItem (id, item, success) {
    db.items.put(item, id).then(result => {
      success(item);
    });
  }
};
