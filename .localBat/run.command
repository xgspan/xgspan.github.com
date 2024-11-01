#!/bin/bash

# 确保脚本在遇到错误时停止执行
set -e

cd -- "$(dirname "$0")"

# 运行 npm run 命令
npm run docs:dev
