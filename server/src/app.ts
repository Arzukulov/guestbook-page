import * as WebSocket from "ws";
import * as http from "http";
import * as express from "express";
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import { createConnection, getConnection } from "typeorm-plus";
import { Posts } from './models/Posts';
import { Users } from './models/Users';

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const guestBookData: any[] = [];
const responseMessage = { message: "" };

(async () => {
  try {
    const connection = await createConnection({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "task",
      entities: [Posts, Users],
      synchronize: true
    });
    const postRepository = connection.getRepository(Posts);
    const allPosts = await postRepository.find();

    for (let i = 0; i < allPosts.length; i++) {
      guestBookData.push({
        name: allPosts[i].Name,
        description: allPosts[i].Description
      });
    }
  } catch (error) {
    console.log("Ошибка при получении данных из базы данных:", error);
  }
})();

app.get("/api/posts", (req: express.Request, res: express.Response) => {
  res.json(guestBookData);
});

app.post('/api/posts', async (req: express.Request, res: express.Response) => {
  const { name, description } = req.body;
  if (!name || !description) { return res.status(400).json(responseMessage.message = 'Отсутствует одно из обязательных полей!'); }

  const post: Posts = new Posts();
  post.Name = name;
  post.Description = description;

  guestBookData.push({ name, description });
  const postRepository = getConnection().getRepository(Posts);

  await postRepository.save(post);

  wss.clients.forEach(client => {
    client.send(JSON.stringify(req.body));
  });
  res.status(201).json(responseMessage.message = 'Отзыв успешно сохранен!');
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
