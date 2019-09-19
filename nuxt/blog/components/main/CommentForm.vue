<template>
  <el-form 
    :model="controls" 
    @submit.native.prevent="onSubmit"
    :rules="rules" 
    ref="form" >
    <h1>Добавить Комментарий</h1>
    <el-form-item label="Ваше имя" prop="name">
      <el-input v-model.trim="controls.name" />
    </el-form-item>
    <el-form-item label="Текст комментария" prop="text">
      <el-input 
      type="textarea"
      resize="none"
      :rows="2"
      v-model="controls.text" />
    </el-form-item>

    <el-form-item>
      <el-button type="primary"
      native-type="submit"
       round
       :loading="loading"
       >Добавить комментарий</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    data() {
      return {
        loading: false,
        controls: {
          name: '',
          text: ''
        },
        rules: {
          name: [
            { required: true, message: 'Имя не должно быть пустым', trigger: 'blur' },
          ],
          text: [
            { required: true, message: 'Введите ваш коментарий', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      onSubmit() {
        this.$refs.form.validate( valid => {
          if (valid) {
            this.loading = true

            const formData = {
              name: this.controls.name,
              text: this.controls.text,
              postId: ''
            }

            try {
              this.$message.success('Комментарий добален')
              this.$emit('created')
            } catch(e) {
              this.loading = false
            }
          }
        })
      } 
    },
  }

</script>

<style lang="scss" scoped>

</style>
