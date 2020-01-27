<template id="modal">

   <!-- Modal -->
   <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
     <div class="modal-dialog" role="document">
       <div class="modal-content">
         <div class="modal-header">
           <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
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
                 <input type="text" class="form-control" id="inputName" name="inputName" v-model="initialStore.name">

               </div>



               <div class="form-group">
                 <div class="form-group">
                   <label for="inputAddress">Address</label>
                   <input type="text" class="form-control" id="inputAddress" name="inputAddress" v-model="initialStore.address" >

                 </div>
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
    validations: {
      initialStore: {
      }
    },
    props:{
      initialStore:{}
    },
    created(){


      },
    methods: {
          checkForm: function () {
            if (this.initialStore.name && this.initialStore.address) {

              api.updateStore(this.initialStore).then(function (response) {
                location.reload();

              })

            }

            this.errors = [];

            if (!this.initialStore.name) {
              this.errors.push('Name field required.');
            }
            if (!this.initialStore.address) {
              this.errors.push('Address field required.');
            }

          }


    },

  }
</script>
