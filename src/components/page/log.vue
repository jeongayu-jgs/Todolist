<template>
  <div>
    <h4>Log Page</h4>
    <h5>received : {{msg.receive}}</h5>
    <input type="text" v-model="msg.send" >
    <button @click="sendMsg">send</button>
  </div>
</template>
<script>
import io from 'socket.io-client'
const socket = io('http://192.168.0.71:8500/')
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
    
    socket.emit('login', {
      name: 'jeonga',
      userid: 'junga152@naver.com'
    })

    const _this = this

    socket.on('login', data => {
      _this.msg.receive = data
    })

    socket.on('chat', data => {
      _this.msg.receive = data
    })
  },
  methods: {
    sendMsg() {
      const msg = this.msg.send

      console.log(msg)

      socket.emit('chat', {
        name: 'jeonga',
        msg: msg
      })

      this.msg.send = null
    }
  }
}
</script>