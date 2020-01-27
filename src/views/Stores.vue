<template >
<div class="">
  <br>

  <div class="row">
    <div class="col-md-12">
        <router-link to="/stores/create"> <button type="button" class="btn btn-secondary">Create store</button></router-link>
    </div>
  </div>
  <br>

  <div class="row">

    <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <table class="table table-hover">
                   <thead>
                     <tr>
                       <th scope="col">Name</th>
                       <th scope="col">Address</th>
                       <th scope="col">Actions</th>

                     </tr>
                   </thead>
                   <tbody>
                     <tr v-for="store in assets" :key="store.id">
                       <td>{{ store.name }}</td>
                       <td>{{ store.address }}</td>
                       <td >
                         <a href="#" @click.prevent="populatePostToEdit(store)">Edit</a> -
                         <a href="#" @click.prevent="deletePost(store.id)">Delete</a>
                       </td>
                     </tr>
                   </tbody>
                 </table>
                 <Modal ref="modal" v-bind:initialStore="store"></Modal>
                 <AddStoreModal ref="AddStoreModal" ></AddStoreModal>
              </div>
            </div>
          </div>
  </div>

</div>

</template>
<script>
import Modal from "@/components/Modal.vue";


import axios from 'axios';
import api from '@/api'
  export default {
    components: {
      Modal
    },
    data () {
      return {
        search: '',
        isLoading: false,
        assets: [],
        store:{}
      }
    },

    created(){
    api.getStores()
        .then(assets => (this.assets = assets))
        .finally(() => (this.isLoading = false))

      },
    methods: {
          async populatePostToEdit (post) {
            let element = this.$refs.modal.$el
            $(element).modal('show')
            this.store = post

          },
          async deletePost (id) {
            if (confirm('Are you sure you want to delete this store?')) {
              api.deleteStore(id).then(function (response) {
                location.reload();

              })
             }
          },
          async addStore () {
            let element = this.$refs.addStoreModal.$el
            $(element).modal('show')
          }

        },

  }
</script>
