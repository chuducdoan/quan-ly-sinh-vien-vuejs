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
    <div class="py-4 flex gap-3">
      <!--left -->
      <div class="flex-1">
        <div class="bg-white rounded-2xl min-w-0 mb-3">
          <div class="py-4 px-5 border-b border-gray-300">
            <h4 class="text-xl">Basic Information</h4>
          </div>
          <div class="py-4 px-5 flex gap-5">
            <!-- left column -->
            <div class="flex-1 min-w-0">
              <div class="form-group mb-5">
                <label for="firstName" class="mb-2 inline-block"
                  >First Name</label
                >
                <input
                  id="firstName"
                  type="text"
                  class="border border-gray-300 rounded-lg h-10 px-4 w-full"
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
              <div class="form-group mb-5">
                <label for="firstName" class="mb-2 inline-block"
                  >Date of birth</label
                >
                <base-datepicker></base-datepicker>
              </div>
              <div class="form-group mb-5 flex gap-3">
                <div class="flex-1 min-w-0">
                  <base-select></base-select>
                </div>
                <div class="flex-1 min-w-0">
                  <base-select></base-select>
                </div>
              </div>
            </div>
            <!-- right column -->
            <div class="flex-1 min-w-0">
              <div class="form-group mb-5">
                <label for="lastName" class="mb-2 inline-block"
                  >Last Name</label
                >
                <input
                  id="lastName"
                  type="text"
                  class="border border-gray-300 rounded-lg h-10 px-4"
                  placeholder="Last Name"
                />
              </div>
              <div class="form-group">
                <base-upload></base-upload>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-2xl min-w-0">
          <div class="py-4 px-5 border-b border-gray-300">
            <h4 class="text-xl">Parent Details</h4>
          </div>
          <div class="py-4 px-5 flex gap-5">
            <!-- left column -->
            <div class="flex-1 min-w-0">
              <div class="form-group mb-5">
                <label for="fatherName" class="mb-2 inline-block"
                  >Father Name</label
                >
                <input
                  id="fatherName"
                  type="text"
                  class="border border-gray-300 rounded-lg h-10 px-4 w-full"
                  placeholder="Father Name"
                />
              </div>
              <div class="form-group mb-5">
                <label for="fatherContact" class="mb-2 inline-block"
                  >Father Contact</label
                >
                <input
                  id="fatherContact"
                  type="text"
                  class="border border-gray-300 rounded-lg h-10 px-4 w-full"
                  placeholder="Father Contact"
                />
              </div>
              <div class="form-group mb-5">
                <label for="fatherOccupation" class="mb-2 inline-block"
                  >Father Occupation</label
                >
                <input
                  id="fatherOccupation"
                  type="text"
                  class="border border-gray-300 rounded-lg h-10 px-4 w-full"
                  placeholder="Father Occupation"
                />
              </div>
            </div>
            <!-- right column -->
            <div class="flex-1 min-w-0">
              <div class="form-group mb-5">
                <label for="motherName" class="mb-2 inline-block"
                  >Mother Name</label
                >
                <input
                  id="motherName"
                  type="text"
                  class="border border-gray-300 rounded-lg h-10 px-4 w-full"
                  placeholder="Mother Name"
                />
              </div>
              <div class="form-group mb-5">
                <label for="motherContact" class="mb-2 inline-block"
                  >Mother Contact</label
                >
                <input
                  id="motherContact"
                  type="text"
                  class="border border-gray-300 rounded-lg h-10 px-4 w-full"
                  placeholder="Mother Contact"
                />
              </div>
              <div class="form-group mb-5">
                <label for="annual Income" class="mb-2 inline-block"
                  >Annual Income</label
                >
                <input
                  id="annual Income"
                  type="text"
                  class="border border-gray-300 rounded-lg h-10 px-4 w-full"
                  placeholder="Annual Income"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- right -->
      <div class="flex-1">
        <div class="bg-white rounded-2xl min-w-0 mb-3">
          <div class="py-4 px-5 border-b border-gray-300">
            <h4 class="text-xl">Login/Account Details</h4>
          </div>
          <div class="py-4 px-5 flex gap-5">
            <!-- left column -->
            <div class="flex-1 min-w-0">
              <div class="form-group mb-5">
                <label for="userName" class="mb-2 inline-block"
                  >User Name</label
                >
                <input
                  id="userName"
                  type="text"
                  class="border border-gray-300 rounded-lg h-10 px-4 w-full"
                  placeholder="User Name"
                />
              </div>
            </div>
            <!-- right column -->
            <div class="flex-1 min-w-0">
              <div class="form-group mb-5">
                <label for="password" class="mb-2 inline-block">Password</label>
                <input
                  id="password"
                  type="text"
                  class="border border-gray-300 rounded-lg h-10 px-4"
                  placeholder="Password"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-2xl min-w-0 mb-3">
          <div class="py-4 px-5 border-b border-gray-300">
            <h4 class="text-xl">Contact Information</h4>
          </div>
          <div class="py-4 px-5 flex flex-wrap gap-x-5">
            <!-- left column -->
            <div class="flex-1 min-w-0">
              <div class="form-group mb-5">
                <label for="phone" class="mb-2 inline-block">Phone</label>
                <input
                  id="phone"
                  type="text"
                  class="border border-gray-300 rounded-lg h-10 px-4 w-full"
                  placeholder="Contact number"
                />
              </div>
            </div>
            <!-- right column -->
            <div class="flex-1 min-w-0">
              <div class="form-group mb-5">
                <label for="email" class="mb-2 inline-block">Email</label>
                <input
                  id="email"
                  type="text"
                  class="border border-gray-300 rounded-lg h-10 px-4"
                  placeholder="example@gmail.com"
                />
              </div>
            </div>

            <div class="w-full min-w-0">
              <div class="form-group mb-5">
                <label class="mb-2 block">Address</label>
                <input
                  type="text"
                  class="border border-gray-300 rounded-lg h-10 px-4 w-full"
                  placeholder="Area and Street"
                />
              </div>
              <div class="flex gap-5">
                <!-- left column -->
                <div class="flex-1 min-w-0">
                  <div class="form-group mb-5">
                    <input
                      type="text"
                      class="border border-gray-300 rounded-lg h-10 px-4 w-full"
                      placeholder="Location"
                    />
                  </div>
                  <div class="form-group mb-5">
                    <input
                      type="text"
                      class="border border-gray-300 rounded-lg h-10 px-4 w-full"
                      placeholder="Pincode"
                    />
                  </div>
                </div>
                <!-- right column -->
                <div class="flex-1 min-w-0">
                  <div class="form-group mb-5">
                    <input
                      type="text"
                      class="border border-gray-300 rounded-lg h-10 px-4 w-full"
                      placeholder="District"
                    />
                  </div>
                  <div class="form-group mb-5">
                    <input
                      type="text"
                      class="border border-gray-300 rounded-lg h-10 px-4 w-full"
                      placeholder="State"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
