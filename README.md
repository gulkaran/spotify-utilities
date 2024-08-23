# Spotify Utilities

A next.js + spring boot application to add extra utility functionality to your Spotify account.

# Key Learnings

## Docker Support

To simplify the development and deployment process, Docker support has been added to the project. Here’s a brief overview of how Docker is used and what I learned from it!

### Docker Setup

We initialize the frontend and backend Dockerfiles to create images, which are then used as containers in the Docker Compose setup to run the backend and frontend simultaneously.

**Next.js Frontend Dockerfile**

```docker
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

**Java (22) Spring Boot Backend Dockerfile**

```docker
FROM openjdk:22-jdk
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app.jar"]
```

**Docker Compose**
To run these containers, run `docker-compose up --build` in the root directory.
