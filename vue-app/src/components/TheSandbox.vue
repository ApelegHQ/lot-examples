<script setup>
import vocative from '../lib/sandbox.outer.js';
</script>

<template>
  <p>
    <template v-if="result === null">
      <em>Pending...</em>
    </template>
    <template v-if="(result instanceof Error)">
      <strong class="sandbox-error">{{ result.message }}</strong>
    </template>
    <template v-else>
      <strong class="sandbox-success">{{ result }}</strong>
    </template>
  </p>
</template>

<script>
export default {
  name: 'TheSandbox',
  data () {
    return {
      abortController: new AbortController(),
      result: null,
    }
  },
  mounted() {
    vocative(this.abortController.signal)
      .then((v) => { this.result = `Hello, ${v}!`; })
      .catch((e) => {
        console.error('Sandbox init error', e);
        this.result = new Error(`Error: ${e?.message || e}`, { cause: e });
      });
  },
  beforeUnmount() {
    this.abortController.abort()
  }
};
</script>
