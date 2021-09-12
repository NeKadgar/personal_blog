from django.db import models
from django_editorjs_fields import EditorJsJSONField, EditorJsTextField

# Create your models here.

class Post(models.Model):
    title = models.TextField()
    description = models.TextField(blank=True, default="", null=True)
    preview_image = models.ImageField(upload_to='preview/')
    body_editorjs = EditorJsJSONField()
    created = models.DateField()
    link = models.URLField(blank=True)
