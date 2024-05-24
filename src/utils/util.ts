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
    return '/assets/img/cores/' + (() => {
        switch (name) {
            case 'Arclight':
                return 'arclight.png';
            case 'Banner':
                return 'banner.png';
            case 'BungeeCord':
                return 'bungeecord.png';
            case 'Fabric':
                return 'fabric.png';
            case 'Folia':
                return 'folia.png';
            case 'Forge':
                return 'forge.jpg';
            case 'Leaves':
                return 'leaves.png';
            case 'Mohist':
                return 'mohist.png'
            case 'Paper':
                return 'paper.png'
            case 'Pufferfish':
            case 'Pufferfish+':
            case 'Pufferfish+Purpur':
                return 'pufferfish.png';
            case 'Purpur':
                return 'purpur.png';
            case 'Spigot':
                return 'spigot.png';
            case 'SpongeForge':
            case 'SpongeVanilla':
                return 'sponge.png';
            case 'Vanilla':
                return 'vanilla.png';
            case 'Velocity':
                return 'velocity.png';
            case 'Waterfall':
                return 'waterfall.png';
            default:
                return 'unknown.png';
        }
    })();
}

export function getCoreType(name: string) {
    switch (name) {
        case 'Arclight':
        case 'Banner':
        case 'Mohist':
        case 'PurformanceCatServer':
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