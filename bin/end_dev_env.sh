#!/bin/bash

#needs to be run from project root directory
#kill grunt process
pkill -f grunt

#kill development server
pkill -f main.py

#exit conda environment
#source deactivate -- this doesn't work in script. why?