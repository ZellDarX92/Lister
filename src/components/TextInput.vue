<template>

    

    <div>
        <input v-model="inputValue" type="text">
        <button :disabled="inputValue.length == 0" @click="updateValue">{{props.btnLabel}}</button>
    </div>
</template>
<script setup>

import {ref} from 'vue';

const props = defineProps({
    btnLabel:{
        type: String,
        default:"Ajouter"
    }
});

const inputValue = ref("test")

const emit = defineEmits(['newValue']);

function updateValue (argument){
    //m'assurer qu'il y a de données
    if (inputValue.value.length == 0) return;
    // emettre un evenement vers le parent
    emit("newValue", inputValue.value);
    //vider le champ texte
    inputValue.value = "";
}

</script>

<style scoped lang='scss'>
div{
    display: flex;
    gap: .5em;
    input {
        flex-basis: 70%;
    }

    button{
        flex-basis: 30%;
    }
}

</style>