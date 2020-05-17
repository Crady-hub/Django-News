from django.urls import path
from . import views

urlpatterns = [
    path('', views.main, name='main-page'),
    path('article/<int:article_id>', views.article)
]
