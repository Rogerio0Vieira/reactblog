import React from "react";
import { ArticleListItemWrapper, Author, Content, Title } from "./styles";


interface Article {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface ArticleItemProps {
  article: Article;
}
const ArticleItem: React.FC<ArticleItemProps> = ({ article }) => {
  return (
    <ArticleListItemWrapper>
      <Title>{article.title}</Title>
      <Content>{article.body}</Content>
    </ArticleListItemWrapper>
  );
};

export default ArticleItem;