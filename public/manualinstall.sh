#!/bin/sh

GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

echo "script by dyamuh from #31675"
echo "Installing PedroPathing..."

ERROR_OUTPUT=$(mktemp)

if curl -L https://github.com/Pedro-Pathing/Quickstart/archive/refs/heads/master.zip -o quickstart.zip \
    && unzip quickstart.zip "Quickstart-master/TeamCode/src/main/java/org/firstinspires/ftc/teamcode/pedroPathing/*" \
    && mv Quickstart-master/TeamCode/src/main/java/org/firstinspires/ftc/teamcode/pedroPathing . \
    && rm -rf Quickstart-master quickstart.zip 2> "$ERROR_OUTPUT"
then
    echo -e "${GREEN}Successful! You have PedroPathing installed in your repository.${NC}"
    rm -f "$ERROR_OUTPUT"
else
    echo -e "${RED}Installation failed. Error:${NC}"
    cat "$ERROR_OUTPUT"
    rm -f "$ERROR_OUTPUT"
    exit 1
fi
