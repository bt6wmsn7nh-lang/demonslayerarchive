services:
  - type: web
    name: demon-slayer-archive
    runtime: node
    plan: free
    buildCommand: npm install
    startCommand: npm start
    healthCheckPath: /
    autoDeploy: true
