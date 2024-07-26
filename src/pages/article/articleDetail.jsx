import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';  // useParams를 사용하여 URL 매개변수 가져오기
import articleAPI from '../../api/articleAPI';
import ArticleItem from './component/articleItem';

function ArticleDetail() {
  const [articleDetail, setArticleDetail] = useState(null);
  const { article_id } = useParams();  // URL에서 article_id를 추출

  // articleId가 변경될 때마다 호출되는 useEffect
  useEffect(() => {
    if (article_id) {
      fetchArticleDetail(article_id);
    }
  }, [article_id]);

  const fetchArticleDetail = async (articleId) => {
    try {
      const response = await articleAPI.getArticle(articleId);
      setArticleDetail(response.article);
    } catch (error) {
      console.error('Error fetching article detail:', error);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {articleDetail && (
        <ArticleItem
          news_list={articleDetail.news_list || []}
          user_input={articleDetail.user_input || ''}
          created_at={new Date(articleDetail.created_at).toLocaleString() || ''}
          news_summary={articleDetail.news_summary || ''}
          encyc_list={articleDetail.encyc_list || []}
        />
      )}
    </Box>
  );
}

export default ArticleDetail;
