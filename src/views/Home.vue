<template>


    <div class="row">

      <div class="col-md-12">
              <div class="card">
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-hover">
                       <thead>
                         <tr>
                           <th scope="col">Name</th>
                           <th scope="col">Description</th>
                           <th scope="col">Price</th>
                           <th scope="col">Total in shelf</th>
                           <th scope="col">Total in vault</th>

                         </tr>
                       </thead>
                       <tbody>
                         <tr v-for="article in assets" :key="article.id">
                           <td>{{ article.name }}</td>
                           <td>{{ article.description }}</td>
                           <td>{{ article.price }}</td>
                           <td>{{ article.total_in_shelf }}</td>
                           <td>{{ article.total_in_vault }}</td>

                         </tr>
                       </tbody>
                     </table>
                  </div>

                </div>
              </div>
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
        search: '',
        isLoading: false,
        assets: []
      }
    },

    created(){
    api.getArticles()
        .then(assets => (this.assets = assets))
        .finally(() => (this.isLoading = false))

      },
    methods: {

        },

  }
</script>
