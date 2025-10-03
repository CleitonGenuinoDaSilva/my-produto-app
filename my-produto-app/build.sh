#!/bin/bash

ng build --configuration production

FILENAMEZIP="./my-produto-app.zip"
FILENAMEAPP="./my-produto-app.app"

cd dist && zip -FSr $FILENAMEZIP ./my-produto-app

mv $FILENAMEZIP $FILENAMEAPP

cd ..