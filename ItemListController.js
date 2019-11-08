({
    // Function called on initial page loading to get item list from server
    getItemList : function(component, event, helper) {
        // Helper function - fetchContacts called for interaction with server
                helper.fetchItems(component, event, helper);
        },
    // Function used to open the item modal
    openModal: function(component, event, helper) {
        var modal = component.find("itemModal");
        var modalBackdrop = component.find("itemModalBackdrop");
        $A.util.addClass(modal,"slds-fade-in-open");
        $A.util.addClass(modalBackdrop,"slds-backdrop_open");
    },

    // Function used to close the item modal
    closeModal: function(component, event, helper) {
        var modal = component.find("itemModal");
        var modalBackdrop = component.find("itemModalBackdrop");
        $A.util.removeClass(modal,"slds-fade-in-open");
        $A.util.removeClass(modalBackdrop,"slds-backdrop_open");
    },
    
  	
    // Function used to create new item
    newItem: function(component, event, helper) {
        	helper.insertItem(component, event, helper);
    	}
})
/*
    // Function used to create a new Contact
    newItem: function(component, event, helper) {
        // Global event force:createRecord is used
        var createItem = $A.get("e.force:createRecord");
        // Parameters like apiName and defaultValues are set
        createItem.setParams({
            "entityApiName": "Item__c",
            "defaultFieldValues": {
                "Shipping_Invoice__c": component.get("v.recordId")
            }
        });
        // Event fired and new item dialog open
        createItem.fire();
    }*/
