<template>
  <div class="container">
    <list-data></list-data>
  </div>
  <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <transition
      name="para"
      @before-enter="beforeEnter"
      @before-leave="beforeLeave"
    >
      <p v-if="paraIsVisible">This is only sometimes visible...</p>
    </transition>
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>

  <div class="container">
    <transition name="fade-button" mode="out-in">
      <button v-if="!userAreVisible" @click="showUsers">Show Users</button>
      <button v-else @click="hideUsers">Hide Users</button>
    </transition>
  </div>

  <base-dialog title="Hello!" :open="showDialog" @close="showDialog = false">
    <p>This is test dialog.</p>
    <template #actions>
      <base-button @click="showDialog = false">Close</base-button>
    </template>
  </base-dialog>

  <div>
    <button @click="openDialog">Show dialog</button>
  </div>

  <div class="container">
    <h3>{{ counter }}</h3>
    <button @click="increase({ value: 3 })">Add 1</button>
  </div>
</template>

<script>
import ListData from '../components/ListData.vue';
import { mapActions } from 'vuex';

export default {
  components: {
    ListData,
  },
  data() {
    return {
      animatedBlock: false,
      showDialog: false,
      paraIsVisible: false,
      userAreVisible: false,
    };
  },
  computed: {
    counter() {
      return this.$store.getters['counter/finalCounter'];
    },
  },
  methods: {
    openDialog() {
      this.showDialog = true;
    },
    animateBlock() {
      this.animatedBlock = true;
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    showUsers() {
      this.userAreVisible = true;
    },
    hideUsers() {
      this.userAreVisible = false;
    },
    beforeEnter() {
      console.log('Before enter...');
    },
    beforeLeave() {
      console.log('Before leave...');
    },
    ...mapActions('counter', ['increase']),
  },
};
</script>

<style scoped>
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  transition: all 0.5s ease-in-out;
}

.container {
  background-color: #fff;
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
  gap: 1rem;
}

button {
  border: 1px solid #ccc;
  padding: 6px;
}

.animate {
  animation: slide-fade 0.3s ease-out forwards;
}

.v-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.v-enter-active {
  transition: all 0.3s ease-out;
}

.v-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.v-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.v-leave-active {
  transition: all 0.3s ease-in;
}

.v-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

@keyframes slide-fade {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.2);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-active {
  transition: all 0.3s ease-out;
}

.fade-button-leave-active {
  transition: all 0.3s ease-in;
}

.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}
</style>
