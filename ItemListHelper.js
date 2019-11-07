({
    // Function to fetch data from server called in initial loading of page
        fetchItems : function(component, event, helper) {
        // Assign server method to action variable
        var action = component.get("c.getItemLists");
        // Getting the shippingInvoice id from page
        var shippingInvoiceId = component.get("v.recordId");
        // Setting parameters for server method
        action.setParams({
            shippingInvoiceIds : shippingInvoiceId
        });
        // Callback function to get the response
        action.setCallback(this, function(response) {
            // Getting the response state
            var state = response.getState();
            // Check if response state is success
            if(state === 'SUCCESS') {
                // Getting the list of items from response and storing in js variable
                var itemList = response.getReturnValue();
                // Set the list attribute in component with the value returned by function
                component.set("v.itemList",itemList);
            }
            else {
                // Show an alert if the state is incomplete or error
                alert('Error in getting data');
            }
        });
        // Adding the action variable to the global action queue
        $A.enqueueAction(action);
        }    
})
