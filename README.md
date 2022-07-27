## Build APK e instalar en teléfono

    eas build -p android --profile apk
    adb install app.apk

## Build Android Bundle para store (.aab)
No te olvides de antes subirle el versionCode en el app.json

    eas build --platform android

## Después de buildear, subir al store (.aab)

    eas submit -p android

## Buildear y subir al store directamente
Subirle el version y el android.versionCode en el app.json.
Después ejecutar:

    eas build --platform android --auto-submit