from django.shortcuts import render
from django.http import StreamingHttpResponse

# Create your views here.
def main(request):
    return render(request, 'news/index.html')
