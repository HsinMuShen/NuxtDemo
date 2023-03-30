#!/bin/bash

# Get the list of modified files
MODIFIED_FILES=$(git diff --name-only)

# Print the list of modified files
echo "## Modified Files"
echo "The following files have been modified in this pull request:"
echo "$MODIFIED_FILES" | sed 's/^/- /'