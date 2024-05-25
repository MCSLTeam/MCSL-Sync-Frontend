export function randomNum(min?: any, max?: any) {
    if (min !== undefined) {
        if (max !== undefined) {
            return Math.floor(Math.random() * (max - min)) + min;
        } else {
            return randomNum(0, min);
        }
    } else {
        return Math.random();
    }
}

export function getCoreIcon(name: string) {
    return (() => {
        switch (name) {
            case 'Arclight':
            case 'Lightfall':
            case 'LightfallClient':
                return 'https://img.fastmirror.net/s/2024/05/25/6651679deb1cc.png';
            case 'Banner':
                return 'https://img.fastmirror.net/s/2024/05/25/6651679e32236.png';
            case 'BungeeCord':
                return 'https://img.fastmirror.net/s/2024/05/25/6651679eb6feb.png';
            case 'Fabric':
                return 'https://img.fastmirror.net/s/2024/05/25/6651679e74038.png';
            case 'Folia':
                return 'https://img.fastmirror.net/s/2024/05/25/6651679ef0a9a.png';
            case 'Forge':
                return 'https://img.fastmirror.net/s/2024/05/25/665168acdb831.jpg';
            case 'Leaves':
                return 'https://img.fastmirror.net/s/2024/05/25/6651684ae221c.png';
            case 'Mohist':
                return 'https://img.fastmirror.net/s/2024/05/25/6651684b3cfe8.png'
            case 'Paper':
            case 'Travertine':
                return 'https://img.fastmirror.net/s/2024/05/25/6651684c03a75.png'
            case 'Pufferfish':
            case 'Pufferfish+':
            case 'Pufferfish+Purpur':
                return 'https://img.fastmirror.net/s/2024/05/25/6651684bb75de.png';
            case 'Purpur':
            case 'Purformance':
                return 'https://img.fastmirror.net/s/2024/05/25/6651684b7c635.png';
            case 'Spigot':
                return 'https://img.fastmirror.net/s/2024/05/25/6651673e904ba.png';
            case 'SpongeForge':
            case 'SpongeVanilla':
                return 'https://img.fastmirror.net/s/2024/05/25/6651673e4660a.png';
            case 'Vanilla':
                return 'https://img.fastmirror.net/s/2024/05/25/6651673f5419b.png';
            case 'Velocity':
                return 'https://img.fastmirror.net/s/2024/05/25/6651673e7e949.png';
            case 'Waterfall':
                return 'https://img.fastmirror.net/s/2024/05/25/665167dfcd667.png';
            default:
                return 'https://img.fastmirror.net/s/2024/05/25/6651673f05405.png';
        }
    })();
}

export function getCoreType(name: string) {
    switch (name) {
        case 'Arclight':
        case 'Banner':
        case 'Mohist':
        case 'CatServer':
            return '混合端';
        case 'BungeeCord':
        case 'Lightfall':
        case 'LightfallClient':
        case 'Travertine':
        case 'Velocity':
        case 'Waterfall':
            return '群组端';
        case 'CraftBukkit':
        case "Folia":
        case 'Leaves':
        case "Paper":
        case "Pufferfish":
        case "Pufferfish+":
        case "Pufferfish+Purpur":
        case "Purformance":
        case "Purpur":
        case "Spigot":
            return '插件端';
        case 'Fabric':
        case 'Forge':
        case 'SpongeForge':
        case 'SpongeVanilla':
            return '模组端';
        case 'Vanilla':
            return '纯净端';
        default:
            return '未知';
    }
}