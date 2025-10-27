<template>
  <transition-group tag="ul" name="user-list">
    <li v-for="user in users" :key="user" @click="removeUser(user)">
      {{ user }}
    </li>
  </transition-group>

  <div>
    <input ref="userNameInput" type="text" />
    <button @click="addUser">Add User</button>
  </div>
</template>

<script>
export default {
  name: 'ListData',
  data() {
    return {
      users: ['Item 1', 'Item 2', 'Item 3'],
    };
  },
  methods: {
    addUser() {
      const enteredUserName = this.$refs.userNameInput.value;
      this.users.push(enteredUserName);
    },
    removeUser(user) {
      this.users = this.users.filter((u) => u !== user);
    },
  },
};
</script>

<style scoped>
li {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
  cursor: pointer;
  margin: 1rem;
}

input,
button {
  border: 1px solid #ccc;
}

.user-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.user-list-enter-active {
  transition: all 0.5s ease-out;
}

.user-list-enter-to,
.user-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.user-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.user-list-leave-active {
  transition: all 0.5s ease-in;
}
</style>
