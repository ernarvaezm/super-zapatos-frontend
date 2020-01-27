<template id="modalArticle">

   <!-- Modal -->
   <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
     <div class="modal-dialog" role="document">
       <div class="modal-content">
         <div class="modal-header">
           <h5 class="modal-title" id="exampleModalLabel">Editing Article </h5>
           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
             <span aria-hidden="true">&times;</span>
           </button>
         </div>
         <div class="modal-body">
           <p v-if="errors.length">
             <b>Please correct the following error(s):</b>
             <ul>
               <li v-for="error in errors">{{ error }}</li>
             </ul>
           </p>
           <form >

               <div class="form-group">
                 <label for="inputName">Name</label>
                 <input type="text" class="form-control" id="inputName" name="inputName" v-model="initialArticle.name">
               </div>
               <div class="form-group">
                 <label for="inputName">Description</label>
                 <input type="text" class="form-control" id="inputDescription" name="inputDescription" v-model="initialArticle.description">
               </div>
               <div class="form-group">
                 <label for="inputName">Price</label>
                 <input type="text" class="form-control" id="inputPrice" name="inputPrice" v-model="initialArticle.price">
               </div>
               <div class="form-group">
                 <label for="inputName">Total in shelf	</label>
                 <input type="text" class="form-control" id="inputTotalInShelf" name="inputTotalInShelf" v-model="initialArticle.total_in_shelf	">
               </div>
               <div class="form-group">
                 <label for="inputName">Total in vault	</label>
                 <input type="text" class="form-control" id="InputTotalInVault" name="totalInVault" v-model="initialArticle.total_in_vault	">
               </div>

               <div class="modal-footer">
                 <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                 <button type="button" v-on:click="checkForm()" class="btn btn-primary">Save changes</button>
               </div>
           </form>



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
        errors:[]
      }
    },
    props:{
      initialArticle:{}
    },
    created(){


      },
    methods: {
          checkForm: function () {
            if (this.initialArticle.name && this.initialArticle.description &&
              this.initialArticle.price && this.initialArticle.total_in_shelf &&
            this.initialArticle.total_in_vault) {

              api.updateArticle(this.initialArticle).then(function (response) {
                location.reload();

              })

            }

            this.errors = [];

            if (!this.initialArticle.name) {
              this.errors.push('Name field required.');
            }
            if (!this.initialArticle.description) {
              this.errors.push('Description field required.');
            }
            if (!this.initialArticle.price) {
              this.errors.push('Price field required.');
            }
            if (!this.initialArticle.total_in_shelf) {
              this.errors.push('Total in shelf field required.');
            }
            if (!this.initialArticle.total_in_vault) {
              this.errors.push('Total in vault field required.');
            }

          }


    },

  }
</script>
