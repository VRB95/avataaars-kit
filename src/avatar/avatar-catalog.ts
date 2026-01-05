import { clothKindMap } from "./cloth";
import { graphicKindMap } from "./cloth/graphic";
import { colorStringList, hairColorStringList, skinColorStringList } from "./color";
import { eyeKindMap } from "./face/eye";
import { eyebrowKindMap } from "./face/eyebrow";
import { mouthKindMap } from "./face/mouth";
import { resolveType, resolveValue } from "./internal/type-resolver";
import { topKindMap } from "./top";
import { accessoriesKindMap } from "./top/accessories";
import { facialHairKindMap } from "./top/facialHair";

/**
 * Central avatar container (C#-style static class).
 * Single entry point for all avatar metadata.
 */

type ColorString = (typeof colorStringList)[number];
type HairColorString = (typeof hairColorStringList)[number];
type SkinColorString = (typeof skinColorStringList)[number];

type TopType = keyof typeof topKindMap;
type AccessoriesType = keyof typeof accessoriesKindMap;
type FacialHairType = keyof typeof facialHairKindMap;
type ClothType = keyof typeof clothKindMap;
type GraphicType = keyof typeof graphicKindMap;
type EyeType = keyof typeof eyeKindMap;
type EyebrowType = keyof typeof eyebrowKindMap;
type MouthType = keyof typeof mouthKindMap;

export class AvatarCatalog {

    /* ================================ Colors ================================ */

    public static readonly Colors = {
        /* =============================== Base =============================== */

        Base: {
            All(): readonly ColorString[] {
                return colorStringList;
            },

            Get(value: ColorString): ColorString {
                return value;
            },

            GetByString(value: string): ColorString {
                return resolveValue<ColorString>("Color", colorStringList, value);
            },
        },

        /* =============================== Hair =============================== */

        Hair: {
            All(): readonly HairColorString[] {
                return hairColorStringList;
            },

            Get(value: HairColorString): HairColorString {
                return value;
            },

            GetByString(value: string): HairColorString {
                return resolveValue<HairColorString>("HairColor", hairColorStringList, value);
            },
        },

        /* =============================== Skin =============================== */

        Skin: {
            All(): readonly SkinColorString[] {
                return skinColorStringList;
            },

            Get(value: SkinColorString): SkinColorString {
                return value;
            },

            GetByString(value: string): SkinColorString {
                return resolveValue<SkinColorString>("SkinColor", skinColorStringList, value);
            },
        },

    } as const;

    /* ================================= Top ================================== */

    public static readonly Top = {
        All(): readonly TopType[] {
            return Object.keys(topKindMap) as TopType[];
        },

        Get(type: TopType) {
            return topKindMap[type];
        },

        GetByString(value: string) {
            const type = resolveType<TopType>("Top", topKindMap, value);
            return topKindMap[type];
        },
    };

    /* ============================== Accessories ============================== */

    public static readonly Accessories = {
        All(): readonly AccessoriesType[] {
            return Object.keys(accessoriesKindMap) as AccessoriesType[];
        },

        Get(type: AccessoriesType) {
            return accessoriesKindMap[type];
        },

        GetByString(value: string) {
            const type = resolveType<AccessoriesType>("Accessories", accessoriesKindMap, value);
            return accessoriesKindMap[type];
        },
    };

    /* =============================== FacialHair ============================== */

    public static readonly FacialHair = {
        All(): readonly FacialHairType[] {
            return Object.keys(facialHairKindMap) as FacialHairType[];
        },

        Get(type: FacialHairType) {
            return facialHairKindMap[type];
        },

        GetByString(value: string) {
            const type = resolveType<FacialHairType>("FacialHair", facialHairKindMap, value);
            return facialHairKindMap[type];
        },
    };

    /* ================================= Cloth ================================= */

    public static readonly Cloth = {
        All(): readonly ClothType[] {
            return Object.keys(clothKindMap) as ClothType[];
        },

        Get(type: ClothType) {
            return clothKindMap[type];
        },

        GetByString(value: string) {
            const type = resolveType<ClothType>("Cloth", clothKindMap, value);
            return clothKindMap[type];
        },
    };

    /* ================================ Graphics =============================== */

    public static readonly Graphics = {
        All(): readonly GraphicType[] {
            return Object.keys(graphicKindMap) as GraphicType[];
        },

        Get(type: GraphicType) {
            return graphicKindMap[type];
        },

        GetByString(value: string) {
            const type = resolveType<GraphicType>("Graphics", graphicKindMap, value);
            return graphicKindMap[type];
        },
    };

    /* ================================= Face ================================== */

    public static readonly Face = {
        Eyes: {
            All(): readonly EyeType[] {
                return Object.keys(eyeKindMap) as EyeType[];
            },

            Get(type: EyeType) {
                return eyeKindMap[type];
            },

            GetByString(value: string) {
                const type = resolveType<EyeType>("Face.Eyes", eyeKindMap, value);
                return eyeKindMap[type];
            },
        },

        Eyebrows: {
            All(): readonly EyebrowType[] {
                return Object.keys(eyebrowKindMap) as EyebrowType[];
            },

            Get(type: EyebrowType) {
                return eyebrowKindMap[type];
            },

            GetByString(value: string) {
                const type = resolveType<EyebrowType>("Face.Eyebrows", eyebrowKindMap, value);
                return eyebrowKindMap[type];
            },
        },

        Mouths: {
            All(): readonly MouthType[] {
                return Object.keys(mouthKindMap) as MouthType[];
            },

            Get(type: MouthType) {
                return mouthKindMap[type];
            },

            GetByString(value: string) {
                const type = resolveType<MouthType>("Face.Mouths", mouthKindMap, value);
                return mouthKindMap[type];
            },
        },
    };
}
