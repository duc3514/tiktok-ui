// Lays out
import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';

// Public Routers
const publicRouters = [
    { path: '/', component: Home },
    { path: '/@:nickname', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];

export { publicRouters };
