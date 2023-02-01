<script lang="ts">
import { RadioField } from '../index.ts';

export default {
    components: {
        RadioField,
    },
    data() {
        return {
            color: 'orange',
        }
    }
}
</script>

<template>
    <form id="app" class="container mx-auto mb-6">
        <h1 class="text-4xl mb-6">radio-field</h1>

        <h3 class="text-2xl mb-3">Block Layout</h3>

        <div class="mb-3">color: {{ color }}</div>

        <radio-field v-model="color" name="color" value="red" id="blah">Red</radio-field>
        <radio-field v-model="color" name="color" value="green">Green</radio-field>
        <radio-field v-model="color" name="color" value="blue">Blue</radio-field>
        <radio-field v-model="color" name="color" value="yellow" readonly>Yellow (Readonly)</radio-field>
        <radio-field v-model="color" name="color" value="orange" disabled>Orange (Disabled)</radio-field>

        <h5 class="text-2xl mt-6 mb-3">Inline Layout</h5>

        <radio-field name="inline" label="Red" value="red" inline></radio-field>
        <radio-field name="inline" label="Green" value="green" inline></radio-field>
        <radio-field name="inline" label="Blue" value="blue" inline></radio-field>
        <radio-field name="inline" label="Yellow" value="yellow" readonly inline>Yellow (Readonly)</radio-field>

        <hr class="my-6">

        <h3 class="text-3xl mb-3">Sizes</h3>

        <radio-field name="size" size="sm" placeholder="Small">Small</radio-field>
        <radio-field name="size" size="md" placeholder="Medium">Medium</radio-field>
        <radio-field name="size" size="lg" placeholder="Large">Large</radio-field>

        <hr class="my-6">

        <h3 class="text-3xl mb-3">Validation</h3>

        <radio-field label="Single Inline Error" required error="This is an inline error."></radio-field>
        <radio-field name="multiple" label="Multiple Errors From Object"
            :errors="{ 'multiple': ['This is an inline error #1.', 'This is an inline error #2.'] }"></radio-field>
    </form>
</template>
