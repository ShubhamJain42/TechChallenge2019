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
        },   
    
    // Function to create new items on server
       insertItem : function(component, event, helper) {
        var item = component.get("v.item");
        item.Shipping_Invoice__c = component.get("v.recordId");
        // Initializing the toast event to show toast
        var toastEvent = $A.get('e.force:showToast');
        var createAction = component.get('c.createItemRecord');
        createAction.setParams({
            newItem: item
        });
        createAction.setCallback(this, function(response) {           
            // Getting the state from response
            var state = response.getState();
            if(state === 'SUCCESS') {
                // Getting the response from server
                var dataMap = response.getReturnValue();
                // Checking if the status is success
                if(dataMap.status=='success') {
                    // Setting the success toast which is dismissable ( vanish on timeout or on clicking X button )
                    toastEvent.setParams({
                        'title': 'Success!',
                        'type': 'success',
                        'mode': 'dismissable',
                        'message': dataMap.message
                    });
                    // Fire success toast event ( Show toast )
                    toastEvent.fire();            
                    window.location.reload();
                }
                // Checking if the status is error 
                else if(dataMap.status=='error') {
                    // Setting the error toast which is dismissable ( vanish on timeout or on clicking X button )
                    toastEvent.setParams({
                        'title': 'Error!',
                        'type': 'error',
                        'mode': 'dismissable',
                        'message': dataMap.message
                    });
                    // Fire error toast event ( Show toast )
                    toastEvent.fire();                
                }
            } else {
                // Show an alert if the state is incomplete or error
                alert('Error in getting data');
            }
        });
        // Adding the action variable to the global action queue
        $A.enqueueAction(createAction);
    }
})
