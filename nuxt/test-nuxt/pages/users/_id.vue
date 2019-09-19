<template>
  <div>
    <h1>{{user.name}}</h1>
    <h2>{{user.email}}</h2> 
  </div>
</template>

<script>
export default {
  validate({params}) {
    return /^\d+$/.test(params.id)
  },
  async asyncData({params, store, error}) {
    try {
      const user = await store.dispatch('users/fetchUserById', params.id )
      return {user}
    } catch (e) {
      error(e)
    }

    // return $axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    //   .then(user => ({user: user.data})
    //   )
    //   .catch(err => {
    //     error(err)
    //   })
  },
}
</script>