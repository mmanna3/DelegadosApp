## Build APK e instalar en teléfono

    eas build -p android --profile apk
    adb install app.apk

## Build Android Bundle para store (.aab)
No te olvides de antes subirle el versionCode en el app.json

    eas build --platform android

## Después de buildear, subir al store (.aab)

    eas submit -p android

## Buildear y subir al store directamente
1- Subirle el expo.version y el expo.android.versionCode en el app.json.
2- Ejecutar:

    eas build --platform android --auto-submit

3- Ir acá: https://play.google.com/console/u/7/developers/6413374293588912288/app/4972586056245471864/releases/overview
(lo tenés en favoritos) y subir el bundle a producción