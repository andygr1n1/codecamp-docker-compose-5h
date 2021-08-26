run:
	docker run -d -v '/home/garuda/Projects/docker/codecamp-docker-5h/':/app -v /root/node_modules -p 9009:9009 --name camp camp
stop:
	docker stop code-camp-docker
rm:
	docker rm code-camp-docker
restart:
	docker restart code-camp-docker
createImage:
	docker build -t code-camp-docker .
rmI:
	docker rmi code-camp-docker

docker-compose-dev:
	docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d --build
