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
        {{ displayMinutes }}:{{ displaySeconds }}.{{ displayMilliseconds }}
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
const minutes = ref(0);
const seconds = ref(0);
const milliseconds = ref(0);
const store = useStore();

// inject
const lap = inject("lap");
const isStopwatchStarted = inject("started");
const isStopwatchRunning = inject("running");

// emit
const emit = defineEmits(["stop", "lap"]);

// computed
const displayMinutes = computed(() => {
  return String(minutes.value).length < 2 ? `0${minutes.value}` : minutes.value;
});
const displaySeconds = computed(() => {
  return String(seconds.value).length < 2 ? `0${seconds.value}` : seconds.value;
});
const displayMilliseconds = computed(() => {
  return String(milliseconds.value).length < 2
    ? `0${milliseconds.value}`
    : milliseconds.value;
});

// methods
const calculateStopwatch = () => {
  const secondInterval = setInterval(function () {
    if (isStopwatchRunning.value) {
      if (milliseconds.value < 99) {
        milliseconds.value++;
      } else {
        if (seconds.value < 59) {
          milliseconds.value = 0;
          seconds.value++;
        } else {
          if (minutes.value < 29) {
            seconds.value = 0;
            minutes.value++;
          } else {
            clearInterval(secondInterval);
            resetStopwatchData();
            store.dispatch(
              "showSnackbar",
              "Stopwatch can't run over 30 minutes!"
            );
          }
        }
      }
    } else if (!isStopwatchStarted.value) {
      clearInterval(secondInterval);
    }
  }, 10);
};

const stopStopwatch = () => {
  emit("stop");
};

const clearStopwatch = () => {
  minutes.value = 0;
  seconds.value = 0;
  milliseconds.value = 0;
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
      const currentStopwatchTime = `${displayMinutes.value}:${displaySeconds.value}.${displayMilliseconds.value}`;
      emit("lap", currentStopwatchTime);
    }
  }
);
</script>
