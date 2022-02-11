const item_type = document.getElementById('item-type');
const main_category = document.getElementById('main-category');
const sub_category = document.getElementById('sub-category');

item_type.addEventListener('change',function() { add_item("main_category",this)})
main_category.addEventListener('change',function() { add_item("sub_category",this)})

function onload() {
    for (const type in data) {
        add_option(item_type,type)
    }
}

function add_option(parent,item_val) {
    let option = document.createElement('option');
    option.value = item_val;
    option.innerText = item_val;
    parent.appendChild(option)
}

function add_item(sub_parent,praent) {
    let selected = praent.value;
    if (sub_parent == "sub_category") {
        sub_category.innerHTML = '<option selected disabled>- - - -</option>';
        let temp_type = document.getElementById('item-type').value;
        let temp_data = data[temp_type][selected];
        temp_data.forEach(sub_data => {
            add_option(sub_category,sub_data)
        });
    }else {
        main_category.innerHTML = '<option selected disabled>- - - -</option>';
        sub_category.innerHTML = '<option selected disabled>- - - -</option>';
        let temp_data = data[selected]
        for (const main_item in temp_data) {
            add_option(main_category,main_item)
        }
    }
}