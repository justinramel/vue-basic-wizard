<template>
  <div class="address-form">
    <h1>Address</h1>
    <form>
      <label>Line 1
        <input type="text" placeholder="1 Claremont Tower" />
      </label>
      <label>Post Code
        <input type="text" placeholder="NE1 7RU" />
      </label>
    </form>
    <button v-on:click="next">Next</button>
    <button v-on:click="prev">Prev</button>
  </div>
</template>

<script>
export default {
  props: ['next', 'prev']
}
</script>
