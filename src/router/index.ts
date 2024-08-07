import { createRouter, createWebHistory } from "vue-router";
import Cores from "../views/Cores.vue";
import PageNotFound from "../views/PageNotFound.vue";
import VersionList from "../views/VersionList.vue";
import VersionInfo from "../views/VersionInfo.vue";
import NodeList from "../views/NodeList.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "cores",
            component: Cores,
            meta: {
                title: "核心列表 | MCSL-Sync 服务端镜像站"
            }
        },
        {
            path: "/nodes",
            component: NodeList,
        },
        {
            path: "/core/:core",
            component: VersionList,
            meta: {
                title: "版本列表 | MCSL-Sync 服务端镜像站"
            }
        },
        {
            path: "/core/:core/:supportedVersion/:version",
            component: VersionInfo,
            meta: {
                title: "版本信息 | MCSL-Sync 服务端镜像站"
            }
        },
        {
            path: "/:pathMatch(.*)*",
            name: "404",
            component: PageNotFound,
            meta: {
                title: "404 | MCSL-Sync 服务端镜像站"
            }
        },
    ],
});

router.beforeEach(async (to, _from, next) => {
    // 页面标题
    if (to.meta.title !== undefined) {
        document.title = <string>to.meta.title;
    }
    next();
})

export default router;
