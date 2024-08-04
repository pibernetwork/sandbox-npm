#!/bin/bash


VERCEL_TOKEN=$(cat /opt/keys/vercel-api)

echo "Installing Vercel CLI"
npm install --global vercel@32

echo "Pulling environment info"
vercel pull --yes --environment=preview --token="$VERCEL_TOKEN"

echo "Building project"
vercel build --token="$VERCEL_TOKEN"

echo "Deploying to Vercel"
vercel deploy --prebuilt --token="$VERCEL_TOKEN"
