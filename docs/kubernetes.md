# Kubernetes

Interested in setting up Kubernetes?

Here are the commands we at Edenspiekermann use. You probably need to adapt them to your config:

```
kubectl apply -f kubernetes/namespace.yml
kubectl apply -f kubernetes/webserver-service.yml
kubectl apply -f kubernetes/production-webserver-deployment.yml
kubectl apply -f kubernetes/staging-ingress.yml
```
