<script setup lang="ts" generic="T, V">
import type { CheckedFormControlProps, FormControlSlots } from '@vue-interface/form-control';
import { FormControlErrors, FormControlFeedback, useFormControl } from '@vue-interface/form-control';
import { computed, onMounted, ref } from 'vue';

defineOptions({
    inheritAttrs: false
});

defineSlots<Exclude<FormControlSlots<T>, 'activity'>>();

const emit = defineEmits<{
    (e: 'update:modelValue', value: T): void;
}>();

const props = withDefaults(defineProps<CheckedFormControlProps<T, V>>(), {
    formControlClass: 'form-check',
    labelClass: 'form-check-label'
});

const model = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value)
});

const {
    controlAttributes,
    formGroupClasses,
    onClick,
    onBlur,
    onFocus
} = useFormControl({ props, emit, model });

const field = ref<HTMLInputElement>();

onMounted(() => {
    if(!props.checked) {
        return;
    }

    if(!props.modelValue) {  
        field.value.click();
    }

    field.value.checked = true;
});
</script>

<template>
    <div
        class="radio-field"
        :class="formGroupClasses">
        <input
            ref="field"
            v-model="model"
            v-bind="controlAttributes"
            type="radio"
            :value="value"
            @click="onClick"
            @blur="onBlur"
            @focus="onFocus">

        <slot name="label">
            <label
                ref="label"
                :class="labelClass"
                :for="controlAttributes.id">
                <slot>
                    {{ label }}
                </slot>
            </label>
        </slot>

        <slot
            name="errors"
            v-bind="{ error, errors, id, name }">        
            <FormControlErrors
                v-if="!!(error || errors)"
                :id="id && String(id)"
                v-slot="{ error }"
                :name="name && String(name)"
                :error="error"
                :errors="errors">
                <div
                    invalid
                    class="invalid-feedback">
                    {{ error }}<br>
                </div>
            </FormControlErrors>
        </slot>
        
        <slot
            name="feedback"
            v-bind="{ feedback }">
            <FormControlFeedback
                v-slot="{ feedback }"
                :feedback="feedback">
                <div
                    valid
                    class="valid-feedback">
                    {{ feedback }}
                </div>
            </FormControlFeedback>
        </slot>

        <slot
            name="help"
            v-bind="{ helpText }">
            <small
                v-if="helpText"
                ref="help">
                {{ helpText }}
            </small>
        </slot>
    </div>
</template>