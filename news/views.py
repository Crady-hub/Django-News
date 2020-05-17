from django.shortcuts import render
from .models import Article

# Create your views here.
def main(request):
    context = {'articles': Article.objects.all()}
    return render(request, 'news/news-block.html', context)

def article(request, article_id):
    context = {'article': Article.objects.get(id=article_id)}
    return render (request, 'news/template_article.html', context)