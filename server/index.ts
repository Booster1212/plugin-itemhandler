import * as Athena from '@AthenaServer/api/index.js';
import { ItemHandler } from './src/controller.js';

const PLUGIN_NAME = 'ItemHandler';
Athena.systems.plugins.registerPlugin(PLUGIN_NAME, async () => {
    await ItemHandler.loadItems();
});
