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
              <label for="exampleInputName">Name</label>
              <input type="text" class="form-control" id="exampleInputName"  placeholder="Enter name" v-model="store.name">
            </div>

            <div class="form-group">
              <label for="exampleInputAddress2">Address</label>
              <input type="text" class="form-control" id="exampleInputAddress2"  placeholder="Enter address" v-model="store.address">
            </div>

            <div class="form-group">
              <button type="button" v-on:click="checkForm()"  class="btn btn-primary">Save changes</button>

              <router-link to="/stores"> <button type="button" class="btn btn-secondary">Cancel</button></router-link>
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
        store:{
          name:'',
          address:''
        }
      }
    },
    methods: {
          checkForm: function () {
            if (this.store.name && this.store.address ) {

              api.addStore(this.store).then(function (response) {
                // object
                window.location.href = '/stores'
              })

            }

            this.errors = [];

            if (!this.store.name) {
              this.errors.push('Name field required.');
            }
            if (!this.store.address) {
              this.errors.push('Address field required.');
            }

          }


    },

  }
</script>
