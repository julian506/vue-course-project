#!/bin/bash
docker run --rm -v "${PWD}:/$(basename `pwd`)" -w "/$(basename `pwd`)" -it node sh -c "npm create vue@3 -y"