from django.shortcuts import render
from .models import Article
from random import randint

# Create your views here.
def main(request):
    context = {
        'articles': Article.objects.all()
    }
    return render(request, 'news/news-block.html', context)

def article(request, article_id):
    sidebar_article = Article.objects.exclude(id=article_id)
    context = {
        'article': Article.objects.get(id=article_id),
        'sidebar_article': sidebar_article.order_by('?')[:3]
    }
    return render(request, 'news/template_article.html', context)