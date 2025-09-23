<template>
  <div class="rounded-lg bg-white shadow-lg p-4">
    <div class="flex items-center justify-between">
      <h4 class="text-xl">Danh sách học sinh</h4>
      <div class="flex items-center gap-5">
        <button class="p-1 rounded hover:bg-gray-100">
          <!-- Icon filter -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
              stroke="#525252"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.5699 18.5001V14.6001"
              stroke="#525252"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.5699 7.45V5.5"
              stroke="#525252"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.57 12.65C17.0059 12.65 18.17 11.4859 18.17 10.05C18.17 8.61401 17.0059 7.44995 15.57 7.44995C14.134 7.44995 12.97 8.61401 12.97 10.05C12.97 11.4859 14.134 12.65 15.57 12.65Z"
              stroke="#525252"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.43005 18.5V16.55"
              stroke="#525252"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.43005 9.4V5.5"
              stroke="#525252"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.42996 16.5501C9.8659 16.5501 11.03 15.386 11.03 13.9501C11.03 12.5142 9.8659 11.3501 8.42996 11.3501C6.99402 11.3501 5.82996 12.5142 5.82996 13.9501C5.82996 15.386 6.99402 16.5501 8.42996 16.5501Z"
              stroke="#525252"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <div class="flex items-center flex-1 rounded-lg border wrap-search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 text-gray-400 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search by Name or roll."
            class="flex-1 bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
          />
        </div>

        <div class="relative">
          <button
            class="flex items-center gap-2 px-3 py-2 bg-white hover:bg-gray-100 selectbox-custom"
          >
            <span>All Classes</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <!-- Dropdown menu (ẩn/hiện bằng JS) -->
          <!--
    <div class="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200">
      <a href="#" class="block px-4 py-2 hover:bg-gray-50">Class A</a>
      <a href="#" class="block px-4 py-2 hover:bg-gray-50">Class B</a>
    </div>
    -->
        </div>
      </div>
    </div>
    <div class="bg-white rounded-xl overflow-x-auto">
      <base-table :columns="columns" :data-source="dataSource">
        <template #student="{ data }">
          <div class="flex items-center gap-2">
            <img :src="data.avatar" class="w-6 h-6 rounded-full" alt="avatar" />
            {{ data.student }}
          </div>
        </template>
        <template #actions="{ data }">
          <div class="flex items-center justify-center gap-2">
            <button
              class="p-1 rounded hover:bg-gray-100"
              @click="updateStudent(data)"
            >
              <svg
                class="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.232 5.232l3.536 3.536M16.732 3.732a2.5 2.5 0 013.536 3.536L7.5 20.536H4v-3.536L16.732 3.732z"
                />
              </svg>
            </button>
            <button class="p-1 rounded hover:bg-gray-100">
              <svg
                class="w-4 h-4 text-red-500"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22M10 3h4a1 1 0 011 1v1H9V4a1 1 0 011-1z"
                />
              </svg>
            </button>
            <button class="p-1 rounded hover:bg-gray-100">
              <svg
                class="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </button>
          </div>
        </template>
      </base-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        { key: 'no', label: 'STT' },
        { key: 'student', label: 'Học sinh' },
        { key: 'roll', label: 'Mã số học sinh' },
        { key: 'class', label: 'Lớp' },
        { key: 'accomType', label: 'Accom_Type' },
        { key: 'location', label: 'Địa chỉ' },
        { key: 'actions', label: 'Thao tác' },
      ],
      dataSource: [
        {
          no: '01',
          avatar: 'https://i.pravatar.cc/30',
          student: 'Sophia Wilson',
          roll: '522bcs009',
          class: '12 - A',
          accomType: 'Hosteller',
          location: 'Singanallur',
        },
        {
          no: '02',
          avatar: 'https://i.pravatar.cc/31',
          student: 'Sophia Wilson',
          roll: '522bcs009',
          class: '12 - A',
          accomType: 'Hosteller',
          location: 'Singanallur',
        },
      ],
    };
  },
  methods: {
    updateStudent(data) {
      console.log('>>> data: ', data);
    },
  },
};
</script>

<style scoped>
.wrap-search {
  height: 29px;
  border-radius: 42px;
  background-color: #f5f4f9;
  padding: 0 8px;
  width: 217px;
}

.wrap-search input {
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
}

.selectbox-custom {
  background-color: #f5f4f9;
  height: 27px;
  /* width: 97px; */
  font-size: 12px;
  color: #777777;
  border-radius: 5px;
}

table thead {
  background-color: #f4faff;
}
</style>
