<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Create new ad</h1>
            <v-form v-model="valid" ref="form" validation>
              <v-text-field
                label="Ad title"
                name="title"
                type="text"
                v-model="title"
                :rules="[ v => !!v || 'Title is required']"
              ></v-text-field>

              <v-textarea
                label="Ad description"
                name="description"
                type="text"
                :rules="[ v => !!v || 'Description is required']"
                multi-line
                v-model="description"
              ></v-textarea>
            </v-form>
            <v-layout row>
              <v-flex xs12>
                  <v-btn
                    color="blue-grey"
                    class="ma-2 white--text mb-5"
                    @click="truggerUpload"
                  >
                    Upload
                    <v-icon right dark>mdi-cloud-upload</v-icon>
                  </v-btn>
                  <input ref="fileInput" 
                    @change="onFileChange"
                    type="file" 
                    style="display: none;" 
                    accept="image/*">
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12>
                <img v-if="imageSrc" :src="imageSrc" height="100" alt="">
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12>
                <v-switch
                color="primary"
                  label="Add to promo?"
                  v-model="promo">
                </v-switch>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12>
               <v-spacer></v-spacer>
               <v-btn class="success"
               :disabled="!valid"
                @click="createAd">Create Ad</v-btn>
              </v-flex>
            </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      valid: false,
      title: "",
      description: "",
      promo: false,
      image: null,
      imageSrc: ''
    }
  },
  methods: {
    createAd() {
      if (this.$refs.form.validate()) {
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo,
          image: this.image
        }
        this.$store.dispatch('createAd', ad)
      }
    },
    truggerUpload() {
      this.$refs.fileInput.click()
    },
    onFileChange(event) {
      const file = event.target.files[0]
      const reader = new FileReader()
      
      reader.readAsDataURL(file)
      reader.onload = e => {
        this.imageSrc = reader.result
      }
      this.image = file
    }
  },
};
</script>
