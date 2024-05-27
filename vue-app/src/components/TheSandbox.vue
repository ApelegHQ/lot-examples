<script setup>
import browserSandbox from '@exact-realty/lot/browser-worker';
import url from '../lib/sandbox.outer.js';
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
    fetch(url, {
      headers: { accept: 'text/javascript' },
      signal: this.abortController.signal,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Unexpected status code: ' + response.status);
        }
        return response.text();
      })
      .then((text) => browserSandbox(text, null, null, this.abortController.signal))
      .then((sandbox) => sandbox('vocative'))
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
