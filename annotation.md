npm install -g @nestjs/cli
nest new nestjs-schedule-queue
npm run start:dev
nest generator service <nome do serviço>
nest generator controller <nome do controle>
nest g resource tweets
lsof -i :3001
kill -9 PROCESS_ID
TO DO -> Tratamento de erros usando Exception Filters
npm install sequelize sequelize-typescript sqlite3 @nestjs/sequelize
npm install @types/sequelize --save-dev
sqlite3 dist/database.sqlite
TO DO -> CRUD tratativo de erro
TO DO -> Verificar comportamento do update que está definido como PATCH, porem, provavelmente está funcionando como PUT
Habilitar tasks no Nest: npm install @nestjs/schedule
nest g service tweets-count-task
Para que a tarefa em background busque sempre a partir do ultimo tweet buscado no banco, o ponteiro será armazenado em cache:
npm install cache-manager @types/cache-manager
npm install @nestjs/cache-manager cache-manager
Config para que o Nest apenas salve e reexecute quando houver alterações apenas na SRC -> tsconfig.json
"include": [
"src/"
]

1h53min
