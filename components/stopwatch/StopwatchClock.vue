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
      <!-- show the stopwatch current time inside the circle -->
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
// |- stopwatch values at the first place
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
  // if current minute has just one digit, display it with a '0' before it, else, show it completely
  return String(minutes.value).length < 2 ? `0${minutes.value}` : minutes.value;
});
const displaySeconds = computed(() => {
  // if current second has just one digit, display it with a '0' before it, else, show it completely
  return String(seconds.value).length < 2 ? `0${seconds.value}` : seconds.value;
});
const displayMilliseconds = computed(() => {
  // if current millisecond has just one digit, display it with a '0' before it, else, show it completely
  return String(milliseconds.value).length < 2
    ? `0${milliseconds.value}`
    : milliseconds.value;
});

// methods
const calculateStopwatch = () => {
  // set an interval on stopwatch, running every 10 milliseconds
  const secondInterval = setInterval(function () {
    // if stopwatch is running, continue running this interval. else, stop it (line 100).
    if (isStopwatchRunning.value) {
      if (milliseconds.value < 99) {
        // if millisecond is less than 99, increase it
        milliseconds.value++;
      } else {
        // if millisecond is 99 or more,
        if (seconds.value < 59) {
          // if second is less than 59, increase seconds & reset milliseconds
          milliseconds.value = 0;
          seconds.value++;
        } else {
          // if second is 59 or more,
          if (minutes.value < 29) {
            // if minute is less then 29, increase minutes & reset seconds
            seconds.value = 0;
            minutes.value++;
          } else {
            // if minute is 29 or more,
            clearInterval(secondInterval); // stop the interval
            resetStopwatchData(); // reset all changes
            // show a snackbar with timeout message, cause the stopwatch shouldn't run over 30 minutes
            store.dispatch(
              "showSnackbar",
              "Stopwatch can't run over 30 minutes!"
            );
          }
        }
      }
    } else if (!isStopwatchStarted.value) {
      // stop the interval
      clearInterval(secondInterval);
    }
  }, 10);
};

const stopStopwatch = () => {
  // stop (pause) the stopwatch
  emit("stop");
};

const clearStopwatch = () => {
  // reset all changes
  minutes.value = 0;
  seconds.value = 0;
  milliseconds.value = 0;
};

const resetStopwatchData = () => {
  // reset all changes & data, and completely stop stopwatch
  clearStopwatch();
  stopStopwatch();
};

// watchers
watch(
  () => isStopwatchStarted.value,
  (newval) => {
    if (newval === true) {
      // while stopwatch got started, start running the interval and more
      calculateStopwatch();
    } else {
      // and when it got stopped, clear & reset enything
      resetStopwatchData();
    }
  }
);
watch(
  () => lap.value,
  (newval) => {
    // each time the lap value change (a new lap submitted), send stopwatch's current time to parent
    if (newval) {
      const currentStopwatchTime = `${displayMinutes.value}:${displaySeconds.value}.${displayMilliseconds.value}`;
      emit("lap", currentStopwatchTime);
    }
  }
);
</script>
