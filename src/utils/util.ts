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
            case 'CatServer':
                return 'https://img.fastmirror.net/s/2024/05/25/66516c242762e.png';
            case 'Craftbukkit':
                return 'https://img.fastmirror.net/s/2024/05/25/66516c22db66a.png';
            case 'Akarin':
                return 'https://img.fastmirror.net/s/2024/07/25/66a2214b5c073.png';
            case 'NukkitX':
                return 'https://img.fastmirror.net/s/2024/07/25/66a2219eb31e3.png';
            case 'Thermos':
                return 'https://img.fastmirror.net/s/2024/07/25/66a22284b2d93.png';
            case 'Contigo':
                return 'https://img.fastmirror.net/s/2024/07/25/66a2239b8c363.jpg';
            case 'Luminol':
            case 'LightingLuminol':
                return 'https://img.fastmirror.net/s/2024/07/25/66a223e527e01.png';
            case 'Geyser':
            case 'Floodgate':
                return 'https://img.fastmirror.net/s/2024/07/25/66a224168f38e.png';
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
        case 'Thermos':
        case 'Contigo':
            return '混合端';

        case 'BungeeCord':
        case 'Lightfall':
        case 'LightfallClient':
        case 'Travertine':
        case 'Velocity':
        case 'Waterfall':
            return '群组端';

        case 'Craftbukkit':
        case 'Folia':
        case 'Leaves':
        case 'Paper':
        case 'Pufferfish':
        case 'Pufferfish+':
        case 'Pufferfish+Purpur':
        case 'Purformance':
        case 'Purpur':
        case 'Spigot':
        case 'Akarin':
        case 'Luminol':
        case 'LightingLuminol':
            return '插件端';

        case 'Fabric':
        case 'Forge':
        case 'SpongeForge':
        case 'SpongeVanilla':
            return '模组端';

        case 'Vanilla':
            return '纯净端';

        case 'NukkitX':
            return '基岩版';

        case 'Geyser':
        case 'Floodgate':
            return '代理端';

        default:
            return '未知';
    }
}

export function formatNodeClientType(type: string) {
    switch (type.toLowerCase()) {
        case 'nodeside':
        case 'nodeclient':
            return 'NodeClient';
        case 'alist':
            return 'AList';
        default:
            return '未知';
    }
}

export function sortSupportedVersions(core: string, versions: string[]) {
    switch (core) {
        case 'Arclight':
            const getArclightVersion = (version: string) => {
                switch (version.toLowerCase()) {
                    case 'feudalkings':
                        return '1.21'
                    case 'whisper':
                        return '1.20.4'
                    case 'net':
                        return '1.20.2'
                    case 'trials':
                        return '1.20'
                    case 'executions':
                        return '1.19.4'
                    case 'greathorn':
                        return '1.19.3'
                    case 'horn':
                        return '1.19'
                    default:
                        return version
                }
            }
            return versions.sort((a, b) => {
                return compareSemver(getArclightVersion(a), getArclightVersion(b))
            });
        case 'BungeeCord':
            const getBungeeCordVersion = (version: string) => {
                switch (version.toLowerCase()) {
                    case 'latest':
                        return '2.114.514'
                    default:
                        return version
                }
            }
            return versions.sort((a, b) => {
                return compareSemver(getBungeeCordVersion(a), getBungeeCordVersion(b))
            });
        case 'NukkitX':
            return versions.sort()
        default:
            return versions.sort(compareSemver);
    }
}

export function sortCoreVersions(core: string, versions: string[]) {
    switch (core) {
        case 'BungeeCord':
        case 'CraftBukkit':
        case 'Spigot':
            return versions.sort()
        case 'SpongeForge':
        case 'SpongeVanilla':
        case 'Vanilla':
            const removeLetters = (version: string) => {
                return version.replace(/[^\d.]+/, '')
            }
            return versions.sort((a, b) => {
                const aParts = removeLetters(a).split(/[-.]/);
                const bParts = removeLetters(b).split(/[-.]/);
                for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
                    const aPart = parseInt(aParts[i] ?? '0');
                    const bPart = parseInt(bParts[i] ?? '0');
                    if (aPart < bPart) return 1;
                    if (aPart > bPart) return -1;
                }
                return 0
            })
        default:
            const removeLettersBefore = (version: string) => {
                return version.replace(/[^\d.]+/, '')
            }
            return versions.sort((a, b) => {
                return compareSemver(removeLettersBefore(a), removeLettersBefore(b))
            });
    }
}

function compareSemver(a: string, b: string) {
    const aPartsA = a.split('-')[0].split('.');
    const bPartsA = b.split('-')[0].split('.');
    const aPartB = a.split('-')[1] ?? '';
    const bPartB = b.split('-')[1] ?? '';
    for (let i = 0; i < Math.max(aPartsA.length, bPartsA.length); i++) {
        const aPartA = parseInt(aPartsA[i] ?? '0');
        const bPartA = parseInt(bPartsA[i] ?? '0');
        if (aPartA < bPartA) return 1;
        if (aPartA > bPartA) return -1;
    }
    return comparePartB(aPartB, bPartB)
}

function comparePartB(a: string, b: string) {
    if (a.startsWith('rc') && b.startsWith('rc') || a.startsWith('pre') && b.startsWith('pre')) {
        const aNum = parseInt(a.slice(2)) || 0;
        const bNum = parseInt(b.slice(2)) || 0;
        if (aNum < bNum) return 1;
        else if (aNum > bNum) return -1;
        else return 0
    } else if (a.startsWith('rc') && b.startsWith('pre'))
        return -1;
    else if (a.startsWith('pre') && b.startsWith('rc'))
        return 1;
    else return a.localeCompare(b)
}