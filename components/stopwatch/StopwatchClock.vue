<template>
  <div
    class="stopwatch-container relative w-56 h-56 p-1 bg-light rounded-full custom-shadow-1 z-[1] flex items-center justify-center"
  >
    <!-- clock indicators -->
    <stopwatch-clock-indicators></stopwatch-clock-indicators>

    <!-- clock -->
    <div
      class="w-[90%] h-[90%] rounded-full flex items-center justify-center z-40"
    >
      <p class="text-3xl text-center font-bold text-primary">
        {{ displayHours }}:{{ displayMinutes }}:{{ displaySeconds }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "StopwatchClock",
};
</script>

<script setup>
import {
  ref,
  computed,
  inject,
  watch,
  useStore,
} from "@nuxtjs/composition-api";

// variables
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);
const store = useStore();

// inject
const lap = inject("lap");
const isStopwatchStarted = inject("started");
const isStopwatchRunning = inject("running");

// emit
const emit = defineEmits(["stop", "lap"]);

// computed
const displayHours = computed(() => {
  return String(hours.value).length < 2 ? `0${hours.value}` : hours.value;
});
const displayMinutes = computed(() => {
  return String(minutes.value).length < 2 ? `0${minutes.value}` : minutes.value;
});
const displaySeconds = computed(() => {
  return String(seconds.value).length < 2 ? `0${seconds.value}` : seconds.value;
});

// methods
const calculateStopwatch = () => {
  const secondInterval = setInterval(function () {
    if (isStopwatchRunning.value) {
      if (seconds.value < 59) {
        seconds.value++;
      } else {
        if (minutes.value < 59) {
          minutes.value++;
          seconds.value = 0;
        } else {
          minutes.value = 0;
          seconds.value = 0;
          if (hours.value < 23) {
            hours.value++;
          } else {
            clearInterval(secondInterval);
            resetStopwatchData();
            store.dispatch(
              "showSnackbar",
              "Stopwatch can't run over 24 hours!"
            );
          }
        }
      }
    } else if (!isStopwatchStarted.value) {
      clearInterval(secondInterval);
    }
  }, 1000);
};

const stopStopwatch = () => {
  emit("stop");
};

const clearStopwatch = () => {
  hours.value = 0;
  minutes.value = 0;
  seconds.value = 0;
};

const resetStopwatchData = () => {
  clearStopwatch();
  stopStopwatch();
};

// watchers
watch(
  () => isStopwatchStarted.value,
  (newval) => {
    if (newval === true) {
      calculateStopwatch();
    } else {
      resetStopwatchData();
    }
  }
);
watch(
  () => lap.value,
  (newval) => {
    if (newval) {
      const currentStopwatchTime = `${displayHours.value}:${displayMinutes.value}:${displaySeconds.value}`;
      emit("lap", currentStopwatchTime);
    }
  }
);
</script>
