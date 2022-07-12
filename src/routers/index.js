// Lays out
import routesConfig from '~/config/routes';
import { HeaderOnly } from '~/layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';

// Public Routers
const publicRouters = [
    { path: routesConfig.root, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
];

export { publicRouters };
