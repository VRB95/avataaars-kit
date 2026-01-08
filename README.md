# avataaats-kit (or Avataaars3)

[![Build](https://github.com/VRB95/avataaars-kit/actions/workflows/build.yml/badge.svg)](https://github.com/VRB95/avataaars-kit/actions/workflows/build.yml)
[![npm version](https://img.shields.io/npm/v/avataaars-kit.svg)](https://www.npmjs.com/package/avataaars-kit)
[![npm downloads](https://img.shields.io/npm/dm/avataaars-kit.svg)](https://www.npmjs.com/package/avataaars-kit)
[![License](https://img.shields.io/npm/l/avataaars-kit.svg)](LICENSE)

Maintained by **Vesa Raul Bogdan (2025)**.  
This project is a **community fork** migrated to **React 19**.  
**Not the original creator** of Avataaars or Avataaars2.

React component for avatar generation, forked from  
[Avataaars2](https://github.com/fifteenmania/avataaars2).  
Works with **React ^19.0**.

---

## Features

- SVG based
- Lightweight
- No external runtime dependencies
- Fully scalable
- Easy to use
- TypeScript-friendly with strong typings

---

## Installation

````bash
npm install avataaars-kit
# or
pnpm add avataaars-kit
# avataaars-kit (Avataaars3)

[![Build](https://github.com/VRB95/avataaars-kit/actions/workflows/build.yml/badge.svg)](https://github.com/VRB95/avataaars-kit/actions/workflows/build.yml)
[![npm version](https://img.shields.io/npm/v/avataaars-kit.svg)](https://www.npmjs.com/package/avataaars-kit)
[![License](https://img.shields.io/npm/l/avataaars-kit.svg)](LICENSE)

Lightweight React 19 component library for generating SVG avatars. This repo is a community fork (not the original Avataaars author) migrated to React 19 and TypeScript.

Quick pointers
- **Main source:** `src/` (component entry: `src/index.tsx`)
- **Avatar parts:** `src/avatar/` (top, face, clothes, graphic assets)
- **Images/examples:** `image/`
- **Bundle output:** `dist/` (package `main` -> `dist/index.js`)

Requirements
- Node 18+ (recommended), pnpm/yarn/npm
- Peer deps: `react` ^19, `react-dom` ^19

Install
```bash
pnpm add avataaars-kit
# or npm install avataaars-kit
````

Local build

- Compile the TypeScript package (produces `dist/`):

```bash
pnpm build
# (runs `tsc -p tsconfig.json` per package.json)
```

## AvatarCatalog (New Feature)

`AvatarCatalog` is a type-safe helper for accessing all avatar metadata (colors, hair, top, accessories, face parts, etc.).  
Useful for:

- building dropdown/picker UIs
- generating random avatars
- resolving values from strings (e.g. DB/JSON payloads)
- consistent client/server representations

### Avatar Catalog Usage

```ts
import { AvatarCatalog } from "avataaars-kit";

// List available options
const tops = AvatarCatalog.Top.All();
const skins = AvatarCatalog.Colors.Skin.All();
const eyes = AvatarCatalog.Face.Eyes.All();

// Resolve by string (validated)
const top = AvatarCatalog.Top.GetByString("LongHairMiaWallace");
const skin = AvatarCatalog.Colors.Skin.GetByString("Light");

// Straight get
const cloth = AvatarCatalog.Cloth.Get("Hoodie");
```

```tsx
import Avatar from "avataaars-kit";
import { AvatarCatalog } from "avataaars-kit";

export function MyAvatar() {
  return (
    <Avatar
      topType={AvatarCatalog.Top.GetByString("LongHairMiaWallace")}
      accessoriesType={AvatarCatalog.Accessories.GetByString("Prescription02")}
      hairColor={AvatarCatalog.Colors.Hair.GetByString("BrownDark")}
      skinColor={AvatarCatalog.Colors.Skin.GetByString("Light")}
      eyeType={AvatarCatalog.Face.Eyes.GetByString("Happy")}
      eyebrowType={AvatarCatalog.Face.Eyebrows.GetByString("Default")}
      mouthType={AvatarCatalog.Face.Mouths.GetByString("Smile")}
      clothType={AvatarCatalog.Cloth.GetByString("Hoodie")}
    />
  );
}
```

General Usage

```tsx
import React from "react";
import Avatar from "avataaars-kit";

export default function AvatarWrapper() {
  return (
    <Avatar
      avatarStyle="Circle"
      backgroundColor="Blue01"
      topType="LongHairMiaWallace"
      accessoriesType="Prescription02"
      hairColor="BrownDark"
      facialHairType="Blank"
      clothType="Hoodie"
      clothColor="PastelBlue"
      eyeType="Happy"
      eyebrowType="Default"
      mouthType="Smile"
      skinColor="Light"
    />
  );
}
```

Generating random avatars

- The available option lists live under `src/avatar/` (e.g. `topList`, `accessoriesList`, `clothList`, `eyeList`, `mouthList`). Use those lists to pick random parts for a programmatic avatar generator.

Files to know

- `src/index.tsx` — library entry
- `src/avatar/` — parts and rendering components (top, face, cloth, internal type resolver)
- `src/avatar/cloth/graphic/` — graphic shirt motifs (e.g. `Pizza.tsx`, `Skull.tsx`)
- `tsconfig.json` — TypeScript config used by `pnpm build`

Contributing

- Keep changes TypeScript-safe and run `pnpm build` before opening PRs. Document any new avatar parts and export lists when adding options.

If anything here is unclear or you want more details (examples, dev server, or release/publish steps), tell me which section to expand.
