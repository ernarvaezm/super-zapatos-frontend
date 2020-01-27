<template >
<div class="">
  <br>

  <div class="row">
    <div class="col-md-3">

      <label class="mr-sm-2" for="inlineFormCustomSelect">Stores Available</label>

          <select class="form-control"  v-model="storeSelected" @change="onChangeStore()">
              <option disabled value="">Select one store</option>
             <option v-for="(item, index) in assets"  v-bind:value="item.id">{{ item.name }}</option>
          </select>

    </div>
    <div class="col-md-3">
      <br>

      <router-link to="articles/create"> <button type="button" class="btn btn-secondary">Create article</button></router-link>
    </div>
    <div class="col-md-6">

    </div>

  </div>
  <br>

  <div class="row">

    <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                  <div class="table-responsive-sm">
                    <table class="table table-hover">
                       <thead>
                         <tr>
                           <th scope="col">Name</th>
                           <th scope="col">Description</th>
                           <th scope="col">Price</th>
                           <th scope="col">Total in shelf</th>
                           <th scope="col">Total in vault</th>
                           <th scope="col">Actions</th>

                         </tr>
                       </thead>
                       <tbody>
                         <tr v-for="article in articles" :key="article.id">
                           <td>{{ article.name }}</td>
                           <td>{{ article.description }}</td>
                           <td>{{ article.price }}</td>
                           <td>{{ article.total_in_shelf }}</td>
                           <td>{{ article.total_in_vault }}</td>
                           <td >
                             <a href="#" @click.prevent="populatePostToEdit(article)">Edit</a> -
                             <a href="#" @click.prevent="deletePost(article.id)">Delete</a>
                           </td>
                         </tr>
                       </tbody>
                     </table>
                  </div>
                  <Modal ref="modal" v-bind:initialArticle="article"></Modal>
              </div>
            </div>


          </div>



  </div>

</div>

</template>
<script>
import Modal from "@/components/ModalArticle.vue";


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
        articles: [],
        article:{},
        storeSelected:''
      }
    },

    created(){
    api.getStores()
        .then(assets => (this.assets = assets))
        .finally(() => (this.isLoading = false))

      },
    methods: {
          async populatePostToEdit (article) {
            let element = this.$refs.modal.$el
            $(element).modal('show')
            this.article = article

          },
          async deletePost (id) {
            if (confirm('Are you sure you want to delete this Article?')) {
              api.deleteArticle(id).then(function (response) {
                location.reload();

              })
             }
          },
          async addStore () {
            let element = this.$refs.addStoreModal.$el
            $(element).modal('show')
          },
          async onChangeStore(){
            api.articlesByStore(this.storeSelected)
                .then(articles => (this.articles = articles))
                .finally(() => (this.isLoading = false))

          }


        },

  }
</script>
