#!/bin/bash

#needs to be run from project root directory
#cd into conda environment
#source activate flasksite -- this doesn't work in script. why?

#start development server as daemon
python main.py &

#install grunt dependencies
npm install

#start grunt watching as daemon
grunt default &
