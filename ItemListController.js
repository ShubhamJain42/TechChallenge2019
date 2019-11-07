({
    // Function called on initial page loading to get item list from server
        getItemList : function(component, event, helper) {
        // Helper function - fetchContacts called for interaction with server
                helper.fetchItems(component, event, helper);
        },

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
    }
})
