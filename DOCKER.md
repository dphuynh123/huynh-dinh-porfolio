# Docker Deployment Guide

## Quick Start

### Build and run with Docker
```bash
docker build -t my-portfolio .
docker run -p 4000:4000 my-portfolio
```

### Build and run with Docker Compose
```bash
docker-compose up -d
```

## Commands

### Build the image
```bash
docker build -t my-portfolio .
```

### Run the container
```bash
docker run -p 4000:4000 my-portfolio
```

### Run with environment variables
```bash
docker run -p 4000:4000 -e NODE_ENV=production my-portfolio
```

### Stop the container
```bash
docker-compose down
```

### View logs
```bash
docker-compose logs -f
```

### Rebuild after changes
```bash
docker-compose up -d --build
```

## Access

Once running, access your application at:
- http://localhost:4000/profile

## Notes

- The Dockerfile uses multi-stage builds for optimal image size
- Port 4000 is used as configured in your package.json
- The basePath '/profile' is configured in next.config.mjs
- Images are unoptimized as per your configuration
