from django.db import models
from django.utils import timezone

# Create your models here.
class Article(models.Model):
    title = models.CharField(max_length=100)
    text = models.TextField()
    author = models.CharField(max_length=50, null=True, default='Анонимус')
    pub_date = models.DateField(default=timezone.now)
    img = models.ImageField(upload_to='news', default='default/news-no-img.jpg', null=True)


    class Meta:
        ordering = ['-pub_date']


    def __str__(self):
        return self.title
    