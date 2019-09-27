<template>
  <div style="border:1px solid #f5f5f5;">
    <h4>Todo list</h4>
      <div v-for="d in list" :key="d.T_ID" style="display:flex;justify-content:center;">
        <div>{{d.T_CONTENT}}</div>
        <div>{{d.T_STATUS}}</div>
        <div>{{d.T_PRIORITY}}</div>
        <div>{{d.USER_ID}}</div>
        <div>{{d.ST_DATE | date}}</div>
        <div>{{d.EN_DATE | date}}</div>
        <div>{{d.UP_DATE | date}}</div>
        <div @click="todo_update(d)">Update</div>
        <div @click="todo_delete(d.T_ID)">Delete</div>
      </div>
      <div>
        <input type="text" v-model="t_content" placeholder="content">
        <input type="text" v-model="st_date" placeholder="start date">
        <input type="text" v-model="en_date" placeholder="end date">
        <input type="text" v-model="t_priority" placeholder="priority">
        <input type="text" v-model="t_status" placeholder="status">
        <div @click="todo_create()">Create</div>
      </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
import moment from 'moment'
export default {
  data () {
    return {
      t_content: null,
      st_date: null,
      en_date: null,
      t_priority: null,
      t_status: 'testing'
    }
  },
  created() {

  },
  methods: {
    async todo_create(){
      const data = this.formdata()

      const res = await this.$store.dispatch('todo/TODO_CREATE', data)
    },
    async todo_delete(id){
      try {
        const data = {
          user_id : 'test@gmail.com',
          t_id : id
        }
        console.log(data)
        // await this.$store.dispatch('todo/TODO_DELETE', data)  
      } catch (error) {
        console.log(error)
        throw error
      }
      
    },
    formdata() {
      const data = {
        t_content: this.t_content,
        st_date: this.st_date,
        en_date: this.en_date,
        t_priority: this.t_priority,
        t_status: this.t_status,
        // user_id: this.user.id
        user_id: 'tes@gmail.com'
      }
      return data
    }
  },
  filters: {
    date (value) {
      if (value) return moment(value).format('DD-MMM-YY')
      else return '-'
    }
  },
  computed: {
    ...mapGetters({
      list : 'todo/list',
      user: 'user'
    })
  }
}
</script>