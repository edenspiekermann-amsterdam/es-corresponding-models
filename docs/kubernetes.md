## Deploy

```
kubectl apply -f kubernetes/namespace.yml
kubectl apply -f kubernetes/webserver-service.yml
kubectl apply -f kubernetes/production-webserver-deployment.yml
kubectl apply -f kubernetes/staging-ingress.yml
```
