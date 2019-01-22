#!/bin/bash
npm run build
rm -rf ../../DEPLOYED/FDGS_react/
cp -r build/ ../../DEPLOYED/FDGS_react/
cd ../../DEPLOYED/FDGS_react/
git init
git remote add origin https://github.com/1r0n51uv/FDGS_react.git
git add .
git commit -m $1
git pull
git push -f origin master

