from django.shortcuts import render
from .models import Article

# Create your views here.
def main(request):
    context = {'articles': Article.objects.all()}
    return render(request, 'news/news-block.html', context)
