import { useState, useEffect } from 'react';
import ArticleItem from './ArticleItem/ArticleItem';
import { Container, List, Title } from './styles';
import axios from 'axios';

interface Article {
  id: number;
  userId: number;
  title: string;
  body: string;
}


const ArticleList = () => {
  const [articles, setArticles] = useState<Article[]>([]);


  useEffect(() => {
    axios.get<Article[]>("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setArticles(response.data);
    });
  }, []);

  return (
    <Container>
      <Title variant="h4">Artigos do Blog</Title>
      <List>
        {articles.map((article) => (
          <ArticleItem key={article.id} article={article} />
        ))}
      </List>
    </Container>
  );
};

export default ArticleList;


