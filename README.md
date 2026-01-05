# avataaats-kit (or Avataaars3)

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

```bash
npm install avataaars-kit
# or
pnpm add avataaars-kit
# or
yarn add avataaars-kit
```

---

## Usage

### Avatar Component

Choose the avatar settings as you like. With typescript, it will show type hints for each parts.

```tsx
import React from "react";
import Avatar from "avataaars-kit";

export default function AvatarWrapper() {
  return (
    <div>
      Your avatar:
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
    </div>
  );
}
```

### Generating Random Avatar

Availabale parts are listed in `topList`, `accessoriesList`, `facialHairList`, `clothList`, `graphicList`, `eyeList`, `eyebrowList`, and `mouthList`. You may define a custom hook to generate random avatar settings.

```tsx
function getRandomAvatarSetting(): AvatarProps {
  return {
    avatarStyle: "Circle",
    backgroundColor: "Blue01",
    topType: randomSampleOne(topList),
    accessoriesType: randomSampleOne(accessoriesList),
    graphicType: randomSampleOne(graphicList),
    hairColor: randomSampleOne(hairColorStringList),
    facialHairType: randomSampleOne(facialHairList),
    clothType: randomSampleOne(clothList),
    clothColor: randomSampleOne(colorStringList),
    eyeType: randomSampleOne(eyeList),
    eyebrowType: randomSampleOne(eyebrowList),
    mouthType: randomSampleOne(mouthList),
    skinColor: randomSampleOne(skinColorStringList),
  };
}
```
