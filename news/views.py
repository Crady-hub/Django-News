from django.shortcuts import render
from django.http import StreamingHttpResponse
import datetime

# Create your views here.
def main(request):
    return render(request, 'news/index.html')
