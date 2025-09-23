<template>
  <div class="student-detail">
    <div class="flex items-center justify-between">
      <h3 class="text-2xl">Thêm mới học sinh</h3>
      <div class="flex items-center gap-3">
        <base-button
          :style="{
            height: '38px',
            borderRadius: '52px',
            background: '#fff',
            color: '#010101',
          }"
          >cancel</base-button
        >
        <base-button
          :style="{
            height: '38px',
            borderRadius: '52px',
            background: '#fff',
            color: '#010101',
          }"
          >reset</base-button
        >
        <base-button
          :style="{
            height: '38px',
            borderRadius: '52px',
            background: '#2F7BFF',
            color: '#fff',
          }"
          >save</base-button
        >
      </div>
    </div>
    <div class="py-4 flex gap-2">
      <div class="w-1/2 bg-white rounded-2xl">
        <div class="py-4 px-5 border-b border-gray-300">
          <h4 class="text-xl">Basic Information</h4>
        </div>
        <div class="py-4 px-5 flex gap-3">
          <div class="w-1/2">
            <div class="form-group mb-5">
              <label for="firstName" class="mb-2 inline-block"
                >First Name</label
              >
              <input
                id="firstName"
                type="text"
                class="border border-gray-300 rounded-lg h-10 px-4"
                placeholder="First Name"
              />
            </div>
            <div class="form-group mb-5">
              <label for="firstName" class="mb-2 inline-block">Gender</label>
              <div class="flex items-center">
                <base-radio v-model="gender" value="male" class="w-1/2"
                  >Male</base-radio
                >
                <base-radio v-model="gender" value="female" class="w-1/2"
                  >Female</base-radio
                >
              </div>
            </div>
          </div>
          <div class="w-1/2">
            <div class="form-group">
              <label for="lastName" class="mb-2 inline-block">Last Name</label>
              <input
                id="lastName"
                type="text"
                class="border border-gray-300 rounded-lg h-10 px-4"
                placeholder="Last Name"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/2 bg-white rounded-2xl">right</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const gender = ref('male');
</script>

<style scoped>
.student-detail {
  font-family: 'Inter', sans-serif;
}
</style>
