<template>
<div>
        <div class="container">
          <div class="row">
               <div class="col-md-6 my-5">
                 <form action="">
                      <div class="form-group">
                        <label for="">name</label>
                        <input type="text"   v-model="newName" class="form-control">
                      </div>
                   <div class="form-group">
                     <label for="">price</label>
                     <input type="text" v-model="newPrice" class="form-control">
                   </div>
                   <div class="form-group">
                     <label for="">image</label>
                     <input type="text" v-model="newImage" class="form-control">
                   </div>
                   <button type="button" @click="add" class="btn btn-primary"> click</button>
                 </form>
               </div>
          </div>
            <div class="row">
                 <div class="col-md-10">
                        <table class="table table-bordered">
                             <thead>
                                <tr>
                                   <th>id</th> <th>name</th>  <th>price </th>  <th>image</th>
                                </tr>
                             </thead>

                          <tbody>
                             <tr v-for="item in product" :key="item">
                                 <td> {{item.id}} </td>  <td>{{item.name}}</td>  <td>{{item.price}}</td>
                               <td><img :src="item.image" width="100"></td> <td> <button class="btn btn-danger" type="button" @click="remove(item.id)">delete</button>
                               <router-link :to="`/cart/${item.id}`" class="btn btn-primary">view</router-link>
                             </td>

                             </tr>
                          </tbody>

                        </table>
                 </div>
            </div>
        </div>
</div>
</template>

<script>

import axios from "axios"
export default {
  name: "Admin",
  components:{

  },
  data(){
    return{
       product:[],
      newName:'',
      newPrice:'',
      newImage:''
    }
  },
  methods:{
    show(){
       axios.get("http://localhost:3000/product")
      .then(res=>{
          this.product = res.data
      })
    },
    add(){
      if (this.newName!='' && this.newPrice!='' && this.newImage!=''){
      axios.post("http://localhost:3000/product",{
        name:this.newName,
        price:this.newPrice,
        image:this.newImage
      })
        this.show()
        this.newName=''
        this.newPrice=''
        this.newImage=''
      }
      this.show()
    },
    remove(id){
      this.show()
      axios.delete("http://localhost:3000/product/"+id)
      this.show()
    }
  },
  created(){
    this.show()
  }
}
</script>

<style scoped>

</style>