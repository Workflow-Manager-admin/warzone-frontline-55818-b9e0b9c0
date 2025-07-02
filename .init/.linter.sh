#!/bin/bash
cd /home/kavia/workspace/code-generation/warzone-frontline-55818-b9e0b9c0/frontend_shooting_game
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

