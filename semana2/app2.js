// Codigo trabajado por Néstor
var app = new Vue({
  el: '#app',
  data: {
    itemId:1,
    item: '',
    items: [],
    showList: true
  },
  methods: {
    addItem: function(){
      if(!this.item.trim())
        return

      this.items.push({id:this.itemId++, item:this.item, isSelected:false})
      this.item = ''
    },
    removeLastItem: function(){
      this.items.pop()
    },
    removeSelectedItem: function(){
      for(const [i, elem] of this.items.entries()){
        if(elem.isSelected) this.items.splice(i,1)
      }
    },
    selectItem: function(elem){
      this.removeSelectionAll()
      elem.isSelected=true
    },
    removeSelectionAll: function(){
      for(let item of this.items){
        if(item.isSelected) item.isSelected=false
      }
    },
    toggleList: function(){
      this.showList==!this.showList
    }
  }
})
