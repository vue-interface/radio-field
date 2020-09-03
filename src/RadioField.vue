<template>
    <div :class="{'custom-radio': custom, [controlClass]: !!controlClass, [inlineClass]: inline}">
        <input
            :id="$attrs.id || hash"
            ref="field"
            v-bind-events
            v-bind="controlAttributes"
            type="radio"
            :value="value"
            :checked="checkedValue === value"
            @change="update">

        <label :for="$attrs.id || hash" :class="{[computedLabelClass]: true, [labelClass]: true}">
            <slot>{{ label }}</slot>
        </label>

        <slot name="feedback">
            <div 
                v-if="validFeedback"
                class="valid-feedback"
                valid
                v-html="invalidFeedback" />
            <div 
                v-else-if="invalidFeedback"
                class="invalid-feedback"
                invalid
                v-html="invalidFeedback" />
        </slot>

        <slot name="help">
            <small v-if="helpText" ref="help">
                {{ helpText }}
            </small>
        </slot>
    </div>
</template>

<script>
import FormControl from '@vue-interface/form-control';
import { prefix } from '@vue-interface/utils';

export default {

    name: 'RadioField',

    mixins: [
        FormControl,
    ],

    model: {
        prop: 'checkedValue',
        event: 'change'
    },

    props: {

        /**
         * An array of event names that correlate with callback functions
         *
         * @property Function
         */
        bindEvents: {
            type: Array,
            default() {
                return ['focus', 'blur', 'input', 'click', 'keyup', 'keydown', 'progress'];
            }
        },

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
         * The class name assigned to the control element
         *
         * @property String
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
        inline: Boolean

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
            return prefix('label', this.controlClass);
        },

        hash() {
            return Math.random().toString(20).substr(2, 6);
        },

        inputClass() {
            return prefix('input', this.controlClass);
        },

        inlineClass() {
            return this.inline ? prefix('inline', this.controlClass) : '';
        }

    },

    methods: {

        update(event) {
            this.$emit('change', event.target.value);
            this.$emit('input', event);
        }

    }

};
</script>
