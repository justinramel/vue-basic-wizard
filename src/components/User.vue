<template>
  <div class="user-form">
    <h1>User</h1>
    <form>
      <label>First Name
        <input type="text" placeholder="Joe" v-model="user.firstName" />
      </label>
      <label>Last Name
        <input type="text" placeholder="Blogs" v-model="user.lastName" />
      </label>
    </form>
    <button v-on:click="next">Next</button>
  </div>
</template>

<script>
export default {
  props: ['user', 'next']
}
</script>
