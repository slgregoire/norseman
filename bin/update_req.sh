#!/bin/bash

#needs to be run from project root directory
conda list -e > requirements.txt
pip freeze > requirements_pip.txt
