<template>
    <form >
        <h3>Adding New Item</h3>

        <div class="form-group row">
            <label for="" class="col-sm-3">Name</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" v-model="newItem.name">
            </div>
        </div>

        <div class="form-group row">
            <label for="" class="col-sm-3">description</label>
            <div class="col-sm-9">
                <textarea type="text" class="form-control" v-model="newItem.description"></textarea>
            </div>
        </div>

        <div class="form-group row">
            <label for="" class="col-sm-3">Category</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" v-model="newItem.category">
            </div>
        </div>

        <p><strong>Option 1:</strong></p>
        <div class="form-group row">
            <label for="" class="col-sm-3">Type</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" v-model="newItem.options[0].type">
            </div>
        </div>
        <div class="form-group row">
            <label for="" class="col-sm-3">Size</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" v-model="newItem.options[0].size">
            </div>
        </div>
        <div class="form-group row">
            <label for="" class="col-sm-3">Color</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" v-model="newItem.options[0].color">
            </div>
        </div>
        <div class="form-group row">
            <label for="" class="col-sm-3">Brand</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" v-model="newItem.options[0].brand">
            </div>
        </div>
        <div class="form-group row">
            <label for="" class="col-sm-3">Unit</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" v-model="newItem.options[0].Qty">
            </div>
        </div>
        <div class="form-group row">
            <label for="" class="col-sm-3">Price</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" v-model="newItem.options[0].price">
            </div>
        </div>
        <div class="form-group row">
            <label for="" class="col-sm-3">Inventory</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" v-model="newItem.options[0].inventory">
            </div>
        </div>
        <div class="form-group row">
            <button class="btn btn-success btn-block" @click.prevent="addItem">Add</button>
        </div>
    </form>
</template>

<script>  
import {dbInventoryRef} from '../firebaseConfig'  
export default{
    data(){
        return{
            newItem:{        
                    'name': 'Eg. Battery',
                    'description':'Short details',
                    'category': 'Eg. Alkaline',
                    'options': [{
                        'type': 'eg. 1.5V',
                        'size': 12,
                        'color': 'NA',
                        'brand': 'Duracell',
                        'Qty': '12/box',
                        'price': 12.46,
                        'inventory': 4
                    }]
            }
        }
    },
    methods:{
        addItem(){
            dbInventoryRef.push(this.newItem);
        }
    }
}

</script>