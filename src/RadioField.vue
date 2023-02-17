<script lang="ts">
import { FormControl } from '@vue-interface/form-control';
import { defineComponent } from 'vue';

export default defineComponent({

    name: 'RadioField',

    extends: FormControl,

    props: {
        /**
         * The checked values
         *
         * @property String
         */
        checked: Boolean,

        /**
         * Add form-group wrapper to input.
         */
        group: {
            type: Boolean,
            default: false
        },

        /**
         * The checked values.
         *
         * @property any
         */
        value: {
            default: undefined
        },

        /**
         * The class name assigned to the control element
         *
         * @property String
         */
        formControlClass: {
            type: String,
            default: 'form-check-input'
        },

        /**
         * Display the form field and label inline
         *
         * @property Function
         */
        inline: Boolean,

        /**
         * The default label class assigned to the label element.
         */
        labelClass: {
            type: [Object, String],
            default: 'form-check-label'
        },
    },

    // data: () => ({
    //     checkedValues: []
    // }),

    computed: {
        inlineClass() {
            return this.inline && 'form-check-inline';
        }
    }
    
});
</script>

<template>
    <div
        class="form-check"
        :class="{ [inlineClass]: inline, ...formGroupClasses }">
        <input
            :id="id"
            ref="field"
            v-model="model"
            v-bind-events
            v-bind="controlAttributes"
            :value="value"
            type="radio">

        <slot name="label">
            <label
                ref="label"
                :class="{ [labelClass]: true }"
                :for="id">
                <slot>
                    {{ label }}
                </slot>
            </label>
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
            <small
                v-if="helpText"
                ref="help">
                {{ helpText }}
            </small>
        </slot>
    </div>
</template>