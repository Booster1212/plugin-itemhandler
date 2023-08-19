import * as alt from 'alt-server';
import * as Athena from '@AthenaServer/api';
import path from 'path';
import fs from 'fs';
import { allItemArray } from './allItems'; // Will be available after first server start.

let itemNames = [...allItemArray] as const;

const currentPath = path.join(process.cwd(), '/src/core/plugins/ITemHandler/server/src/allItems.ts');
export class ItemHandler {
    static async loadItems() {
        const allItems = await Athena.systems.inventory.factory.getBaseItemsAsync();

        const itemNames = [];
        for (const entry of allItems) {
            itemNames.push(`'${entry.dbName}'`);
        }

        const exportString = `export const allItemArray = [${itemNames.join(', ')}] as const;`;

        fs.writeFileSync(currentPath, exportString, 'utf-8');
    }
}

export type ItemName = (typeof itemNames)[number];

export const ITEM_NAMES: Record<ItemName, ItemName> = itemNames.reduce((obj, itemName) => {
    obj[itemName] = itemName;
    return obj;
}, {} as Record<ItemName, ItemName>);

export default ITEM_NAMES;
