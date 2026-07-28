# Docker Commands Cheat Sheet

## Images

```bash
docker pull nginx:latest          # download an image from a registry (Docker Hub by default)
docker images                     # list all images stored locally
docker rmi nginx:latest           # remove an image
docker rmi $(docker images -q)    # remove ALL local images
docker build -t myapp:1.0 .       # build an image from a Dockerfile in the current directory
docker tag myapp:1.0 myapp:latest # add another tag to an existing image
```

## Running containers

```bash
docker run nginx                          # run a container in the foreground
docker run -d nginx                       # detached mode - runs in the background, returns immediately
docker run -it ubuntu bash                # interactive mode - attach a terminal (-i) with a TTY (-t)
docker run --name my-nginx nginx          # run under a specific, memorable name
docker run -p 8080:80 nginx               # publish container port 80 to host port 8080
docker run --rm alpine echo "hello"       # auto-remove the container once it exits
docker run -d -p 8080:80 --name web nginx # combine flags: detached + port + name
```

## Managing running/stopped containers

```bash
docker ps                # list RUNNING containers
docker ps -a              # list ALL containers, including stopped ones
docker stop my-nginx       # gracefully stop a running container
docker start my-nginx      # start a previously stopped container
docker restart my-nginx    # stop then start
docker rm my-nginx         # remove a stopped container
docker rm -f my-nginx      # force-remove a running container
docker logs my-nginx       # view a container's stdout/stderr logs
docker logs -f my-nginx    # follow logs live (like tail -f)
```

## Executing commands inside a running container

```bash
docker exec -it my-nginx bash     # open an interactive shell inside a running container
docker exec my-nginx ls /usr/share/nginx/html   # run a one-off command without attaching a shell
```

## Cleanup

```bash
docker container prune    # remove all stopped containers
docker image prune         # remove unused (dangling) images
docker system prune        # remove stopped containers, unused networks, dangling images, build cache
docker system prune -a     # also remove ALL unused images, not just dangling ones
```
