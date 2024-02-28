<template>
    <div class="accordion accordion-flush " id="accordionFlushExample">
        <div class="accordion-item my-1 border-0">
            <h2 class="accordion-header ">
                <button class="accordion-button collapsed bg-dark text-light fw-semibold fs-3" type="button"
                    data-bs-toggle="collapse" :data-bs-target="`#flush-collapseOne${id}`" aria-expanded="false"
                    aria-controls="flush-collapseOne">
                    {{ title }} </button>
            </h2>

            <div :id="`flush-collapseOne${id}`" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="text-justify text-start accordion-body bg-dark text-white fs-4 fw-medium ">
                    {{ description }}
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
defineProps({

    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    }

})
</script>

<style></style>