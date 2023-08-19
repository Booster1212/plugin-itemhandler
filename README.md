# Athena Server Item Handler Plugin

A plugin for the Athena Server environment that enables efficient management and handling of in-game items. This plugin simplifies the process of loading, updating, and accessing item data, enhancing the item management capabilities of Athena Server.

## Features

- Load and update item data from Athena Server's inventory system.
- Create a map of item names for easy access and usage.
- Simplify the process of working with in-game items.
- Seamless integration with Athena Server's API.

## Installation

1. Clone or download the repository to your Athena Server project directory.
2. Ensure that you have the required dependencies installed.

## Usage

1. Import the necessary modules and utilize the provided classes and functions to manage items efficiently.
2. Access item names through the generated map for easy reference.

## Example

```javascript
// Load and update item data
await ItemHandler.loadItems();

// Access individual item names using ITEM_NAMES
const knifeName = ITEM_NAMES.knife;
alt.logError(`Knife: ${knifeName}`);
```

## Notice

- allItems Array will be available after first server start.
