FROM node:14

# Defina o diretório de trabalho.
WORKDIR /server

# Copie o arquivo do seu host para o local atual.
COPY package*.json ./

# Execute o comando dentro do seu sistema de arquivos de imagem.
RUN npm install

# Copie o restante do código-fonte do seu aplicativo do host para o sistema de arquivos de imagem.
COPY . .

ENV PORT=3000

ENV PG_HOST='172.17.0.1'
ENV PG_USER='exiti'
ENV PG_PASSWORD='2r2gexiti'
ENV PG_DATABASE='backend' 
ENV PG_PORT='5432' 

EXPOSE $PORT

# Execute o comando especificado dentro do contêiner.
CMD [ "node", "server" ]

