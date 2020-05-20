import requests
from django.shortcuts import render
from .models import Article
from random import randint


# Create your views here.
def main(request):
    url = "https://api.openweathermap.org/data/2.5/weather?q=Kiev&units=metric&lang=ru&appid=62eab0657a62438821d5a8ed630678e7"

    response = requests.get(url).json()
    print(response['main']['temp'])


    weather = {
        'city': 'Kiev',
        'temp': int(response['main']['temp']),
        'description':response['weather'][0]['description'],
        'icon': response['weather'][0]['icon']
    }


    context = {
        'articles': Article.objects.all(),
        'weather': weather
    }
    return render(request, 'news/news-block.html', context)

def article(request, article_id):
    sidebar_article = Article.objects.exclude(id=article_id)
    context = {
        'article': Article.objects.get(id=article_id),
        'sidebar_article': sidebar_article.order_by('?')[:3]
    }
    return render(request, 'news/template_article.html', context)