# Product Display Application Documentation

This documentation provides an overview of the product display application code and its functionality.

[Live link] :- [https://product-display-assignment.netlify.app/]



## Overview

The product display application fetches data from an API and displays products categorized as Men, Women, and Kids. Users can switch between categories using tabs, and product details are displayed dynamically.

## File Structure

- `index.html`: HTML file containing the structure of the application.
- `style.css`: CSS file containing styles for the application.
- `script.js`: JavaScript file containing the logic for fetching data, generating product cards, and handling tab switching.

## JavaScript Functionality

### fetchData(url)

- Responsible for fetching data from the specified URL asynchronously.
- Utilizes `fetch()` API and `async/await` syntax.
- Returns the parsed JSON data.

### generateProductCard(product)

- Generates HTML markup for a single product card based on the provided product data.
- Calculates discount percentage and applies specific styles based on product categories.

### displayProducts(categoryIndex, data)

- Displays products of the specified category on the UI.
- Clears the existing product container and appends newly generated product cards.

### setActiveTab(tabIndex)

- Sets the active tab based on the provided tab index.
- Updates the appearance of tab buttons to indicate the active tab.

### initialize()

- Initializes the application by fetching data, displaying initial products, and setting up event listeners for tab switching.
- Calls `fetchData()` to retrieve product data and sets up event listeners for tab buttons.

## HTML Structure

- Contains a container (`<div id="product-container">`) for displaying product cards.
- Tab buttons (`<button>`) for Men, Women, and Kids categories.
- JavaScript scripts are linked at the end of the HTML body.

## CSS Styles

- Applies styles to ensure proper layout and appearance of product cards, tab buttons, and other UI elements.
- Utilizes CSS classes to define specific styles for different product categories.

## Usage

1. Open `index.html` in a web browser.
2. The application will fetch product data and display products from the Men category by default.
3. Click on tab buttons (Men, Women, Kids) to switch between categories and view corresponding products.

## Error Handling

- Errors during data fetching or processing are caught and logged to the console.
- Users are notified of any errors through console messages.

