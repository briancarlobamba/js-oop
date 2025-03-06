// addMenuItem

        let menu = [];

        function addMenuItem(name, description, price) {
            if (typeof name !== 'string') {
                return "Name should be a string.";
            }

            if (typeof description !== 'string') {
                return "Description should be a string.";
            }

            if (typeof price !== 'number' || price <= 0) {
                return "Price should be a positive number.";
            }

            let newItem = {
                name: name,
                description: description,
                price: price
            };

            menu.push(newItem);

            return "Menu item added successfully.";
        }

         
        console.log(addMenuItem("Spaghetti Carbonara", "Classic Italian pasta", 100));
        console.log(addMenuItem(100, "Classic Italian pasta", 100));
        console.log(addMenuItem("Spaghetti Carbonara", "Classic Italian pasta", -100));
        console.log(addMenuItem("Spaghetti Carbonara", 100, 100));
        console.log(menu);



// validateMenuItems

        function validateMenuItems(menuItems) {

            if (menuItems.length <= 0) {
                return "Menu should be an array.";
            }

            for (let item of menuItems) {

                if (typeof item !== 'object' || item === null || Array.isArray(item)) {
                    return "All items should be objects.";
                }

                const requiredProperties = ['name', 'description', 'price'];
                for (let prop of requiredProperties) {
                    if (!item.hasOwnProperty(prop)) {
                        return `All items should have '${prop}' property.`;
                    }
                }

                if (typeof item.name !== 'string' || typeof item.description !== 'string' || typeof item.price !== 'number') {
                    return "All properties should have correct types.";
                }
                
                if (item.price <= 0 || isNaN(item.price)) {
                    return "Price should be a positive number.";
                }
            }

            return true;
        }

        const validMenu = [
            { name: "Cheeseburger", description: "Classic cheeseburger with fries", price: 8.99 },
            { name: "Salad", description: "Fresh garden salad", price: 5.49 }
        ];

        const invalidMenu = [
            { name: "Pizza", description: "Pepperoni pizza", price: -12 },
            { name: "Steak", description: 12345, price: 25.99 },
            "Not an object"
        ];

        console.log(validateMenuItems(validMenu)); 
        console.log(validateMenuItems(invalidMenu)); 
        console.log(validateMenuItems([]));



// rollDice

        function rollDice() {
            return Math.floor(Math.random() * 6) + 1;
        }

        console.log("Roll 1:", rollDice());
        console.log("Roll 2:", rollDice());
        console.log("Roll 3:", rollDice());



// trigFunctionCalculator

        function trigFunctionCalculator(angle, operation) {
            if (typeof angle !== 'number') {
                return "Angle must be a valid number.";
            }

            if (typeof operation !== 'string' || (operation !== 'sin' && operation !== 'cos' && operation !== 'tan')) {
                return "Invalid operation. Operation must be 'sin', 'cos', or 'tan'.";
            }

            switch (operation) {
                case 'sin':
                    return Math.sin(angle);
                case 'cos':
                    return Math.cos(angle);
                case 'tan':
                    return Math.tan(angle);
                default:
                    return "Unknown error.";
            }
        }


        console.log(trigFunctionCalculator(Math.PI / 4, 'sin'));
        console.log(trigFunctionCalculator(Math.PI / 4, 'cos'));
        console.log(trigFunctionCalculator(Math.PI / 4, 'tan'));

        console.log(trigFunctionCalculator("not a number", 'sin'));
        console.log(trigFunctionCalculator(Math.PI / 4, 'cot'));
        console.log(trigFunctionCalculator(Math.PI / 4, 123));
