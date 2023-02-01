<script lang="ts">
import { FormControl } from '@vue-interface/form-control';
import { defineComponent } from 'vue';

export default defineComponent({

    name: 'RadioField',

    mixins: [
        FormControl,
    ],

    props: {
        /**
         * The checked values
         *
         * @property String
         */
        checked: Boolean,

        /**
         * The checked value
         *
         * @property String
         */
        checkedValue: [Boolean, Number, String, Object],

        /**
         * The default class name assigned to the control element
         *
         * @param {String}
         * @default 'form-check'
         */
         defaultControlClass: {
            type: String,
            default: 'form-check'
        },

        /**
         * Display the form field and label inline
         *
         * @property Function
         */
        inline: {
            type: Boolean,
        },
    },

    computed: {

        controlClasses() {
            return {
                [this.spacing]: !!this.spacing,
                [this.inputClass]: !!this.inputClass,
                ['is-valid']: !!(this.valid || this.validFeedback),
                ['is-invalid']: !!(this.invalid || this.invalidFeedback),
            };
        },

        computedLabelClass() {
            return `${this.controlClass}-label`;
        },

        hash() {
            return Math.random().toString(20).substr(2, 6);
        },

        inputClass() {
            return `${this.controlClass}-input`;
        },

        inlineClass() {
            return this.inline && `${this.controlClass}-inline`;
        },
    },

    methods: {
        update(event: any) {
            this.$emit('update:modelValue', event.target.value);
        }
    }

});
</script>

<template>
    <div :class="formGroupClasses, {[controlClass]: !!controlClass, [inlineClass]: inline}">
        <input
            :id="id"
            ref="field"
            v-bind-events
            v-bind="controlAttributes"
            type="radio"
            :checked="checkedValue === checked"
            @update:modelValue="update"
            @change="update">

            <slot name="label">
                <label
                    v-if="label"
                    ref="label"
                    :for="id"
                    :class="labelClass"
                    @click="focus"
                    v-html="label" />
            </slot>

        <slot name="feedback">
            <div 
                v-if="invalidFeedback"
                class="invalid-feedback"
                invalid
                v-html="invalidFeedback" />
            <div 
                v-else-if="validFeedback"
                class="valid-feedback"
                valid
                v-html="validFeedback" />
        </slot>

        <slot name="help">
            <small v-if="helpText" ref="help">
                {{ helpText }}
            </small>
        </slot>
    </div>
</template>


