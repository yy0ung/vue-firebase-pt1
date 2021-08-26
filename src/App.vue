<template>
  <div id= "container">
    <ul class="collection">
      <li class="collection-title"><h4>POST</h4></li>
      <li v-for="user in users" v-bind:key="user.id" class="collection-item">
        <span class="icon">{{user.status}}</span> 
           <span class="name_">{{user.name}} </span> {{user.text}} 
      </li>
    </ul>
    <button @click="open=1" class="add">ADD</button>
    <div v-if="open==1" class="New">
      <h3>New Post</h3>
      <div class="form">
        <form @submit.prevent="savePost" class="add-new">
          <!-- <div class="input-id">
            <input type="text" v-model="userid" required placeholder="User ID">
          </div> -->
          <div class="input-name">
            <input type="text" v-model="name" required placeholder="User Name">
          </div>
          <div class="input-text">
            <input type="text" v-model="text" required placeholder="Text">
          </div>
          <div class="input-status">
            <input type="text" v-model="status" required placeholder="Status">
          </div>
          <button type="submit" class="savebtn">Submit</button>
          <button class="canbtn" @click="open=0">Cancel</button>
        </form>
      </div>

    </div>

  </div>
</template>

<script>
import db from './main.js'
export default {
  name: 'container',
  data(){
    return{
      users: [],
      open:0,
      //userid: null,
      name: null,
      text: null,
      status: null,
    }
  },
  created(){
    db.collection('user').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const data = {
          
          'name': doc.data().name,
          'status': doc.data().status,
          'text': doc.data().text
        }
        this. users.push(data)
      })
    })
  },
  methods: {
    savePost(){
      db.collection('user').add({
        //id:this.id,
        name:this.name,
        text:this.text,
        status: this.status,
        
      })
      this.open=0
      
      

    }
  
}
}
</script>

<style>
body{
  text-align: center;
}
 .collection{
   list-style: none;
   
 }
 .collection-title{
   font-size: 2rem;

 }
 .collection-item{
   margin-bottom: 15px;
   text-align: left;
   position: relative;
   left: 310px;
   font-size: 1.2rem;
   
 }
 .add{
   margin-top:5px;
   padding: 7px 10px;
    border:none;
    border-radius: 2px;
    background: rgb(186, 204, 150);
 }
 .savebtn, .canbtn{
   margin-top: 10px;
   margin-right: 10px;
    border: none;
    padding: 6px;
    border-radius: 2px;
 }
 .savebtn{
   background: rgb(104, 141, 118);
    color:white;
 }
 .canbtn{
   background: rgb(46, 53, 33);
    color:white;
 }

.New{
  background:  rgb(133, 150, 104);
  width: 500px;
  padding:40px 20px;
  padding-bottom: 70px;
  position: relative;
  left:160px;
  bottom:180px;
  outline: none;
  
}
input{
  margin-top:10px;
}
.icon{
  background: rgb(219, 218, 218);
  padding: 3px 3px;
  border-radius: 5px;
}
.name_{
  margin-left: 20px;
  margin-right: 20px;
  font-weight: bold;
}

</style>