#! /bin/bash

mongoimport --host mongo --db docker-node-mongo --collection recipes --type json --file /mongo-seed/recipes.json --jsonArray


#mongoimport --db docker-node-mongo --collection recipes --file recipes.json --jsonArray