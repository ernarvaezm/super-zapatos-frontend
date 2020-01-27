<template >

  <div class="row">
    <div class="col-md-3">


    </div>
    <div class="col-md-6">

      <div class="card">
        <div class="card-body">
          <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
              <li v-for="error in errors">{{ error }}</li>
            </ul>
          </p>
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Store</label>

              <select class="form-control"  v-model="article.store_id" >
                          <option disabled value="">Select one store</option>
                  <option v-for="(item, index) in assets"  v-bind:value="item.id">{{ item.name }}</option>
              </select>
            </div>


            <div class="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input type="text" class="form-control" id="exampleInputName"  placeholder="Enter name" v-model="article.name">
            </div>



            <div class="form-group">
              <label for="exampleInputEmail1">Description</label>
              <input type="text" class="form-control" id="exampleInputDescription"  placeholder="Enter description" v-model="article.description">
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Price</label>
              <input type="text" class="form-control" id="exampleInputPrice"  placeholder="Enter price" v-model="article.price">
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Total in shelf	</label>
              <input type="number" class="form-control" id="exampleInputTotalShelf"  placeholder="Enter total in shelf" v-model="article.total_in_shelf">
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Total in vault	</label>
              <input type="number" class="form-control" id="exampleInputTotalVault"  placeholder="Enter total in vault" v-model="article.total_in_vault">
            </div>
            <div class="form-group">
              <button type="button" v-on:click="checkForm()"  class="btn btn-primary">Save Article</button>

              <router-link to="/articles"> <button type="button" class="btn btn-secondary">Cancel</button></router-link>
            </div>

          </form>
        </div>

      </div>

    </div>
    <div class="col-md-3">

    </div>

  </div>
</template>
<script>


import axios from 'axios';
import api from '@/api'

  export default {
    components: {

    },
    data () {
      return {
        errors:[],
        isLoading: false,
        assets: [],
        article:{
          name:'',
          description:'',
          description:'',
          price:'',
          total_in_vault:'',
          total_in_shelf:'',
          store_id:''
        }
      }
    },
    created(){
    api.getStores()
        .then(assets => (this.assets = assets))
        .finally(() => (this.isLoading = false))

      },
    methods: {
          checkForm: function () {
            if (this.article.name && this.article.description &&
              this.article.price && this.article.total_in_shelf &&
            this.article.total_in_vault && this.article.store_id ) {

              api.addArticle(this.article).then(function (response) {
                // object
                window.location.href = '/articles'


              })

            }

            this.errors = [];

            if (!this.article.name) {
              this.errors.push('Name field required.');
            }
            if (!this.article.description) {
              this.errors.push('Description field required.');
            }
            if (!this.article.price) {
              this.errors.push('Price field required.');
            }
            if (!this.article.total_in_vault) {
              this.errors.push('Total in vault field required.');
            }
            if (!this.article.total_in_shelf) {
              this.errors.push('Total in shelf field required.');
            }
            if (!this.article.store_id) {
              this.errors.push('Store field required.');
            }
          }


    },

  }
</script>
