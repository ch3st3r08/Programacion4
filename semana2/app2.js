// veamos
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

      console.log("About to add Item")
      this.items.push({id:this.itemId++, item:this.item, isSelected:false})
      this.item = ''
      console.log("Finished adding an item")
    },
    removeLastItem: function(){
      this.items.pop()
    },
    removeSelectedItem: function(){
      console.log("Not implemented")
      for(const [i, elem] of this.items.entries()){
        if(elem.isSelected) this.items.splice(i,1)
      }
    },
    selectItem: function(elem){
      console.log("Entering selectItem")
      this.removeSelectionAll()
      elem.isSelected=true
      console.log("exiting selectItem")
    },
    removeSelectionAll: function(){
      console.log("Entering remove all")
      for(let item of this.items){
        if(item.isSelected) item.isSelected=false
      }
    },
    toggleList: function(){
      console.log("Toggleing a list")
      this.showList==!this.showList
    }
    
  }
})
