## Buildear y subir al store directamente (lo que probablemente quieras ahora mismo)
1- Subirle el expo.version y el expo.android.versionCode en el app.json.

2- Ejecutar:

    eas build --platform android --auto-submit

3- Login en play.google.com con la cuenta blueservant.software@gmail.com

4- Ir a Resumen de versiones, buscar la recién subida y apretar la flechita de la derecha

5- Promocionar versión a "Producción" (scrollear y apretar "Siguiente")

----------------------
### Código Haedo Junior
    Código Haedo Junior: WJX0011


----------------------


## Otras cosas
### Build APK e instalar en teléfono

    eas build -p android --profile apk
    adb install app.apk

### Build Android Bundle para store (.aab)
No te olvides de antes subirle el versionCode en el app.json

    eas build --platform android

### Después de buildear, subir al store (.aab)

    eas submit -p android