<template>
    <h1>VUE DATA TABLE</h1>
    <main>
        <h2>TABLE 1</h2>
        <br>
        <DataTable v-bind="tableProps" />
    </main>
</template>

<script>
import DataTable from '@andresouzaabreu/vue-data-table'
import fruits from './users'

export default {
    components: {
        DataTable
    },
    data() {
        return {
            tableProps: {
                data: fruits,
                columns: [
                    { key: "product" },
                    { key: "price", type: "number" },
                    { key: "amount", type: "number" },
                ],
                footerComponent: TableFooter,
            },
        };
    },
}
</script>