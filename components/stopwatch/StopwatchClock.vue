<template>
  <div
    class="stopwatch-container relative w-56 h-56 p-1 bg-light rounded-full custom-shadow-1 z-[1] flex items-center justify-center"
  >
    <!-- clock indicators -->
    <stopwatch-clock-indicators
      :degree="indicatorsProgressDegree"
    ></stopwatch-clock-indicators>

    <!-- clock -->
    <div
      v-if="isStopwatchStarted"
      class="w-[90%] h-[90%] rounded-full flex items-center justify-center z-40"
    >
      <p class="text-3xl text-center font-bold text-primary">
        {{ displayHours }}:{{ displayMinutes }}:{{ displaySeconds }}
      </p>
    </div>

    <!-- clock inputs -->
    <div v-else class="w-full p-4 flex items-center justify-center gap-1">
      <input
        type="number"
        maxlength="2"
        class="w-10 h-10 p-2 bg-inherit border-2 border-secondary rounded-xl text-center"
        oninput="javascript: if (this.value.length > this.maxLength) this.value = +this.value.slice(0, this.maxLength);"
        v-model.number="hours"
      />
      <span>:</span>
      <input
        type="number"
        maxlength="2"
        class="w-10 h-10 p-2 bg-inherit border-2 border-secondary rounded-xl text-center"
        oninput="javascript: if (this.value.length > this.maxLength) this.value = +this.value.slice(0, this.maxLength);"
        v-model.number="minutes"
      />
      <span>:</span>
      <input
        type="number"
        maxlength="2"
        class="w-10 h-10 p-2 bg-inherit border-2 border-secondary rounded-xl text-center"
        oninput="javascript: if (this.value.length > this.maxLength) this.value = +this.value.slice(0, this.maxLength);"
        v-model.number="seconds"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "StopwatchClock",
};
</script>

<script setup>
import { ref, computed, inject, watch } from "@nuxtjs/composition-api";

// variables
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);
const totalSeconds = ref(0);
const isValid = ref(false);
const validationError = ref("");

// inject
const isStopwatchStarted = inject("started");
const isStopwatchRunning = inject("running");

// emit
const emit = defineEmits(["stop", "not-valid"]);

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
const indicatorsProgressDegree = computed(() => {
  if (isStopwatchStarted.value) {
    const totalMinutes = hours.value * 60 + minutes.value;
    const currentTotalSeconds = totalMinutes * 60 + seconds.value;
    const indicatorsDegree = 360 / (totalSeconds.value / currentTotalSeconds);
    return indicatorsDegree;
  } else {
    return 360;
  }
});

// methods
const calculateStopwatch = () => {
  const totalMinutes = hours.value * 60 + minutes.value;
  totalSeconds.value = totalMinutes * 60 + seconds.value;

  const secondInterval = setInterval(function () {
    if (isStopwatchRunning.value) {
      if (seconds.value > 0) {
        seconds.value--;
      } else {
        if (minutes.value > 0) {
          minutes.value--;
          seconds.value = 59;
        } else {
          if (hours.value > 0) {
            hours.value--;
            minutes.value = 59;
          } else {
            resetStopwatchData();
            clearInterval(secondInterval);
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
  totalSeconds.value = 0;
};

const resetStopwatchData = () => {
  clearStopwatch();
  stopStopwatch();
};

const checkStopwatchValidation = () => {
  if (hours.value > 24) {
    validationError.value = "Please enter a maximum of 24 hours.";
  } else if (hours.value < 0) {
    validationError.value = "Hours value cannot be less than Zero.";
  } else if (minutes.value > 60) {
    validationError.value = "Please enter a maximum of 60 minutes.";
  } else if (minutes.value < 0) {
    validationError.value = "Minutes value cannot be less than Zero.";
  } else if (seconds.value > 59) {
    validationError.value = "Please enter a maximum of 59 seconds.";
  } else if (seconds.value < 0) {
    validationError.value = "Seconds value cannot be less than Zero.";
  } else if (seconds.value === 0 && minutes.value === 0 && hours.value === 0) {
    validationError.value =
      "Hours & Minutes & Seconds value cannot be both empty.";
  } else {
    validationError.value = "";
    isValid.value = true;
  }
};

// watchers
watch(
  () => isStopwatchStarted.value,
  (newval) => {
    if (newval === true) {
      checkStopwatchValidation();

      if (isValid.value) {
        calculateStopwatch();
      } else {
        emit("not-valid", validationError.value);
      }
    } else {
      resetStopwatchData();
    }
  }
);
</script>
