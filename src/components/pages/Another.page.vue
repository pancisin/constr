<template>
  <div class="container another-page">
    <table class="table table-bordered table-sm">
      <tr>
        <th>ID</th>
        <th>name</th>
        <th>prop</th>
        <th></th>
      </tr>
      <tr v-for="(item, index) in items" :key="index">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.prop }}</td>
        <td class="text-center">
  	      <button 
            type="button" 
            class="btn btn-link btn-sm"
            @click="deleteItem(item)">
            delete
          </button>
        </td>
      </tr>
    </table>

    <div class="row justify-content-sm-center">
      <div class="col col-sm-6">
        <div class="card">
          <form class="form card-body" @submit.prevent="submitItem">
            <div class="form-group">
              <label>Name</label>
              <input type="text" class="form-control" v-model="newItem.name">
            </div>
            <div class="form-group">
              <label>Prop</label>
              <input type="text" class="form-control" v-model="newItem.prop">
            </div>
            <button type="submit" class="btn btn-success btn-sm">Add item</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ItemsApi from "../../api/items.api";
import { Observable, Subject } from "rxjs";

export default {
  name: "another-page",
  data() {
    return {
      newItem: {}
    };
  },
  subscriptions() {
    this.deleteItem$ = new Subject();
    const created$ = this.$eventToObservable("hook:created").take(1);
    const items = created$
      .flatMap(() =>
        Observable.create(ob => {
          ItemsApi.getItems(items => {
            ob.next(items);
          });
        })
      )
      .startWith([])
      .do(console.warn);

    return {
      items
    };
  },
  methods: {
    deleteItem(item) {
      ItemsApi.deleteItem(item.id, res => {
        this.items = this.items.filter(x => x.id !== item.id);
      });
    },
    submitItem() {
      ItemsApi.addItem(this.newItem, item => {
        this.items = [...this.items, item];
        this.newItem = {};
      });
    }
  }
};
</script>

<style lang="less">
.another-page {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
