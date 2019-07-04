#!/bin/bash
CONTAINER_NAME=ts_compiler
INPUT_DIR=$1
OUTPUT_DIR=$2
echo "Init TypeScript compiler {container:$CONTAINER_NAME, input:$INPUT_DIR,outup:$OUTPUT_DIR}"
docker run -it --rm --name $CONTAINER_NAME --user "$(id -u):$(id -g)" --volume $INPUT_DIR:/workspace --volume $OUTPUT_DIR:/output harmish/typescript tsc --project /workspace --outDir /output --watch --pretty true
