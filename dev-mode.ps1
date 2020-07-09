function Serve-Parcel {
    Push-Location -Path .\app
    yarn run parcel index.html
    Pop-Location
}

Serve-Parcel
