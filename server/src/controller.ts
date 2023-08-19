import * as Athena from '@AthenaServer/api';
import path from 'path';
import fs from 'fs';
import { allItemArray } from './allItems'; // Will be available after first server start.

let itemNames = [...allItemArray] as const;

const currentPath = path.join(process.cwd(), '/src/core/plugins/ItemHandler/server/src/allItems.ts');
export class ItemHandler {
    static async loadItems() {
        let existingContent = '';
        if (fs.existsSync(currentPath)) {
            existingContent = fs.readFileSync(currentPath, 'utf-8');
        }

        const allItems = await Athena.systems.inventory.factory.getBaseItemsAsync();
        const newItemNames = allItems.map((entry) => `'${entry.dbName}'`);
        const newExportString = `export const allItemArray = [${newItemNames.join(', ')}] as const;`;

        if (existingContent !== newExportString) {
            fs.writeFileSync(currentPath, newExportString, 'utf-8');
        }
    }
}

export type ItemName = (typeof itemNames)[number];

export const ITEM_NAMES: Record<ItemName, ItemName> = itemNames.reduce((obj, itemName) => {
    obj[itemName] = itemName;
    return obj;
}, {} as Record<ItemName, ItemName>);

export default ITEM_NAMES;
