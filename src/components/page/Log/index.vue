<template>
  <div style="border: 1px solid #f5f5f5;">
    <h4>Log Page</h4>
    <h5>received : {{msg.receive}}</h5>
    <!-- <input type="text" v-model="msg.send" >
    <button @click="sendMsg">send</button> -->
  </div>
</template>
<script>
import io from 'socket.io-client'
// const socket = io('http://192.168.0.71:8500/')
const socket = io('http://192.168.0.97:5000/')
export default {
  data () {
    return {
      msg: {
        send: null, // 보낸거
        receive: null // 받은거
      }
    }
  },
  created() {

    // this.axios.get('http://localhost:5000/api/nav')
    // .then(d=> {
    //   console.log(d)
    // })
    
    // socket.emit('broadcast', {
    //   name: 'jeonga',
    //   userid: 'junga152@naver.com'
    // })

    const _this = this

    // socket.on('login', data => {
    //   _this.msg.receive = data
    // })

    socket.on('broadcast', data => {
      _this.msg.receive = data
    })
  },
  methods: {
    sendMsg() {
      const msg = this.msg.send

      console.log(msg)

      socket.emit('broadcast', {
        name: 'jeonga',
        msg: msg
      })

      this.msg.send = null
    }
  }
}
</script>