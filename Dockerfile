FROM node:16 as base
EXPOSE 4000:4000
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .

FROM base as production
ENV NODE_PATH=./build
RUN npm run build
CMD ["node", "build/index.js"]