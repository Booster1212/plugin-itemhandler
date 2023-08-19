import * as Athena from '@AthenaServer/api';
import { ItemHandler } from './src/controller';

const PLUGIN_NAME = 'ItemHandler';
Athena.systems.plugins.registerPlugin(PLUGIN_NAME, async () => {
    await ItemHandler.loadItems();
});
