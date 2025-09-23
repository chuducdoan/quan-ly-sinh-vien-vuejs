<template>
  <div class="home-container">
    <div class="home-top">
      <div class="home-top-item home-event">
        <img src="../assets/image/home-event.png" alt="" />
        <img
          src="../assets/image/home-event-shadow.png"
          alt=""
          class="backfit"
        />
        <p>Upcoming Events</p>
      </div>
      <div class="home-top-item home-honours">
        <img src="../assets/image/honours.png" alt="" />
      </div>
      <div class="home-top-item">
        <vc-calendar
          :value="selectedDate"
          is-dark
          class="custom-calendar"
          :attributes="attrs"
          @dayclick="onDayClick"
        />
      </div>
    </div>
    <div class="home-center">
      <div class="home-center-item home-center-item1">
        <div class="home-center-item-head">
          <span class="title">Staff</span>
          <span class="view-all">View all</span>
        </div>
        <div class="home-center-item-body">
          <home-card></home-card>
          <home-card></home-card>
          <home-card></home-card>
        </div>
      </div>
      <div class="home-center-item home-center-item2">
        <div class="home-center-item-head">
          <span class="title">Top Students</span>
        </div>
        <div class="home-center-item-body">
          <home-top-student></home-top-student>
          <home-top-student></home-top-student>
          <home-top-student></home-top-student>
        </div>
      </div>
    </div>
    <div class="home-center">
      <div class="home-center-item home-center-item2">
        <base-chart></base-chart>
      </div>
      <div class="home-center-item home-center-item1"></div>
    </div>
  </div>
</template>

<script>
import HomeCard from '../components/home/HomeCard.vue';
import HomeTopStudent from '../components/home/HomeTopStudent.vue';
import BaseChart from '../components/UI/BaseChart.vue';

export default {
  components: {
    HomeCard,
    HomeTopStudent,
    BaseChart,
  },
  data() {
    return {
      selectedDate: new Date(),
    };
  },
  computed: {
    attrs() {
      return [
        {
          key: 'selected',
          highlight: true,
          dates: this.selectedDate,
        },
      ];
    },
  },
  methods: {
    onDayClick(day) {
      this.selectedDate = day.date;
    },
  },
};
</script>

<style scoped>
.home-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.home-top-item {
  width: calc(100% / 3 - 13.3px);
  box-shadow: 7px 7px 4px 0px rgba(0, 0, 0, 0.25);
  height: 309px;
  border-radius: 20px;
  overflow: hidden;
}

.home-event {
  font-family: 'Ephesis', cursive;
  color: #fff;
  font-size: 30px;
  text-align: center;
  overflow: hidden;
  position: relative;
}

.home-event img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.home-event .backfit {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
.home-event p {
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.home-honours img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.home-center {
  display: flex;
  gap: 20px;
  margin-top: 30px;
}

.home-center-item {
  height: auto;
  box-shadow: 7px 7px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  border-radius: 20px;
  padding: 16px;
}

.home-center-item1 {
  width: calc(100% / 3 - 10px);
}

.home-center-item2 {
  flex-grow: 1;
}

.home-center-item1 .home-center-item-head {
  margin-bottom: 16px;
}

.home-center-item-head {
  display: flex;
  justify-content: space-between;
}

.home-center-item-head span.view-all {
  font-size: 12px;
  cursor: pointer;
}

.home-center-item-head .title {
  font-size: 18px;
  font-weight: bold;
}

.home-center-item2 .home-center-item-body {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
}

@media (max-width: 1024px) {
  .home-top-item {
    height: 222px;
    border-radius: 14px;
  }

  .home-event {
    font-size: 24px;
    white-space: nowrap;
  }
}

@media (max-width: 768px) {
  .home-top,
  .home-center {
    flex-wrap: wrap;
    gap: 16px;
  }
  .home-top-item {
    width: calc(50% - 10px);
  }

  .home-center-item {
    width: calc(50% - 10px);
  }
}

@media (max-width: 480px) {
  .home-top-item,
  .home-center-item {
    width: 100%;
  }
}
</style>
