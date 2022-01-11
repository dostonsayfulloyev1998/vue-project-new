<template>
<div>
       <div class="container">
            <div class="row">
                <div class="col-md-4" >
                    <div class="card">
                        <div class="card-header">
                          <img :src="product.image" alt="">
                        </div>
                      <div class="card-body">
                           <h2>{{product.name}}</h2>
                        <h3>{{product.price}}</h3>
                      </div>
                    </div>
                </div>
            </div>
       </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
       id:this.$route.params.id,
      product:[]
    }
  },
  name: "Cart",
  methods:{

  },
  created() {
    axios.get("http://localhost:3000/product/"+this.id)
    .then(res=>{
        this.product = res.data
    })
  }
}
</script>

<style scoped>

</style>