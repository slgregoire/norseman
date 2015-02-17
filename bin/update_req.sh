#!/bin/bash

conda list -e > ../requirements.txt
pip freeze > ../requirements_pip.txt
