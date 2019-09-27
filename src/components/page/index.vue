<template>
  <div>
    <todo-content></todo-content>
    <log-content></log-content>
  </div>
</template>
<script>
import todoContent from '@/components/page/Todo'
import logContent from '@/components/page/Log'
export default {
  components: {
    todoContent,
    logContent
  }
}
</script>