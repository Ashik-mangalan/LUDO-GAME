# LUDO-GAME

A mobile-first Ludo game with local play, online rooms, player profiles, rewards and animated game UI.

## Play

- Web app: https://ashik-mangalan.github.io/LUDO-GAME/
- Installable PWA: open the link in a supported browser and use **Install app / Add to Home screen**.

## Android APK

The **Build Ludo Android APK** workflow builds an Android WebView package and uploads an APK artifact.

- A build without signing secrets uses a temporary test key. That APK is for installation/testing only and is **not** suitable for Play Store upload.
- For a Play Store upload build, configure these repository Actions secrets with a privately backed-up upload keystore:
  - `ANDROID_KEYSTORE_BASE64` — base64-encoded `.jks` / `.keystore` file
  - `ANDROID_KEYSTORE_PASSWORD`
  - `ANDROID_KEY_ALIAS`
  - `ANDROID_KEY_PASSWORD`
- Keep the upload keystore and passwords private. Never commit them to this repository.
- Android `versionCode` must increase for every new Play Console upload.

## Release-readiness checklist

Before production release, test on physical Android devices:

- [ ] Complete a full 2–4 player game; verify legal moves, captures, safe squares, home entry and win ranking.
- [ ] Test online play on two separate devices and networks, including refresh, app background/resume, temporary offline mode and reconnect.
- [ ] Confirm profile edits, avatar selection, rewards, shop, themes and saved statistics persist after closing/reopening.
- [ ] Test small screens, display cutouts, slow devices, sound/vibration controls and reduced-motion preference.
- [ ] Verify no blocking console errors, broken images, or missing assets.
- [ ] Complete Play Console policy, privacy, data-safety, content-rating and closed-testing requirements before production access.

A successful CI build verifies packaging and build configuration; it does not replace real-device gameplay, multiplayer, security or Play Console review.
