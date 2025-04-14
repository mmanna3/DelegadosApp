## Buildear y subir al store directamente (lo que probablemente quieras ahora mismo)
1- Subirle el expo.version y el expo.android.versionCode en el app.json.

### ANDROID

2- Ejecutar:
    npm run android:build
    npm run android: deploy

3- Login en play.google.com con la cuenta blueservant.software@gmail.com

4- Ir a Resumen de versiones, buscar la recién subida y apretar la flechita de la derecha

5- Promocionar versión a "Producción" (scrollear y apretar "Siguiente")

### IOS

2- Ejecutar:
    npm run ios:build
    npm run ios: deploy

3- Login en: https://appstoreconnect.apple.com y subirla

----------------------
### Código Haedo Junior
    Código Haedo Junior: WJX0011


----------------------


## Otras cosas
### Build APK e instalar en teléfono

    eas build -p android --profile apk (ahí aparece la opción para abrir en el emulador)
    adb install app.apk

### Build Android Bundle para store (.aab)
No te olvides de antes subirle el versionCode en el app.json

    eas build --platform android

### Después de buildear, subir al store (.aab)

    eas submit -p android

### Si no anda EAS, chequear versión

Con node 20 anda bien (nvm use 20)
