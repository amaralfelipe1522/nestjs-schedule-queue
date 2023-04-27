# **nestjs-schedule-queue**

> Projeto de estudo de API REST usando NestJS simulando um monitoramento de Tweets e armazando em filas de processamento para enviar e-mails

## **Resumo do funcionamento**

- API em NestJS com conexão a um banco de dados SQLite;
- Em background, o serviço buscará no banco de dados de tempos em tempos por novos 'tweets';
- Ao encontrar a quantidade de 'tweets' definida na tarefa, esta armazenrá em cache local o ponto offset atual do banco de dados;
- Por fim, adiciona em uma fila de processamento no Redis.

## **Comandos**

- Iniciar as aplicações NestJS e Redis:

```
docker-compose up
```

- Inserir novos 'tweets':

```http
POST http://localhost:3000/tweets
Content-Type: application/json

{
    "text": "Exemplo de tweet"
}
```

> Para mais exemplos de requisições neste serviço, consulte o arquivo [test-api.http](/test-api.http)

- Abra um novo terminal e visualize as filas enviadas ao Redis:

```
docker-compose exec redis sh
```

```
redis-cli
```

```
keys '*'
```
